/* Ciao! Italiano A1 – App-Logik (Vanilla JS, kein Build) */
(function(){
"use strict";

/* ---------- Hilfsfunktionen ---------- */
const $=id=>document.getElementById(id);
const view=$("view");
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pad=n=>String(n).padStart(2,"0");
const today=()=>{const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`};
const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`};
const words=s=>(s.trim().match(/[\p{L}\p{N}']+/gu)||[]).length;

/* ---------- Daten ---------- */
const L=window.LESSONS||[];
const EX=window.EXAMS||[];
// Wortschatz: Schlüssel = italienisches Wort (stabil, unabhängig von Reihenfolge)
// Wiederholte Wörter in späteren Lektionen zählen nur einmal (erste Lektion), damit der Kartenfortschritt eindeutig bleibt
const V=[],_vk=new Set();L.forEach(l=>l.vocab.forEach(([it,de])=>{if(_vk.has(it))return;_vk.add(it);V.push({k:it,it,de,lid:l.id,theme:l.title})}));
const vocabOfLesson=id=>V.filter(v=>v.lid===id);
// Grammatik-Items: Schlüssel = Lektion + Frage
const G=[];L.forEach(l=>l.ex.forEach(([q,a,w,e])=>G.push({k:l.id+"|"+q,q,a,w,e,lid:l.id,cat:"Grammatik"})));

/* ---------- Speicher ---------- */
const KEY="ciao-a1-v2";
let S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
S=Object.assign({cards:{},items:{},stats:{},days:{},exam:[],done:{}},S||{});
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
function bump(cat,ok,itemKey){
 const s=S.stats[cat]||(S.stats[cat]=[0,0]);s[1]++;if(ok)s[0]++;
 S.days[today()]=(S.days[today()]||0)+1;
 if(itemKey){const it=S.items[itemKey]||(S.items[itemKey]={r:0,t:0,w:0});it.t++;if(ok){it.r++;it.w=Math.max(0,it.w-1)}else it.w+=2}
 save();
}
// Gewichtete Auswahl: falsch beantwortete und ungesehene Aufgaben kommen häufiger
function pick(list,n,keyOf){
 const scored=list.map(x=>{const it=S.items[keyOf(x)];const w=!it?3:(1+it.w+(it.t-it.r));return{x,w:w*(0.5+Math.random())}});
 return scored.sort((a,b)=>b.w-a.w).slice(0,n).map(s=>s.x);
}

/* ---------- Sprachausgabe ---------- */
let voice=null;
function loadVoice(){try{const vs=speechSynthesis.getVoices();voice=vs.find(v=>/^it[-_]IT/i.test(v.lang))||vs.find(v=>/^it/i.test(v.lang))||null}catch(e){}}
if(window.speechSynthesis){loadVoice();speechSynthesis.onvoiceschanged=loadVoice}
function say(t,rate){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="it-IT";u.rate=rate||0.9;if(voice)u.voice=voice;speechSynthesis.speak(u)}catch(e){}}
function speakBtn(text,label,rate){const b=document.createElement("button");b.className="btn s";b.textContent=label||"🔊";b.onclick=()=>say(text,rate);return b}
// Events delegieren (keine Inline-Handler mit Text → keine Anführungszeichen-Probleme)
view.addEventListener("click",e=>{const b=e.target.closest("[data-say]");if(b)say(b.dataset.say,parseFloat(b.dataset.rate)||0.9)});

/* ---------- Navigation ---------- */
const TABS=[["home","Start"],["lessons","Lektionen"],["cards","Karten"],["quiz","Grammatik"],["vq","Vokabeltest"],["read","Lesen"],["listen","Hören"],["speak","Sprechen"],["write","Schreiben"],["exam","Prüfung"],["info","Info"]];
const ROUTES={};
function go(t,arg){
 $("nav").innerHTML=TABS.map(([k,l])=>`<button class="${k===t?"on":""}" data-go="${k}">${l}</button>`).join("");
 try{speechSynthesis.cancel()}catch(e){}
 ROUTES[t](arg);window.scrollTo(0,0);
}
$("nav").addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(b.dataset.go)});

/* ---------- Quiz-Engine ---------- */
function mk(q,a,w,e,cat,key,ctx,audio){const opts=sh([a,...w]);return{q,opts,ai:opts.indexOf(a),e:e||"",cat:cat||"Grammatik",key,ctx,audio}}
function gItem(g){return mk(g.q,g.a,g.w,g.e,"Grammatik",g.k)}
function vItem(v){
 const toDe=Math.random()<0.5;
 const pool=sh(V.filter(x=>x.k!==v.k&&x.lid===v.lid)).concat(sh(V.filter(x=>x.lid!==v.lid)));
 const seen=new Set([toDe?v.de:v.it]);const wr=[];
 for(const x of pool){const c=toDe?x.de:x.it;if(!seen.has(c)){seen.add(c);wr.push(c)}if(wr.length===3)break}
 return mk(toDe?`Was heisst «${v.it}»?`:`Wie sagt man «${v.de}» auf Italienisch?`,toDe?v.de:v.it,wr,"","Wortschatz",v.k)
}
function runQuiz(list,title,o){
 o=o||{};let i=0,score=0;const results=[];
 const show=()=>{
  if(i>=list.length){
   if(o.onDone)return o.onDone(score,list.length,results);
   const p=Math.round(100*score/list.length);
   view.innerHTML=`<div class="card"><p class="big">${score} / ${list.length}</p><p style="text-align:center">${p}%</p>
   <div class="row"><button class="btn p" id="ag">Nochmal</button><button class="btn" id="hm">Übersicht</button></div></div>`;
   $("ag").onclick=()=>o.again?o.again():go("home");$("hm").onclick=()=>go("home");return;
  }
  const q=list[i];
  view.innerHTML=`<div class="mut">${esc(title)} · ${i+1}/${list.length}${o.header||""}</div>
  <div class="card">${q.ctx?`<div class="text" style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--line)">${esc(q.ctx)}</div>`:""}${q.audio?`<div class="row" style="margin:0 0 12px"><button class="btn p" data-say="${esc(q.audio)}">🔊 Abspielen</button><button class="btn" data-say="${esc(q.audio)}" data-rate="0.7">🐢 Langsam</button></div>`:""}
  <b>${esc(q.q)}</b>${q.opts.map((x,k)=>`<button class="btn opt" data-k="${k}">${esc(x)}</button>`).join("")}<div id="fb"></div></div>`;
  view.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
   const k=+b.dataset.k,ok=k===q.ai;if(ok)score++;results.push(ok);bump(q.cat,ok,q.key);
   view.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(j===q.ai)x.classList.add("ok");else if(j===k)x.classList.add("no")});
   $("fb").innerHTML=`<div class="fb">${ok?"✅ Richtig.":"❌ Falsch."} ${esc(q.e)}</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Weiter</button>`;
   $("nx").onclick=()=>{i++;show()};$("nx").focus();
  });
 };
 show();
 // Vorzeitig beenden (Zeitlimit): wertet mit den bisherigen Punkten
 return ()=>{if(i<list.length){i=list.length;show()}};
}

/* ---------- Start ---------- */
ROUTES.home=function(){
 const learned=Object.values(S.cards).filter(c=>c.box>=3).length,seen=Object.keys(S.cards).length;
 let streak=0;for(let i=0;i<400;i++){const d=new Date();d.setDate(d.getDate()-i);const k=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;if(S.days[k])streak++;else if(i>0)break}
 const doneN=Object.keys(S.done).length;
 let tot=0,ok=0;Object.values(S.stats).forEach(([r,t])=>{ok+=r;tot+=t});
 const rows=Object.entries(S.stats).map(([c,[r,t]])=>{const p=Math.round(100*r/t);return `<div>${esc(c)} <span class="mut">${r}/${t} (${p}%)</span><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("")||`<p class="mut">Noch keine Antworten.</p>`;
 const weak=Object.entries(S.items).filter(([k,v])=>v.w>0).length;
 const last=(S.exam||[]).slice(-3).reverse().map(e=>`${e.date}: ${e.total}/${e.max||60} ${e.pass?"✅":"❌"}`).join(" · ")||"noch keine";
 const next=L.find(l=>!S.done[l.id]);
 view.innerHTML=`
 <div class="grid">
  <div class="card"><div class="num">${doneN}/${L.length}</div><div class="mut">Lektionen abgeschlossen</div></div>
  <div class="card"><div class="num">${learned}/${V.length}</div><div class="mut">Wörter gefestigt (${seen} gesehen)</div></div>
  <div class="card"><div class="num">${S.days[today()]||0}</div><div class="mut">Antworten heute · Serie: ${streak} Tag(e)</div></div>
  <div class="card"><div class="num">${weak}</div><div class="mut">Aufgaben im Schwächen-Training</div></div>
 </div>
 ${next?`<div class="card click" id="nextL"><b>Weiter lernen:</b> Lektion ${next.id} – ${esc(next.title)}<div class="mut">${esc(next.sub)}</div></div>`:`<div class="card"><b>🎉 Alle Lektionen abgeschlossen.</b> Jetzt Simulationen und Wiederholung.</div>`}
 <div class="card"><b>Trefferquote</b>${tot?`<div class="mut" style="margin-bottom:8px">Gesamt: ${Math.round(100*ok/tot)}% (${tot} Antworten)</div>`:""}${rows}</div>
 <div class="card"><b>Prüfungssimulationen</b><div class="mut">${last}</div></div>
 <div class="card"><b>Tagesplan (ca. 30 Min.)</b><p class="mut">1. 15 Karten · 2. Grammatik (Schwächen) · 3. 5 Diktatsätze · 4. Lektion weiterarbeiten · wöchentlich eine Simulation.</p>
 <div class="row"><button class="btn p" data-go2="cards">Karten</button><button class="btn" data-go2="quiz">Grammatik</button><button class="btn" data-go2="listen">Diktat</button></div></div>
 <p class="mut">Hinweis: Hören läuft über die Sprachausgabe deines Browsers (italienische Stimme nötig – auf Mac/iPhone unter Systemeinstellungen → Sprachausgabe «Italienisch» laden). Sprechen und Schreiben bewertet die App nur grob, vergleiche immer mit der Musterlösung.</p>
 <button class="btn" id="reset">Fortschritt zurücksetzen</button>`;
 if(next)$("nextL").onclick=()=>go("lessons",next.id);
 view.querySelectorAll("[data-go2]").forEach(b=>b.onclick=()=>go(b.dataset.go2));
 $("reset").onclick=()=>{if(confirm("Fortschritt wirklich löschen?")){localStorage.removeItem(KEY);location.reload()}};
};

/* ---------- Lektionen ---------- */
ROUTES.lessons=function(id){
 if(id)return lesson(L.find(l=>l.id===id),"gram");
 view.innerHTML=`<h2>Lektionen</h2><p class="mut">Arbeite die Lektionen der Reihe nach durch. Jede Lektion: Grammatik lesen → Wortschatz → Übungen → Lesen → Hören → Schreiben → Sprechen → Mini-Test (ab 70 % gilt die Lektion als abgeschlossen).</p>`+
 L.map(l=>{const vs=vocabOfLesson(l.id);const known=vs.filter(v=>(S.cards[v.k]||{}).box>=3).length;const d=S.done[l.id];
  return `<div class="card click" data-l="${l.id}"><b>Lektion ${l.id}: ${esc(l.title)}</b>${d?`<span class="pill ok">✓ ${d}%</span>`:""}<div class="mut">${esc(l.sub)} · ${vs.length} Wörter (${known} gefestigt) · ${l.ex.length} Übungen</div></div>`}).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>go("lessons",+c.dataset.l));
};
const LTABS=[["gram","Grammatik"],["voc","Wortschatz"],["ex","Übungen"],["read","Lesen"],["listen","Hören"],["write","Schreiben"],["speak","Sprechen"],["test","Mini-Test"]];
function lesson(l,tab){
 const head=`<div class="mut"><a href="#" id="back">← Lektionen</a></div><h2>Lektion ${l.id}: ${esc(l.title)}</h2><div class="mut">${esc(l.sub)}</div>
 <div class="tabs">${LTABS.map(([k,n])=>`<button class="${k===tab?"on":""}" data-t="${k}">${n}</button>`).join("")}</div><div id="lb"></div>`;
 view.innerHTML=head;$("back").onclick=e=>{e.preventDefault();go("lessons")};
 view.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>lesson(l,b.dataset.t));
 const box=$("lb");
 if(tab==="gram"){box.innerHTML=`<div class="card"><b>Lernziele</b><ul>${l.goals.map(g=>`<li>${esc(g)}</li>`).join("")}</ul></div><div class="card gram">${l.grammar}</div><div class="row"><button class="btn p" id="n1">Weiter: Wortschatz</button></div>`;$("n1").onclick=()=>lesson(l,"voc")}
 if(tab==="voc"){const vs=vocabOfLesson(l.id);box.innerHTML=`<div class="card"><div class="row" style="margin:0 0 12px"><button class="btn p" id="learn">Diese Wörter als Karten lernen</button><button class="btn" id="vt">Vokabeltest zur Lektion</button></div>
  <div class="vlist">${vs.map(v=>`<div><span><b>${esc(v.it)}</b> <button class="btn s" data-say="${esc(v.it)}">🔊</button></span><span class="mut">${esc(v.de)}</span></div>`).join("")}</div></div>`;
  $("learn").onclick=()=>cards(vs,()=>lesson(l,"voc"));$("vt").onclick=()=>runQuiz(sh(vs).slice(0,15).map(vItem),"Vokabeltest L"+l.id,{again:()=>lesson(l,"voc"),onDone:(s,n)=>done(s,n,()=>lesson(l,"voc"))})}
 if(tab==="ex"){box.innerHTML=`<div class="card"><p>${l.ex.length} Aufgaben zur Grammatik dieser Lektion.</p><button class="btn p" id="st">Starten</button></div>`;$("st").onclick=()=>runQuiz(sh(l.ex).map(x=>mk(x[0],x[1],x[2],x[3],"Grammatik",l.id+"|"+x[0])),"Übungen L"+l.id,{again:()=>lesson(l,"ex"),onDone:(s,n)=>done(s,n,()=>lesson(l,"ex"))})}
 if(tab==="read"){const r=l.read;box.innerHTML=`<div class="card"><b>${esc(r.title)}</b><div class="text" style="margin:10px 0">${esc(r.text)}</div><button class="btn s" data-say="${esc(r.text)}">🔊 Vorlesen</button><div class="row"><button class="btn p" id="rq">Fragen beantworten</button></div></div>`;
  $("rq").onclick=()=>runQuiz(r.qs.map(q=>mk(q[0],q[1],q[2],"","Lesen",l.id+"|r|"+q[0],r.text)),"Lesen L"+l.id,{again:()=>lesson(l,"read"),onDone:(s,n)=>done(s,n,()=>lesson(l,"read"))})}
 if(tab==="listen"){const d=l.dialog;box.innerHTML=`<div class="card"><b>Hörverstehen: Dialog</b><p class="mut">Hör den Dialog (zweimal erlaubt, wie in der Prüfung), dann beantworte die Fragen. Den Text siehst du erst nach den Fragen.</p>
  <div class="row"><button class="btn p" data-say="${esc(d.text)}">🔊 Abspielen</button><button class="btn" data-say="${esc(d.text)}" data-rate="0.7">🐢 Langsam</button></div><div class="row"><button class="btn g" id="dq">Fragen beantworten</button></div></div>
  <div class="card"><b>Diktat</b><p class="mut">${l.listen.length} Sätze aus dieser Lektion.</p><button class="btn p" id="dd">Diktat starten</button></div>`;
  $("dq").onclick=()=>runQuiz(d.qs.map(q=>mk(q[0],q[1],q[2],"","Hören",l.id+"|d|"+q[0])),"Hören L"+l.id,{again:()=>lesson(l,"listen"),onDone:(s,n)=>{view.innerHTML=`<div class="card"><p class="big">${s} / ${n}</p><b>Dialogtext</b><div class="text" style="margin:8px 0">${esc(d.text)}</div><div class="row"><button class="btn p" id="bk">Zurück</button></div></div>`;$("bk").onclick=()=>lesson(l,"listen")}});
  $("dd").onclick=()=>dictation(l.listen,()=>lesson(l,"listen"))}
 if(tab==="write")writeTask(l.write,box,()=>lesson(l,"write"),"Schreiben");
 if(tab==="speak")speakTask(l.speak,box,()=>lesson(l,"speak"));
 if(tab==="test"){box.innerHTML=`<div class="card"><b>Mini-Test Lektion ${l.id}</b><p class="mut">8 Grammatikaufgaben, 6 Vokabeln, Fragen zum Hörtext und Lesetext. Ab 70 % ist die Lektion abgeschlossen.</p><button class="btn p" id="mt">Starten</button></div>`;
  $("mt").onclick=()=>{const list=[...sh(l.ex).slice(0,8).map(x=>mk(x[0],x[1],x[2],x[3],"Grammatik",l.id+"|"+x[0])),...sh(vocabOfLesson(l.id)).slice(0,6).map(vItem),...l.dialog.qs.slice(0,2).map(q=>mk(q[0],q[1],q[2],"","Hören",l.id+"|d|"+q[0],"",l.dialog.text)),...l.read.qs.slice(0,2).map(q=>mk(q[0],q[1],q[2],"","Lesen",l.id+"|r|"+q[0],l.read.text))];
   runQuiz(sh(list),"Mini-Test L"+l.id,{again:()=>lesson(l,"test"),onDone:(s,n)=>{const p=Math.round(100*s/n);if(p>=70){S.done[l.id]=Math.max(S.done[l.id]||0,p);save()}
    view.innerHTML=`<div class="card"><p class="big">${s} / ${n}</p><p style="text-align:center">${p}% – ${p>=70?"Lektion abgeschlossen ✅":"noch nicht bestanden (70 % nötig)"}</p><div class="row"><button class="btn" id="ag">Nochmal</button><button class="btn p" id="nx">${p>=70&&L[l.id]?"Nächste Lektion":"Zu den Lektionen"}</button></div></div>`;
    $("ag").onclick=()=>lesson(l,"test");$("nx").onclick=()=>p>=70&&L[l.id]?go("lessons",l.id+1):go("lessons")}})}}
 function done(s,n,back){view.innerHTML=`<div class="card"><p class="big">${s} / ${n}</p><div class="row"><button class="btn p" id="bk">Zurück zur Lektion</button></div></div>`;$("bk").onclick=back}
}

/* ---------- Karten (Leitner) ---------- */
const INTERVAL=[0,1,2,4,8,16,32];
function cards(pool,back){
 const t=today();
 const due=pool.filter(v=>{const c=S.cards[v.k];return !c||c.due<=t});
 const queue=sh(due.filter(v=>S.cards[v.k])).concat(sh(due.filter(v=>!S.cards[v.k]))).slice(0,15);
 if(!queue.length){view.innerHTML=`<div class="card"><p>🎉 Nichts fällig. Komm morgen wieder oder mach ein Quiz.</p><div class="row"><button class="btn p" id="bk">Zurück</button></div></div>`;$("bk").onclick=back;return}
 let n=0;
 const show=()=>{
  if(n>=queue.length){view.innerHTML=`<div class="card"><p class="big">Fertig ✅</p><p class="mut" style="text-align:center">${queue.length} Karten bearbeitet.</p><div class="row"><button class="btn p" id="ag">Noch eine Runde</button><button class="btn" id="bk">Zurück</button></div></div>`;$("ag").onclick=()=>cards(pool,back);$("bk").onclick=back;return}
  const v=queue[n],rev=Math.random()<0.35,front=rev?v.de:v.it,backT=rev?v.it:v.de;
  view.innerHTML=`<div class="mut">Karte ${n+1}/${queue.length} · Lektion ${v.lid}</div><div class="card"><div class="big">${esc(front)}</div><div id="bt" class="big mut" style="display:none">${esc(backT)}</div>
  <div class="row" id="ctl"><button class="btn" data-say="${esc(v.it)}">🔊 Anhören</button><button class="btn p" id="fl">Umdrehen</button></div></div>`;
  if(!rev)say(v.it);
  $("fl").onclick=()=>{$("bt").style.display="block";if(rev)say(v.it);$("ctl").innerHTML=`<button class="btn" id="no">Nicht gewusst</button><button class="btn g" id="yes">Gewusst</button>`;$("no").onclick=()=>rate(false);$("yes").onclick=()=>rate(true)};
 };
 const rate=ok=>{const v=queue[n];const c=S.cards[v.k]||{box:0};c.box=ok?Math.min(6,c.box+1):0;c.due=addDays(INTERVAL[c.box]);S.cards[v.k]=c;bump("Wortschatz",ok);n++;show()};
 show();
}
ROUTES.cards=function(){
 const t=today();const due=V.filter(v=>{const c=S.cards[v.k];return !c||c.due<=t}).length;
 const doneL=L.filter(l=>S.done[l.id]).map(l=>l.id);
 view.innerHTML=`<h2>Karten</h2><div class="card"><p>${due} Karten fällig (von ${V.length}).</p><div class="row"><button class="btn p" id="all">Alle Lektionen</button><button class="btn" id="dn" ${doneL.length?"":"disabled"}>Nur abgeschlossene Lektionen</button></div></div>
 <div class="card"><b>Nach Lektion</b><div class="row">${L.map(l=>`<button class="btn s" data-l="${l.id}">L${l.id}</button>`).join("")}</div></div>`;
 $("all").onclick=()=>cards(V,()=>go("cards"));$("dn").onclick=()=>cards(V.filter(v=>doneL.includes(v.lid)),()=>go("cards"));
 view.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>cards(vocabOfLesson(+b.dataset.l),()=>go("cards")));
};

/* ---------- Grammatik / Vokabeltest ---------- */
ROUTES.quiz=function(){
 view.innerHTML=`<h2>Grammatik</h2><div class="card"><p>${G.length} Aufgaben aus allen Lektionen. Das Schwächen-Training bevorzugt Aufgaben, die du falsch hattest oder noch nie gesehen hast.</p>
 <div class="row"><button class="btn p" id="weak">Schwächen-Training (20)</button><button class="btn" id="rnd">Zufällig (20)</button></div></div>`;
 $("weak").onclick=()=>runQuiz(pick(G,20,g=>g.k).map(gItem),"Grammatik",{again:()=>go("quiz")});
 $("rnd").onclick=()=>runQuiz(sh(G).slice(0,20).map(gItem),"Grammatik",{again:()=>go("quiz")});
};
ROUTES.vq=function(){
 view.innerHTML=`<h2>Vokabeltest</h2><div class="card"><p>${V.length} Wörter. Falsche Antworten stammen möglichst aus derselben Lektion.</p><div class="row"><button class="btn p" id="weak">Schwächen-Training (20)</button><button class="btn" id="rnd">Zufällig (20)</button></div></div>`;
 $("weak").onclick=()=>runQuiz(pick(V,20,v=>v.k).map(vItem),"Vokabeltest",{again:()=>go("vq")});
 $("rnd").onclick=()=>runQuiz(sh(V).slice(0,20).map(vItem),"Vokabeltest",{again:()=>go("vq")});
};

/* ---------- Lesen ---------- */
ROUTES.read=function(){
 view.innerHTML=`<h2>Lesen</h2><p class="mut">Texte wie in der Prüfung: E-Mails, Anzeigen, Öffnungszeiten, Speisekarten, Nachrichten.</p>`+L.map(l=>`<div class="card click" data-l="${l.id}"><b>${esc(l.read.title)}</b><div class="mut">Lektion ${l.id} · ${l.read.qs.length} Fragen</div></div>`).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>lesson(L.find(l=>l.id===+c.dataset.l),"read"));
};

/* ---------- Hören / Diktat ---------- */
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]/g," ").replace(/\s+/g," ").trim();
function dictation(items,back){
 let n=0;items=sh(items).slice(0,8);
 const show=()=>{
  if(n>=items.length){view.innerHTML=`<div class="card"><p class="big">Fertig 🎧</p><div class="row"><button class="btn p" id="ag">Nochmal</button><button class="btn" id="bk">Zurück</button></div></div>`;$("ag").onclick=()=>dictation(items,back);$("bk").onclick=back;return}
  const [it,de]=items[n];
  view.innerHTML=`<div class="mut">Diktat ${n+1}/${items.length} – hör zu und schreib den Satz</div><div class="card"><div class="row" style="margin:0"><button class="btn p" data-say="${esc(it)}">🔊 Abspielen</button><button class="btn" data-say="${esc(it)}" data-rate="0.6">🐢 Langsam</button></div>
  <p></p><input type="text" id="in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Frase in italiano…"><p></p><button class="btn g" style="width:100%" id="ck">Prüfen</button><div id="fb"></div></div>`;
  setTimeout(()=>say(it),250);$("in").focus();
  const check=()=>{const ok=norm($("in").value)===norm(it);bump("Hören",ok,"dict|"+it);
   $("fb").innerHTML=`<div class="fb">${ok?"✅ Richtig!":"❌ Nicht ganz."}<br><b>${esc(it)}</b><br><span class="mut">${esc(de)}</span>${ok?"":`<br><span class="mut">Deine Eingabe: ${esc($("in").value)}</span>`}</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Weiter</button>`;
   $("ck").disabled=true;$("nx").onclick=()=>{n++;show()};$("nx").focus()};
  $("ck").onclick=check;$("in").onkeydown=e=>{if(e.key==="Enter"&&!$("ck").disabled)check()};
 };
 show();
}
ROUTES.listen=function(){
 const all=[];L.forEach(l=>l.listen.forEach(x=>all.push(x)));
 view.innerHTML=`<h2>Hören</h2><div class="card"><b>Diktat</b><p class="mut">${all.length} Sätze aus allen Lektionen, 8 pro Runde.</p><button class="btn p" id="d">Diktat starten</button></div>
 <div class="card"><b>Dialoge (Prüfungsformat)</b><div class="row" style="margin:0">${L.map(l=>`<button class="btn s" data-l="${l.id}">L${l.id}</button>`).join("")}</div></div>`;
 $("d").onclick=()=>dictation(all,()=>go("listen"));
 view.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>lesson(L.find(l=>l.id===+b.dataset.l),"listen"));
};

/* ---------- Sprechen ---------- */
function speakTask(s,box,back){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 box.innerHTML=`<div class="card"><p>${esc(s.p)}</p><ul>${s.cues.map(c=>`<li>${esc(c)}</li>`).join("")}</ul>
 ${SR?`<button class="btn" id="mic">🎤 Aufnehmen (Transkript)</button><div id="tr" class="fb" style="display:none"></div>`:`<p class="mut">Spracherkennung in diesem Browser nicht verfügbar (Chrome/Safari nutzen) – sprich einfach laut.</p>`}
 <p></p><button class="btn p" id="sh" style="width:100%">Musterantwort zeigen</button><div id="mo"></div></div>`;
 if(SR)$("mic").onclick=()=>{try{const r=new SR();r.lang="it-IT";r.continuous=true;const t=$("tr");t.style.display="block";t.textContent="Ich höre zu… (nochmal klicken zum Stoppen)";let txt="";
  r.onresult=e=>{txt="";for(let i=0;i<e.results.length;i++)txt+=e.results[i][0].transcript+" ";t.textContent=txt};r.onerror=()=>{t.textContent="Keine Erkennung möglich."};r.start();$("mic").onclick=()=>r.stop()}catch(e){}};
 $("sh").onclick=()=>{$("mo").innerHTML=`<div class="fb"><b>${esc(s.m)}</b></div><div class="row"><button class="btn" data-say="${esc(s.m)}" data-rate="0.85">🔊 Anhören</button></div><p class="mut">Selbstbewertung: Hast du alle Punkte gesagt, verständlich und in ganzen Sätzen?</p><div class="row"><button class="btn" id="bad">Nochmal üben</button><button class="btn g" id="good">Gut gelaufen</button></div>`;say(s.m,0.85);
  $("bad").onclick=()=>{bump("Sprechen",false);back()};$("good").onclick=()=>{bump("Sprechen",true);back()}};
}
ROUTES.speak=function(){
 view.innerHTML=`<h2>Sprechen</h2><p class="mut">Prüfungsnahe Aufgaben: Vorstellung, Interaktion (Café, Einkaufen, Weg, Verabredung), Beschreibung. Immer laut sprechen.</p>`+L.map(l=>`<div class="card click" data-l="${l.id}"><b>L${l.id} · ${esc(l.title)}</b><div class="mut">${esc(l.speak.p.slice(0,90))}…</div></div>`).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>lesson(L.find(l=>l.id===+c.dataset.l),"speak"));
};

/* ---------- Schreiben ---------- */
// Pflichtelemente und Länge prüfen; frac = Anteil 0–1 (halbiert, wenn zu kurz)
function writeCheck(w,t){const res=w.req.map(([n,re])=>[n,re.test(t)]);const got=res.filter(r=>r[1]).length;const wc=words(t);const tooShort=w.min&&wc<w.min;return{res,got,wc,tooShort,frac:got/res.length*(tooShort?0.5:1)}}
function writeTask(w,box,back,cat,onScore){
 box.innerHTML=`<div class="card"><p>${esc(w.p)}</p><textarea id="tx" rows="7" placeholder="Scrivi qui…"></textarea><div class="mut" id="wc">0 Wörter</div><p></p><button class="btn g" style="width:100%" id="ck">Prüfen</button><div id="fb"></div></div>`;
 $("tx").oninput=()=>$("wc").textContent=words($("tx").value)+" Wörter";
 $("ck").onclick=()=>{const t=$("tx").value;const {res,got,wc,tooShort,frac}=writeCheck(w,t);
  bump(cat||"Schreiben",got===res.length&&!tooShort);
  $("fb").innerHTML=`<div class="fb">${res.map(([n,ok])=>`${ok?"✅":"❌"} ${esc(n)}`).join("<br>")}${w.min?`<br>${tooShort?"❌":"✅"} Länge: ${wc} Wörter (mind. ${w.min})`:""}</div><div class="fb"><span class="mut">Musterlösung:</span><br><b class="text">${esc(w.m)}</b></div><p class="mut">Die App prüft nur, ob die verlangten Elemente vorkommen. Vergleiche Rechtschreibung, Artikel und Verbformen selbst mit der Musterlösung.</p>
  <div class="row"><button class="btn" id="ag">Nochmal</button><button class="btn p" id="bk">${onScore?"Weiter":"Zurück"}</button></div>`;
  $("ag").onclick=()=>writeTask(w,box,back,cat,onScore);$("bk").onclick=()=>onScore?onScore(frac):back()};
}
ROUTES.write=function(){
 view.innerHTML=`<h2>Schreiben</h2><p class="mut">Prüfungsformate: Vorstellung, Formular, Nachricht, Postkarte, formelle E-Mail, Urlaubs-Post. Zähle die Wörter wie in der Prüfung.</p>`+L.map(l=>`<div class="card click" data-l="${l.id}"><b>L${l.id} · ${esc(l.title)}</b><div class="mut">${esc(l.write.p.slice(0,90))}…</div></div>`).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>lesson(L.find(l=>l.id===+c.dataset.l),"write"));
};

/* ---------- Prüfungssimulation ---------- */
ROUTES.exam=function(){
 view.innerHTML=`<h2>Prüfungssimulation</h2><p class="mut">Simulation 4 folgt dem Format von PLIDA A1, deiner Prüfung: 4 Fertigkeiten zu je 30 Punkten, bestanden ab 18 in jeder. Die Simulationen 1–3 folgen dem Aufbau von CILS A1 (5 Teile zu je 12 Punkten, bestanden ab 7) und dienen als zusätzliches Training. Alle Teile haben ein Zeitlimit, Hörtexte laufen höchstens zweimal, der Text ist nicht sichtbar.</p>`+
 [...EX].sort((a,b)=>(b.type==="plida")-(a.type==="plida")).map(e=>{const hist=(S.exam||[]).filter(x=>x.id===e.id).slice(-1)[0];return `<div class="card click" data-e="${e.id}"><b>${esc(e.title)}</b><div class="mut">${e.type==="plida"?"Ascoltare · Leggere · Scrivere · Parlare":"Ascolto · Lettura · Strutture · Scritto · Orale"}${hist?` · zuletzt ${hist.total}/${hist.max||60} ${hist.pass?"✅":"❌"}`:""}</div></div>`}).join("");
 view.querySelectorAll("[data-e]").forEach(c=>c.onclick=()=>exam(EX.find(e=>e.id===+c.dataset.e)));
};
let timerId=null;
function startTimer(min,onEnd){clearInterval(timerId);let s=min*60;const el=()=>$("tm");const tick=()=>{const e=el();if(!e){clearInterval(timerId);return}e.textContent=`⏱ ${pad(Math.floor(s/60))}:${pad(s%60)}`;if(s<=60)e.classList.add("low");if(s<=0){clearInterval(timerId);onEnd&&onEnd()}s--};tick();timerId=setInterval(tick,1000)}
function exam(e){
 const sc={};
 // Bei 00:00 wird der Teil mit den bisherigen Punkten beendet; der nächste Bildschirm zeigt einen Hinweis
 let timeUp="";const timeNote=()=>{const t=timeUp;timeUp="";return t?`<p class="mut">⏱ Zeit für ${t} abgelaufen – der Teil wurde mit den bisherigen Punkten gewertet.</p>`:""};
 const partHead=(name,min)=>`<span class="timer" id="tm"></span><div class="mut">${esc(e.title)} · ${name}</div>`;
 // Teile in Prüfungsreihenfolge: CILS 5 Teile à 12 Punkte (bestanden ab 7), PLIDA 4 Fertigkeiten à 30 (bestanden ab 18)
 const PL=e.type==="plida";
 const PARTS=PL?[["ascoltare","Ascoltare"],["leggere","Leggere"],["scrivere","Scrivere"],["parlare","Parlare"]]:[["ascolto","Ascolto"],["lettura","Lettura"],["strutture","Strutture"],["scritto","Scritto"],["orale","Orale"]];
 const MAX=PL?30:12,PASS=PL?18:7;
 const RUN={ascolto,lettura,strutture,scritto,orale,ascoltare,leggere,scrivere,parlare};
 const next=()=>{const p=PARTS.find(([k])=>sc[k]===undefined);return p?RUN[p[0]]():summary()};
 function intro(name,min,desc,start){clearInterval(timerId);view.innerHTML=`<div class="card">${timeNote()}<h2>${name}</h2><p>${desc}</p><p class="mut">Zeit: ${min} Minuten.</p><button class="btn p" id="st">Starten</button></div>`;$("st").onclick=start}
 function ascolto(){const a=e.ascolto;intro("Ascolto",a.min,"6 kurze Hörtexte, je eine Frage mit 3 Antworten. Jeder Text darf zweimal abgespielt werden.",()=>{
  let i=0,score=0;const show=()=>{if(i>=a.items.length){sc.ascolto=score*2;return next()}const it=a.items[i];let plays=0;
   view.innerHTML=partHead("Ascolto")+`<div class="card"><div class="mut">Hörtext ${i+1}/${a.items.length}</div><div class="row" style="margin:0 0 12px"><button class="btn p" id="pl">🔊 Abspielen (${2-plays} übrig)</button></div><b>${esc(it.q)}</b>${sh([it.a,...it.w]).map(o=>`<button class="btn opt" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
   if(i===0)startTimer(a.min,()=>{timeUp="Ascolto";sc.ascolto=score*2;next()});
   const pl=$("pl");pl.onclick=()=>{if(plays>=2)return;plays++;say(it.audio,0.85);pl.textContent=`🔊 Abspielen (${2-plays} übrig)`;if(plays>=2)pl.disabled=true};
   view.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const ok=b.dataset.o===it.a;if(ok)score++;bump("Hören",ok,"ex|"+it.q);view.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(x.dataset.o===it.a)x.classList.add("ok");else if(x===b)x.classList.add("no")});
    const d=document.createElement("div");d.innerHTML=`<div class="fb"><span class="mut">Gehört:</span> ${esc(it.audio)}</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Weiter</button>`;b.parentElement.appendChild(d);$("nx").onclick=()=>{i++;show()}})};show()})}
 function lettura(){const r=e.lettura;intro("Lettura",r.min,"Kurze Texte mit Fragen und Lückensätze. 12 Punkte.",()=>{
  const list=[];r.texts.forEach(t=>t.qs.forEach(q=>list.push(mk(q[0],q[1],q[2],"","Lesen","ex|"+q[0],t.text))));r.gaps.forEach(g=>list.push(mk(g[0],g[1],g[2],"","Lesen","ex|"+g[0])));
  const n=list.length;const end=runQuiz(list,"Lettura",{header:` <span class="timer" id="tm"></span>`,onDone:(s)=>{sc.lettura=Math.round(12*s/n);next()}});
  startTimer(r.min,()=>{timeUp="Lettura";end()})})}
 function strutture(){const s=e.strutture;intro("Analisi delle strutture",s.min,"12 Lückensätze zu Grammatik und Wortschatz. 12 Punkte.",()=>{
  const list=s.items.map(x=>mk(x[0],x[1],x[2],"","Grammatik","ex|"+x[0]));
  const end=runQuiz(list,"Strutture",{header:` <span class="timer" id="tm"></span>`,onDone:(sc2)=>{sc.strutture=Math.round(12*sc2/list.length);next()}});
  startTimer(s.min,()=>{timeUp="Analisi delle strutture";end()})})}
 function scritto(){const w=e.scritto;intro("Produzione scritta",w.min,"Zwei kurze Texte. Achte auf die Wortzahl. Die App prüft nur die verlangten Inhalte, bewerte Sprache und Rechtschreibung selbst mit der Musterlösung.",()=>{
  let i=0,pts=0;const show=()=>{if(i>=w.tasks.length){sc.scritto=Math.round(pts);return next()}view.innerHTML=partHead("Scritto")+`<div class="mut">Aufgabe ${i+1}/${w.tasks.length}</div><div id="box"></div>`;if(i===0)startTimer(w.min,()=>{const tx=$("tx");if(tx)pts+=writeCheck(w.tasks[i],tx.value).frac*6;timeUp="Produzione scritta";i=w.tasks.length;show()});
   writeTask(w.tasks[i],$("box"),null,"Schreiben",frac=>{pts+=frac*6;i++;show()})};show()})}
 function orale(){const o=e.orale;intro("Produzione orale",o.min,"Drei Teile wie in der mündlichen Prüfung. Sprich laut (am besten aufnehmen), vergleiche mit der Musterantwort und bewerte dich ehrlich mit 0–4 Punkten pro Teil.",()=>{
  let i=0,pts=0;const show=()=>{if(i>=o.parts.length){sc.orale=pts;return next()}const p=o.parts[i];
   view.innerHTML=partHead("Orale")+`<div class="card"><b>${esc(p.t)}</b><p>${esc(p.p)}</p><button class="btn p" id="sh">Musterantwort zeigen</button><div id="mo"></div></div>`;if(i===0)startTimer(o.min,()=>{timeUp="Produzione orale";i=o.parts.length;show()});
   $("sh").onclick=()=>{$("mo").innerHTML=`<div class="fb"><b>${esc(p.m)}</b></div><div class="row"><button class="btn" data-say="${esc(p.m)}" data-rate="0.85">🔊 Anhören</button></div><p class="mut">Deine Punkte (0 = nichts gesagt, 4 = alles, verständlich, ganze Sätze):</p><div class="row">${[0,1,2,3,4].map(k=>`<button class="btn" data-pt="${k}">${k}</button>`).join("")}</div>`;
    view.querySelectorAll("[data-pt]").forEach(b=>b.onclick=()=>{const v=+b.dataset.pt;pts+=v;bump("Sprechen",v>=3);i++;show()})}};show()})}
 /* ---- PLIDA: Ascoltare/Leggere – jede Teilprüfung auf einer Seite, ausgewertet erst am Ende; richtig = 2 Punkte, Beispiele (ex) zählen nicht ---- */
 function ascoltare(){objective("ascoltare","Ascoltare","Hören",e.ascoltare)}
 function leggere(){objective("leggere","Leggere","Lesen",e.leggere)}
 function objective(key,name,cat,cfg){intro(name,cfg.min,cfg.desc,()=>{
  const given=cfg.parts.map(()=>[]);let pi=0;
  const done=()=>{clearInterval(timerId);let pts=0;cfg.parts.forEach((p,i)=>p.items.forEach((it,k)=>{if(it.ex)return;const ok=given[i][k]===it.a;if(ok)pts+=2;bump(cat,ok)}));sc[key]=pts;review(name,cfg,given,pts)};
  const show=()=>{if(pi>=cfg.parts.length)return done();const p=cfg.parts[pi],sel=given[pi],plays=[];
   const choices=(it,k)=>p.opts?`<div class="opts-in">${p.opts.map(([l])=>`<button class="btn s${it.ex&&l===it.a?" sel":""}" data-k="${k}" data-v="${l}"${it.ex?" disabled":""}>${l}</button>`).join("")}</div>`:sh([it.a,...it.w]).map(o=>`<button class="btn opt${it.ex&&o===it.a?" sel":""}" data-k="${k}" data-v="${esc(o)}"${it.ex?" disabled":""}>${esc(o)}</button>`).join("");
   view.innerHTML=partHead(name)+`<div class="card"><b>${esc(p.t)}</b><p>${esc(p.instr)}</p>${p.opts?`<div class="legend">${p.opts.map(([l,x])=>`<div><b>${l}</b> – ${esc(x)}</div>`).join("")}</div>`:""}</div>`+
    p.items.map((it,k)=>`<div class="card"><div class="mut">${k+1}${it.ex?" · Beispiel":""}</div>${it.audio?`<button class="btn s" data-pl="${k}">🔊 Abspielen (2 übrig)</button>`:""}${it.text?`<div class="${p.sms?"sms":"text"}">${esc(it.text)}</div>`:""}${it.q?`<p><b>${esc(it.q)}</b></p>`:""}${choices(it,k)}</div>`).join("")+
    `<button class="btn p" style="width:100%" id="ab">${pi<cfg.parts.length-1?"Abgeben und weiter":"Abgeben"}</button>`;
   view.querySelectorAll("[data-pl]").forEach(b=>b.onclick=()=>{const k=+b.dataset.pl;plays[k]=(plays[k]||0)+1;if(plays[k]>2)return;say(p.items[k].audio,0.85);b.textContent=`🔊 Abspielen (${2-plays[k]} übrig)`;if(plays[k]>=2)b.disabled=true});
   view.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const k=+b.dataset.k;sel[k]=b.dataset.v;view.querySelectorAll(`[data-k="${k}"]`).forEach(x=>x.classList.toggle("sel",x===b))});
   $("ab").onclick=()=>{pi++;show()}};
  show();startTimer(cfg.min,()=>{timeUp=name;done()})})}
 function review(name,cfg,given,pts){
  const lab=(p,v)=>v?(p.opts?`${v} – ${esc((p.opts.find(o=>o[0]===v)||[])[1]||"")}`:esc(v)):"–";
  view.innerHTML=`<div class="card">${timeNote()}<h2>${name}: ${pts} / 30</h2><p class="mut">${pts>=18?"✅ bestanden (ab 18 Punkten)":"❌ unter 18 Punkten"} · Hier siehst du alle Lösungen.</p></div>`+
   cfg.parts.map((p,i)=>`<div class="card"><b>${esc(p.t)}</b>${p.items.map((it,k)=>{if(it.ex)return "";const g=given[i][k],ok=g===it.a;return `<div class="fb">${ok?"✅":"❌"} <b>${k+1}.</b> ${esc(it.q||it.text||"")}<br>Deine Antwort: ${lab(p,g)}${ok?"":`<br>Richtig: ${lab(p,it.a)}`}${it.audio?`<br><span class="mut">Gehört: ${esc(it.audio)}</span>`:""}</div>`}).join("")}</div>`).join("")+
   `<button class="btn p" style="width:100%" id="nx">Weiter</button>`;$("nx").onclick=next}
 /* ---- PLIDA Scrivere: beide Aufgaben auf einer Seite; ein Text unter der Mindestwortzahl annulliert die ganze Prüfung, sonst Selbstbewertung ---- */
 function scrivere(){const w=e.scrivere;intro("Scrivere",w.min,w.desc,()=>{
  view.innerHTML=partHead("Scrivere")+w.tasks.map((t,i)=>`<div class="card"><b>${esc(t.t)}</b><p>${esc(t.p)}</p>${(t.sms||[]).map(s=>`<div class="sms">${esc(s)}</div>`).join("")}<textarea id="tx${i}" rows="7" placeholder="Scrivi qui…"></textarea><div class="mut" id="wc${i}"></div></div>`).join("")+`<button class="btn p" style="width:100%" id="ab">Abgeben</button>`;
  w.tasks.forEach((t,i)=>{const u=()=>{$("wc"+i).textContent=`${words($("tx"+i).value)} Wörter · Ziel ca. ${t.target} (${t.min}–${t.max}; unter ${t.min} wird die Prüfung annulliert)`};$("tx"+i).oninput=u;u()});
  const done=()=>{clearInterval(timerId);rateWrite(w,w.tasks.map((t,i)=>$("tx"+i).value))};
  $("ab").onclick=done;startTimer(w.min,()=>{timeUp="Scrivere";done()})})}
 function rateWrite(w,texts){const wc=texts.map(words),nul=w.tasks.some((t,i)=>wc[i]<t.min);
  view.innerHTML=`<div class="card">${timeNote()}<h2>Scrivere – Auswertung</h2>${nul?`<p>❌ Mindestens ein Text hat weniger Wörter als verlangt. In der Prüfung wird Scrivere dann annulliert: 0 Punkte.</p>`:`<p class="mut">Vergleiche deine Texte mit den Musterlösungen und bewerte dich dann selbst.</p>`}</div>`+
   w.tasks.map((t,i)=>{const c=writeCheck(t,texts[i]);return `<div class="card"><b>${esc(t.t)}</b><div class="fb">${wc[i]<t.min?"❌":wc[i]>t.max?"⚠️":"✅"} ${wc[i]} Wörter (${t.min}–${t.max})${wc[i]>t.max?` – Wörter über ${t.max} werden nicht bewertet`:""}<br>${c.res.map(([n,ok])=>`${ok?"✅":"❌"} ${esc(n)}`).join("<br>")}</div><div class="fb"><span class="mut">Dein Text:</span><div class="text">${esc(texts[i])||"–"}</div></div><div class="fb"><span class="mut">Musterlösung:</span><div class="text"><b>${esc(t.m)}</b></div></div></div>`}).join("");
  if(nul){view.insertAdjacentHTML("beforeend",`<button class="btn p" style="width:100%" id="nx">Weiter (0 Punkte)</button>`);$("nx").onclick=()=>{sc.scrivere=0;bump("Schreiben",false);next()};return}
  rate(w.crit,pts=>{sc.scrivere=pts;bump("Schreiben",pts>=18);next()})}
 /* ---- PLIDA Parlare: drei Teile mit eigener Uhr (Interaktion mit Vorbereitungszeit), danach Selbstbewertung ---- */
 function parlare(){const o=e.parlare;intro("Parlare",o.min,o.desc,()=>{
  let i=0;const show=()=>{if(i>=o.parts.length){view.innerHTML=`<div class="card"><h2>Parlare – Selbstbewertung</h2><p class="mut">Bewerte alle drei Teile zusammen, wie in der Prüfung gibt es eine Gesamtnote.</p></div>`;return rate(o.crit,pts=>{sc.parlare=pts;bump("Sprechen",pts>=18);next()})}
   const p=o.parts[i],task=`<div class="card"><b>${esc(p.t)}</b><p>${esc(p.p)}</p><ul>${p.cues.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>`;
   const model=late=>{clearInterval(timerId);view.innerHTML=`<div class="card">${late?`<p class="mut">⏱ Die Zeit für diesen Teil ist um.</p>`:""}<b>${esc(p.t)} – Musterantwort</b><div class="fb"><div class="text"><b>${esc(p.m)}</b></div></div><div class="row"><button class="btn" data-say="${esc(p.m)}" data-rate="0.85">🔊 Anhören</button><button class="btn p" id="nx">Weiter</button></div></div>`;$("nx").onclick=()=>{i++;show()}};
   const speak=()=>{view.innerHTML=partHead("Parlare")+task+`<button class="btn p" style="width:100%" id="fe">Fertig gesprochen</button>`;$("fe").onclick=()=>model(false);startTimer(p.min,()=>model(true))};
   if(p.prep){view.innerHTML=partHead("Parlare · Vorbereitung")+task+`<button class="btn" style="width:100%" id="gs">Vorbereitung beenden, jetzt sprechen</button>`;$("gs").onclick=speak;startTimer(p.prep,speak)}else speak()};
  show()})}
 // Selbstbewertung nach den offiziellen PLIDA-Kriterien: crit = [[Name, Beschreibung, Maximum], …], Summe max. 30
 function rate(crit,onDone){const v=crit.map(()=>null);
  view.insertAdjacentHTML("beforeend",`<div class="card"><b>Selbstbewertung</b><p class="mut">Sei ehrlich und streng, so wie in der Prüfung bewertet wird.</p>${crit.map(([n,d,m],i)=>`<div style="margin:12px 0"><b>${esc(n)}</b> <span class="mut">0–${m} · ${esc(d)}</span><div class="opts-in">${Array.from({length:m+1},(_,k)=>`<button class="btn s" data-c="${i}" data-v="${k}">${k}</button>`).join("")}</div></div>`).join("")}<div class="mut" id="rs">Summe: – / 30</div><button class="btn p" style="width:100%;margin-top:10px" id="rd" disabled>Punkte übernehmen</button></div>`);
  view.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{const i=+b.dataset.c;v[i]=+b.dataset.v;view.querySelectorAll(`[data-c="${i}"]`).forEach(x=>x.classList.toggle("sel",x===b));const all=v.every(x=>x!==null);$("rs").textContent=`Summe: ${all?v.reduce((a,x)=>a+x,0):"–"} / 30`;$("rd").disabled=!all});
  $("rd").onclick=()=>onDone(v.reduce((a,x)=>a+x,0))}
 function summary(){clearInterval(timerId);const parts=PARTS.map(([k,n])=>[n,sc[k]]);const total=parts.reduce((a,p)=>a+p[1],0),max=MAX*parts.length;const pass=parts.every(p=>p[1]>=PASS);
  (S.exam=S.exam||[]).push({id:e.id,date:today(),total,max,pass,parts:parts.map(p=>p[1])});save();
  view.innerHTML=`<div class="card">${timeNote()}<h2>${esc(e.title)} – Ergebnis</h2><table class="res">${parts.map(([n,v])=>`<tr><td>${n}</td><td><b>${v}</b> / ${MAX}</td><td>${v>=PASS?"✅":`❌ (unter ${PASS})`}</td></tr>`).join("")}<tr><td><b>Gesamt</b></td><td><b>${total}</b> / ${max}</td><td>${pass?"✅ bestanden":"❌ nicht bestanden"}</td></tr></table>
  <p class="mut">${PL?"Bei PLIDA braucht jede Fertigkeit mindestens 18 von 30 Punkten. Bestandene Fertigkeiten bleiben 18 Monate gültig, die anderen kannst du einzeln wiederholen.":"Bei CILS muss jeder Teil mindestens 7 Punkte haben."} Teile unter ${PASS}: gezielt mit den Lektionen und dem Schwächen-Training wiederholen.</p><div class="row"><button class="btn p" id="hm">Übersicht</button></div></div>`;$("hm").onclick=()=>go("home")}
 next();
}

/* ---------- Info ---------- */
ROUTES.info=function(){view.innerHTML=`<h2>Prüfungsinfo</h2><div class="card gram">${window.EXAMINFO||""}</div>`};

/* ---------- Start ---------- */
window.ciaoGo=go;
go("home");
})();
