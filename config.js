// ╔════════════════════════════════════════════════════════════════╗
// ║  🌸 NANA'S BATTLEPASS — KONFIGURATION                       ║
// ║                                                              ║
// ║  ⚡ NUR DIESE DATEI BEARBEITEN!                              ║
// ║  Die anderen Dateien müssen NICHT angefasst werden.          ║
// ╚════════════════════════════════════════════════════════════════╝

const CONFIG = {

  name: "Nana",
  age: 30,
  profileTitle: "Birthday Queen",
  profileEmoji: "👸",

  heroSubtitle: "Happy Birthday!",
  heroDesc: "Dein persönlicher Battlepass - 30 Stufen, 30 Missionen, 30 Rewards",

  heroAnnotation: {
    line1: "Guild Veteran",
    line2: "Bufft alle Mitspieler in ihrer Nähe",
    line3: "Beschwört gute Laune für die gesamte Gruppe."
  },

  quoteRight: {
    text: "Manche Leute machen jede Lobby besser",
    from: "und du gehörst dazu"
  },

  quoteBottom: {
    text: "Seit Jahren MVP in jeder Lobby. ",
    from: "Danke für die unzähligen Games, Gespräche und Carry-Momente"
  },

  passiveAbility: {
    name: "Erhöht die Stimmung des gesamten Teams.",
    tag: "PASSIVE"
  },
  ultimateAbility: {
    name: "Bring Chaos, Good Vibes und Wins.",
    tag: "ULTIMATE"
  },

dailyMissions: [
  {
    icon: "🎂",
    text: "Level 30 erreichen",
    progress: "1/1",
    xp: "+300 XP"
  },
  {
    icon: "🎮",
    text: "Mit dem Duo eine Runde spielen",
    progress: "0/1",
    xp: "+200 XP"
  },
  {
    icon: "🏆",
    text: "Geburtstag genießen",
    progress: "0/1",
    xp: "+500 XP"
  }
],

  seasonEnd: "NIEMALS",
  seasonEndSub: "30. GEBURTSTAG 🌸",

  missions: [
    { title: "Geburtstags-Kick-off",  desc: "Feiere deinen 30. Geburtstag mit Freunden. Die Party ist der Start – nicht das Ende.",                        icon: "🎂", type: "MISSION"   },
    { title: "Lucky Run",             desc: "Gewinne eine Runde Valorant – egal welcher Modus. Luck favors the prepared.",                               icon: "🎯", type: "MISSION"   },
    { title: "Morning Grind",         desc: "Steh an einem Wochentag vor 8 Uhr auf und schick deinen Freunden eine Nachricht als Beweis.",               icon: "⏰", type: "QUEST"     },
    { title: "Moonlight Lore-Check",  desc: "Erkläre jemandem die komplette Sailor Moon Lore in unter 2 Minuten. Improvisation erlaubt.",                icon: "🌙", type: "CHALLENGE" },
    { title: "Nachteulen-Protokoll",  desc: "Geh an einem Abend vor Mitternacht schlafen und schick deinen Freunden einen Screenshot als Beweis.",       icon: "😴", type: "QUEST"     },
    { title: "Hydration Check",       desc: "Trink an einem Tag mindestens 2 Liter Wasser.",                                                              icon: "💧", type: "MISSION"   },
    { title: "Genshin-Session",       desc: "Spiele eine Genshin-Session von mindestens 1 Stunde am Stück.",                                             icon: "⚔️", type: "QUEST"     },
    { title: "Trivia-Domination",     desc: "Beantworte 5 Spongebob-Fragen korrekt – lass jemanden sie stellen.",                                       icon: "🧠", type: "CHALLENGE" },
    { title: "Pokémon Fan-Art",       desc: "Zeig jemandem dein Lieblings-Pokémon und erkläre warum es das Beste ist.",                                  icon: "⚡", type: "QUEST"     },
    { title: "Productivity Arc",      desc: "Erledige 3 Dinge von deiner To-Do-Liste an einem Tag. Screenshot Pflicht.",                                 icon: "✅", type: "MISSION"   },
    { title: "1v3 Clutch",            desc: "Gewinne einen 1v2 Clutch in Valorant. Kein Glück – nur Skill. Clip in die Gruppe.",                         icon: "🔫", type: "CHALLENGE" },
    { title: "Slow Living Day",       desc: "Verbring einen Tag ohne Social Media. Berichte danach wie es war.",                                         icon: "🐌", type: "QUEST"     },
    { title: "Wächter-Eid",           desc: "Stell zwei Figuren oder Objekte die dir wichtig sind zusammen auf und mach ein Foto davon.",                icon: "🐾", type: "MISSION"   },
    { title: "Freundlichkeits-Buff",  desc: "Schleim dich bei jemandem ein.",                                                                            icon: "💬", type: "QUEST"     },
    { title: "Gacha-Session",         desc: "Mach 10 Wishes in Genshin – mit Publikum.",                                                                 icon: "🌸", type: "CHALLENGE" },
    { title: "Chef-Mode: ON",         desc: "Koch ein komplettes Abendessen selbst für dich oder andere – kein Bestellen.",                              icon: "🍳", type: "MISSION"   },
    { title: "Ace",                   desc: "Hol dir ein Ace in Valorant – alle 5 Kills alleine. Egal in welchem Modus. Clip ist Pflicht, sonst zählt es nicht.", icon: "💀", type: "CHALLENGE" },
    { title: "Versteck-Meister",      desc: "Suche das Paket ohne Nummer.",                                                                              icon: "🫣", type: "CHALLENGE" },
    { title: "Genshin-Co-op",         desc: "Spiele eine Co-op Session in Genshin mit jemandem zusammen.",                                               icon: "🎭", type: "MISSION"   },
    { title: "Lore-Präsentation",     desc: "Erkläre jemandem die Lore eines deiner Lieblingscharaktere in 60 Sekunden.",                               icon: "📖", type: "QUEST"     },
    { title: "Sweet Tooth",           desc: "Kauf Süßes aus einem Laden deiner Wahl für dich und deine Freunde – als Überraschung.",                    icon: "🍬", type: "QUEST"     },
    { title: "Snack-Run",             desc: "Mach spontan einen Supermarkt-Run mit Freunden.",                                                           icon: "🛒", type: "MISSION"   },
    { title: "Comp Stomp",            desc: "Gewinne eine Comp-Runde mit mindestens 20 Kills. Statistiken als Beweis.",                                  icon: "💪", type: "CHALLENGE" },
    { title: "Baking Arc",            desc: "Back etwas – egal was – und bring es mit wenn du Leute triffst.",                                          icon: "🧁", type: "QUEST"     },
    { title: "Flawless Round",        desc: "Gewinne eine Runde in Valorant ohne dass das eigene Team stirbt. Eine reicht. Clip Pflicht.",               icon: "☣️", type: "CHALLENGE" },
    { title: "Fresh Start",           desc: "Räum deinen Schreibtisch auf und schick ein Vorher-Nachher-Foto in die Gruppe.",                           icon: "✨", type: "MISSION"   },
    { title: "Ranked Grind",          desc: "Spiel 5 Ranked-Runden am Stück – kein Aufgeben, egal was passiert.",                                       icon: "🏆", type: "CHALLENGE" },
    { title: "Ocean Vibe",            desc: "Schau mit jemandem einen Ocean- oder Natur-Doku-Clip und tausch euch danach aus.",                         icon: "🌊", type: "QUEST"     },
    { title: "Guardian Protocol",     desc: "Spiel eine Runde Valorant als Defender – halte einen Angle und bewege dich erst, wenn der Spike geplantet wurde.", icon: "🛡️", type: "MISSION"   },
    { title: "Transformation Arc",    desc: "Schick ein Foto mit einem deiner Lieblingsoutfits in die Gruppe.",                                         icon: "💫", type: "FINALE"    },
  ],

  rewards: [
    { name: "Cypher",                         desc: "Dein Agent. Dein Main. Ab jetzt auch im Regal vertreten." },
    { name: "Doomlings Pack",                 desc: "Das Kartenspiel für alle die überleben wollen. Viel Glück bei der Apokalypse." },
    { name: "Gamer Tasse",                    desc: "Kaffee schmeckt besser wenn die Tasse geil ist. Wissenschaftlich bewiesen." },
    { name: "Artemis (Sailor Moon)",          desc: "Der weiße Kater-Wächter ist jetzt deins. Beschützt dich offiziell." },
    { name: "Nachtlicht",                     desc: "Für alle Nächte die zu dunkel oder zu lang sind." },
    { name: "Holy Packs",                     desc: "Göttliche Energie in Tütenform. Aufreißen und genießen." },
    { name: "Genshin Anhänger",               desc: "Groß genug um aufzufallen. Waifu-Dichte erhöhen." },
    { name: "Spongebob Trivia",               desc: "Du weißt jetzt offiziell mehr über Bikini Bottom als nötig." },
    { name: "Pokémon Funko",                  desc: "Der süßeste Funko im Regal. Gotta catch em all." },
    { name: "Bookmark Dragon",               desc: "Ein Drache bewacht ab jetzt deine Buchseiten." },
    { name: "Valorant Keychains",             desc: "Offiziell Agent-zertifiziert. Schlüssel jetzt auch im Game." },
    { name: "Toffifee",                       desc: "Limitiert. Lecker. Sofort aufessen." },
    { name: "Sailor Moon Luna",               desc: "Die schwarze Wächter-Katze. Mission complete." },
    { name: "Gary (Spongebob)",               desc: "Meow. Der loyalste Begleiter. Keine weiteren Kommentare." },
    { name: "Columbina Anhänger",             desc: "Für alle Genshin-Fans die Columbina already slayed haben." },
    { name: "Spongebob Gewürz",               desc: "Unbekannter Geschmack. Unbekannte Konsequenzen. Viel Glück." },
    { name: "Gutschein",                      desc: "Für was auch immer dein Herz begehrt. Du hast es verdient." },
    { name: "Bueno White",                    desc: "Klein aber fein. Weiße Schokolade gewinnt immer." },
    { name: "Genshin Sticker",                desc: "Deploy where needed. Waifu-Dichte erhöhen." },
    { name: "Alistar Tubbz",                  desc: "Der Bulle im Entenkostüm. Absolut legendär." },
    { name: "Penis Motivierer",               desc: "Für den täglichen Reminder. Du weißt was gemeint ist." },
    { name: "Doritos",                        desc: "Crunch-Steuer bezahlt. Snack verdient." },
    { name: "Lucky Socks",                    desc: "Dein neues Glücksbringer-Accessoire. Nie wieder ohne." },
    { name: "Backoblaten",                    desc: "Der Grundstoff für alles Süße das noch kommen wird." },
    { name: "Wächter (3D Druck)",             desc: "Bewacht ab jetzt dein Setup. Keine weiteren Fragen." },
    { name: "Einhornbad",                     desc: "Badewanne plus Einhorn-Vibes. Selbstpflege auf einem neuen Level." },
    { name: "Tee",                            desc: "Für die gemütlichen Abende nach dem Ranked-Grind." },
    { name: "Use Your Brain Pins",            desc: "Trag sie mit Stolz. Oder als Warnung an andere." },
    { name: "TicTacs",                        desc: "Minze als Belohnung. Für den Atem nach dem Doritos-Level." },
    { name: "Book Page Holder (3D Druck)",    desc: "Handgemacht und einzigartig. Für das nächste Buch das du liest." },
  ],
};
