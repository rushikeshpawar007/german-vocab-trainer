// German vocab database — single source of truth.
// Updated by the /log-words skill after each learning chat.
// Schema per entry:
//   id: stable slug (the lemma, lowercase, umlauts kept)
//   word: dictionary form (nouns include article)
//   forms: key inflected forms (verbs: 3sg present, präteritum, perfect)
//   type: "verb" | "noun" | "adjective" | "adverb" | "phrase"
//   translations: English meanings, most common first
//   examples: [{de, en}]
//   facts: usage notes, false friends, register, related words
//   level: CEFR estimate ("A1".."C2")
//   difficulty: 1-5 static estimate (frequency, irregularity, false-friend risk)
//   tags: free-form
//   dates_searched: ISO dates the user asked about it
//   search_count: times asked
//   sources: ids of SOURCES entries the word came from ([] = asked without a source)

// Where words came from (videos, articles, ...). label = short name for chips/card-backs.
const SOURCES = [
  {
    id: "yt-qGK1d45XG_w",
    type: "youtube",
    title: "Slow German – Easy Listening (A2-B1) | Mein Kulturschock in Deutschland",
    label: "Mein Kulturschock",
    channel: "Learn German With Falk",
    url: "https://www.youtube.com/watch?v=qGK1d45XG_w",
    thumb: "https://i.ytimg.com/vi/qGK1d45XG_w/hqdefault.jpg",
    added: "2026-08-18"
  },
  {
    id: "alltag",
    type: "life",
    title: "Alltag & Büro",
    label: "Alltag & Büro",
    channel: "Wörter aus dem täglichen Leben — Büro, Straße, Gespräche",
    url: "",
    thumb: "",
    added: "2026-08-18"
  }
];

const VOCAB = [
  {
    id: "vorstellen",
    word: "vorstellen",
    forms: ["stellt vor", "stellte vor", "hat vorgestellt"],
    type: "verb",
    translations: ["to introduce", "to imagine (sich + dative)", "to present"],
    examples: [
      { de: "Darf ich mich vorstellen?", en: "May I introduce myself?" },
      { de: "Ich kann mir das vorstellen.", en: "I can imagine that." },
      { de: "Die Firma stellt ein neues Produkt vor.", en: "The company presents a new product." }
    ],
    facts: "Separable verb (stellen ... vor). Case matters: sich vorstellen (accusative) = introduce oneself; sich etwas vorstellen (dative) = imagine something.",
    level: "A2",
    difficulty: 3,
    tags: ["separable", "reflexive", "case-sensitive"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "kriegen",
    word: "kriegen",
    forms: ["kriegst", "kriegt", "kriegte", "hat gekriegt"],
    type: "verb",
    translations: ["to get, to receive (colloquial)"],
    examples: [
      { de: "Du kriegst ein Geschenk.", en: "You're getting a present." },
      { de: "Kriegst du das hin?", en: "Can you manage that?" },
      { de: "Ich kriege Angst.", en: "I'm getting scared." }
    ],
    facts: "Everyday informal equivalent of bekommen — use bekommen in writing and formal speech. Common in fixed phrases: einen Anruf kriegen (get a call), etwas hinkriegen (manage something).",
    level: "A2",
    difficulty: 2,
    tags: ["colloquial", "synonym-pair"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "eigen",
    word: "eigen",
    forms: ["eigener", "eigene", "eigenes", "eigenen"],
    type: "adjective",
    translations: ["own (one's own)"],
    examples: [
      { de: "Er hat sein eigenes Geschäft.", en: "He has his own business." },
      { de: "Ich habe es mit meinen eigenen Augen gesehen.", en: "I saw it with my own eyes." },
      { de: "auf eigenen Wunsch", en: "at one's own request" }
    ],
    facts: "Declines like a normal adjective — 'eigenen' is the form after articles in masc. accusative, all dative singular, and plural. Related: eigentlich = actually; das Eigentum = property.",
    level: "A2",
    difficulty: 2,
    tags: ["declension"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "glueck-gehabt",
    word: "Glück gehabt",
    forms: [],
    type: "phrase",
    translations: ["got lucky!", "that was lucky / lucky escape"],
    examples: [
      { de: "Nochmal Glück gehabt!", en: "Lucky escape!" },
      { de: "Da hast du Glück gehabt.", en: "You were lucky there." }
    ],
    facts: "Shortened exclamation of 'Du hast Glück gehabt'. Said after a close call. das Glück means both luck AND happiness; glücklich = happy; Viel Glück! = Good luck!",
    level: "A2",
    difficulty: 1,
    tags: ["exclamation", "spoken"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "bekommen",
    word: "bekommen",
    forms: ["bekommt", "bekam", "hat bekommen"],
    type: "verb",
    translations: ["to get, to receive"],
    examples: [
      { de: "Ich habe einen Brief bekommen.", en: "I got a letter." },
      { de: "Was bekommen Sie?", en: "What'll you have? (shop/restaurant)" },
      { de: "Sie bekommt ein Kind.", en: "She's having a baby." }
    ],
    facts: "Classic false friend: does NOT mean 'to become' (that's werden). Strong verb, no ge- in the participle because of the be- prefix: bekommen — bekam — hat bekommen. Neutral-register partner of colloquial kriegen.",
    level: "A1",
    difficulty: 3,
    tags: ["false-friend", "strong-verb", "synonym-pair"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "erfassen",
    word: "erfassen",
    forms: ["erfasst", "erfasste", "hat erfasst"],
    type: "verb",
    translations: ["to record / capture (data)", "to grasp, to comprehend", "to seize / catch (physically)"],
    examples: [
      { de: "Alle Kunden sind im System erfasst.", en: "All customers are logged in the system." },
      { de: "Er hat die Situation sofort erfasst.", en: "He grasped the situation immediately." },
      { de: "Das Auto wurde von der Lawine erfasst.", en: "The car was caught by the avalanche." }
    ],
    facts: "Ubiquitous in software and bureaucracy: die Datenerfassung = data entry/collection. Three senses: record data, mentally grasp, physically seize (Panik erfasste die Menge).",
    level: "B2",
    difficulty: 4,
    tags: ["office-german", "polysemous"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "schlimm",
    word: "schlimm",
    forms: ["schlimmer", "am schlimmsten"],
    type: "adjective",
    translations: ["bad, serious, severe"],
    examples: [
      { de: "Das ist nicht schlimm.", en: "It's no big deal. / Never mind." },
      { de: "Es war schlimmer, als ich dachte.", en: "It was worse than I thought." },
      { de: "eine schlimme Erkältung", en: "a nasty cold" }
    ],
    facts: "schlimm = grave/troubling situations; schlecht = bad quality or ability. A boring film is schlecht; a diagnosis is schlimm. 'Das ist nicht schlimm' is the standard reply after an apology.",
    level: "A2",
    difficulty: 2,
    tags: ["near-synonym", "spoken"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "mittlerweile",
    word: "mittlerweile",
    forms: [],
    type: "adverb",
    translations: ["by now", "meanwhile", "these days"],
    examples: [
      { de: "Mittlerweile spricht sie fließend Deutsch.", en: "By now she speaks German fluently." },
      { de: "Er wohnt mittlerweile in Berlin.", en: "He lives in Berlin these days." },
      { de: "Mittlerweile bin ich daran gewöhnt.", en: "I'm used to it by now." }
    ],
    facts: "Marks that time has passed and something changed. Nearly interchangeable with inzwischen. 'In the meantime, do X' is rather in der Zwischenzeit; unterdessen is literary.",
    level: "B1",
    difficulty: 3,
    tags: ["time-adverb", "synonym-pair"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "abwesenheit",
    word: "die Abwesenheit",
    forms: ["die Abwesenheiten"],
    type: "noun",
    translations: ["absence"],
    examples: [
      { de: "in meiner Abwesenheit", en: "in my absence" },
      { de: "Er wurde in Abwesenheit verurteilt.", en: "He was convicted in absentia." }
    ],
    facts: "From abwesend (absent) + -heit. Opposite: die Anwesenheit (presence, attendance; Anwesenheitspflicht = mandatory attendance). Abwesenheitsnotiz = out-of-office message. abwesend also means absent-minded: Er wirkte abwesend.",
    level: "B1",
    difficulty: 3,
    tags: ["office-german", "opposite-pair", "feminine"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "veraendern",
    word: "verändern",
    forms: ["verändert", "veränderte", "hat verändert"],
    type: "verb",
    translations: ["to change, to transform"],
    examples: [
      { de: "Die Stadt hat sich sehr verändert.", en: "The city has changed a lot." },
      { de: "Du hast dich verändert.", en: "You've changed." },
      { de: "Das verändert alles.", en: "That changes everything." }
    ],
    facts: "Reflexive sich verändern = change by itself/oneself. Contrast with ändern: ändern is the small concrete edit (a plan, an appointment); verändern is deeper transformation of nature or appearance. Nouns: die Änderung (modification) vs die Veränderung (shift, change).",
    level: "B1",
    difficulty: 3,
    tags: ["reflexive", "near-synonym"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "drehen",
    word: "drehen",
    forms: ["dreht", "drehte", "hat gedreht"],
    type: "verb",
    translations: ["to turn, to rotate", "to shoot (a film)", "(sich) to spin"],
    examples: [
      { de: "Er hat den Schlüssel gedreht.", en: "He turned the key." },
      { de: "Der Film wurde in München gedreht.", en: "The movie was filmed in Munich." },
      { de: "Mir dreht sich der Kopf.", en: "My head is spinning." }
    ],
    facts: "Three everyday senses: physical rotation, filming (einen Film drehen — the standard verb, not filmen), and dizziness (sich drehen). Idiom: durchdrehen = to freak out (Er dreht durch).",
    level: "A2",
    difficulty: 3,
    tags: ["polysemous", "idiom"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "zu-tun-haben-mit",
    word: "etwas zu tun haben mit",
    forms: ["hiermit zu tun", "damit zu tun"],
    type: "phrase",
    translations: ["to have (something) to do with"],
    examples: [
      { de: "Was hat das hiermit zu tun?", en: "What does that have to do with this?" },
      { de: "Ich habe damit nichts zu tun.", en: "I have nothing to do with that." }
    ],
    facts: "Fixed pattern with the mit-slot filled by fused pronoun+preposition words: hiermit (with this), damit (with that), womit (with what). hiermit also opens formal letters: Hiermit bestätige ich... = I hereby confirm...",
    level: "B1",
    difficulty: 3,
    tags: ["fixed-expression", "pronominal-adverb"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "geschichte",
    word: "die Geschichte",
    forms: ["die Geschichten"],
    type: "noun",
    translations: ["history", "story"],
    examples: [
      { de: "Ich lerne gern Geschichte.", en: "I like learning history." },
      { de: "Erzähl mir eine Geschichte!", en: "Tell me a story!" },
      { de: "Das ist eine lange Geschichte.", en: "That's a long story." }
    ],
    facts: "One word for both 'history' and 'story'. Plural Geschichten = stories; 'history' as a field has no plural. Related: der Geschichtsunterricht (history class), geschichtlich (historical). Borrowed 'die Story' exists for casual film/book plots.",
    level: "A2",
    difficulty: 2,
    tags: ["feminine", "polysemous"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ein-paar",
    word: "ein paar",
    forms: ["nach ein paar Minuten", "in ein paar Minuten"],
    type: "phrase",
    translations: ["a few, a couple of"],
    examples: [
      { de: "Nach ein paar Minuten kam er zurück.", en: "After a few minutes he came back." },
      { de: "Ruf mich in ein paar Minuten an.", en: "Call me in a few minutes." }
    ],
    facts: "Lowercase paar = a few (uninflected); capitalized ein Paar = a pair/couple (ein Paar Schuhe). nach takes dative for time relations; in ein paar Minuten is the future-facing counterpart.",
    level: "A1",
    difficulty: 2,
    tags: ["fixed-expression", "spelling-trap", "time"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "nach-vorne",
    word: "nach vorne",
    forms: ["nach hinten", "vorn(e)"],
    type: "phrase",
    translations: ["forward, to the front"],
    examples: [
      { de: "Er ist nach vorne gegangen.", en: "He went/stepped to the front." },
      { de: "Bitte nach vorne gehen!", en: "Please move to the front!" }
    ],
    facts: "Fixed directional phrase: nach (toward) + vorne (the front). Counterpart: nach hinten (to the back). vorn is the slightly more written variant of vorne; vorwärts = forwards in the sense of motion/progress. gehen takes sein in the perfect: ist gegangen.",
    level: "A2",
    difficulty: 2,
    tags: ["directional", "fixed-expression"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "unterhalten",
    word: "unterhalten",
    forms: ["unterhält", "unterhielt", "hat unterhalten"],
    type: "verb",
    translations: ["(sich) to chat, converse", "to entertain", "to support/maintain (financially)"],
    examples: [
      { de: "Wir haben uns gut unterhalten.", en: "We had a nice chat." },
      { de: "Der Clown unterhält die Kinder.", en: "The clown entertains the children." },
      { de: "Er muss seine Familie unterhalten.", en: "He has to support his family." }
    ],
    facts: "Three senses: reflexive sich unterhalten = to chat; non-reflexive = to entertain; also = to financially support or physically maintain. unter- is inseparable here, so no ge- in the participle. Noun: die Unterhaltung = conversation AND entertainment.",
    level: "B1",
    difficulty: 4,
    tags: ["reflexive", "inseparable", "polysemous", "strong-verb"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "aufbauen",
    word: "aufbauen",
    forms: ["baut auf", "baute auf", "hat aufgebaut", "aufzubauen"],
    type: "verb",
    translations: ["to build up, construct, set up, establish"],
    examples: [
      { de: "Er versucht, eine Firma aufzubauen.", en: "He's trying to build up a company." },
      { de: "Es ist schwer, Vertrauen aufzubauen.", en: "It's hard to build trust." },
      { de: "Wir haben das Zelt aufgebaut.", en: "We put up the tent." }
    ],
    facts: "Separable verb; in the zu-infinitive zu slots between prefix and stem: auf-zu-bauen (never zu aufbauen). Perfect: ge- sits inside too — aufgebaut. Related: der Aufbau (structure/setup); sich etwas aufbauen (build oneself a career etc.).",
    level: "B1",
    difficulty: 3,
    tags: ["separable", "zu-infinitive"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "sich-umschauen",
    word: "sich umschauen",
    forms: ["schaut sich um", "schaute sich um", "hat sich umgeschaut"],
    type: "verb",
    translations: ["to look around"],
    examples: [
      { de: "Ich habe mich im Laden umgeschaut.", en: "I looked around in the store." },
      { de: "Schau dich mal um!", en: "Take a look around!" },
      { de: "Er schaute sich nach einer Lösung um.", en: "He looked around for a solution." }
    ],
    facts: "Separable AND reflexive — the sich is essential. Near-synonym: sich umsehen (slightly more formal/written). der Laden = store (plural: die Läden), the everyday word next to the more formal das Geschäft.",
    level: "A2",
    difficulty: 2,
    tags: ["separable", "reflexive"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "kuenstlich",
    word: "künstlich",
    forms: ["künstlicher", "am künstlichsten"],
    type: "adjective",
    translations: ["artificial"],
    examples: [
      { de: "künstliche Intelligenz", en: "artificial intelligence" },
      { de: "ein künstlicher See", en: "an artificial/man-made lake" },
      { de: "Sie hat ein künstliches Hüftgelenk.", en: "She has an artificial hip joint." }
    ],
    facts: "From die Kunst (art) + -lich, literally 'art-like'. Opposite: natürlich (natural). KI = Künstliche Intelligenz is the German abbreviation for AI.",
    level: "B1",
    difficulty: 2,
    tags: ["word-formation", "tech"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "sich-raeuspern",
    word: "sich räuspern",
    forms: ["räuspert sich", "räusperte sich", "hat sich geräuspert"],
    type: "verb",
    translations: ["to clear one's throat"],
    examples: [
      { de: "Er räusperte sich, bevor er sprach.", en: "He cleared his throat before speaking." },
      { de: "Sie räusperte sich nervös.", en: "She cleared her throat nervously." }
    ],
    facts: "Always reflexive. A deliberate small throat-clear signaling nervousness or a bid for attention — not husten (to cough, involuntary/illness).",
    level: "B2",
    difficulty: 3,
    tags: ["reflexive", "body-language"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "aufpassen",
    word: "aufpassen",
    forms: ["passt auf", "passte auf", "hat aufgepasst", "Pass auf!"],
    type: "verb",
    translations: ["to watch out, pay attention", "to look after (auf + acc)"],
    examples: [
      { de: "Pass auf!", en: "Watch out! / Be careful!" },
      { de: "Pass auf die Kinder auf!", en: "Keep an eye on the kids!" },
      { de: "Ich habe nicht aufgepasst.", en: "I wasn't paying attention." }
    ],
    facts: "Separable. Two senses: pay attention (in class) and watch over (auf + accusative: auf die Kinder aufpassen). Common warning pattern: Wenn ..., dann pass auf! (If ..., then watch out!).",
    level: "A2",
    difficulty: 2,
    tags: ["separable", "imperative", "spoken"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "aufmerksamkeit",
    word: "die Aufmerksamkeit",
    forms: ["die Aufmerksamkeiten"],
    type: "noun",
    translations: ["attention"],
    examples: [
      { de: "Das erregte ihre Aufmerksamkeit.", en: "That caught her attention." },
      { de: "Vielen Dank für Ihre Aufmerksamkeit.", en: "Thank you for your attention. (closing a talk)" },
      { de: "Sie schenkte ihm keine Aufmerksamkeit.", en: "She paid him no attention." }
    ],
    facts: "From aufmerksam (attentive) + -keit. Key verb combos: Aufmerksamkeit erregen (attract), schenken (give, lit. 'gift'), widmen (devote). Same auf- family as aufpassen.",
    level: "B1",
    difficulty: 3,
    tags: ["feminine", "collocations", "abstract"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "reagieren",
    word: "reagieren",
    forms: ["reagiert", "reagierte", "hat reagiert"],
    type: "verb",
    translations: ["to react"],
    examples: [
      { de: "Sie reagiert schnell.", en: "She reacts quickly." },
      { de: "Er hat nicht darauf reagiert.", en: "He didn't react to it." },
      { de: "Das Publikum reagierte begeistert.", en: "The audience reacted enthusiastically." }
    ],
    facts: "Regular verb; -ieren verbs NEVER take ge- in the participle (studiert, telefoniert, reagiert). Takes auf + accusative: auf etwas reagieren. Noun: die Reaktion.",
    level: "A2",
    difficulty: 2,
    tags: ["ieren-verb", "no-ge", "preposition-verb"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "zuruecklegen",
    word: "zurücklegen",
    forms: ["legt zurück", "legte zurück", "hat zurückgelegt"],
    type: "verb",
    translations: ["to put back", "to cover (a distance)", "to set aside (money)"],
    examples: [
      { de: "Ich habe das Buch wieder zurückgelegt.", en: "I put the book back again." },
      { de: "Sie hat den Weg zurückgelegt.", en: "She covered the distance/route." },
      { de: "Er legt jeden Monat Geld zurück.", en: "He sets aside money every month." }
    ],
    facts: "Separable, three senses: put back in place, cover a distance (eine Strecke zurücklegen), save/set aside money. Don't confuse wieder (again) with wider (against, as in widersprechen).",
    level: "B1",
    difficulty: 3,
    tags: ["separable", "polysemous"],
    sources: ["yt-qGK1d45XG_w"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "flaechendeckend",
    word: "flächendeckend",
    forms: [],
    type: "adjective",
    translations: ["area-wide, nationwide", "across the board, comprehensive"],
    examples: [
      { de: "Das Netz ist flächendeckend verfügbar.", en: "The network is available everywhere/nationwide." },
      { de: "Wir führen das System flächendeckend ein.", en: "We're rolling out the system across the board." },
      { de: "flächendeckende Kontrollen", en: "blanket/comprehensive checks" }
    ],
    facts: "From die Fläche (area, surface) + deckend (covering) — literally 'covering the whole surface'. News-and-office German for systematic, no-gaps coverage; looser everyday synonym: überall (everywhere).",
    level: "C1",
    difficulty: 4,
    tags: ["office-german", "word-formation", "compound"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "sicherheit",
    word: "die Sicherheit",
    forms: ["die Sicherheiten"],
    type: "noun",
    translations: ["safety, security", "certainty, confidence"],
    examples: [
      { de: "Sicherheit geht vor.", en: "Safety first." },
      { de: "aus Sicherheitsgründen", en: "for safety/security reasons" },
      { de: "Ich kann das mit Sicherheit sagen.", en: "I can say that with certainty." }
    ],
    facts: "From sicher (safe, sure) + -heit. One German word covering both English 'safety' and 'security' — context decides. Office compounds: Sicherheitsschulung (safety training), Datensicherheit (data security), zur Sicherheit (just in case).",
    level: "A2",
    difficulty: 2,
    tags: ["feminine", "office-german", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "aufgabe",
    word: "die Aufgabe",
    forms: ["die Aufgaben"],
    type: "noun",
    translations: ["task, assignment", "exercise", "giving up, abandonment"],
    examples: [
      { de: "Ich habe eine neue Aufgabe bekommen.", en: "I got a new task." },
      { de: "Die Hausaufgaben sind schwer.", en: "The homework is hard." }
    ],
    facts: "From aufgeben (to assign / to give up). Part of the -gabe family (geben = to give): AUFgeben = give onto someone (a task). Second meaning: abandonment (die Aufgabe des Projekts). Confusable with Ausgabe/Abgabe/Eingabe.",
    level: "A2",
    difficulty: 2,
    tags: ["feminine", "office-german", "gabe-family"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ausgabe",
    word: "die Ausgabe",
    forms: ["die Ausgaben"],
    type: "noun",
    translations: ["expense", "edition, issue", "output (IT)"],
    examples: [
      { de: "Unsere Ausgaben sind gestiegen.", en: "Our expenses have risen." },
      { de: "die neue Ausgabe der Zeitschrift", en: "the new issue of the magazine" }
    ],
    facts: "From ausgeben (to spend / to hand out): AUSgeben = give out (money). Three senses: expenses (usually plural), edition/issue of a publication, and output in IT (Eingabe/Ausgabe = input/output).",
    level: "B1",
    difficulty: 3,
    tags: ["feminine", "office-german", "gabe-family", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "abgabe",
    word: "die Abgabe",
    forms: ["die Abgaben"],
    type: "noun",
    translations: ["submission, handing in", "levy, tax"],
    examples: [
      { de: "Die Abgabe ist am Freitag.", en: "The deadline for submission is Friday." },
      { de: "Steuern und Abgaben", en: "taxes and levies" }
    ],
    facts: "From abgeben (to hand in/over): ABgeben = give away/in (a document). Key compound: die Abgabefrist = submission deadline (constant in offices and universities). Plural Abgaben often = levies/duties.",
    level: "B1",
    difficulty: 3,
    tags: ["feminine", "office-german", "gabe-family"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "eingabe",
    word: "die Eingabe",
    forms: ["die Eingaben"],
    type: "noun",
    translations: ["input, entry"],
    examples: [
      { de: "Drücken Sie nach der Eingabe die Enter-Taste.", en: "Press Enter after typing your input." },
      { de: "die Eingabe der Daten", en: "entering the data" }
    ],
    facts: "From eingeben (to enter/type in): EINgeben = give into (a system). The IT pair: Eingabe/Ausgabe = input/output. Completes the -gabe family with Aufgabe (task), Ausgabe (expense/output), Abgabe (submission).",
    level: "B1",
    difficulty: 2,
    tags: ["feminine", "office-german", "gabe-family", "tech"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ausnahme",
    word: "die Ausnahme",
    forms: ["die Ausnahmen"],
    type: "noun",
    translations: ["exception"],
    examples: [
      { de: "Keine Regel ohne Ausnahme.", en: "No rule without an exception." },
      { de: "Heute mache ich eine Ausnahme.", en: "Today I'll make an exception." }
    ],
    facts: "From nehmen (to take): what is 'taken out' of the rule. -nahme nouns are always feminine. ausnahmsweise = as an exception, for once.",
    level: "A2",
    difficulty: 2,
    tags: ["feminine", "nahme-family"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "annahme",
    word: "die Annahme",
    forms: ["die Annahmen"],
    type: "noun",
    translations: ["assumption", "acceptance"],
    examples: [
      { de: "Das ist nur eine Annahme.", en: "That's just an assumption." },
      { de: "die Annahme des Pakets", en: "the acceptance of the parcel" }
    ],
    facts: "From annehmen (to assume / to accept) — take something ONTO yourself. Two senses like the verb: mental assumption and physical/formal acceptance (Paketannahme = parcel reception).",
    level: "B2",
    difficulty: 3,
    tags: ["feminine", "nahme-family", "polysemous", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "aufnahme",
    word: "die Aufnahme",
    forms: ["die Aufnahmen"],
    type: "noun",
    translations: ["recording", "photo, shot", "admission, intake"],
    examples: [
      { de: "Die Aufnahme ist gut geworden.", en: "The recording/photo turned out well." },
      { de: "die Aufnahme ins Krankenhaus", en: "admission to the hospital" }
    ],
    facts: "From aufnehmen (to take up/record/admit). Three everyday senses: audio/video recording, a photo, and admission (hospital, university, club).",
    level: "B1",
    difficulty: 3,
    tags: ["feminine", "nahme-family", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "einnahme",
    word: "die Einnahme",
    forms: ["die Einnahmen"],
    type: "noun",
    translations: ["income, revenue", "taking (medicine)"],
    examples: [
      { de: "Die Einnahmen sind gestiegen.", en: "Revenues have risen." },
      { de: "vor der Einnahme der Tablette", en: "before taking the tablet" }
    ],
    facts: "From einnehmen — take IN. Usually plural for money (Einnahmen und Ausgaben = income and expenses — the bookkeeping pair). Singular often = taking medication.",
    level: "B1",
    difficulty: 3,
    tags: ["feminine", "nahme-family", "office-german", "opposite-pair"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "teilnahme",
    word: "die Teilnahme",
    forms: [],
    type: "noun",
    translations: ["participation"],
    examples: [
      { de: "Die Teilnahme ist kostenlos.", en: "Participation is free." },
      { de: "Vielen Dank für Ihre Teilnahme.", en: "Thank you for your participation." }
    ],
    facts: "From teilnehmen (to participate) — take PART (an + dative: an einem Kurs teilnehmen). der Teilnehmer / die Teilnehmerin = participant.",
    level: "B1",
    difficulty: 2,
    tags: ["feminine", "nahme-family", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "uebernahme",
    word: "die Übernahme",
    forms: ["die Übernahmen"],
    type: "noun",
    translations: ["takeover", "taking over, assumption (of costs/duties)"],
    examples: [
      { de: "die Übernahme der Firma", en: "the takeover of the company" },
      { de: "die Übernahme der Kosten", en: "the assumption of the costs" }
    ],
    facts: "From übernehmen (to take over). Corporate takeover AND taking over duties/costs (Kostenübernahme is a key word in German insurance paperwork).",
    level: "B2",
    difficulty: 3,
    tags: ["feminine", "nahme-family", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "massnahme",
    word: "die Maßnahme",
    forms: ["die Maßnahmen"],
    type: "noun",
    translations: ["measure, action (step)"],
    examples: [
      { de: "Wir müssen Maßnahmen ergreifen.", en: "We must take measures." },
      { de: "Sicherheitsmaßnahmen", en: "safety measures" }
    ],
    facts: "THE corporate/political word — every meeting has Maßnahmen. Fixed collocation: Maßnahmen ergreifen/treffen (take measures). From Maß (measure) + nehmen.",
    level: "B1",
    difficulty: 3,
    tags: ["feminine", "nahme-family", "office-german", "collocations"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "einsatz",
    word: "der Einsatz",
    forms: ["die Einsätze"],
    type: "noun",
    translations: ["use, deployment", "effort, commitment", "stake (betting); mission"],
    examples: [
      { de: "Sie zeigt vollen Einsatz.", en: "She shows full commitment." },
      { de: "der Einsatz von KI", en: "the use of AI" },
      { de: "Die Feuerwehr ist im Einsatz.", en: "The fire brigade is on a mission/deployed." }
    ],
    facts: "From setzen (to set/put) — what you 'put in'. Very polysemous: usage/deployment, personal effort, a bet's stake, an emergency mission. -satz nouns are always masculine.",
    level: "B1",
    difficulty: 4,
    tags: ["masculine", "satz-family", "polysemous", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "umsatz",
    word: "der Umsatz",
    forms: ["die Umsätze"],
    type: "noun",
    translations: ["revenue, turnover"],
    examples: [
      { de: "Der Umsatz ist um zehn Prozent gestiegen.", en: "Revenue rose by ten percent." },
      { de: "Wir machen mehr Umsatz als letztes Jahr.", en: "We're making more revenue than last year." }
    ],
    facts: "Money 'turned around' (umsetzen). Distinguish from der Gewinn (profit) — Umsatz is gross revenue. Umsatzsteuer = VAT/sales tax.",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "satz-family", "office-german", "finance"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ansatz",
    word: "der Ansatz",
    forms: ["die Ansätze"],
    type: "noun",
    translations: ["approach (to a problem)", "beginning, first sign"],
    examples: [
      { de: "Das ist ein interessanter Ansatz.", en: "That's an interesting approach." },
      { de: "im Ansatz richtig", en: "right in principle / as a first attempt" }
    ],
    facts: "The standard word for a method/approach in work and science. Also 'the first trace of something' (Ansätze von Panik). ansetzen = to set about doing something.",
    level: "B2",
    difficulty: 3,
    tags: ["masculine", "satz-family", "office-german", "abstract"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ersatz",
    word: "der Ersatz",
    forms: [],
    type: "noun",
    translations: ["replacement, substitute"],
    examples: [
      { de: "Wir brauchen Ersatz für den Drucker.", en: "We need a replacement for the printer." },
      { de: "das Ersatzteil", en: "the spare part" }
    ],
    facts: "No plural. Productive compound head: Ersatzteil (spare part), Ersatztermin (alternative date), Schadensersatz (compensation for damages). English even borrowed 'ersatz' as an adjective.",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "satz-family", "compound"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "absatz",
    word: "der Absatz",
    forms: ["die Absätze"],
    type: "noun",
    translations: ["paragraph", "sales (volume)", "heel (of a shoe)"],
    examples: [
      { de: "Lies den zweiten Absatz.", en: "Read the second paragraph." },
      { de: "Der Absatz ist eingebrochen.", en: "Sales have collapsed." },
      { de: "Schuhe mit hohen Absätzen", en: "high-heeled shoes" }
    ],
    facts: "Three unrelated-feeling meanings from 'setting off/away': a text paragraph (set apart), sales volume (goods 'set off' to buyers), a shoe heel. Context always disambiguates.",
    level: "B2",
    difficulty: 4,
    tags: ["masculine", "satz-family", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "gegensatz",
    word: "der Gegensatz",
    forms: ["die Gegensätze"],
    type: "noun",
    translations: ["opposite, contrast"],
    examples: [
      { de: "Im Gegensatz zu dir mag ich Kaffee.", en: "In contrast to you, I like coffee." },
      { de: "Gegensätze ziehen sich an.", en: "Opposites attract." }
    ],
    facts: "Key fixed phrase: im Gegensatz zu + dative = in contrast to / unlike. Adjective: gegensätzlich (opposing, contrary).",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "satz-family", "fixed-expression"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "zustand",
    word: "der Zustand",
    forms: ["die Zustände"],
    type: "noun",
    translations: ["condition, state"],
    examples: [
      { de: "Das Auto ist in gutem Zustand.", en: "The car is in good condition." },
      { de: "Das sind ja Zustände!", en: "What a state of affairs! (complaint)" }
    ],
    facts: "From stehen (to stand) — how things 'stand'. Plural Zustände often = deplorable conditions (chaotische Zustände). -stand nouns are always masculine.",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "stand-family"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "abstand",
    word: "der Abstand",
    forms: ["die Abstände"],
    type: "noun",
    translations: ["distance, gap"],
    examples: [
      { de: "Bitte Abstand halten!", en: "Please keep your distance!" },
      { de: "mit großem Abstand der Beste", en: "by far the best (with a big gap)" }
    ],
    facts: "Physical or figurative gap. Abstand halten (keep distance), mit Abstand = by far, Abstand nehmen von = to refrain from/distance oneself from.",
    level: "A2",
    difficulty: 2,
    tags: ["masculine", "stand-family", "collocations"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "umstand",
    word: "der Umstand",
    forms: ["die Umstände"],
    type: "noun",
    translations: ["circumstance", "(pl.) trouble, inconvenience"],
    examples: [
      { de: "unter diesen Umständen", en: "under these circumstances" },
      { de: "Machen Sie sich keine Umstände!", en: "Don't go to any trouble!" }
    ],
    facts: "Mostly plural. unter Umständen (u.U.) = possibly/under certain circumstances — common in formal writing. 'in anderen Umständen sein' is an old-fashioned euphemism for being pregnant.",
    level: "B1",
    difficulty: 3,
    tags: ["masculine", "stand-family", "fixed-expression"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "vorstand",
    word: "der Vorstand",
    forms: ["die Vorstände"],
    type: "noun",
    translations: ["executive board, management board"],
    examples: [
      { de: "Der Vorstand hat entschieden.", en: "The executive board has decided." },
      { de: "das Vorstandsmitglied", en: "the board member" }
    ],
    facts: "Those who 'stand before' the company. German corporations have Vorstand (executive board) vs Aufsichtsrat (supervisory board). Also the board of a club (Verein).",
    level: "B2",
    difficulty: 2,
    tags: ["masculine", "stand-family", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "rueckstand",
    word: "der Rückstand",
    forms: ["die Rückstände"],
    type: "noun",
    translations: ["backlog, being behind", "residue"],
    examples: [
      { de: "Wir sind im Rückstand.", en: "We're behind (schedule)." },
      { de: "den Rückstand aufholen", en: "to catch up on the backlog/deficit" }
    ],
    facts: "What 'stands back/behind'. im Rückstand sein = behind on work, payments, or in sports (0:2 im Rückstand). Chemistry sense: residue.",
    level: "B2",
    difficulty: 3,
    tags: ["masculine", "stand-family", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "verstand",
    word: "der Verstand",
    forms: [],
    type: "noun",
    translations: ["mind, reason, intellect"],
    examples: [
      { de: "Hast du den Verstand verloren?", en: "Have you lost your mind?" },
      { de: "mit gesundem Menschenverstand", en: "with common sense" }
    ],
    facts: "No plural. From verstehen (to understand). gesunder Menschenverstand = common sense. Distinguish from das Verständnis (understanding/sympathy: Vielen Dank für Ihr Verständnis).",
    level: "B1",
    difficulty: 3,
    tags: ["masculine", "stand-family", "near-synonym"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "anzug",
    word: "der Anzug",
    forms: ["die Anzüge"],
    type: "noun",
    translations: ["suit (clothing)"],
    examples: [
      { de: "Er trägt einen dunklen Anzug.", en: "He's wearing a dark suit." },
      { de: "Anzug und Krawatte", en: "suit and tie" }
    ],
    facts: "From anziehen (to put on / to dress) — what you 'pull on'. -zug nouns (from ziehen = to pull) are always masculine. sich anziehen = to get dressed.",
    level: "A2",
    difficulty: 1,
    tags: ["masculine", "zug-family", "clothing"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "umzug",
    word: "der Umzug",
    forms: ["die Umzüge"],
    type: "noun",
    translations: ["move, relocation", "parade, procession"],
    examples: [
      { de: "Der Umzug in die neue Wohnung war stressig.", en: "The move to the new apartment was stressful." },
      { de: "der Karnevalsumzug", en: "the carnival parade" }
    ],
    facts: "From umziehen (to move house; sich umziehen = to change clothes — watch the reflexive!). Second sense: a parade 'moving through' town.",
    level: "A2",
    difficulty: 2,
    tags: ["masculine", "zug-family", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "auszug",
    word: "der Auszug",
    forms: ["die Auszüge"],
    type: "noun",
    translations: ["excerpt, extract", "moving out", "statement (bank)"],
    examples: [
      { de: "ein Auszug aus dem Buch", en: "an excerpt from the book" },
      { de: "der Kontoauszug", en: "the bank statement" }
    ],
    facts: "What is 'pulled out': a text excerpt, moving out of a flat (ausziehen), and der Kontoauszug = bank statement — everyday German bureaucracy word.",
    level: "B1",
    difficulty: 3,
    tags: ["masculine", "zug-family", "polysemous", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "bezug",
    word: "der Bezug",
    forms: ["die Bezüge"],
    type: "noun",
    translations: ["reference, relation", "cover (pillow/duvet)", "(pl.) salary, earnings"],
    examples: [
      { de: "in Bezug auf das Projekt", en: "with regard to the project" },
      { de: "Ich habe keinen Bezug dazu.", en: "I can't relate to it / it means nothing to me." }
    ],
    facts: "Key office phrase: in Bezug auf + accusative = with regard to; Bezug nehmen auf = to refer to (standard letter phrase). Also a duvet/pillow cover, and plural Bezüge = official earnings.",
    level: "B2",
    difficulty: 4,
    tags: ["masculine", "zug-family", "office-german", "fixed-expression", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "abzug",
    word: "der Abzug",
    forms: ["die Abzüge"],
    type: "noun",
    translations: ["deduction", "trigger (gun)", "withdrawal (troops)"],
    examples: [
      { de: "nach Abzug der Steuern", en: "after deduction of taxes" },
      { de: "Es gibt Abzüge vom Gehalt.", en: "There are deductions from the salary." }
    ],
    facts: "What is 'pulled off/away': salary/tax deductions (the payslip word), a gun's trigger, or withdrawing troops. nach Abzug von = net of.",
    level: "B2",
    difficulty: 3,
    tags: ["masculine", "zug-family", "office-german", "finance"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "verzug",
    word: "der Verzug",
    forms: [],
    type: "noun",
    translations: ["delay, default (being behind)"],
    examples: [
      { de: "Das Projekt ist in Verzug.", en: "The project is behind schedule." },
      { de: "Der Kunde ist mit der Zahlung in Verzug.", en: "The customer is in default on the payment." }
    ],
    facts: "No plural. Formal/legal-business register: in Verzug sein/geraten = to be/fall behind (deadlines, payments). Zahlungsverzug = payment default. Everyday synonym: die Verspätung (for trains/people).",
    level: "C1",
    difficulty: 3,
    tags: ["masculine", "zug-family", "office-german", "formal"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "abschluss",
    word: "der Abschluss",
    forms: ["die Abschlüsse"],
    type: "noun",
    translations: ["completion, conclusion", "degree, qualification", "closing (of a deal)"],
    examples: [
      { de: "Sie hat einen Abschluss in Informatik.", en: "She has a degree in computer science." },
      { de: "zum Abschluss des Projekts", en: "at the conclusion of the project" },
      { de: "der Vertragsabschluss", en: "the signing/closing of the contract" }
    ],
    facts: "From abschließen (to lock / to finish / to conclude a contract). -schluss nouns (from schließen = to close) are always masculine. zum Abschluss = finally/to wrap up.",
    level: "B1",
    difficulty: 3,
    tags: ["masculine", "schluss-family", "office-german", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "anschluss",
    word: "der Anschluss",
    forms: ["die Anschlüsse"],
    type: "noun",
    translations: ["connection (transport, internet, phone)", "social connection"],
    examples: [
      { de: "Ich habe meinen Anschluss verpasst.", en: "I missed my connecting train." },
      { de: "Sie findet schnell Anschluss.", en: "She makes friends/connections quickly." },
      { de: "im Anschluss an das Meeting", en: "following/right after the meeting" }
    ],
    facts: "Transport connections, utility/internet hookups, and social belonging (Anschluss finden). Office phrase: im Anschluss an + accusative = immediately after.",
    level: "B1",
    difficulty: 3,
    tags: ["masculine", "schluss-family", "polysemous", "fixed-expression"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "beschluss",
    word: "der Beschluss",
    forms: ["die Beschlüsse"],
    type: "noun",
    translations: ["(formal) decision, resolution"],
    examples: [
      { de: "Der Vorstand hat einen Beschluss gefasst.", en: "The board passed a resolution." },
      { de: "laut Beschluss der Regierung", en: "according to the government's decision" }
    ],
    facts: "A decision by a body/committee — formal register. Collocation: einen Beschluss fassen (to pass a resolution). Contrast der Entschluss = a personal decision.",
    level: "B2",
    difficulty: 2,
    tags: ["masculine", "schluss-family", "office-german", "near-synonym"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "entschluss",
    word: "der Entschluss",
    forms: ["die Entschlüsse"],
    type: "noun",
    translations: ["(personal) decision, resolve"],
    examples: [
      { de: "Ich habe einen Entschluss gefasst.", en: "I've made up my mind." },
      { de: "Es war ein spontaner Entschluss.", en: "It was a spontaneous decision." }
    ],
    facts: "Personal counterpart to der Beschluss (committee decision). Same collocation: einen Entschluss fassen. Verb: sich entschließen (to decide/resolve to do something).",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "schluss-family", "near-synonym"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "kurzschluss",
    word: "der Kurzschluss",
    forms: ["die Kurzschlüsse"],
    type: "noun",
    translations: ["short circuit", "(fig.) mental short circuit, snap reaction"],
    examples: [
      { de: "Ein Kurzschluss hat den Brand verursacht.", en: "A short circuit caused the fire." },
      { de: "Das war eine Kurzschlussreaktion.", en: "That was a knee-jerk/panic reaction." }
    ],
    facts: "Literally 'short closing' (electricity). Figuratively a moment where the brain 'shorts out': Kurzschlussreaktion = rash, unconsidered reaction.",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "schluss-family", "idiom", "tech"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  }
];
