// ╔════════════════════════════════════════════════════════════════╗
// ║  🎮 NANA'S BATTLEPASS — KONFIGURATION                       ║
// ║                                                              ║
// ║  ⚡ NUR DIESE DATEI BEARBEITEN!                              ║
// ║  Die anderen Dateien (index.html, style.css, app.js)         ║
// ║  müssen NICHT angefasst werden.                              ║
// ║                                                              ║
// ║  Einfach die Texte unten anpassen, speichern, fertig.        ║
// ╚════════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ─── 👤 PERSÖNLICHE INFOS ─────────────────────
  name: "Nana",                          // Name des Geburtstagskinds
  age: 30,                               // Alter (= Anzahl Battlepass-Level)
  profileTitle: "Birthday Queen",        // Profilname oben rechts
  profileEmoji: "👸",                    // Profilbild-Emoji

  // ─── 🎬 HERO-BEREICH (großer Banner oben) ────
  heroSubtitle: "Happy Birthday!",       // Kursiver Untertitel
  heroDesc: "FÜR DIE BESTE GAMERIN & DUO PARTNERIN <3",

  // Schwebender Text neben der Charakter-Silhouette
  heroAnnotation: {
    line1: "30 und",
    line2: "immer noch",
    line3: "our duo <3"
  },

  // ─── 💬 ZITATE ────────────────────────────────
  // Rechte Spalte (mit Medaille)
  quoteRight: {
    text: "Hardstuck?\nNein.\nLifestyle.",
    from: "– dein Onkel & Duo"
  },

  // Unteres Panel (neben Valorant-Logo)
  quoteBottom: {
    text: "Es ist nicht nur ein Spiel.\nEs ist unsere Lobby.",
    from: "– seit gefühlt immer"
  },

  // ─── ⚔️ ABILITIES (unteres Panel) ────────────
  passiveAbility: {
    name: "Du machst jede Lobby einfach so.",
    tag: "PASSIVE"
  },
  ultimateAbility: {
    name: "Bring Chaos, Good Vibes und Wins.",
    tag: "ULT READY"
  },

  // ─── ⏰ DAILY MISSIONS (unteres Panel) ───────
  // Lustige "tägliche Aufgaben" zur Deko
  dailyMissions: [
    { icon: "🎯", text: "Spiele eine Runde mit uns",              progress: "0/1", xp: "+200 XP" },
    { icon: "💬", text: 'Sage: "einer low" ohne Ping',            progress: "0/1", xp: "+150 XP" },
    { icon: "💧", text: "Trinke genug Wasser (unwahrscheinlich)", progress: "0/2", xp: "+100 XP" },
  ],

  // ─── 📅 SEASON-ENDE (unteres Panel) ──────────
  seasonEnd: "NIEMALS",
  seasonEndSub: "30. GEBURTSTAG 🎂",


  // ╔════════════════════════════════════════════════════════════╗
  // ║  🎯 MISSIONEN (30 Stück)                                  ║
  // ║                                                            ║
  // ║  Jede Mission hat:                                         ║
  // ║    title  → Name der Mission                               ║
  // ║    desc   → Kurze Beschreibung (was man tun muss)          ║
  // ║    icon   → Emoji                                          ║
  // ║    type   → Label (MISSION, CHALLENGE, QUEST, FINALE)      ║
  // ║                                                            ║
  // ║  Nana kann die Missionen in beliebiger Reihenfolge         ║
  // ║  abschließen. Jeder Abschluss = nächstes Level.            ║
  // ╚════════════════════════════════════════════════════════════╝
  missions: [
    { title: "Gemeinsames Frühstück",      desc: "Frühstückt zusammen – Café oder Pancakes zuhause.",              icon: "🥞", type: "MISSION" },
    { title: "Film-Nacht",                 desc: "Einen Film schauen – Nana darf wählen.",                          icon: "🎬", type: "MISSION" },
    { title: "Spaziergang",                desc: "30 Minuten an der frischen Luft spazieren gehen.",                icon: "🌿", type: "QUEST" },
    { title: "Koch-Challenge",             desc: "Kocht ein neues Rezept, das ihr noch nie probiert habt.",         icon: "👨‍🍳", type: "CHALLENGE" },
    { title: "Foto-Session",               desc: "Mindestens 10 Fotos – eines muss als Profilbild taugen.",        icon: "📸", type: "MISSION" },
    { title: "Board Game Night",           desc: "Brettspiel bis zum Ende – kein Aufgeben erlaubt!",               icon: "🎲", type: "CHALLENGE" },
    { title: "Karaoke",                    desc: "Mindestens einen Song – egal wie schief.",                        icon: "🎤", type: "MISSION" },
    { title: "Spontan-Ausflug",            desc: "Ziel wird erst im Auto verraten.",                                icon: "🚗", type: "QUEST" },
    { title: "Playlist erstellen",         desc: "Gemeinsame Playlist für die nächste Party.",                      icon: "🎵", type: "MISSION" },
    { title: "Brief schreiben",            desc: "Jeder schreibt der anderen einen handgeschriebenen Brief.",       icon: "✉️",  type: "QUEST" },
    { title: "Workout zusammen",           desc: "Joggen, Gym, Yoga – Hauptsache aktiv.",                          icon: "💪", type: "CHALLENGE" },
    { title: "Lieblingsrestaurant",        desc: "Essen in Nanas Lieblingsrestaurant.",                             icon: "🍽️", type: "MISSION" },
    { title: "Museum / Ausstellung",       desc: "Gemeinsam ein Museum oder eine Ausstellung besuchen.",            icon: "🏛️", type: "QUEST" },
    { title: "Spa-Tag",                    desc: "Einen entspannten Spa- oder Wellness-Tag gönnen.",                icon: "🛁", type: "MISSION" },
    { title: "Online-Kurs",               desc: "Zusammen einen Online-Kurs oder Workshop machen.",                icon: "💻", type: "QUEST" },
    { title: "Konzert / Live-Event",       desc: "Konzert, Festival oder anderes Live-Event besuchen.",             icon: "🎸", type: "MISSION" },
    { title: "Backen",                     desc: "Gemeinsam Nanas Lieblingskuchen backen.",                         icon: "🎂", type: "CHALLENGE" },
    { title: "Picknick",                   desc: "Picknick im Park – mit selbst gemachtem Essen.",                  icon: "🧺", type: "QUEST" },
    { title: "Escape Room",               desc: "Zusammen einen Escape Room meistern.",                            icon: "🔐", type: "CHALLENGE" },
    { title: "Bowling",                    desc: "Eine Runde Bowling – letztes Spiel entscheidet.",                 icon: "🎳", type: "MISSION" },
    { title: "Craft-Abend",               desc: "Basteln oder malen – etwas Kreatives schaffen.",                  icon: "🎨", type: "QUEST" },
    { title: "Sonnenuntergang",            desc: "Gemeinsam einen Sonnenuntergang anschauen.",                      icon: "🌅", type: "MISSION" },
    { title: "Road Trip",                  desc: "Einen kleinen Road Trip planen und unternehmen.",                 icon: "🗺️", type: "QUEST" },
    { title: "Spielplatz",                 desc: "Spielplatz besuchen und nochmal Kinder sein.",                    icon: "🛝", type: "MISSION" },
    { title: "Kino",                       desc: "Ins Kino – Nana wählt den Film.",                                 icon: "🍿", type: "MISSION" },
    { title: "Kaffee & Kuchen",            desc: "Gemütlicher Café-Besuch mit mindestens einem Stück Kuchen.",      icon: "☕", type: "QUEST" },
    { title: "Tanzen",                     desc: "Kurs, Club oder Wohnzimmer – Hauptsache tanzen.",                 icon: "💃", type: "CHALLENGE" },
    { title: "Tierheim-Besuch",            desc: "Tierheim besuchen und Tiere knuddeln.",                           icon: "🐾", type: "QUEST" },
    { title: "Freiwilligenarbeit",         desc: "Gemeinsam bei einer gemeinnützigen Aktion helfen.",               icon: "❤️", type: "MISSION" },
    { title: "FINALE: Geburtstags-Party",  desc: "Die legendäre 30th-Birthday-Party – alles darf, nichts muss!",   icon: "🎉", type: "FINALE" },
  ],


  // ╔════════════════════════════════════════════════════════════╗
  // ║  🎁 BELOHNUNGEN (30 Stück)                                ║
  // ║                                                            ║
  // ║  Belohnung Nr. 1 = wird bei Level 1 vergeben,              ║
  // ║  Nr. 2 = bei Level 2, usw.                                 ║
  // ║                                                            ║
  // ║  ⚠ Nana sieht die Belohnung ERST nachdem sie auf die      ║
  // ║    Geschenkbox tippt – vorher ist alles verdeckt!          ║
  // ╚════════════════════════════════════════════════════════════╝
  rewards: [
    { name: "Mystery Sticker Pack",        desc: "5 handverlesene Sticker für dein nächstes Abenteuer." },
    { name: "Lieblings-Snack Box",         desc: "Eine Box voller Lieblingssnacks – zusammengestellt mit Liebe." },
    { name: "Gutschein: Lieblingscafé",    desc: "Kaffee & Kuchen auf Kosten des Hauses." },
    { name: "Playlist: Top 30",            desc: "30 Songs, die eure Freundschaft definieren." },
    { name: "Foto-Collage",               desc: "Handgemachte Foto-Collage mit euren schönsten Momenten." },
    { name: "Buch-Überraschung",           desc: "Das Buch, das du unbedingt lesen musst – bereits besorgt." },
    { name: "Kino-Abend Paket",            desc: "Popcorn, Getränke, Decke – perfekter Filmabend zuhause." },
    { name: "Spa-Gutschein",              desc: "Für einen entspannten Wellness-Tag zu zweit." },
    { name: "Geheimes Rezeptbuch",         desc: "5 handgeschriebene Lieblingsrezepte nur für dich." },
    { name: "Lieblingssüßigkeit ×10",      desc: "Zehnfach. Weil einmal nicht reicht." },
    { name: "Überraschungs-Ausflug",       desc: "Datum und Ort werden dir persönlich verraten." },
    { name: "Selbstgemachtes Geschenk",    desc: "Etwas, das mit Herz gemacht wurde." },
    { name: "Netflix & Chill Paket",       desc: "Serienempfehlung, Snacks und ein gemütlicher Abend." },
    { name: "Geburtstags-Muffins",         desc: "Frisch gebacken, mit Liebe verziert – speziell für dich." },
    { name: "Kreativ-Kit",                desc: "Alles für einen kreativen Abend." },
    { name: "Gemeinsame Playlist Vol. 2",  desc: "Die Fortsetzung – noch besser als das Original." },
    { name: "Überraschungsbrief",          desc: "Ein Brief, der jetzt geöffnet werden darf." },
    { name: "Restaurant-Gutschein",        desc: "Für euer nächstes gemeinsames Essen." },
    { name: "Foto-Shooting Voucher",       desc: "Ein professionelles Shooting – ihr beide, bester Look." },
    { name: "Escape Room Buchung",         desc: "Bereits reserviert – Datum folgt persönlich." },
    { name: "Handmade Schmuck",            desc: "Ein handgefertigtes Accessoire, das an euch erinnert." },
    { name: "Sunset Picknick Box",         desc: "Alles für ein romantisches Sonnenuntergangs-Picknick." },
    { name: "Road Trip Soundtrack",        desc: "Perfekte Playlist + Snack-Paket für den nächsten Trip." },
    { name: "Vintage Fund",               desc: "Ein curated Vintage-Stück, ausgesucht für dich." },
    { name: "Kino-Gutschein ×2",           desc: "Zwei Tickets für euren nächsten Kinoabend." },
    { name: "Wellness Box",               desc: "Gesichtsmaske, Badezusatz, Kerze – perfekte Selbstfürsorge." },
    { name: "Dance Lesson Voucher",        desc: "Eine gemeinsame Tanzstunde – Stil wählst du." },
    { name: "Memory Book Seite",           desc: "Eine Seite in eurem Erinnerungsbuch – ausgefüllt von mir." },
    { name: "Wunsch frei ⭐",              desc: "Ein fairer, erfüllbarer Wunsch – du wählst, ich mache." },
    { name: "🏆 LEGENDÄRE ÜBERRASCHUNG",  desc: "Alle 30 Levels geschafft! Die finale Überraschung wird dir persönlich übergeben." },
  ],
};
