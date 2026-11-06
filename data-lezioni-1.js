/* Italiano A1 – Lektionen 1–6
   Struktur pro Lektion:
   id, title, sub, goals[], grammar (HTML), vocab [[it,de]], ex [[Frage, richtig, [falsch…], Erklärung]],
   read {title,text,qs[[Frage,richtig,[falsch…]]]}, listen [[it,de]], dialog {text,qs}, write {p,req,m}, speak {p,cues,m}
*/
window.LESSONS = window.LESSONS || [];

window.LESSONS.push(
/* ================= LEKTION 1 ================= */
{id:1,title:"Ciao! Saluti e presentazioni",sub:"Begrüssen, sich vorstellen, Herkunft",
goals:["formell und informell grüssen","sich und andere vorstellen","sagen, woher man kommt","das Alphabet und die Aussprache kennen","im Unterricht nachfragen"],
grammar:`
<h3>1. Das Alphabet und die Aussprache</h3>
<p>Italienisch wird fast so gesprochen, wie es geschrieben wird. Wichtige Regeln:</p>
<table><tr><th>Schreibung</th><th>Aussprache</th><th>Beispiel</th></tr>
<tr><td>c + a/o/u</td><td>k</td><td>casa, come, cultura</td></tr>
<tr><td>c + e/i</td><td>tsch</td><td>cena, ciao, cinema</td></tr>
<tr><td>ch + e/i</td><td>k</td><td>chiave, che, chi</td></tr>
<tr><td>g + a/o/u</td><td>g</td><td>gatto, gonna</td></tr>
<tr><td>g + e/i</td><td>dsch</td><td>gelato, giorno</td></tr>
<tr><td>gh + e/i</td><td>g</td><td>spaghetti, ghiaccio</td></tr>
<tr><td>sc + e/i</td><td>sch</td><td>pesce, uscita</td></tr>
<tr><td>gn</td><td>nj</td><td>gnocchi, signora</td></tr>
<tr><td>gl + i</td><td>lj</td><td>famiglia, figlio</td></tr>
<tr><td>h</td><td>stumm</td><td>ho, hai, hotel</td></tr>
<tr><td>Doppelkonsonanten</td><td>länger gesprochen</td><td>nonno ≠ nono, pala ≠ palla</td></tr></table>
<p>Betonung: meist auf der vorletzten Silbe (CA-sa, a-MI-co). Ein Akzent zeigt Betonung auf der letzten Silbe: caff<b>è</b>, citt<b>à</b>, perch<b>é</b>.</p>
<p>Alphabet: a, bi, ci, di, e, effe, gi, acca, i, elle, emme, enne, o, pi, cu, erre, esse, ti, u, vu, zeta. Fremde Buchstaben: j (i lunga), k (cappa), w (doppia vu), x (ics), y (ipsilon).</p>

<h3>2. Subjektpronomen</h3>
<table><tr><td>io</td><td>ich</td><td>noi</td><td>wir</td></tr>
<tr><td>tu</td><td>du</td><td>voi</td><td>ihr</td></tr>
<tr><td>lui / lei</td><td>er / sie</td><td>loro</td><td>sie (Pl.)</td></tr>
<tr><td>Lei</td><td>Sie (Höflichkeitsform, Singular)</td><td></td><td></td></tr></table>
<p>Die Pronomen werden meist weggelassen, weil die Verbendung die Person zeigt: <i>Sono di Zurigo.</i> Man setzt sie zur Betonung: <i>Io sono svizzera, e tu?</i></p>

<h3>3. essere (sein)</h3>
<table><tr><td>io <b>sono</b></td><td>noi <b>siamo</b></td></tr><tr><td>tu <b>sei</b></td><td>voi <b>siete</b></td></tr><tr><td>lui/lei/Lei <b>è</b></td><td>loro <b>sono</b></td></tr></table>
<p><i>Sono Leandra. Sei italiano? Maria è di Roma. Siamo studenti.</i></p>

<h3>4. chiamarsi (heissen)</h3>
<table><tr><td>io <b>mi chiamo</b></td><td>noi <b>ci chiamiamo</b></td></tr><tr><td>tu <b>ti chiami</b></td><td>voi <b>vi chiamate</b></td></tr><tr><td>lui/lei/Lei <b>si chiama</b></td><td>loro <b>si chiamano</b></td></tr></table>
<p><i>Come ti chiami? – Mi chiamo Anna. / Come si chiama (Lei)? – Mi chiamo Paolo Rossi.</i></p>

<h3>5. Du oder Sie: tu / Lei</h3>
<table><tr><th>informell (tu)</th><th>formell (Lei)</th></tr>
<tr><td>Ciao! Come stai?</td><td>Buongiorno! Come sta?</td></tr>
<tr><td>Come ti chiami?</td><td>Come si chiama?</td></tr>
<tr><td>Di dove sei?</td><td>Di dov'è?</td></tr>
<tr><td>Scusa</td><td>Scusi</td></tr></table>
<p>Mit <b>Lei</b> steht das Verb in der 3. Person Singular, auch wenn man mit einem Mann spricht.</p>

<h3>6. Herkunft und Nationalität</h3>
<p><i>Di dove sei? – Sono di Berna. / Sono svizzera.</i> Nationalitätsadjektive auf <b>-o/-a</b> ändern sich nach dem Geschlecht, die auf <b>-e</b> nicht:</p>
<table><tr><td>italiano / italiana</td><td>svizzero / svizzera</td><td>tedesco / tedesca</td><td>spagnolo / spagnola</td></tr>
<tr><td>francese</td><td>inglese</td><td>portoghese</td><td>cinese</td></tr></table>
<p>Länder mit Artikel: <i>la Svizzera, l'Italia, la Germania, la Francia, l'Austria, la Spagna, l'Inghilterra</i>. Nationalitäten schreibt man klein.</p>

<h3>7. Fragen stellen</h3>
<p>Im Italienischen ändert sich bei Fragen die Wortstellung nicht, nur die Stimme geht am Ende hoch: <i>Sei di Milano? – Sì. / No, sono di Torino.</i> Fragewörter: <b>come</b> (wie), <b>chi</b> (wer), <b>di dove</b> (woher).</p>
<p>Verneinung: <b>non</b> steht direkt vor dem Verb: <i>Non sono italiana.</i></p>`,
vocab:[["ciao","hallo / tschüss (informell)"],["buongiorno","guten Tag / guten Morgen"],["buonasera","guten Abend"],["buonanotte","gute Nacht"],["salve","hallo (neutral)"],["arrivederci","auf Wiedersehen"],["a presto","bis bald"],["a domani","bis morgen"],["a dopo","bis später"],["come stai?","wie geht es dir?"],["come sta?","wie geht es Ihnen?"],["come va?","wie läuft's?"],["bene","gut"],["benissimo","sehr gut"],["così così","so lala"],["male","schlecht"],["non c'è male","nicht schlecht"],["e tu?","und du?"],["e Lei?","und Sie?"],["grazie","danke"],["grazie mille","vielen Dank"],["prego","bitte (Antwort auf danke)"],["per favore","bitte (Bitte)"],["scusa","Entschuldigung (du)"],["scusi","Entschuldigung (Sie)"],["mi dispiace","es tut mir leid"],["piacere","freut mich"],["piacere di conoscerti","freut mich, dich kennenzulernen"],["mi chiamo…","ich heisse…"],["come ti chiami?","wie heisst du?"],["come si chiama?","wie heissen Sie? / wie heisst er/sie?"],["questo è…","das ist… (m.)"],["questa è…","das ist… (w.)"],["di dove sei?","woher kommst du?"],["sono di…","ich bin aus…"],["svizzero / svizzera","Schweizer / Schweizerin"],["italiano / italiana","Italiener / Italienerin"],["tedesco / tedesca","Deutscher / Deutsche"],["francese","Franzose / Französin"],["inglese","Engländer / Engländerin"],["spagnolo / spagnola","Spanier / Spanierin"],["austriaco / austriaca","Österreicher / Österreicherin"],["la Svizzera","die Schweiz"],["l'Italia","Italien"],["la Germania","Deutschland"],["la Francia","Frankreich"],["l'Austria","Österreich"],["il signore","der Herr"],["la signora","die Frau / Dame"],["il ragazzo","der Junge / junger Mann"],["la ragazza","das Mädchen / junge Frau"],["l'amico","der Freund"],["l'amica","die Freundin"],["lo studente","der Student / Schüler"],["la studentessa","die Studentin / Schülerin"],["l'insegnante","der/die Lehrer/in"],["la lingua","die Sprache"],["parlare","sprechen"],["capire","verstehen"],["ripetere","wiederholen"],["non capisco","ich verstehe nicht"],["come si dice…?","wie sagt man…?"],["come si scrive?","wie schreibt man das?"],["cosa significa…?","was bedeutet…?"],["più lentamente, per favore","langsamer, bitte"],["può ripetere?","können Sie wiederholen?"],["sì","ja"],["no","nein"],["e","und"],["anche","auch"],["ma","aber"],["o","oder"]],
ex:[["Io ___ di Zurigo.","sono",["sei","è","siamo"],"essere: io sono."],
["Tu ___ italiana?","sei",["sono","è","siete"],"essere: tu sei."],
["Marco ___ di Napoli.","è",["sei","sono","siete"],"3. Person Singular: è (mit Akzent, ohne Akzent heisst «e» und)."],
["Noi ___ svizzeri.","siamo",["siete","sono","sei"],"noi siamo."],
["Voi ___ studenti?","siete",["siamo","sono","sei"],"voi siete."],
["Loro ___ tedeschi.","sono",["siete","è","siamo"],"loro sono (gleiche Form wie io sono)."],
["Come ___ chiami?","ti",["mi","si","ci"],"tu ti chiami."],
["___ chiamo Anna.","Mi",["Ti","Si","Ci"],"io mi chiamo."],
["Lui ___ chiama Luca.","si",["mi","ti","ci"],"lui si chiama."],
["Formell: «Come ___?»","sta",["stai","state","sto"],"Mit Lei: 3. Person Singular → Come sta?"],
["Maria è ___.","italiana",["italiano","italiane","italiani"],"Weiblich Singular → -a."],
["Pierre è ___.","francese",["francesa","francesi","franceso"],"Adjektive auf -e haben nur eine Form im Singular."],
["«Woher kommst du?» heisst…","Di dove sei?",["Dove sei?","Di dove è?","Dove vai?"],"di dove + essere."],
["Wie antwortet man auf «grazie»?","prego",["per favore","piacere","scusi"],"prego = bitte, gern geschehen."],
["Scusi, non ___.","capisco",["capisci","capire","capisce"],"io capisco."],
["Formell Entschuldigung sagen:","Scusi",["Scusa","Ciao","Prego"],"Scusi (Lei) / Scusa (tu)."],
["Sono ___ Berna.","di",["da","a","in"],"Herkunft: essere di + Stadt."],
["«Guten Abend» heisst…","buonasera",["buongiorno","buonanotte","arrivederci"],"buonasera ab dem späten Nachmittag; buonanotte nur beim Schlafengehen/Abschied spät."]],
read:{title:"Due e-mail",text:"Ciao! Mi chiamo Giulia, sono italiana, di Bologna. Sono studentessa. Parlo italiano, inglese e un po' di tedesco. E tu, di dove sei?\n\nBuongiorno, signora Rossi. Mi chiamo Roberto Ferri e sono l'insegnante di italiano. Il corso è il lunedì sera. A presto!",
qs:[["Woher kommt Giulia?","Aus Bologna",["Aus Rom","Aus Mailand","Aus Bern"]],["Welche Sprachen spricht Giulia?","Italienisch, Englisch, etwas Deutsch",["Nur Italienisch","Italienisch und Französisch","Deutsch und Spanisch"]],["Wer ist Roberto Ferri?","Der Italienischlehrer",["Ein Student","Giulias Bruder","Ein Arzt"]],["Wann ist der Kurs?","Montagabend",["Dienstagmorgen","Am Wochenende","Jeden Tag"]]]},
listen:[["Ciao, mi chiamo Marco.","Hallo, ich heisse Marco."],["Di dove sei?","Woher kommst du?"],["Sono svizzera, di Berna.","Ich bin Schweizerin, aus Bern."],["Come sta, signora?","Wie geht es Ihnen, Frau…?"],["Piacere, io sono Anna.","Freut mich, ich bin Anna."],["Scusi, non capisco.","Entschuldigung, ich verstehe nicht."]],
dialog:{text:"– Buongiorno, io sono Paolo Bianchi.\n– Piacere, Laura Keller. Lei è italiano?\n– Sì, sono di Firenze. E Lei, di dov'è?\n– Sono svizzera, di Lucerna.",
qs:[["Woher kommt Paolo?","Aus Florenz",["Aus Luzern","Aus Rom","Aus Bern"]],["Woher kommt Laura?","Aus Luzern",["Aus Florenz","Aus Zürich","Aus Mailand"]],["Wie sprechen die beiden miteinander?","Formell (Lei)",["Informell (tu)","Auf Deutsch","Mit Vornamen"]]]},
write:{p:"Schreib eine kurze Vorstellung (3–4 Sätze): Begrüssung, Name, Herkunft, Sprache(n), Verabschiedung.",req:[["Begrüssung",/\b(ciao|buongiorno|buonasera|salve)\b/i],["Name",/mi chiamo|\bsono\s+[A-Z][a-zà-ù]+/i],["Herkunft",/\b(sono di|sono svizzer|sono italian|sono tedesc|vengo da)/i],["Sprache",/\b(parlo|italiano|tedesco|inglese|francese)\b/i],["Verabschiedung",/\b(a presto|ciao|arrivederci|a domani)\b/i]],m:"Ciao! Mi chiamo Leandra. Sono svizzera. Abito a Rorschach, in Svizzera. Parlo tedesco e un po' di italiano. A presto!"},
speak:{p:"Stell dich vor: Name, Herkunft, Nationalität, Sprachen. Dann frag dein Gegenüber dasselbe.",cues:["Ciao / Buongiorno","Mi chiamo…","Sono di… / Sono svizzera","Parlo…","E tu? Come ti chiami? Di dove sei?"],m:"Buongiorno! Mi chiamo Leandra. Sono svizzera. Abito a Rorschach, in Svizzera. Parlo tedesco, inglese e un po' di italiano. E tu, come ti chiami? Di dove sei?"}},

/* ================= LEKTION 2 ================= */
{id:2,title:"Numeri e dati personali",sub:"Zahlen, Alter, Beruf, Formulare",
goals:["Zahlen bis 1000","Alter, Telefonnummer, Adresse angeben","über Beruf und Arbeitsort sprechen","ein Formular ausfüllen (Prüfungsaufgabe bei fide)"],
grammar:`
<h3>1. Zahlen 0–20</h3>
<table><tr><td>0 zero</td><td>1 uno</td><td>2 due</td><td>3 tre</td><td>4 quattro</td><td>5 cinque</td><td>6 sei</td></tr>
<tr><td>7 sette</td><td>8 otto</td><td>9 nove</td><td>10 dieci</td><td>11 undici</td><td>12 dodici</td><td>13 tredici</td></tr>
<tr><td>14 quattordici</td><td>15 quindici</td><td>16 sedici</td><td>17 diciassette</td><td>18 diciotto</td><td>19 diciannove</td><td>20 venti</td></tr></table>
<h3>2. Zahlen 21–1000</h3>
<table><tr><td>20 venti</td><td>30 trenta</td><td>40 quaranta</td><td>50 cinquanta</td><td>60 sessanta</td></tr>
<tr><td>70 settanta</td><td>80 ottanta</td><td>90 novanta</td><td>100 cento</td><td>1000 mille</td></tr></table>
<p>Zusammensetzen: 21 vent<b>uno</b>, 22 ventidue, 23 ventitré, 28 vent<b>otto</b>, 31 trent<b>uno</b>, 38 trent<b>otto</b>, 45 quarantacinque, 99 novantanove.</p>
<ul><li>Vor <b>uno</b> und <b>otto</b> fällt der Endvokal weg: ventuno, ventotto, trentuno.</li>
<li><b>tre</b> bekommt am Ende einen Akzent: ventitré, trentatré.</li>
<li>101 centouno, 200 duecento, 350 trecentocinquanta, 2000 duemila (mille → mila im Plural).</li></ul>
<h3>3. avere (haben)</h3>
<table><tr><td>io <b>ho</b></td><td>noi <b>abbiamo</b></td></tr><tr><td>tu <b>hai</b></td><td>voi <b>avete</b></td></tr><tr><td>lui/lei/Lei <b>ha</b></td><td>loro <b>hanno</b></td></tr></table>
<p>Das <b>h</b> ist stumm. Wichtige Wendungen mit avere: <i>ho 30 anni</i> (ich bin 30), <i>ho fame</i> (Hunger), <i>ho sete</i> (Durst), <i>ho freddo/caldo</i>, <i>ho fretta</i> (Eile), <i>ho bisogno di</i> (brauchen).</p>
<p><i>Quanti anni hai? – Ho trent'anni.</i> (trenta + anni → trent'anni, auch: ventun anni, quarant'anni)</p>
<h3>4. Beruf</h3>
<p><i>Che lavoro fai? / Che lavoro fa?</i> Antwort: <i>Sono</i> + Beruf (ohne Artikel) oder <i>Faccio</i> + il/la + Beruf.</p>
<p><i>Sono infermiera. Faccio l'impiegata. Lavoro in banca / in un ufficio / in ospedale / in una scuola.</i></p>
<p><i>Non lavoro: sono studente / sono in pensione (pensionato) / sono disoccupata.</i></p>
<h3>5. Regelmässige Verben auf -are: abitare, lavorare</h3>
<table><tr><td>io abit<b>o</b></td><td>noi abit<b>iamo</b></td></tr><tr><td>tu abit<b>i</b></td><td>voi abit<b>ate</b></td></tr><tr><td>lui/lei abit<b>a</b></td><td>loro abit<b>ano</b></td></tr></table>
<p><i>Dove abiti? – Abito a Zurigo, in via Roma 12. Lavoro a Berna.</i> Ortsangabe: <b>a</b> + Stadt, <b>in</b> + Land (in Svizzera), <b>in via/piazza</b> + Name.</p>
<h3>6. Formular (modulo)</h3>
<table><tr><td>nome</td><td>Vorname</td><td>cognome</td><td>Nachname</td></tr>
<tr><td>data di nascita</td><td>Geburtsdatum</td><td>luogo di nascita</td><td>Geburtsort</td></tr>
<tr><td>nazionalità</td><td>Nationalität</td><td>indirizzo</td><td>Adresse</td></tr>
<tr><td>via / numero</td><td>Strasse / Nr.</td><td>CAP</td><td>Postleitzahl</td></tr>
<tr><td>città</td><td>Stadt</td><td>telefono / cellulare</td><td>Telefon / Handy</td></tr>
<tr><td>e-mail</td><td>E-Mail (@ = chiocciola, . = punto)</td><td>firma</td><td>Unterschrift</td></tr>
<tr><td>stato civile</td><td>Zivilstand</td><td>professione</td><td>Beruf</td></tr></table>
<p>Telefonnummern sagt man in Zweier- oder Dreiergruppen oder Ziffer für Ziffer: <i>079 – 123 – 45 – 67: zero sette nove, uno due tre, quarantacinque, sessantasette.</i></p>`,
vocab:[["zero","null"],["uno","eins"],["due","zwei"],["tre","drei"],["quattro","vier"],["cinque","fünf"],["sei","sechs"],["sette","sieben"],["otto","acht"],["nove","neun"],["dieci","zehn"],["undici","elf"],["dodici","zwölf"],["tredici","dreizehn"],["quattordici","vierzehn"],["quindici","fünfzehn"],["sedici","sechzehn"],["diciassette","siebzehn"],["diciotto","achtzehn"],["diciannove","neunzehn"],["venti","zwanzig"],["ventuno","einundzwanzig"],["trenta","dreissig"],["quaranta","vierzig"],["cinquanta","fünfzig"],["sessanta","sechzig"],["settanta","siebzig"],["ottanta","achtzig"],["novanta","neunzig"],["cento","hundert"],["mille","tausend"],["il numero","die Nummer / Zahl"],["l'anno","das Jahr"],["quanti anni hai?","wie alt bist du?"],["ho trent'anni","ich bin dreissig"],["il nome","der Vorname"],["il cognome","der Nachname"],["la data di nascita","das Geburtsdatum"],["il luogo di nascita","der Geburtsort"],["nato / nata a…","geboren in…"],["l'indirizzo","die Adresse"],["la via","die Strasse"],["la piazza","der Platz"],["il CAP","die Postleitzahl"],["la città","die Stadt"],["il paese","das Land / das Dorf"],["il telefono","das Telefon"],["il cellulare","das Handy"],["il numero di telefono","die Telefonnummer"],["l'e-mail","die E-Mail"],["la chiocciola","das @-Zeichen"],["il punto","der Punkt"],["la firma","die Unterschrift"],["il modulo","das Formular"],["compilare","ausfüllen"],["lo stato civile","der Zivilstand"],["sposato / sposata","verheiratet"],["single","ledig / Single"],["l'età","das Alter"],["il lavoro","die Arbeit"],["la professione","der Beruf"],["che lavoro fai?","was arbeitest du?"],["l'impiegato / l'impiegata","der/die Angestellte"],["il medico","der Arzt / die Ärztin"],["l'infermiere / l'infermiera","der Pfleger / die Pflegerin"],["il commesso / la commessa","der Verkäufer / die Verkäuferin"],["il cuoco / la cuoca","der Koch / die Köchin"],["il cameriere / la cameriera","der Kellner / die Kellnerin"],["l'operaio / l'operaia","der Arbeiter / die Arbeiterin"],["l'ingegnere","der Ingenieur / die Ingenieurin"],["l'avvocato","der Anwalt / die Anwältin"],["l'architetto","der Architekt / die Architektin"],["il pensionato / la pensionata","der Rentner / die Rentnerin"],["la casalinga","die Hausfrau"],["disoccupato / disoccupata","arbeitslos"],["il poliziotto","der Polizist"],["l'autista","der Fahrer / die Fahrerin"],["il parrucchiere / la parrucchiera","der Friseur / die Friseurin"],["l'ufficio","das Büro"],["la fabbrica","die Fabrik"],["l'ospedale","das Spital"],["il negozio","das Geschäft"],["la scuola","die Schule"],["l'università","die Universität"],["la banca","die Bank"],["abitare","wohnen"],["lavorare","arbeiten"],["studiare","studieren / lernen"],["avere","haben"],["quanto / quanti","wie viel / wie viele"],["dove","wo"],["ho fame","ich habe Hunger"],["ho sete","ich habe Durst"],["ho bisogno di…","ich brauche…"],["ho fretta","ich habe es eilig"]],
ex:[["Io ___ 25 anni.","ho",["sono","hai","ha"],"Alter mit avere: ho … anni."],
["Quanti anni ___ (tu)?","hai",["sei","ha","hanno"],"tu hai."],
["Maria ___ due figli.","ha",["hai","è","hanno"],"lei ha."],
["Noi ___ fame.","abbiamo",["avete","hanno","siamo"],"noi abbiamo; «Hunger haben» = avere fame."],
["Loro ___ un cane.","hanno",["hano","avete","ha"],"loro hanno (doppeltes n)."],
["«17» heisst…","diciassette",["diciasette","settedici","dicisette"],"diciassette mit doppeltem s."],
["«28» heisst…","ventotto",["ventiotto","ventootto","venti otto"],"Vor otto fällt das i weg: ventotto."],
["«33» heisst…","trentatré",["trentatre","tretitre","trentitré"],"tre am Ende bekommt einen Akzent."],
["«65» heisst…","sessantacinque",["settantacinque","sessantacinco","sesantacinque"],"60 = sessanta."],
["«100» heisst…","cento",["cente","mille","centi"],"cento; 1000 = mille."],
["Dove ___ (tu)? – A Berna.","abiti",["abito","abita","abitate"],"-are: tu → -i."],
["Noi ___ in un ufficio.","lavoriamo",["lavorate","lavorano","lavoro"],"noi → -iamo."],
["Che lavoro ___ (Lei)?","fa",["fai","fate","faccio"],"Formell: 3. Person → fa."],
["Sono ___. (Beruf, weiblich)","infermiera",["infermieri","la infermiera","infermiere"],"Nach essere steht der Beruf ohne Artikel."],
["Abito ___ via Garibaldi 5.","in",["a","da","su"],"in via + Name."],
["Lavoro ___ Milano.","a",["in","di","da"],"a + Stadt."],
["Lavoro ___ Svizzera.","in",["a","di","da"],"in + Land."],
["Das @-Zeichen heisst…","chiocciola",["punto","linea","cappa"],"chiocciola = Schnecke."]],
read:{title:"Un modulo d'iscrizione",text:"SCUOLA DI LINGUE «PAROLE» – Modulo d'iscrizione\nNome: Leandra   Cognome: Rossi\nData di nascita: 01/06/1990   Luogo di nascita: Rorschach\nNazionalità: svizzera   Professione: account manager\nIndirizzo: 9400 Rorschach\nTelefono: 079 345 67 89   E-mail: l.rossi@example.com\nCorso: Italiano A1, martedì e giovedì, ore 18.00–19.30\nFirma: L. Rossi",
qs:[["Wo ist Leandra geboren?","In Rorschach",["In Zürich","In Lugano","In Mailand"]],["Was ist ihr Beruf?","Account Manager",["Lehrerin","Ärztin","Studentin"]],["Wann findet der Kurs statt?","Dienstag und Donnerstag, 18.00–19.30",["Montag und Mittwoch","Samstagmorgen","Jeden Abend"]],["Wie lautet die Postleitzahl?","9400",["8008","3000","6900"]]]},
listen:[["Ho ventotto anni.","Ich bin 28."],["Il mio numero è zero sette nove, due tre quattro, cinque sei, sette otto.","Meine Nummer ist 079 234 56 78."],["Abito a Lugano, in via Roma quindici.","Ich wohne in Lugano, Via Roma 15."],["Sono impiegata, lavoro in banca.","Ich bin Angestellte, ich arbeite bei einer Bank."],["Quanti anni ha tua sorella?","Wie alt ist deine Schwester?"],["Il corso costa trecento franchi.","Der Kurs kostet 300 Franken."]],
dialog:{text:"– Buongiorno, vorrei iscrivermi al corso di italiano.\n– Certo. Come si chiama?\n– Sara Meier.\n– Quanti anni ha?\n– Trentaquattro.\n– Che lavoro fa?\n– Sono infermiera, lavoro all'ospedale di Basilea.\n– Il suo numero di telefono?\n– Zero sette sei, quattro cinque sei, dodici, trentatré.",
qs:[["Wie alt ist Sara?","34",["24","43","33"]],["Was arbeitet Sara?","Pflegefachfrau",["Lehrerin","Verkäuferin","Köchin"]],["Wie lautet ihre Nummer?","076 456 12 33",["079 456 12 33","076 456 21 33","076 465 12 33"]]]},
write:{p:"Fülle das Formular aus (eine Angabe pro Zeile): Nome, Cognome, Età, Nazionalità, Città, Professione, Telefono, E-mail. Schreib danach einen Satz: «Vorrei iscrivermi al corso …».",req:[["Nome / Cognome",/\b(nome|cognome)\b.*\S/i],["Età",/(età|\banni\b)/i],["Nazionalità",/\bnazionalit/i],["Professione",/\b(professione|lavoro)\b/i],["Telefono",/\b(telefono|cellulare)\b.*\d/i],["Anmeldesatz",/vorrei\s+iscrivermi/i]],m:"Nome: Leandra\nCognome: Rossi\nEtà: 40 anni\nNazionalità: svizzera\nCittà: Rorschach\nProfessione: account manager\nTelefono: 079 123 45 67\nE-mail: leandra@mail.ch\nVorrei iscrivermi al corso di italiano A1."},
speak:{p:"Du meldest dich an einer Sprachschule an. Antworte auf: Come si chiama? Quanti anni ha? Dove abita? Che lavoro fa? Il suo numero di telefono?",cues:["Mi chiamo…","Ho … anni","Abito a…, in…","Lavoro come… / Lavoro in…","Il mio numero è…"],m:"Mi chiamo Leandra Rossi. Ho quarant'anni. Abito a Rorschach, in Svizzera. Lavoro come account manager. Il mio numero è zero sette nove, uno due tre, quarantacinque, sessantasette."}},

/* ================= LEKTION 3 ================= */
{id:3,title:"Articoli, nomi e oggetti",sub:"Geschlecht, Plural, bestimmter und unbestimmter Artikel",
goals:["Geschlecht und Plural der Nomen bilden","alle Artikel richtig verwenden","Gegenstände benennen und fragen, was etwas ist","questo / questa verwenden"],
grammar:`
<h3>1. Geschlecht der Nomen</h3>
<table><tr><th>Endung</th><th>Geschlecht</th><th>Beispiele</th></tr>
<tr><td>-o</td><td>meist männlich</td><td>il libro, il tavolo (Ausnahme: la mano, la foto, la radio, la moto)</td></tr>
<tr><td>-a</td><td>meist weiblich</td><td>la casa, la penna (Ausnahme: il problema, il cinema, il papà)</td></tr>
<tr><td>-e</td><td>männlich oder weiblich – lernen!</td><td>il giornale, la chiave, il nome, la notte</td></tr>
<tr><td>-ione</td><td>weiblich</td><td>la stazione, la lezione, la colazione</td></tr>
<tr><td>-ore</td><td>männlich</td><td>il fiore, il dottore, il colore</td></tr>
<tr><td>Fremdwörter / Akzent</td><td>unveränderlich</td><td>il bar, lo sport, il computer, il caffè, la città</td></tr></table>
<h3>2. Plural</h3>
<table><tr><td>-o → -i</td><td>libro → libri</td></tr><tr><td>-a → -e</td><td>casa → case</td></tr><tr><td>-e → -i</td><td>chiave → chiavi, giornale → giornali</td></tr>
<tr><td>-ca/-ga → -che/-ghe</td><td>amica → amiche, riga → righe</td></tr><tr><td>-co/-go → -chi/-ghi (meist)</td><td>parco → parchi, albergo → alberghi (aber: amico → amici)</td></tr>
<tr><td>-cia/-gia → -ce/-ge (wenn Konsonant davor)</td><td>arancia → arance, spiaggia → spiagge</td></tr>
<tr><td>Akzent / Fremdwort / Abkürzung</td><td>la città → le città, il bar → i bar, la foto → le foto</td></tr>
<tr><td>unregelmässig</td><td>l'uomo → gli uomini, la mano → le mani, l'uovo → le uova</td></tr></table>
<h3>3. Bestimmter Artikel (der, die, das)</h3>
<table><tr><th></th><th>Singular</th><th>Plural</th><th>wann</th></tr>
<tr><td rowspan="3">männlich</td><td><b>il</b> libro</td><td><b>i</b> libri</td><td>vor Konsonant</td></tr>
<tr><td><b>lo</b> zaino, lo studente, lo sport, lo gnocco, lo psicologo, lo yogurt</td><td><b>gli</b> zaini</td><td>vor s+Konsonant, z, gn, ps, y</td></tr>
<tr><td><b>l'</b>amico</td><td><b>gli</b> amici</td><td>vor Vokal</td></tr>
<tr><td rowspan="2">weiblich</td><td><b>la</b> casa</td><td><b>le</b> case</td><td>vor Konsonant</td></tr>
<tr><td><b>l'</b>amica</td><td><b>le</b> amiche</td><td>vor Vokal</td></tr></table>
<h3>4. Unbestimmter Artikel (ein, eine)</h3>
<table><tr><td><b>un</b> libro, un amico</td><td>männlich, vor Konsonant oder Vokal (kein Apostroph!)</td></tr>
<tr><td><b>uno</b> zaino, uno studente, uno sport</td><td>männlich, vor s+Konsonant, z, gn, ps, y</td></tr>
<tr><td><b>una</b> casa</td><td>weiblich, vor Konsonant</td></tr>
<tr><td><b>un'</b>amica</td><td>weiblich, vor Vokal (mit Apostroph)</td></tr></table>
<p>Merke: <i>un amico</i> (m.) ohne Apostroph, <i>un'amica</i> (w.) mit Apostroph.</p>
<h3>5. Fragen und Antworten über Dinge</h3>
<p><i>Che cos'è? – È un libro. / È una chiave. Che cosa sono? – Sono chiavi.</i></p>
<p><i>Chi è? – È Marco, un amico.</i></p>
<h3>6. questo / questa (dieser, diese, dies)</h3>
<table><tr><td>questo libro</td><td>questi libri</td></tr><tr><td>questa casa</td><td>queste case</td></tr></table>
<p><i>Questo è il mio telefono. Questa è Anna. Questi sono i miei amici.</i> Vor Vokal auch <i>quest'</i>: quest'anno, quest'amica.</p>
<h3>7. Adjektive der Grösse (Vorschau)</h3>
<p><i>grande – piccolo, nuovo – vecchio, bello – brutto</i>: Sie passen sich dem Nomen an (Lektion 4).</p>`,
vocab:[["il libro","das Buch"],["il quaderno","das Heft"],["la penna","der Kugelschreiber"],["la matita","der Bleistift"],["lo zaino","der Rucksack"],["la borsa","die Tasche"],["il tavolo","der Tisch"],["la sedia","der Stuhl"],["la porta","die Tür"],["la finestra","das Fenster"],["la chiave","der Schlüssel"],["il telefono","das Telefon"],["il computer","der Computer"],["l'orologio","die Uhr"],["gli occhiali","die Brille"],["la macchina","das Auto"],["la bicicletta","das Fahrrad"],["la casa","das Haus"],["a casa","zu Hause"],["la stanza","das Zimmer"],["la foto","das Foto"],["il giornale","die Zeitung"],["la lettera","der Brief"],["il foglio","das Blatt Papier"],["la cosa","die Sache / das Ding"],["l'uomo (gli uomini)","der Mann (die Männer)"],["la donna","die Frau"],["il bambino","das Kind / der Junge"],["la bambina","das Mädchen"],["il cane","der Hund"],["il gatto","die Katze"],["l'albero","der Baum"],["il fiore","die Blume"],["la nazione","die Nation"],["la stazione","der Bahnhof"],["la lezione","die Lektion / der Unterricht"],["lo zucchero","der Zucker"],["lo sport","der Sport"],["lo spagnolo","der Spanier / das Spanische"],["il problema","das Problem"],["la mano (le mani)","die Hand (die Hände)"],["l'uovo (le uova)","das Ei (die Eier)"],["il bar","die Bar / das Café"],["l'autobus","der Bus"],["la radio","das Radio"],["la televisione","das Fernsehen"],["il letto","das Bett"],["la lampada","die Lampe"],["il colore","die Farbe"],["il nome","der Name"],["la notte","die Nacht"],["il mare","das Meer"],["il sole","die Sonne"],["il fiume","der Fluss"],["grande","gross"],["piccolo / piccola","klein"],["nuovo / nuova","neu"],["vecchio / vecchia","alt"],["bello / bella","schön"],["brutto / brutta","hässlich"],["che cos'è?","was ist das?"],["chi è?","wer ist das?"],["questo / questa","dieser / diese"],["c'è","es gibt (Sg.)"],["ci sono","es gibt (Pl.)"]],
ex:[["___ libro","il",["lo","la","l'"],"il vor Konsonant (m.)."],
["___ zaino","lo",["il","l'","la"],"lo vor z."],
["___ studente","lo",["il","l'","le"],"lo vor s+Konsonant."],
["___ amico","l'",["il","lo","la"],"l' vor Vokal."],
["___ amica","l'",["la","lo","le"],"l' vor Vokal, auch weiblich."],
["___ casa","la",["il","le","lo"],"la (w. Sg.)."],
["Plural: ___ libri","i",["gli","le","il"],"il → i."],
["Plural: ___ zaini","gli",["i","le","lo"],"lo → gli."],
["Plural: ___ amici","gli",["i","le","l'"],"l' (m.) → gli."],
["Plural: ___ amiche","le",["gli","i","la"],"l' (w.) → le."],
["___ amico (ein)","un",["un'","uno","una"],"un ohne Apostroph (m.)."],
["___ amica (eine)","un'",["un","una","uno"],"un' mit Apostroph (w.)."],
["___ sport (ein)","uno",["un","una","un'"],"uno vor s+Konsonant."],
["___ chiave (eine)","una",["un","uno","un'"],"chiave ist weiblich."],
["Plural von «la casa»","le case",["le casi","la case","i case"],"-a → -e."],
["Plural von «la chiave»","le chiavi",["le chiave","le chiavie","i chiavi"],"-e → -i."],
["Plural von «l'amica»","le amiche",["le amice","le amica","gli amici"],"-ca → -che."],
["Plural von «la città»","le città",["le cittàe","le citte","le cittài"],"Wörter mit Akzent sind unveränderlich."],
["Plural von «l'uomo»","gli uomini",["gli uomi","i uomini","gli uomos"],"unregelmässig."],
["«la stazione» ist…","weiblich (-ione)",["männlich","unveränderlich","Plural"],"Nomen auf -ione sind weiblich."],
["«il problema» ist…","männlich trotz -a",["weiblich","Plural","unveränderlich"],"Griechische Wörter auf -ma sind männlich."],
["___ è un telefono. (dies)","Questo",["Questa","Questi","Queste"],"telefono ist männlich → questo."],
["___ sono le chiavi.","Queste",["Questi","Questa","Questo"],"chiavi ist w. Pl. → queste."]],
read:{title:"Nella borsa di Anna",text:"Nella borsa di Anna ci sono molte cose: un telefono, le chiavi di casa, un libro, due penne e una matita. C'è anche un piccolo quaderno con i numeri di telefono degli amici. Non c'è il computer: il computer è a casa, sul tavolo. Anna ha anche gli occhiali nuovi, ma oggi sono nella macchina.",
qs:[["Was ist NICHT in Annas Tasche?","Der Computer",["Das Telefon","Die Schlüssel","Das Buch"]],["Wie viele Stifte hat sie?","Zwei Kugelschreiber und einen Bleistift",["Einen Kugelschreiber","Drei Bleistifte","Keine"]],["Was steht im Heft?","Telefonnummern der Freunde",["Rezepte","Adressen","Italienische Wörter"]],["Wo ist die Brille?","Im Auto",["Zu Hause","In der Tasche","Auf dem Tisch"]]]},
listen:[["Che cos'è? È una chiave.","Was ist das? Es ist ein Schlüssel."],["Ho un libro e due quaderni.","Ich habe ein Buch und zwei Hefte."],["Gli studenti sono in classe.","Die Studenten sind im Klassenzimmer."],["Questa è la mia macchina nuova.","Das ist mein neues Auto."],["Dove sono gli occhiali?","Wo ist die Brille?"],["Il telefono è sul tavolo.","Das Telefon liegt auf dem Tisch."]],
dialog:{text:"– Scusa, questa è la tua borsa?\n– No, la mia borsa è nera. Questa è di Marta.\n– E queste chiavi?\n– Sì, le chiavi sono mie, grazie!",
qs:[["Wessen Tasche ist es?","Martas",["Die der Sprecherin","Marcos","Niemandes"]],["Welche Farbe hat die Tasche der Sprecherin?","Schwarz",["Rot","Weiss","Blau"]],["Wem gehören die Schlüssel?","Der Sprecherin",["Marta","Dem Lehrer","Niemandem"]]]},
write:{p:"Beschreib, was in deiner Tasche oder auf deinem Schreibtisch ist (4–5 Sätze). Verwende c'è / ci sono, Artikel und Plural.",req:[["c'è",/c'è/i],["ci sono",/\bci sono\b/i],["unbestimmter Artikel",/\b(un|una|uno|un')\s/i],["Plural",/\b(le|gli|i)\s+\w+[ie]\b/i],["Verneinung",/\bnon\b/i]],m:"Nella mia borsa c'è un telefono. Ci sono anche le chiavi e un libro. C'è una penna rossa. C'è anche un quaderno piccolo. Non c'è il computer: il computer è a casa."},
speak:{p:"Zeig auf fünf Gegenstände im Raum und sag, was sie sind, mit Artikel. Dann sag, was es im Raum gibt und was nicht.",cues:["Questo è un… / Questa è una…","Che cos'è? È…","Ci sono…","Non c'è…"],m:"Questo è un tavolo. Questa è una sedia. Questo è il mio telefono. In questa stanza ci sono due finestre e una porta. C'è un computer, ma non c'è la televisione."}},

/* ================= LEKTION 4 ================= */
{id:4,title:"La famiglia e le persone",sub:"Familie, Possessiva, Adjektive, Personen beschreiben",
goals:["über die Familie sprechen","Possessivbegleiter verwenden (mio, tuo, suo…)","Adjektive angleichen","Aussehen und Charakter beschreiben (mündliche Prüfungsaufgabe)"],
grammar:`
<h3>1. Possessivbegleiter (mein, dein…)</h3>
<table><tr><th></th><th>m. Sg.</th><th>w. Sg.</th><th>m. Pl.</th><th>w. Pl.</th></tr>
<tr><td>mein</td><td>il mio</td><td>la mia</td><td>i miei</td><td>le mie</td></tr>
<tr><td>dein</td><td>il tuo</td><td>la tua</td><td>i tuoi</td><td>le tue</td></tr>
<tr><td>sein / ihr / Ihr</td><td>il suo</td><td>la sua</td><td>i suoi</td><td>le sue</td></tr>
<tr><td>unser</td><td>il nostro</td><td>la nostra</td><td>i nostri</td><td>le nostre</td></tr>
<tr><td>euer</td><td>il vostro</td><td>la vostra</td><td>i vostri</td><td>le vostre</td></tr>
<tr><td>ihr (Pl.)</td><td>il loro</td><td>la loro</td><td>i loro</td><td>le loro</td></tr></table>
<ul><li>Der Possessivbegleiter richtet sich nach dem <b>Besitz</b>, nicht nach dem Besitzer: <i>Marco e <b>la sua</b> macchina</i> (sein Auto), <i>Anna e <b>il suo</b> cane</i> (ihr Hund).</li>
<li>Normalerweise steht der Artikel davor: <i>il mio libro, la tua casa, i nostri amici.</i></li>
<li><b>Ausnahme:</b> Bei Familienmitgliedern im <b>Singular</b> fällt der Artikel weg: <i>mia madre, tuo fratello, sua sorella, nostro padre.</i> Im Plural bleibt er: <i>i miei fratelli, le tue sorelle.</i> Bei <b>loro</b> bleibt er immer: <i>la loro madre.</i> Mit Koseformen oder Adjektiv bleibt er: <i>la mia mamma, il mio fratello piccolo.</i></li></ul>
<h3>2. Adjektive: Angleichung</h3>
<table><tr><th>Typ</th><th>m. Sg.</th><th>w. Sg.</th><th>m. Pl.</th><th>w. Pl.</th></tr>
<tr><td>4 Endungen</td><td>alt<b>o</b></td><td>alt<b>a</b></td><td>alt<b>i</b></td><td>alt<b>e</b></td></tr>
<tr><td>2 Endungen</td><td>grand<b>e</b></td><td>grand<b>e</b></td><td>grand<b>i</b></td><td>grand<b>i</b></td></tr></table>
<p>Das Adjektiv steht meist <b>nach</b> dem Nomen: <i>una ragazza simpatica, i capelli lunghi.</i> Einige kurze Adjektive stehen oft davor: <i>bello, brutto, grande, piccolo, nuovo, vecchio, giovane, buono.</i></p>
<p>Gemischte Gruppe (m.+w.) → männlicher Plural: <i>Marco e Anna sono simpatic<b>i</b>.</i></p>
<p>Adjektive auf -co/-go: <i>tedesco → tedeschi, lungo → lunghi</i>; aber <i>simpatico → simpatici</i>.</p>
<h3>3. Personen beschreiben</h3>
<p><b>Aussehen:</b> <i>Com'è tua sorella? – È alta e magra. Ha i capelli lunghi e biondi. Ha gli occhi azzurri. Porta gli occhiali.</i></p>
<p><b>Charakter:</b> <i>È simpatica, allegra e un po' timida.</i></p>
<p><b>Alter / Zivilstand:</b> <i>Ha 40 anni. È sposata, ha due figli. Mio fratello è single.</i></p>
<h3>4. Fragen: com'è? / chi è? / quanti?</h3>
<p><i>Com'è il tuo ragazzo? Chi è questa ragazza? Quanti fratelli hai? – Ho un fratello e due sorelle. / Non ho fratelli, sono figlia unica.</i></p>
<h3>5. molto / un po'</h3>
<p><i>molto</i> vor einem Adjektiv ist unveränderlich: <i>È molto simpatica. Sono molto alti.</i> <i>un po'</i> = ein bisschen: <i>È un po' timido.</i></p>`,
vocab:[["la famiglia","die Familie"],["la madre","die Mutter"],["la mamma","die Mama"],["il padre","der Vater"],["il papà","der Papa"],["i genitori","die Eltern"],["il figlio","der Sohn"],["la figlia","die Tochter"],["i figli","die Kinder (Söhne und Töchter)"],["il fratello","der Bruder"],["la sorella","die Schwester"],["il nonno","der Grossvater"],["la nonna","die Grossmutter"],["i nonni","die Grosseltern"],["lo zio","der Onkel"],["la zia","die Tante"],["il cugino / la cugina","der Cousin / die Cousine"],["il marito","der Ehemann"],["la moglie","die Ehefrau"],["il nipote / la nipote","der Enkel, Neffe / die Enkelin, Nichte"],["il ragazzo / la ragazza","der Freund / die Freundin (Partner/in)"],["il fidanzato / la fidanzata","der feste Freund / die feste Freundin (auch: Verlobte/r)"],["figlio unico / figlia unica","Einzelkind"],["i parenti","die Verwandten"],["i capelli","die Haare"],["gli occhi","die Augen"],["alto / alta","gross (Person)"],["basso / bassa","klein (Person)"],["magro / magra","schlank, dünn"],["grasso / grassa","dick"],["giovane","jung"],["anziano / anziana","alt (Person)"],["biondo / bionda","blond"],["castano / castana","braunhaarig"],["lungo / lunga","lang"],["corto / corta","kurz"],["azzurro / azzurra","hellblau"],["verde","grün"],["nero / nera","schwarz"],["grigio / grigia","grau"],["simpatico / simpatica","sympathisch"],["antipatico / antipatica","unsympathisch"],["gentile","freundlich"],["allegro / allegra","fröhlich"],["triste","traurig"],["timido / timida","schüchtern"],["intelligente","intelligent"],["sportivo / sportiva","sportlich"],["bravo / brava","tüchtig, gut (in etwas)"],["divertente","lustig"],["serio / seria","ernst"],["sposato / sposata","verheiratet"],["divorziato / divorziata","geschieden"],["vedovo / vedova","verwitwet"],["portare gli occhiali","eine Brille tragen"],["com'è?","wie ist er/sie?"],["molto","sehr"],["un po'","ein bisschen"],["abbastanza","ziemlich"],["la persona","die Person"],["la gente","die Leute"],["il vicino / la vicina","der Nachbar / die Nachbarin"],["il collega / la collega","der Kollege / die Kollegin"]],
ex:[["___ madre si chiama Rita. (meine)","Mia",["La mia","Mio","Le mie"],"Familie Singular: kein Artikel."],
["___ fratelli abitano a Roma. (meine)","I miei",["Miei","Le mie","I mie"],"Plural: Artikel bleibt."],
["Questo è ___ libro. (mein)","il mio",["mio","la mia","i miei"],"Kein Familienmitglied → mit Artikel."],
["Marco e ___ sorella sono gentili. (seine)","sua",["suo","la sua","sue"],"sorella ist weiblich → sua; Singular Familie ohne Artikel."],
["Anna e ___ cane. (ihr Hund)","il suo",["la sua","suo","il sua"],"cane ist männlich → il suo, egal ob Besitzerin."],
["___ madre è italiana. (ihre, Plural: loro)","La loro",["Loro","Le loro","Il loro"],"Bei loro steht der Artikel immer."],
["Le ___ amiche sono simpatiche. (deine)","tue",["tuoi","tua","tuo"],"w. Pl. → le tue."],
["I ___ genitori sono in pensione. (unsere)","nostri",["nostre","nostro","nostra"],"m. Pl. → i nostri."],
["Mia sorella è ___.","alta",["alto","alti","alte"],"w. Sg. → -a."],
["I miei fratelli sono ___.","simpatici",["simpatico","simpatiche","simpatica"],"m. Pl. → -i."],
["Le mie cugine sono ___.","intelligenti",["intelligente","intelligenta","intelligentes"],"Adjektiv auf -e: Plural -i für beide Geschlechter."],
["Luca ha i capelli ___.","corti",["corto","corta","corte"],"capelli ist m. Pl."],
["Mia nonna ha gli occhi ___.","verdi",["verde","verda","verdes"],"occhi m. Pl.; verde → verdi."],
["Marco e Anna sono ___.","allegri",["allegre","allegro","allegra"],"Gemischte Gruppe → m. Pl."],
["___ tuo padre? – È alto e magro.","Com'è",["Chi è","Dov'è","Quanti"],"com'è = wie ist."],
["Quanti fratelli ___?","hai",["sei","ha","avete"],"avere."],
["Non ho fratelli: sono ___. (weiblich)","figlia unica",["figlio unico","sola","unica figlia"],"Weiblich: figlia unica."],
["Mia zia è ___ simpatica.","molto",["molta","molti","molte"],"molto vor Adjektiv ist unveränderlich."]],
read:{title:"La famiglia di Luca",text:"Mi chiamo Luca e ho 35 anni. La mia famiglia non è grande. Mia madre si chiama Carla, ha 62 anni ed è in pensione. Mio padre, Giorgio, ha 65 anni e lavora ancora: è medico. Ho una sorella, Elena. Lei ha 30 anni, è sposata e ha una bambina, Sofia, di tre anni. Elena è alta, ha i capelli lunghi e castani ed è molto allegra. Io invece sono un po' timido. I miei nonni abitano in Sicilia: andiamo da loro in estate.",
qs:[["Wie alt ist Lucas Mutter?","62",["65","35","30"]],["Was macht der Vater?","Er ist Arzt",["Er ist pensioniert","Er ist Lehrer","Er ist arbeitslos"]],["Wer ist Sofia?","Lucas Nichte",["Lucas Schwester","Lucas Tochter","Lucas Cousine"]],["Wie ist Luca?","Ein bisschen schüchtern",["Sehr fröhlich","Gross und blond","Sportlich"]],["Wo wohnen die Grosseltern?","In Sizilien",["In Rom","Bei Luca","In der Schweiz"]]]},
listen:[["Mia sorella ha i capelli lunghi e biondi.","Meine Schwester hat lange blonde Haare."],["I miei genitori sono in pensione.","Meine Eltern sind pensioniert."],["Mio fratello è alto e molto sportivo.","Mein Bruder ist gross und sehr sportlich."],["Quanti figli avete?","Wie viele Kinder habt ihr?"],["Suo marito è simpatico e gentile.","Ihr Mann ist sympathisch und freundlich."],["Nostra nonna ha ottant'anni.","Unsere Grossmutter ist 80."]],
dialog:{text:"– Chi è la ragazza nella foto?\n– È mia cugina Chiara. Ha ventidue anni e studia a Milano.\n– È molto bella! Ha gli occhi verdi?\n– No, azzurri. E il ragazzo accanto a lei è suo fratello Davide.\n– Com'è Davide?\n– È simpatico ma un po' timido.",
qs:[["Wer ist Chiara?","Die Cousine",["Die Schwester","Die Freundin","Die Tochter"]],["Welche Augenfarbe hat Chiara?","Blau",["Grün","Braun","Grau"]],["Wie ist Davide?","Sympathisch, aber etwas schüchtern",["Fröhlich und sportlich","Unsympathisch","Sehr ernst"]]]},
write:{p:"Beschreib deine Familie oder eine Person, die du gut kennst (5 Sätze): Name, Alter, Beruf, Aussehen, Charakter.",req:[["Familienwort mit Possessiv",/\b(mia|mio|miei|mie)\s+(madre|padre|sorella|fratello|marito|moglie|figli[oa]|nonn[oa]|amic[oa]|mamma|papà|genitori|fratelli|sorelle)\b/i],["Alter",/\bha\s+[\w']+\s*anni/i],["Aussehen",/\b(alt[oa]|bass[oa]|magr[oa]|capelli|occhi|biond[oa]|castan[oa])\b/i],["Charakter",/\b(simpatic|gentile|allegr|timid|serio|seria|divertente|intelligente|sportiv)/i],["Beruf",/\b(lavora|è\s+\w+(ista|iere|iera|ico|ica|ato|ata)|in pensione|studia)\b/i]],m:"Mia sorella si chiama Lea. Ha trent'anni e lavora in un ospedale: è infermiera. È alta e magra, ha i capelli corti e castani. È molto simpatica e allegra, ma qualche volta un po' seria."},
speak:{p:"Prüfungsaufgabe (PLIDA/CELI): Beschreib eine Person aus deiner Familie oder einen Freund: Wer, Alter, Beruf, Aussehen, Charakter, was ihr zusammen macht.",cues:["Questo è / Questa è…","Ha … anni","È… / Lavora…","Ha i capelli… e gli occhi…","È simpatico/a, …"],m:"Questa è mia madre. Si chiama Rita e ha sessant'anni. È in pensione. È bassa, ha i capelli corti e grigi e gli occhi verdi. È molto gentile e allegra. La domenica mangiamo insieme."}},

/* ================= LEKTION 5 ================= */
{id:5,title:"I verbi al presente",sub:"Regelmässige und unregelmässige Verben, Fragewörter",
goals:["alle drei Verbgruppen im Präsens konjugieren","die wichtigsten unregelmässigen Verben verwenden","Fragen mit allen Fragewörtern stellen","sagen, was man täglich tut"],
grammar:`
<h3>1. Die drei Konjugationen</h3>
<table><tr><th></th><th>-are: parlare</th><th>-ere: prendere</th><th>-ire: dormire</th><th>-ire (-isc-): finire</th></tr>
<tr><td>io</td><td>parl<b>o</b></td><td>prend<b>o</b></td><td>dorm<b>o</b></td><td>fin<b>isco</b></td></tr>
<tr><td>tu</td><td>parl<b>i</b></td><td>prend<b>i</b></td><td>dorm<b>i</b></td><td>fin<b>isci</b></td></tr>
<tr><td>lui/lei/Lei</td><td>parl<b>a</b></td><td>prend<b>e</b></td><td>dorm<b>e</b></td><td>fin<b>isce</b></td></tr>
<tr><td>noi</td><td>parl<b>iamo</b></td><td>prend<b>iamo</b></td><td>dorm<b>iamo</b></td><td>fin<b>iamo</b></td></tr>
<tr><td>voi</td><td>parl<b>ate</b></td><td>prend<b>ete</b></td><td>dorm<b>ite</b></td><td>fin<b>ite</b></td></tr>
<tr><td>loro</td><td>parl<b>ano</b></td><td>prend<b>ono</b></td><td>dorm<b>ono</b></td><td>fin<b>iscono</b></td></tr></table>
<p>Verben mit -isc-: <i>finire, capire, preferire, pulire, spedire</i>. Ohne -isc-: <i>dormire, partire, aprire, sentire, offrire</i>.</p>
<p>Schreibregeln: <i>cercare → tu cer<b>chi</b>, noi cer<b>chiamo</b></i>; <i>pagare → tu pa<b>ghi</b></i>; <i>mangiare → tu mang<b>i</b></i> (nicht mangii); <i>studiare → tu stud<b>i</b></i>.</p>
<p>Betonung in der 3. Person Plural auf dem Stamm: <i>PARlano, PRENdono, DORmono.</i></p>
<h3>2. Unregelmässige Verben (auswendig lernen)</h3>
<table><tr><th></th><th>fare</th><th>andare</th><th>venire</th><th>stare</th><th>dare</th><th>dire</th><th>bere</th><th>uscire</th><th>sapere</th></tr>
<tr><td>io</td><td>faccio</td><td>vado</td><td>vengo</td><td>sto</td><td>do</td><td>dico</td><td>bevo</td><td>esco</td><td>so</td></tr>
<tr><td>tu</td><td>fai</td><td>vai</td><td>vieni</td><td>stai</td><td>dai</td><td>dici</td><td>bevi</td><td>esci</td><td>sai</td></tr>
<tr><td>lui/lei</td><td>fa</td><td>va</td><td>viene</td><td>sta</td><td>dà</td><td>dice</td><td>beve</td><td>esce</td><td>sa</td></tr>
<tr><td>noi</td><td>facciamo</td><td>andiamo</td><td>veniamo</td><td>stiamo</td><td>diamo</td><td>diciamo</td><td>beviamo</td><td>usciamo</td><td>sappiamo</td></tr>
<tr><td>voi</td><td>fate</td><td>andate</td><td>venite</td><td>state</td><td>date</td><td>dite</td><td>bevete</td><td>uscite</td><td>sapete</td></tr>
<tr><td>loro</td><td>fanno</td><td>vanno</td><td>vengono</td><td>stanno</td><td>danno</td><td>dicono</td><td>bevono</td><td>escono</td><td>sanno</td></tr></table>
<p>Wendungen mit <b>fare</b>: fare colazione, fare la spesa, fare una foto, fare sport, fare una passeggiata, fare una domanda. <b>stare</b>: come stai? sto bene; stare a casa.</p>
<h3>3. Fragewörter</h3>
<table><tr><td><b>chi?</b></td><td>wer?</td><td>Chi è? Con chi parli?</td></tr>
<tr><td><b>che cosa? / cosa? / che?</b></td><td>was?</td><td>Che cosa fai? Cosa mangi?</td></tr>
<tr><td><b>dove?</b></td><td>wo? wohin?</td><td>Dove abiti? Dove vai?</td></tr>
<tr><td><b>quando?</b></td><td>wann?</td><td>Quando parti?</td></tr>
<tr><td><b>come?</b></td><td>wie?</td><td>Come stai? Come si chiama?</td></tr>
<tr><td><b>perché?</b></td><td>warum? / weil</td><td>Perché studi l'italiano? – Perché mi piace.</td></tr>
<tr><td><b>quanto/-a/-i/-e?</b></td><td>wie viel(e)?</td><td>Quanto costa? Quanti anni hai? Quante ore lavori?</td></tr>
<tr><td><b>quale? / quali?</b></td><td>welche/r?</td><td>Quale libro? Quali lingue parli?</td></tr>
<tr><td><b>che?</b></td><td>welche/r (vor Nomen)</td><td>Che lavoro fai? Che ore sono?</td></tr></table>
<p>Vor <i>è</i> wird gekürzt: <i>dov'è, com'è, cos'è, chi è</i> (chi nicht gekürzt).</p>
<h3>4. Verneinung und Antworten</h3>
<p><i>non</i> steht vor dem Verb: <i>Non parlo francese. Non capisco.</i> Kurzantworten: <i>Sì, certo. / No, mai. / Anch'io (ich auch). / Neanch'io (ich auch nicht).</i></p>
<h3>5. Präpositionen bei Verben der Bewegung</h3>
<p><i>andare <b>a</b> casa / <b>a</b> scuola / <b>a</b> Roma / <b>al</b> cinema / <b>in</b> ufficio / <b>in</b> Italia; venire <b>da</b> Berna.</i> (Genauer in Lektion 7.)</p>`,
vocab:[["parlare","sprechen"],["mangiare","essen"],["bere","trinken"],["abitare","wohnen"],["lavorare","arbeiten"],["studiare","lernen / studieren"],["imparare","lernen (erwerben)"],["ascoltare","hören, zuhören"],["guardare","anschauen"],["leggere","lesen"],["scrivere","schreiben"],["prendere","nehmen"],["vedere","sehen"],["vivere","leben"],["conoscere","kennen, kennenlernen"],["chiedere","fragen, bitten"],["rispondere","antworten"],["aprire","öffnen"],["chiudere","schliessen"],["dormire","schlafen"],["partire","abfahren, abreisen"],["sentire","hören, fühlen"],["finire","beenden"],["capire","verstehen"],["preferire","vorziehen, lieber mögen"],["pulire","putzen"],["fare","machen, tun"],["andare","gehen, fahren"],["venire","kommen"],["stare","sich befinden, bleiben"],["dare","geben"],["dire","sagen"],["uscire","ausgehen, hinausgehen"],["sapere","wissen, können"],["aspettare","warten"],["cercare","suchen"],["trovare","finden"],["pagare","bezahlen"],["comprare","kaufen"],["giocare","spielen"],["cantare","singen"],["ballare","tanzen"],["camminare","gehen, laufen"],["telefonare","telefonieren"],["cucinare","kochen"],["aiutare","helfen"],["amare","lieben"],["pensare","denken"],["portare","bringen, tragen"],["entrare","hineingehen"],["tornare","zurückkommen"],["restare","bleiben"],["mettere","legen, stellen, anziehen"],["chi?","wer?"],["che cosa? / cosa?","was?"],["dove?","wo? wohin?"],["quando?","wann?"],["come?","wie?"],["perché?","warum? / weil"],["quale?","welche/r?"],["fare colazione","frühstücken"],["fare la spesa","einkaufen (Lebensmittel)"],["fare una passeggiata","spazieren gehen"],["fare una foto","ein Foto machen"],["fare sport","Sport treiben"],["oggi","heute"],["domani","morgen"],["adesso / ora","jetzt"],["dopo","danach, später"],["prima","zuerst, vorher"],["poi","dann"],["sempre","immer"],["mai","nie"],["anch'io","ich auch"],["neanch'io","ich auch nicht"]],
ex:[["Io ___ italiano e tedesco.","parlo",["parli","parla","parlano"],"-are: io -o."],
["Tu ___ il caffè?","prendi",["prende","prendo","prendete"],"-ere: tu -i."],
["Lei ___ a Lugano.","dorme",["dorma","dormi","dormono"],"-ire: lui/lei -e."],
["Noi ___ la lezione alle 9.","finiamo",["finisciamo","finite","finiscono"],"noi: -iamo, ohne -isc-."],
["Voi ___ l'italiano?","capite",["capiscete","capiscite","capiscono"],"voi: -ite, ohne -isc-."],
["Loro ___ il tè.","preferiscono",["preferono","preferiscano","preferite"],"loro mit -isc-: -iscono."],
["Tu ___ un lavoro? (cercare)","cerchi",["cerci","cerchei","cerca"],"-care: tu cerchi (h für den k-Laut)."],
["Tu ___ la pizza? (mangiare)","mangi",["mangii","mange","mangia"],"-giare: tu mangi."],
["Io ___ colazione al bar.","faccio",["fo","facio","fai"],"fare: io faccio."],
["Noi ___ al cinema.","andiamo",["vadiamo","andate","vanno"],"andare: noi andiamo."],
["Loro ___ da Berna.","vengono",["venono","vieni","venite"],"venire: loro vengono."],
["Tu ___ stasera?","esci",["usci","esce","uscite"],"uscire: tu esci."],
["Voi ___ il vino?","bevete",["berete","bevono","beviamo"],"bere: voi bevete."],
["Io non ___ dov'è la stazione.","so",["sappio","sai","sa"],"sapere: io so."],
["___ lavoro fai?","Che",["Chi","Quando","Dove"],"che + Nomen = welche/r."],
["___ abiti? – A Berna.","Dove",["Quando","Chi","Perché"],"dove = wo."],
["___ studi l'italiano? – Perché mi piace.","Perché",["Come","Quanto","Chi"],"perché = warum und weil."],
["___ lingue parli? (welche)","Quali",["Quale","Quante","Chi"],"lingue Pl. → quali."],
["___ costa? – Dieci euro.","Quanto",["Quanti","Quando","Che"],"quanto costa."],
["Io ___ parlo francese.","non",["no","niente","mai"],"non vor dem Verb."],
["– Parlo inglese. – ___!","Anch'io",["Anche me","Io anche","Anche io sono"],"Anch'io = ich auch."]],
read:{title:"La giornata di Paola",text:"Paola abita a Torino e lavora in una libreria. La mattina prende il tram e arriva al lavoro alle nove. A mezzogiorno mangia un panino con una collega. Il pomeriggio apre i pacchi con i libri nuovi e aiuta i clienti. Finisce di lavorare alle sei. La sera legge, guarda un film o esce con gli amici. Il sabato non lavora: fa la spesa al mercato e cucina per la famiglia.",
qs:[["Wo arbeitet Paola?","In einer Buchhandlung",["In einer Bibliothek","In einem Büro","In einer Schule"]],["Wie kommt sie zur Arbeit?","Mit dem Tram",["Zu Fuss","Mit dem Auto","Mit dem Fahrrad"]],["Wann ist sie mit der Arbeit fertig?","Um 18 Uhr",["Um 9 Uhr","Um 12 Uhr","Um 20 Uhr"]],["Was macht sie samstags?","Einkaufen auf dem Markt und kochen",["Arbeiten","Ausgehen mit Freunden","Einen Film schauen"]]]},
listen:[["Che cosa fai oggi?","Was machst du heute?"],["Vado al lavoro in autobus.","Ich fahre mit dem Bus zur Arbeit."],["Non capisco, puoi ripetere?","Ich verstehe nicht, kannst du wiederholen?"],["Dove andate sabato sera?","Wohin geht ihr am Samstagabend?"],["I bambini dormono già.","Die Kinder schlafen schon."],["Preferisco il tè al caffè.","Ich mag lieber Tee als Kaffee."],["Perché non vieni con noi?","Warum kommst du nicht mit uns?"]],
dialog:{text:"– Ciao Marta, cosa fai stasera?\n– Niente di speciale. Guardo un film a casa. E tu?\n– Io esco con Luca, andiamo in pizzeria. Vieni anche tu?\n– Volentieri! A che ora?\n– Alle otto. Ci vediamo davanti alla stazione.",
qs:[["Was hat Marta zuerst vor?","Zu Hause einen Film schauen",["In die Pizzeria gehen","Arbeiten","Schlafen"]],["Mit wem geht die Sprecherin aus?","Mit Luca",["Mit Marta allein","Mit der Familie","Mit Kollegen"]],["Wo treffen sie sich?","Vor dem Bahnhof",["In der Pizzeria","Bei Marta","Im Kino"]]]},
write:{p:"Schreib 6 Sätze über deinen Alltag: Wo du arbeitest/studierst, wie du dorthin kommst, was du isst, was du abends machst, was du am Wochenende machst.",req:[["Verb -are (io)",/\b(lavoro|studio|mangio|guardo|ascolto|torno|compro|cucino|abito)\b/i],["Verb -ere/-ire (io)",/\b(prendo|leggo|scrivo|dormo|esco|finisco|preferisco|apro|vivo)\b/i],["Verkehrsmittel oder Ortsangabe",/\b(in autobus|in treno|in macchina|in bici|a piedi|in tram|a casa|in ufficio|al lavoro|a scuola)\b/i],["Zeitangabe",/\b(la mattina|la sera|il pomeriggio|alle|a mezzogiorno|il sabato|la domenica|il fine settimana|il weekend)\b/i],["Verneinung",/\bnon\b/i]],m:"Lavoro come account manager. La mattina vado al lavoro in macchina o lavoro da casa. A mezzogiorno mangio un'insalata con i colleghi. La sera torno a casa, cucino e leggo un libro. Non guardo molto la televisione. Il sabato faccio sport ed esco con le amiche."},
speak:{p:"Erzähl, was du an einem normalen Tag machst (mindestens 6 Sätze mit verschiedenen Verben). Dann stell drei Fragen mit Fragewörtern.",cues:["La mattina… / Il pomeriggio… / La sera…","prendo, lavoro, mangio, torno, esco…","Che cosa fai…? Dove…? Quando…?"],m:"La mattina faccio colazione e prendo la macchina. Lavoro fino alle cinque. Dopo il lavoro faccio la spesa. La sera cucino, guardo la TV o leggo. Qualche volta esco con gli amici. E tu, cosa fai la sera? Dove lavori? Quando finisci?"}},

/* ================= LEKTION 6 ================= */
{id:6,title:"Al bar e al ristorante",sub:"Essen, bestellen, bezahlen, Vorlieben (piacere)",
goals:["im Café und Restaurant bestellen (mündliche Prüfungsaufgabe)","Preise verstehen und nach der Rechnung fragen","sagen, was man mag (mi piace / mi piacciono)","eine Speisekarte lesen"],
grammar:`
<h3>1. Bestellen</h3>
<p>Höflich: <b>vorrei</b> (ich hätte gern) / <b>vorremmo</b> (wir hätten gern) oder <b>prendo</b> (ich nehme) / <b>per me</b> (für mich).</p>
<p><i>Buongiorno, vorrei un caffè e un cornetto. – Per me una pizza margherita, grazie. – Prendiamo due bicchieri di vino rosso.</i></p>
<p>Der Kellner fragt: <i>Prego? / Cosa prende? / Cosa prendete? / Desidera? / Altro? / Da bere?</i> Antwort auf «Altro?»: <i>No, grazie, basta così.</i></p>
<h3>2. Bezahlen</h3>
<p><i>Il conto, per favore. / Quant'è? – Sono 24 euro e 50. / Posso pagare con la carta? / Pago in contanti.</i> In der Bar zahlt man oft zuerst an der Kasse (<i>alla cassa</i>) und zeigt dann den <i>scontrino</i>.</p>
<p>Preise: <i>3,50 € = tre euro e cinquanta; 12 € = dodici euro; 0,80 € = ottanta centesimi.</i> Frage: <i>Quanto costa il caffè? Quanto costano le pizze? Quant'è in tutto?</i></p>
<h3>3. piacere (gefallen, mögen)</h3>
<p>Im Italienischen «gefällt mir etwas»: Das Verb richtet sich nach dem, was gefällt.</p>
<table><tr><td><b>mi piace</b> + Singular / Verb</td><td>Mi piace la pizza. Mi piace cucinare.</td></tr>
<tr><td><b>mi piacciono</b> + Plural</td><td>Mi piacciono gli spaghetti.</td></tr></table>
<table><tr><td>mi</td><td>mir</td><td>ci</td><td>uns</td></tr><tr><td>ti</td><td>dir</td><td>vi</td><td>euch</td></tr><tr><td>gli / le / Le</td><td>ihm / ihr / Ihnen</td><td>gli (a loro)</td><td>ihnen</td></tr></table>
<p><i>Ti piace il caffè? – Sì, mi piace molto. / No, non mi piace. – A Marco piace il vino. – Le piace l'Italia? – Anche a me! / Neanche a me.</i></p>
<p>Steigerung: <i>mi piace molto / moltissimo / abbastanza / un po' / non mi piace per niente.</i> Lieber: <i>preferisco il tè.</i></p>
<h3>4. Mahlzeiten und Gänge</h3>
<p><i>la colazione</i> (Frühstück: caffè, cappuccino, cornetto), <i>il pranzo</i> (Mittagessen), <i>la cena</i> (Abendessen). Im Restaurant: <i>l'antipasto, il primo</i> (Pasta, Risotto, Suppe), <i>il secondo</i> (Fleisch, Fisch), <i>il contorno</i> (Beilage), <i>il dolce / il dessert</i>.</p>
<h3>5. Teilungsartikel (erkennen)</h3>
<p><i>del, della, dello, dei, delle, degli</i> = etwas / einige: <i>Vorrei del pane. Compro delle mele.</i> (di + Artikel, siehe Lektion 7)</p>
<h3>6. Nützliche Wendungen</h3>
<p><i>Un tavolo per due, per favore. – Avete un tavolo libero? – Il menù, per favore. – Cosa mi consiglia? – Buon appetito! – Grazie, altrettanto. – È tutto buonissimo. – Posso avere ancora un po' di pane?</i></p>`,
vocab:[["il bar","die Bar / das Café"],["il ristorante","das Restaurant"],["la pizzeria","die Pizzeria"],["la trattoria","das einfache Restaurant"],["il menù","die Speisekarte"],["il cameriere / la cameriera","der Kellner / die Kellnerin"],["il conto","die Rechnung"],["lo scontrino","der Kassenbon"],["la cassa","die Kasse"],["il caffè","der Espresso"],["il cappuccino","der Cappuccino"],["il tè","der Tee"],["il succo di frutta","der Fruchtsaft"],["la spremuta d'arancia","frisch gepresster Orangensaft"],["l'acqua naturale","stilles Wasser"],["l'acqua frizzante","Mineralwasser mit Kohlensäure"],["il vino rosso / bianco","der Rotwein / Weisswein"],["la birra","das Bier"],["il bicchiere","das Glas"],["la bottiglia","die Flasche"],["la tazza","die Tasse"],["il cornetto","das Hörnchen / Gipfeli"],["il panino","das belegte Brötchen"],["il tramezzino","das Sandwich"],["la pizza","die Pizza"],["la pasta","die Teigwaren"],["gli spaghetti","die Spaghetti"],["il risotto","das Risotto"],["la zuppa / la minestra","die Suppe"],["l'insalata","der Salat"],["la carne","das Fleisch"],["il pollo","das Hähnchen"],["la bistecca","das Steak"],["il pesce","der Fisch"],["le verdure","das Gemüse"],["le patate","die Kartoffeln"],["le patatine fritte","die Pommes frites"],["il formaggio","der Käse"],["il prosciutto","der Schinken"],["il pane","das Brot"],["il burro","die Butter"],["l'uovo","das Ei"],["il dolce","die Süssspeise / der Nachtisch"],["il gelato","das Eis"],["la torta","der Kuchen / die Torte"],["la frutta","das Obst"],["la mela","der Apfel"],["la banana","die Banane"],["l'arancia","die Orange"],["lo zucchero","der Zucker"],["il sale","das Salz"],["il pepe","der Pfeffer"],["l'olio","das Öl"],["la colazione","das Frühstück"],["il pranzo","das Mittagessen"],["la cena","das Abendessen"],["l'antipasto","die Vorspeise"],["il primo","der erste Gang"],["il secondo","der Hauptgang"],["il contorno","die Beilage"],["buono / buona","gut, lecker"],["buonissimo","sehr lecker"],["caldo / calda","warm, heiss"],["freddo / fredda","kalt"],["dolce","süss"],["salato / salata","salzig"],["vorrei","ich hätte gern"],["per me…","für mich…"],["prendo…","ich nehme…"],["altro?","sonst noch etwas?"],["basta così","das ist alles"],["ordinare","bestellen"],["pagare","bezahlen"],["in contanti","bar"],["con la carta","mit Karte"],["quant'è?","wie viel macht das?"],["quanto costa?","was kostet das?"],["mi piace","ich mag (Sg.)"],["mi piacciono","ich mag (Pl.)"],["preferisco","ich mag lieber"],["buon appetito!","guten Appetit!"],["un tavolo per due","ein Tisch für zwei"],["prenotare","reservieren"],["il centesimo","der Cent"],["l'euro","der Euro"]],
ex:[["Buongiorno, ___ un cappuccino.","vorrei",["voglio tanto","vorrebbe","vorremmo io"],"vorrei = ich hätte gern (höflich)."],
["Mi ___ la pasta.","piace",["piacciono","piaccio","piaci"],"Singular → piace."],
["Mi ___ gli spaghetti.","piacciono",["piace","piaci","piacete"],"Plural → piacciono."],
["Ti ___ cucinare?","piace",["piacciono","piaci","piacere"],"Vor Infinitiv immer piace."],
["A Marco ___ piace il pesce.","non",["no","niente","mai"],"Verneinung vor piace."],
["– Mi piace il gelato. – ___!","Anche a me",["Anch'io","Anche me","Anche mi"],"Bei piacere: anche a me."],
["Le ___ il vino rosso, signora?","piace",["piaci","piacciono","piacere"],"Le = Ihnen (formell)."],
["Il conto, ___ favore.","per",["a","di","da"],"per favore."],
["___ costano le pizze?","Quanto",["Quanti","Quante","Quale"],"quanto bleibt bei costare unverändert."],
["Posso pagare ___ la carta?","con",["in","a","per"],"con la carta; in contanti."],
["– Altro? – No, grazie, ___.","basta così",["è tutto buono","per me","vorrei"],"basta così = das ist alles."],
["Prendo un primo: ___.","il risotto",["la bistecca","il tiramisù","l'insalata"],"Primo = Pasta, Risotto, Suppe."],
["Un ___ di vino bianco, per favore.","bicchiere",["tazza","piatto","pezzo"],"bicchiere = Glas."],
["Mi piace ___ la pizza.","molto",["molta","molte","molti"],"molto nach piace ist unveränderlich."],
["3,50 € heisst…","tre euro e cinquanta",["tre euro cinquanta centesimi e","tre e cinquanta euro","tre virgola cinquanta"],"tre euro e cinquanta."],
["Prendiamo ___ mele. (einige)","delle",["della","dei","del"],"mele w. Pl. → delle."],
["Vorrei ___ pane.","del",["della","dei","delle"],"pane m. Sg. → del."],
["– Buon appetito! – Grazie, ___.","altrettanto",["prego","piacere","basta"],"altrettanto = gleichfalls."]],
read:{title:"Trattoria da Gino – Menù del giorno",text:"TRATTORIA DA GINO – Menù del giorno (12.00–14.30)\nAntipasti: prosciutto e melone 8 € · bruschette 5 €\nPrimi: spaghetti al pomodoro 9 € · risotto ai funghi 11 € · minestra di verdure 7 €\nSecondi: pollo arrosto con patate 13 € · pesce alla griglia 16 €\nContorni: insalata mista 4 € · verdure 4,50 €\nDolci: tiramisù 5 € · gelato 4 €\nBevande: acqua 2 € · vino della casa (bicchiere) 3,50 € · caffè 1,20 €\nMenù completo (primo + secondo + contorno + acqua): 22 €\nChiuso il lunedì. Si accettano carte.",
qs:[["Was kostet das Risotto?","11 €",["9 €","7 €","13 €"]],["Welcher Gang ist der teuerste?","Gegrillter Fisch",["Hähnchen","Tiramisù","Risotto"]],["Was enthält das komplette Menü?","Primo, Secondo, Beilage und Wasser",["Nur Primo und Secondo","Alle Gänge mit Wein","Vorspeise und Dessert"]],["Wann ist geschlossen?","Montags",["Sonntags","Abends","Nie"]],["Kann man mit Karte zahlen?","Ja",["Nein","Nur bar","Nur mit Bargeld über 20 €"]]]},
listen:[["Vorrei un cappuccino e un cornetto.","Ich hätte gern einen Cappuccino und ein Gipfeli."],["Il conto, per favore.","Die Rechnung, bitte."],["Sono dodici euro e cinquanta.","Das macht 12,50 Euro."],["Mi piacciono molto le verdure.","Ich mag Gemüse sehr."],["Un tavolo per tre, per favore.","Einen Tisch für drei, bitte."],["Non mi piace il pesce, preferisco la carne.","Ich mag keinen Fisch, ich mag lieber Fleisch."],["Posso pagare con la carta?","Kann ich mit Karte zahlen?"]],
dialog:{text:"– Buonasera, avete un tavolo per due?\n– Certo, prego. Ecco il menù.\n– Grazie. Allora, per me gli spaghetti al pomodoro e un'insalata.\n– E per Lei?\n– Io prendo il pollo con le patate.\n– Da bere?\n– Una bottiglia di acqua frizzante e due bicchieri di vino rosso.\n– Benissimo. Il dolce lo scegliete dopo?\n– Sì, grazie.",
qs:[["Was bestellt die erste Person?","Spaghetti und Salat",["Hähnchen mit Kartoffeln","Risotto","Pizza"]],["Was trinken sie?","Sprudelwasser und Rotwein",["Stilles Wasser und Bier","Nur Wein","Cappuccino"]],["Wann wählen sie den Nachtisch?","Später",["Sofort","Gar nicht","Vor dem Essen"]]]},
write:{p:"Schreib einem Freund eine Nachricht (ca. 35 Wörter): Du warst in einem Restaurant. Was hast du gegessen und getrunken, was hat es gekostet, hat es dir geschmeckt? Lade ihn ein, mitzukommen.",req:[["Speise",/\b(pizza|pasta|spaghetti|risotto|pesce|carne|pollo|insalata|gelato|tiramisù|panino)\b/i],["Getränk",/\b(acqua|vino|birra|caffè|cappuccino|succo|tè)\b/i],["Preis",/\d+\s*(euro|€|franchi)/i],["piacere",/\b(mi piace|mi piacciono|mi è piaciut|buon[oa]|buonissim)/i],["Einladung",/\b(vieni|andiamo|vuoi venire|ti va)\b/i]],m:"Ciao Luca! Ieri sera: ristorante «Da Gino». Per me risotto ai funghi e un bicchiere di vino bianco, 15 euro in tutto. Buonissimo! Mi piace molto questo posto. Vieni con me sabato?"},
speak:{p:"Prüfungsaufgabe (PLIDA): Du bist im Restaurant. Begrüsse, bitte um einen Tisch, bestell ein Primo, ein Secondo und ein Getränk, frag nach dem Preis, verlange die Rechnung und verabschiede dich.",cues:["Buonasera, un tavolo per…","Vorrei… / Per me…","Da bere…","Quanto costa…? / Quant'è?","Il conto, per favore. Arrivederci!"],m:"Buonasera! Un tavolo per una persona, per favore. Vorrei gli spaghetti al pomodoro e poi il pollo con le patate. Da bere, un'acqua naturale. Quanto costa il tiramisù? Va bene, lo prendo. Il conto, per favore. Posso pagare con la carta? Grazie, arrivederci!"}}
);
