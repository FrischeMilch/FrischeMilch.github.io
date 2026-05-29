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
  heroDesc: "FÜR DIE BESTE GAMERIN & DUO PARTNERIN <3",

  heroAnnotation: {
    line1: "30 und",
    line2: "immer noch",
    line3: "our duo <3"
  },

  quoteRight: {
    text: "Hardstuck?\nNein.\nLifestyle.",
    from: "– dein Onkel & Duo"
  },

  quoteBottom: {
    text: "Es ist nicht nur ein Spiel.\nEs ist unsere Lobby.",
    from: "– seit gefühlt immer"
  },

  passiveAbility: {
    name: "Du machst jede Lobby einfach so.",
    tag: "PASSIVE"
  },
  ultimateAbility: {
    name: "Bring Chaos, Good Vibes und Wins.",
    tag: "ULT READY"
  },

  dailyMissions: [
    { icon: "🎯", text: "Spiele eine Runde mit uns",              progress: "0/1", xp: "+200 XP" },
    { icon: "💬", text: 'Sage: "einer low" ohne Ping',            progress: "0/1", xp: "+150 XP" },
    { icon: "💧", text: "Trinke genug Wasser (unwahrscheinlich)", progress: "0/2", xp: "+100 XP" },
  ],

  seasonEnd: "NIEMALS",
  seasonEndSub: "30. GEBURTSTAG 🌸",

  missions: [
    { title: "Geburtstags-Kick-off",  desc: "Feiere deinen 30. Geburtstag mit Freunden. Die Party ist der Start – nicht das Ende.",               icon: "🎂", type: "MISSION"   },
    { title: "Lucky Run",             desc: "Gewinne eine Runde Valorant – egal welcher Modus. Luck favors the prepared.",                        icon: "🎯", type: "MISSION"   },
    { title: "Morning Grind",         desc: "Steh an einem Wochentag vor 9 Uhr auf und schick deinen Freunden eine Nachricht als Beweis.",        icon: "⏰", type: "QUEST"     },
    { title: "Moonlight Lore-Check",  desc: "Erkläre jemandem die komplette Sailor Moon Lore in unter 2 Minuten. Improvisation erlaubt.",         icon: "🌙", type: "CHALLENGE" },
    { title: "Nachteulen-Protokoll",  desc: "Geh an einem Abend vor Mitternacht schlafen und schick deinen Freunden einen Screenshot als Beweis.",icon: "😴", type: "QUEST"     },
    { title: "Hydration Check",       desc: "Trink an einem Tag mindestens 2 Liter Wasser. Foto des leeren Glases als Beweis.",                   icon: "💧", type: "MISSION"   },
    { title: "Genshin-Session",       desc: "Spiele eine Genshin-Session von mindestens 1 Stunde am Stück.",                                      icon: "⚔️", type: "QUEST"     },
    { title: "Trivia-Domination",     desc: "Beantworte 5 Spongebob-Fragen korrekt – lass jemanden sie stellen.",                                icon: "🧠", type: "CHALLENGE" },
    { title: "Pokémon Fan-Art",       desc: "Zeig jemandem deinen Lieblings-Pokémon und erkläre warum er der beste ist.",                         icon: "⚡", type: "QUEST"     },
    { title: "Productivity Arc",      desc: "Erledige 3 Dinge von deiner To-Do-Liste an einem Tag. Screenshot Pflicht.",                          icon: "✅", type: "MISSION"   },
    { title: "1v4 Clutch",            desc: "Gewinne einen 1v4 Clutch in Valorant. Kein Glück – nur Skill. Clip in die Gruppe.",                  icon: "🔫", type: "CHALLENGE" },
    { title: "Slow Living Day",       desc: "Verbring einen Sonntag ohne Social Media. Berichte danach wie es war.",                              icon: "🐌", type: "QUEST"     },
    { title: "Wächter-Eid",           desc: "Stell zwei Figuren oder Objekte die dir wichtig sind zusammen auf und mach ein Foto davon.",         icon: "🐾", type: "MISSION"   },
    { title: "Öffentlichkeits-Buff",  desc: "Sag jemandem Fremdem heute ein echtes Kompliment.",                                                  icon: "💬", type: "QUEST"     },
    { title: "Gacha-Session",         desc: "Mach 10 Wishes in Genshin – mit Publikum.",                                                          icon: "🌸", type: "CHALLENGE" },
    { title: "Chef-Mode: ON",         desc: "Koch ein komplettes Abendessen selbst für dich oder andere – kein Bestellen.",                       icon: "🍳", type: "MISSION"   },
    { title: "Ace",                   desc: "Hol dir einen Ace in Valorant – alle 5 Kills alleine. Clip ist Pflicht, sonst zählt es nicht.",      icon: "💀", type: "CHALLENGE" },
    { title: "Versteck-Meister",      desc: "Versteck etwas im Zimmer von jemandem, ohne erwischt zu werden.",                                    icon: "🫣", type: "CHALLENGE" },
    { title: "Genshin-Co-op",         desc: "Spiele eine Co-op Session in Genshin mit jemandem zusammen.",                                        icon: "🎭", type: "MISSION"   },
    { title: "Lore-Präsentation",     desc: "Erkläre jemandem die Lore eines deiner Lieblingscharaktere in 60 Sekunden.",                        icon: "📖", type: "QUEST"     },
    { title: "Sweet Tooth",           desc: "Kauf Süßes aus einem Laden deiner Wahl für eine Gruppe – Überraschung.",                            icon: "🍬", type: "QUEST"     },
    { title: "Snack-Run",             desc: "Mach spontan einen Supermarkt-Run mit Freunden.",                                                    icon: "🛒", type: "MISSION"   },
    { title: "Unrated Stomp",         desc: "Gewinne eine Unrated-Runde mit mindestens 25 Kills. Statistiken als Beweis.",                        icon: "💪", type: "CHALLENGE" },
    { title: "Baking Arc",            desc: "Back etwas – egal was – und bring es mit wenn du Leute triffst.",                                    icon: "🧁", type: "QUEST"     },
    { title: "Flawless Round",        desc: "Gewinne eine Runde in Valorant ohne dass das eigene Team stirbt. Eine reicht. Clip Pflicht.",        icon: "☣️", type: "CHALLENGE" },
    { title: "Fresh Start",           desc: "Räum dein Zimmer auf und schick ein Vorher-Nachher-Foto in die Gruppe.",                             icon: "✨", type: "MISSION"   },
    { title: "Ranked Grind",          desc: "Spiel 5 Ranked-Runden am Stück – kein Aufgeben, egal was passiert.",                                icon: "🏆", type: "CHALLENGE" },
    { title: "Ocean Vibe",            desc: "Schau mit jemandem einen Ocean- oder Natur-Doku-Clip und tausch euch danach aus.",                  icon: "🌊", type: "QUEST"     },
    { title: "Guardian Protocol",     desc: "Spiel eine Runde Valorant als Defender – kein Angriff, nur halten.",                                icon: "🛡️", type: "MISSION"   },
    { title: "Transformation Arc",    desc: "Schick ein Foto mit einem deiner Lieblingsoutfits in die Gruppe.",                                  icon: "💫", type: "FINALE"    },
  ],

  rewards: [
    { name: "Doomlings Pack",                  desc: "Das Kartenspiel für alle die überleben wollen. Viel Glück bei der Apokalypse." },
    { name: "Lucky Socks",                     desc: "Dein neues Glücksbringer-Accessoire. Nie wieder ohne." },
    { name: "Gamer Tasse",                     desc: "Kaffee schmeckt besser wenn die Tasse geil ist. Wissenschaftlich bewiesen." },
    { name: "Artemis (Sailor Moon)",           desc: "Der weiße Kater-Wächter ist jetzt deins. Beschützt dich offiziell." },
    { name: "Nachtlicht",                      desc: "Für alle Nächte die zu dunkel oder zu lang sind." },
    { name: "Gaming Untersetzer",              desc: "Dein Setup-Upgrade. Kein Glas mehr ohne Style." },
    { name: "Genshin Sticker",                 desc: "Deploy where needed. Waifu-Dichte erhöhen." },
    { name: "Spongebob Trivial Pursuit",       desc: "Du weißt jetzt offiziell mehr über Bikini Bottom als nötig." },
    { name: "Funko Leafeon",                   desc: "Grass-type represent. Der süßeste Funko im Regal." },
    { name: "Penis Motivierer",                desc: "Für den täglichen Reminder. Du weißt was gemeint ist." },
    { name: "Valorant Keychain",               desc: "Offiziell Agent-zertifiziert. Schlüssel jetzt auch im Game." },
    { name: "Gary (Spongebob)",                desc: "Meow. Der loyalste Begleiter. Keine weiteren Kommentare." },
    { name: "Sailor Moon Luna",                desc: "Die schwarze Wächter-Katze. Mission complete." },
    { name: "Use Your Brain Pins",             desc: "Trag sie mit Stolz. Oder als Warnung an andere." },
    { name: "Genshin Schlüsselanhänger",       desc: "Gacha hat gewonnen. Immerhin bekommst du das hier umsonst." },
    { name: "Spongebob Gewürz",                desc: "Unbekannter Geschmack. Unbekannte Konsequenzen. Viel Glück." },
    { name: "Lindt Dubai Schoki",              desc: "Das Internet-Hype-Ding. Jetzt weißt du obs stimmt." },
    { name: "Hazbin Hotel Duck",               desc: "Ein Duck aus der Hölle. Passt perfekt." },
    { name: "Schlüsselanhänger Columbina",     desc: "Für alle Genshin-Fans die Columbina already slayed haben." },
    { name: "Schlüsselanhänger Silver Dragon", desc: "Drachen-Energie aktiviert. Offiziell." },
    { name: "Toffiffee White",                 desc: "Limitiert. Lecker. Sofort aufessen." },
    { name: "Bueno White",                     desc: "Klein aber fein. Weiße Schokolade gewinnt immer." },
    { name: "Doritos",                         desc: "Crunch-Steuer bezahlt. Snack verdient." },
    { name: "Backoblaten",                     desc: "Der Grundstoff für alles Süße das noch kommen wird." },
    { name: "Toxic Water",                     desc: "Sieht gefährlich aus. Schmeckt interessant. Viel Erfolg." },
    { name: "TicTacs",                         desc: "Minze als Belohnung. Für den Atem nach dem Doritos-Level." },
    { name: "Valorant Gutschein",              desc: "Points für was auch immer dein Herz begehrt. Du hast es verdient." },
    { name: "Jellyfish (3D Druck)",            desc: "Handgemacht. Einzigartig. Irgendwo stolz aufstellen." },
    { name: "Ancient Wächter (3D Druck)",      desc: "Bewacht ab jetzt dein Setup. Keine weiteren Fragen." },
    { name: "Book Page Holder (3D Druck)",     desc: "Handgemacht und einzigartig. Für das nächste Buch das du liest." },
  ],
};
