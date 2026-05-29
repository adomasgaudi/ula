// ---------- i18n (EN / FR / IT / DE) ----------
// English is the markup baseline (captured on load); proper names, work titles,
// composers, dates and durations are intentionally left untranslated.
const I18N={
  fr:{
    "nav.ensemble":"Ensemble","nav.musicians":"Musiciens","nav.programme":"Programme","nav.listen":"Écouter","nav.calendar":"Agenda","nav.contact":"Contact",
    "hero.eyebrow":"Musique médiévale &amp; Renaissance &middot; fond. MMXIX",
    "hero.sub":"Chants et danses de la fin du Moyen Âge, portés par la voix, la guiterne, la flûte à bec et la harpe gothique — une musique née pour la pierre et la lumière des cierges.",
    "hero.cta1":"Concerts à venir","hero.cta2":"Réserver l’ensemble",
    "hero.cap":"Basilisk &middot; bestiaire, v. XIIIᵉ siècle",
    "eth.h2":"L’Ensemble",
    "eth.lead":"Unir une rigueur historique exigeante à <em>une programmation créative, portée par le récit</em> — concevoir des concerts où s’entrelacent musique, histoire et narration.",
    "eth.p1":"Né à la Schola Cantorum Basiliensis, l’Ensemble Basilisk réunit des musiciens sensibles au potentiel expressif de la musique médiévale et à sa résonance contemporaine. Leur travail allie une interprétation historiquement informée à un esprit d’expérimentation, explorant les couleurs et les textures singulières d’instruments tels que la harpe à harpions, le clavicymbalum, l’organetto, la flûte à bec, la vièle à archet et la voix.",
    "eth.p2":"Chaque projet invite l’auditeur dans un monde où le son devient à la fois recherche et invention, où la précision rejoint l’imagination, et où le passé se laisse réentendre à travers un regard vivant et poétique.",
    "eth.p3":"L’emblème de l’ensemble, le Basilic mythique, incarne cette dualité : sinueux, vibrant et imprévisible — symbole de métamorphose et d’intensité. Enraciné dans l’esprit du <em>Mundus Inversus</em>, où le sacré côtoie le grotesque et où la beauté naît du contraste, Basilisk réinvente la musique ancienne comme un espace de curiosité, de vitalité et de présence.",
    "eth.s1":"Instruments &amp; voix","eth.s2":"Racines à la Schola Cantorum","eth.s3":"Début &middot; Musica Divina, PL",
    "mus.h2":"Les Musiciens",
    "m1.inst":"Vièle &amp; violon baroque",
    "m1.bio":"Joue de la vièle et du violon baroque sur les scènes des États-Unis et d’Europe — du Boston Early Music Festival à Lucerne, et à Broadway dans « Farinelli and the King ». Après une formation à la Juilliard School et à la Royal Academy of Music, poursuit ses études auprès de Baptiste Romain à la Schola Cantorum Basiliensis.",
    "m2.inst":"Organetto, clavicymbalum &amp; flûte à bec",
    "m2.bio":"Joueur de flûte à bec et de claviers anciens, spécialiste des musiques médiévale, Renaissance et contemporaine. Premier Prix du concours de la Royal Overseas League et directeur artistique fondateur de l’ensemble médiéval britannique Rune ; poursuit actuellement un master de claviers anciens à la Schola Cantorum Basiliensis.",
    "m3.inst":"Harpe à harpions &amp; harpe médiévale",
    "m3.bio":"A étudié les harpes modernes et historiques au Conservatoire Rossini de Pesaro et au Conservatoire royal de La Haye, avant un master spécialisé en harpes historiques à la Schola Cantorum Basiliensis. Continuiste recherchée, du Dutch Harp Festival à la Musica Antica Den Haag.",
    "m4.inst":"Voix &amp; organetto",
    "m4.bio":"Mezzo-soprano formée à Bordeaux, titulaire de masters de la Sorbonne et d’un master de chant médiéval et Renaissance de la Schola Cantorum Basiliensis. Établie à Bâle, elle a fondé l’ensemble vocal professionnel KIMA.",
    "prog.h2":"Programme","prog.figcap":"Feuillet enluminé &middot; XIVᵉ s.",
    "prog.label":"Programme inaugural &middot; créé à Musica Divina, PL",
    "prog.tag":"Le monde renversé",
    "prog.p1":"Le <em>Mundus Inversus</em> est une image médiévale de subversion et de lucidité — un miroir tendu à la société, où les hiérarchies s’effondrent, où la folie démasque la raison et où la satire effleure la prière. Ce programme explore ce renversement à travers des œuvres du XIIIᵉ au XVᵉ siècle, du Codex Buranus au Roman de Fauvel, de Machaut à Solage et Ciconia.",
    "prog.p2":"Dévotion et dérision, grotesque et mystique s’entrelacent en un parcours où l’ordre savant de l’Ars Nova se défait peu à peu sous le souffle de l’improvisation, de la danse et du chant populaire — un théâtre d’ombres où le sacré rejoint le grotesque, et où la beauté surgit du désordre.",
    "prog.meta1":"16 œuvres","prog.meta2":"env. 60 minutes","prog.meta3":"XIIIᵉ–XVᵉ siècle",
    "prog.mv1":"I &middot; L’ordre et sa vanité","prog.mv2":"II &middot; Le monde renversé","prog.mv3":"III &middot; Vers la lumière ou la folie",
    "prog.c6":"Codex Buranus (XIIIᵉ s.) &middot; improvisation","prog.c7":"Anon., Roman de Fauvel (XIVᵉ s.)","prog.c8":"Anonyme (XIVᵉ s.)","prog.c9":"Pierre des Molins (actif mil. XIVᵉ s.)","prog.c14":"Anon., Codex de Faenza (XVᵉ s.)","prog.c15":"Anon., Llibre Vermell de Montserrat (XIVᵉ s.)","prog.c16":"Anon., Llibre Vermell de Montserrat (XIVᵉ s.)",
    "lst.h2":"Écouter","lst.sub4":"Anonyme anglais, XIIIᵉ s.",
    "cal.h2":"Agenda","cal.my1":"juin &middot; 2026","cal.my2":"juil. &middot; 2026","cal.my3":"sept. &middot; 2026","cal.my4":"mars &middot; 2026",
    "cal.p2":"Cantigas de Santa María &middot; église Saint-Casimir, Vilnius","cal.p4":"Under the Greenwood &middot; Londres",
    "cal.tickets":"Billets","cal.past":"Passé",
    "con.h2":"Invitez<br><em>l’ensemble</em>",
    "con.blurb":"L’ensemble se produit en séries de concerts, festivals, musique liturgique, événements privés et mariages, avec des programmes pensés pour votre lieu et votre occasion. Nous jouons en quatuor ou en effectif plus restreint.",
    "con.k1":"Représentation","con.k2":"Téléphone","con.k3":"Basé à","con.k4":"En tournée","con.v4":"Europe &amp; R.-U.",
    "ft.small":"&copy; 2026 The Hawthorn Consort &middot; Musique médiévale &amp; Renaissance","ft.top":"Haut de page &uarr;"
  },
  it:{
    "nav.ensemble":"Ensemble","nav.musicians":"Musicisti","nav.programme":"Programma","nav.listen":"Ascolta","nav.calendar":"Calendario","nav.contact":"Contatti",
    "hero.eyebrow":"Musica medievale e rinascimentale &middot; fond. MMXIX",
    "hero.sub":"Canti e danze del tardo Medioevo, eseguiti con voce, ghiterna, flauto dolce e arpa gotica — una musica pensata per la pietra e il lume di candela.",
    "hero.cta1":"Prossimi concerti","hero.cta2":"Ingaggia l’ensemble",
    "hero.cap":"Basilisk &middot; bestiario, c. XIII secolo",
    "eth.h2":"L’Ensemble",
    "eth.lead":"Coniugare un rigoroso senso storico con <em>una programmazione creativa, guidata dalla narrazione</em> — concependo concerti in cui musica, storia e racconto si intrecciano.",
    "eth.p1":"Nato alla Schola Cantorum Basiliensis, l’Ensemble Basilisk riunisce musicisti attratti dal potenziale espressivo della musica medievale e dalla sua risonanza contemporanea. Il loro lavoro unisce un’esecuzione storicamente informata a uno spirito di sperimentazione, esplorando i colori e le trame singolari di strumenti quali l’arpa bray, il clavicymbalum, l’organetto, il flauto dolce, la vielle ad arco e la voce.",
    "eth.p2":"Ogni progetto invita l’ascoltatore in un mondo in cui il suono si fa ricerca e invenzione insieme, dove la precisione incontra l’immaginazione e il passato torna a farsi udire attraverso uno sguardo vivo e poetico.",
    "eth.p3":"L’emblema dell’ensemble, il mitico Basilisco, racchiude questa dualità: sinuoso, vibrante e imprevedibile — simbolo di trasformazione e intensità. Radicato nello spirito del <em>Mundus Inversus</em>, dove il sacro incontra il grottesco e la bellezza nasce dal contrasto, Basilisk reimmagina la musica antica come uno spazio di curiosità, vitalità e presenza.",
    "eth.s1":"Strumenti e voci","eth.s2":"Radici alla Schola Cantorum","eth.s3":"Esordio &middot; Musica Divina, PL",
    "mus.h2":"I Musicisti",
    "m1.inst":"Vielle &amp; violino barocco",
    "m1.bio":"Suona la vielle e il violino barocco sulle scene di Stati Uniti ed Europa — dal Boston Early Music Festival a Lucerna, e a Broadway in « Farinelli and the King ». Dopo gli studi alla Juilliard School e alla Royal Academy of Music, prosegue la propria formazione con Baptiste Romain alla Schola Cantorum Basiliensis.",
    "m2.inst":"Organetto, clavicymbalum &amp; flauto dolce",
    "m2.bio":"Flauto dolce e tastiere antiche, specializzato in musica medievale, rinascimentale e contemporanea. Primo Premio al concorso della Royal Overseas League e direttore artistico fondatore dell’ensemble medievale britannico Rune; attualmente frequenta un master in tastiere antiche alla Schola Cantorum Basiliensis.",
    "m3.inst":"Arpa bray &amp; arpa medievale",
    "m3.bio":"Ha studiato arpe moderne e storiche al Conservatorio Rossini di Pesaro e al Conservatorio Reale dell’Aia, prima di un master specialistico in arpe storiche alla Schola Cantorum Basiliensis. Apprezzata continuista, dal Dutch Harp Festival alla Musica Antica Den Haag.",
    "m4.inst":"Voce &amp; organetto",
    "m4.bio":"Mezzosoprano formatasi a Bordeaux, con master conseguiti alla Sorbona e un master in canto medievale e rinascimentale alla Schola Cantorum Basiliensis. Con sede a Basilea, ha fondato l’ensemble vocale professionale KIMA.",
    "prog.h2":"Programma","prog.figcap":"Foglio miniato &middot; XIV sec.",
    "prog.label":"Programma d’esordio &middot; debutto a Musica Divina, PL",
    "prog.tag":"Il mondo alla rovescia",
    "prog.p1":"Il <em>Mundus Inversus</em> è un’immagine medievale di sovversione e di rivelazione — uno specchio teso alla società, dove le gerarchie crollano, la follia smaschera la ragione e la satira sfiora la preghiera. Questo programma esplora tale rovesciamento attraverso opere dal XIII al XV secolo, dal Codex Buranus al Roman de Fauvel, da Machaut a Solage e Ciconia.",
    "prog.p2":"Devozione e derisione, grottesco e mistico si intrecciano in un percorso in cui l’ordine dotto dell’Ars Nova si disfa a poco a poco sotto il soffio dell’improvvisazione, della danza e del canto popolare — un teatro d’ombre dove il sacro incontra il grottesco e la bellezza affiora dal disordine.",
    "prog.meta1":"16 brani","prog.meta2":"c. 60 minuti","prog.meta3":"XIII–XV secolo",
    "prog.mv1":"I &middot; L’ordine e la sua vanità","prog.mv2":"II &middot; Il mondo alla rovescia","prog.mv3":"III &middot; Verso la luce o la follia",
    "prog.c6":"Codex Buranus (XIII sec.) &middot; improvvisazione","prog.c7":"Anon., Roman de Fauvel (XIV sec.)","prog.c8":"Anonimo (XIV sec.)","prog.c9":"Pierre des Molins (attivo metà XIV sec.)","prog.c14":"Anon., Codex Faenza (XV sec.)","prog.c15":"Anon., Llibre Vermell de Montserrat (XIV sec.)","prog.c16":"Anon., Llibre Vermell de Montserrat (XIV sec.)",
    "lst.h2":"Ascolta","lst.sub4":"Anonimo inglese, XIII sec.",
    "cal.h2":"Calendario","cal.my1":"giu &middot; 2026","cal.my2":"lug &middot; 2026","cal.my3":"set &middot; 2026","cal.my4":"mar &middot; 2026",
    "cal.p2":"Cantigas de Santa María &middot; chiesa di San Casimiro, Vilnius","cal.p4":"Under the Greenwood &middot; Londra",
    "cal.tickets":"Biglietti","cal.past":"Passato",
    "con.h2":"Invita<br><em>l’ensemble</em>",
    "con.blurb":"L’ensemble è disponibile per stagioni concertistiche, festival, musica liturgica, eventi privati e matrimoni, con programmi pensati per il vostro spazio e la vostra occasione. Ci esibiamo in quartetto o in organici più ridotti.",
    "con.k1":"Management","con.k2":"Telefono","con.k3":"Con sede a","con.k4":"In tournée","con.v4":"Europa e Regno Unito",
    "ft.small":"&copy; 2026 The Hawthorn Consort &middot; Musica medievale e rinascimentale","ft.top":"Torna su &uarr;"
  },
  de:{
    "nav.ensemble":"Ensemble","nav.musicians":"Musiker","nav.programme":"Programm","nav.listen":"Hören","nav.calendar":"Termine","nav.contact":"Kontakt",
    "hero.eyebrow":"Mittelalter &amp; Renaissance &middot; gegr. MMXIX",
    "hero.sub":"Lieder und Tänze des späten Mittelalters, gespielt auf Stimme, Gittern, Blockflöte und gotischer Harfe — Musik, geschaffen für Kerzenlicht und Stein.",
    "hero.cta1":"Kommende Konzerte","hero.cta2":"Ensemble buchen",
    "hero.cap":"Basilisk &middot; Bestiarium, um 13. Jh.",
    "eth.h2":"Das Ensemble",
    "eth.lead":"Strenges historisches Bewusstsein mit <em>einer kreativen, vom Erzählen geleiteten Programmgestaltung</em> verbinden — Konzerte, in denen sich Musik, Geschichte und Erzählung verflechten.",
    "eth.p1":"An der Schola Cantorum Basiliensis gegründet, vereint das Ensemble Basilisk Musiker, die das Ausdruckspotenzial mittelalterlicher Musik und ihren gegenwärtigen Nachklang erkunden. Ihre Arbeit verbindet historisch informierte Aufführung mit Experimentierfreude und erkundet die eigentümlichen Farben und Texturen von Instrumenten wie der Bray-Harfe, dem Clavicymbalum, dem Organetto, der Blockflöte, der gestrichenen Fidel und der Stimme.",
    "eth.p2":"Jedes Projekt lädt den Hörer in eine Welt, in der Klang zugleich Forschung und Erfindung wird, in der Präzision auf Vorstellungskraft trifft und die Vergangenheit durch eine lebendige, poetische Linse neu erklingt.",
    "eth.p3":"Der Namensgeber des Ensembles, der sagenhafte Basilisk, verkörpert diese Doppelnatur: gewunden, lebendig und unberechenbar — ein Sinnbild für Wandlung und Intensität. Im Geist des <em>Mundus Inversus</em> verwurzelt, wo das Heilige dem Grotesken begegnet und Schönheit aus dem Kontrast erwächst, denkt Basilisk die Alte Musik als einen Raum der Neugier, der Lebendigkeit und der Gegenwart neu.",
    "eth.s1":"Instrumente &amp; Stimmen","eth.s2":"Wurzeln an der Schola Cantorum","eth.s3":"Debüt &middot; Musica Divina, PL",
    "mus.h2":"Die Musiker",
    "m1.inst":"Fidel &amp; Barockvioline",
    "m1.bio":"Spielt Fidel und Barockvioline auf Bühnen in den USA und Europa — vom Boston Early Music Festival bis Luzern und am Broadway in „Farinelli and the King“. Nach dem Studium an der Juilliard School und der Royal Academy of Music folgt derzeit ein Studium bei Baptiste Romain an der Schola Cantorum Basiliensis.",
    "m2.inst":"Organetto, Clavicymbalum &amp; Blockflöte",
    "m2.bio":"Blockflöte und historische Tasteninstrumente, spezialisiert auf mittelalterliche, Renaissance- und zeitgenössische Musik. Erster Preis beim Wettbewerb der Royal Overseas League und künstlerischer Gründungsleiter des britischen Mittelalter-Ensembles Rune; studiert derzeit historische Tasteninstrumente im Master an der Schola Cantorum Basiliensis.",
    "m3.inst":"Bray- &amp; Mittelalterharfe",
    "m3.bio":"Studierte moderne und historische Harfen am Conservatorio Rossini in Pesaro und am Königlichen Konservatorium Den Haag, vor einem Spezialmaster für historische Harfen an der Schola Cantorum Basiliensis. Gefragte Continuo-Spielerin von Dutch Harp Festival bis Musica Antica Den Haag.",
    "m4.inst":"Stimme &amp; Organetto",
    "m4.bio":"In Bordeaux ausgebildete Mezzosopranistin, mit Masterabschlüssen der Sorbonne und einem Master in mittelalterlichem und Renaissance-Gesang der Schola Cantorum Basiliensis. In Basel ansässig, gründete sie das professionelle Vokalensemble KIMA.",
    "prog.h2":"Programm","prog.figcap":"Illuminiertes Blatt &middot; 14. Jh.",
    "prog.label":"Debütprogramm &middot; uraufgeführt bei Musica Divina, PL",
    "prog.tag":"Die verkehrte Welt",
    "prog.p1":"Der <em>Mundus Inversus</em> ist ein mittelalterliches Bild der Umkehrung und der Erkenntnis — ein der Gesellschaft vorgehaltener Spiegel, in dem Hierarchien zerfallen, die Narrheit die Vernunft entlarvt und die Satire das Gebet streift. Dieses Programm erkundet jene Umkehrung anhand von Werken vom 13. bis zum 15. Jahrhundert, vom Codex Buranus bis zum Roman de Fauvel, von Machaut über Solage bis Ciconia.",
    "prog.p2":"Andacht und Spott, das Groteske und das Mystische verflechten sich auf einem Weg, auf dem die gelehrte Ordnung der Ars Nova unter dem Hauch von Improvisation, Tanz und volkstümlichem Lied allmählich zerfällt — ein Schattentheater, in dem das Heilige dem Grotesken begegnet und Schönheit aus der Unordnung erwächst.",
    "prog.meta1":"16 Werke","prog.meta2":"ca. 60 Minuten","prog.meta3":"13.–15. Jahrhundert",
    "prog.mv1":"I &middot; Die Ordnung und ihre Eitelkeit","prog.mv2":"II &middot; Die verkehrte Welt","prog.mv3":"III &middot; Dem Licht oder dem Wahnsinn entgegen",
    "prog.c6":"Codex Buranus (13. Jh.) &middot; Improvisation","prog.c7":"Anon., Roman de Fauvel (14. Jh.)","prog.c8":"Anonym (14. Jh.)","prog.c9":"Pierre des Molins (tätig Mitte 14. Jh.)","prog.c14":"Anon., Codex Faenza (15. Jh.)","prog.c15":"Anon., Llibre Vermell de Montserrat (14. Jh.)","prog.c16":"Anon., Llibre Vermell de Montserrat (14. Jh.)",
    "lst.h2":"Hören","lst.sub4":"Anonym, England, 13. Jh.",
    "cal.h2":"Termine","cal.my1":"Juni &middot; 2026","cal.my2":"Juli &middot; 2026","cal.my3":"Sept. &middot; 2026","cal.my4":"März &middot; 2026",
    "cal.p2":"Cantigas de Santa María &middot; St.-Casimir-Kirche, Vilnius","cal.p4":"Under the Greenwood &middot; London",
    "cal.tickets":"Karten","cal.past":"Vergangen",
    "con.h2":"Das Ensemble<br><em>einladen</em>",
    "con.blurb":"Das Ensemble ist für Konzertreihen, Festivals, liturgische Musik, private Anlässe und Hochzeiten verfügbar, mit Programmen, die auf Ihren Raum und Anlass zugeschnitten sind. Wir treten als Quartett oder in kleinerer Besetzung auf.",
    "con.k1":"Management","con.k2":"Telefon","con.k3":"Sitz in","con.k4":"Auf Tournee","con.v4":"Europa &amp; UK",
    "ft.small":"&copy; 2026 The Hawthorn Consort &middot; Mittelalter- &amp; Renaissance-Musik","ft.top":"Nach oben &uarr;"
  }
};

const i18nNodes=document.querySelectorAll('[data-i18n]');
i18nNodes.forEach(n=>{n.setAttribute('data-en',n.innerHTML)});
function applyLang(lang){
  if(lang!=='fr'&&lang!=='it'&&lang!=='de')lang='en';
  document.documentElement.lang=lang;
  const dict=I18N[lang];
  i18nNodes.forEach(n=>{
    const k=n.getAttribute('data-i18n');
    const v=(lang==='en')?n.getAttribute('data-en'):(dict&&dict[k]);
    n.innerHTML=(v==null||v==='')?n.getAttribute('data-en'):v;
  });
  document.querySelectorAll('#langs button').forEach(b=>b.classList.toggle('on',b.dataset.lang===lang));
  try{localStorage.setItem('lang',lang)}catch(e){}
}
document.querySelectorAll('#langs button').forEach(b=>{
  b.addEventListener('click',()=>applyLang(b.dataset.lang));
});
let savedLang='en';
try{savedLang=localStorage.getItem('lang')||'en'}catch(e){}
applyLang(savedLang);
