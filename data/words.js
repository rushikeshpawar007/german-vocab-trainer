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
//   grammar: concise grammar rule(s) — gender/plural, conjugation class, case government, word order
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
    grammar: "Separable: ich stelle mich vor / hat vorgestellt. Case switch: sich (Akk.) vorstellen = introduce oneself; sich (Dat.) etwas vorstellen = imagine something.",
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
    grammar: "Regular weak verb: kriegen – kriegte – hat gekriegt. Takes an accusative object, same patterns as bekommen.",
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
    grammar: "Declines like a normal adjective: mein eigenes Zimmer (n.), auf eigenen Wunsch (m. Dat.), mit meinen eigenen Augen (Pl. Dat.).",
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
    grammar: "Elliptical perfect — full sentence: Du hast Glück gehabt. Subject + haben are dropped in exclamations.",
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
    grammar: "Strong verb: bekommen – bekam – hat bekommen. Inseparable be- prefix → no ge- in the participle. Takes accusative.",
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
    grammar: "Weak verb, inseparable er- → no ge-: hat erfasst. Very often passive: Die Daten wurden erfasst.",
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
    grammar: "Regular comparison: schlimm – schlimmer – am schlimmsten. Works predicatively (Das ist schlimm) and attributively (eine schlimme Erkältung).",
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
    grammar: "Sentence adverb. In first position the verb stays second: Mittlerweile spricht sie fließend Deutsch.",
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
    grammar: "-heit nouns are always feminine: die Abwesenheit. Fixed pattern in + Dat.: in meiner Abwesenheit.",
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
    grammar: "Weak verb: veränderte, hat verändert (inseparable ver- → no ge-). 'Change by itself' needs reflexive: Die Stadt hat sich verändert.",
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
    grammar: "Weak verb: drehte, hat gedreht. Dizziness is impersonal with dative: Mir dreht sich der Kopf.",
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
    grammar: "mit + Dat.; with pronouns it fuses: damit / hiermit / womit. Negation: Ich habe nichts damit zu tun.",
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
    grammar: "Feminine: die Geschichte, Pl. die Geschichten (= stories). As the school subject 'history' it is used without article or plural.",
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
    grammar: "ein paar is invariable — never declined: mit ein paar Freunden. Capitalized ein Paar (a pair) is a normal countable noun.",
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
    grammar: "Directional: nach + place adverb (vorne/hinten/oben/unten). Motion verbs take sein in the perfect: Er ist nach vorne gegangen.",
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
    grammar: "Inseparable unter- → no ge-: hat unterhalten. Strong: unterhält, unterhielt. Chatting is reflexive + über + Akk.: Wir unterhalten uns über Politik.",
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
    grammar: "Separable: baut auf, hat aufgebaut; zu-infinitive puts zu inside: aufzubauen. Takes an accusative object.",
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
    grammar: "Separable + reflexive (Akk.): ich schaue mich um, hat sich umgeschaut. 'Look around for' = sich umschauen nach + Dat.",
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
    grammar: "Regular adjective declension: künstliche Intelligenz (f.), ein künstlicher See (m.), künstliches Licht (n.).",
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
    grammar: "Always reflexive with accusative: ich räuspere mich, er räusperte sich, hat sich geräuspert.",
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
    grammar: "Separable: Pass auf! / hat aufgepasst. 'Look after' governs auf + Akk.: auf die Kinder aufpassen.",
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
    grammar: "-keit nouns are always feminine. Collocation verbs take it as accusative object: Aufmerksamkeit erregen / schenken / widmen.",
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
    grammar: "-ieren verbs never take ge-: hat reagiert. Governs auf + Akk.: auf eine Frage reagieren.",
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
    grammar: "Separable: legt zurück, legte zurück, hat zurückgelegt. Takes an accusative object.",
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
    grammar: "Present-participle adjective (Fläche + deckend). Used as adjective (flächendeckende Kontrollen) or adverb (flächendeckend verfügbar) — as adverb it stays undeclined.",
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
    grammar: "-heit → feminine: die Sicherheit. Adverbial phrases: mit Sicherheit (certainly), zur Sicherheit (just in case), aus Sicherheitsgründen.",
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
    grammar: "-gabe nouns (from geben) are feminine, plural -n: die Aufgaben.",
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
    grammar: "Feminine, plural die Ausgaben — money sense is usually plural (Einnahmen und Ausgaben).",
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
    grammar: "Feminine, plural die Abgaben (often = levies). Compound: die Abgabefrist.",
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
    grammar: "Feminine, plural die Eingaben. Verb pattern: etwas in etwas (Akk.) eingeben.",
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
    grammar: "-nahme nouns (from nehmen) are feminine, plural -n. mit Ausnahme von + Dat. = with the exception of.",
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
    grammar: "Feminine, plural die Annahmen. in der Annahme, dass ... = assuming that (dass-clause, verb final).",
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
    grammar: "Feminine, plural die Aufnahmen. Admission takes in + Akk.: die Aufnahme ins Krankenhaus.",
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
    grammar: "Feminine; money sense usually plural: die Einnahmen. Medicine sense singular: vor der Einnahme.",
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
    grammar: "Feminine, no common plural. Verb pattern: teilnehmen an + Dat. — die Teilnahme an einem Kurs.",
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
    grammar: "Feminine, plural die Übernahmen. Verb übernehmen is inseparable: hat übernommen.",
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
    grammar: "Feminine, plural die Maßnahmen. Fixed collocation with accusative: Maßnahmen ergreifen / treffen.",
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
    grammar: "-satz nouns (from setzen) are masculine, plural with umlaut: die Einsätze. im Einsatz sein = to be deployed/in action.",
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
    grammar: "Masculine, plural die Umsätze. Umsatz machen (Akk.); steigen/sinken for movement.",
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
    grammar: "Masculine, plural die Ansätze. im Ansatz = in essence/embryonically.",
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
    grammar: "Masculine, no plural. als Ersatz für + Akk. = as a replacement for.",
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
    grammar: "Masculine, plural die Absätze (all three senses share the plural).",
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
    grammar: "Masculine, plural die Gegensätze. Fixed: im Gegensatz zu + Dat. = in contrast to.",
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
    grammar: "-stand nouns (from stehen) are masculine, plural with umlaut: die Zustände. in + Dat.: in gutem Zustand.",
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
    grammar: "Masculine, plural die Abstände. Abstand halten (Akk.); mit Abstand + superlative = by far.",
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
    grammar: "Masculine, plural die Umstände (mostly plural). unter + Dat.: unter diesen Umständen; abbreviation u.U. = unter Umständen.",
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
    grammar: "Masculine, plural die Vorstände. im Vorstand sitzen = to be on the board.",
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
    grammar: "Masculine, plural die Rückstände. im Rückstand sein mit + Dat. = to be behind with something.",
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
    grammar: "Masculine, no plural. den Verstand verlieren (Akk.) = to lose one's mind.",
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
    grammar: "-zug nouns (from ziehen) are masculine, plural with umlaut: die Anzüge.",
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
    grammar: "Masculine, plural die Umzüge. Verb: umziehen (separable, sein): Wir sind umgezogen. But sich umziehen (haben) = change clothes!",
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
    grammar: "Masculine, plural die Auszüge. Pattern: ein Auszug aus + Dat. (an excerpt from).",
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
    grammar: "Masculine, plural die Bezüge. Fixed office patterns: in Bezug auf + Akk.; Bezug nehmen auf + Akk.",
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
    grammar: "Masculine, plural die Abzüge. nach Abzug + Gen.: nach Abzug der Steuern = net of taxes.",
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
    grammar: "Masculine, no plural. in Verzug sein/geraten mit + Dat. = to be/fall behind with something.",
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
    grammar: "-schluss nouns (from schließen) are masculine, plural with umlaut: die Abschlüsse. zum Abschluss = to conclude (adverbial).",
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
    grammar: "Masculine, plural die Anschlüsse. Fixed: im Anschluss an + Akk. = immediately after; Anschluss finden (Akk.).",
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
    grammar: "Masculine, plural die Beschlüsse. Collocation: einen Beschluss fassen. Verb beschließen: hat beschlossen.",
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
    grammar: "Masculine, plural die Entschlüsse. einen Entschluss fassen; verb: sich entschließen zu + Dat.",
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
    grammar: "Masculine, plural die Kurzschlüsse.",
    level: "B1",
    difficulty: 2,
    tags: ["masculine", "schluss-family", "idiom", "tech"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ehrlich",
    word: "ehrlich",
    forms: ["ehrlicher", "am ehrlichsten"],
    type: "adjective",
    translations: ["honest"],
    examples: [
      { de: "Ehrlich gesagt, mag ich das nicht.", en: "To be honest, I don't like it." },
      { de: "Sei ehrlich mit mir.", en: "Be honest with me." },
      { de: "Ehrlich?", en: "Really? / You mean it?" }
    ],
    facts: "From die Ehre (honor) + -lich. Fixed phrase ehrlich gesagt = to be honest (daily conversation filler); standalone Ehrlich? = seriously?. Opposite: unehrlich. Noun: die Ehrlichkeit. Proverb: Ehrlich währt am längsten.",
    grammar: "Regular adjective and adverb. ehrlich gesagt is a fixed participle phrase (lit. 'honestly said') — position-free comment: Ehrlich gesagt, ... ",
    level: "A2",
    difficulty: 2,
    tags: ["spoken", "fixed-expression"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18", "2026-09-08"],
    search_count: 2
  },
  {
    id: "selbst",
    word: "selbst",
    forms: ["selbst nach ...", "ich selbst", "sogar (synonym)"],
    type: "adverb",
    translations: ["even (before a phrase)", "-self (after a noun/pronoun)"],
    examples: [
      { de: "Selbst nach 40 Jahren liebt er sie noch.", en: "Even after 40 years he still loves her." },
      { de: "Ich mache das selbst.", en: "I'll do it myself." },
      { de: "Selbst ich verstehe das.", en: "Even I understand that." }
    ],
    facts: "Position flips the meaning: BEFORE a phrase = 'even' (selbst ich = even I, interchangeable with sogar, slightly more emphatic); AFTER a noun/pronoun = '-self' (ich selbst = I myself). Also in compounds: selbstgemacht = homemade.",
    grammar: "Never declined. Position decides meaning: before the phrase = 'even' (selbst ich); after noun/pronoun = '-self' (ich selbst).",
    level: "B1",
    difficulty: 4,
    tags: ["polysemous", "word-order", "spoken"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "sich-zu-hause-fuehlen",
    word: "sich zu Hause fühlen",
    forms: ["fühlt sich zu Hause", "fühlte sich zu Hause", "hat sich zu Hause gefühlt"],
    type: "phrase",
    translations: ["to feel at home"],
    examples: [
      { de: "Wisst ihr, wann ich mich in Berlin zu Hause fühle?", en: "Do you know when I feel at home in Berlin?" },
      { de: "Ich fühle mich hier zu Hause.", en: "I feel at home here." },
      { de: "Fühl dich wie zu Hause!", en: "Make yourself at home!" }
    ],
    facts: "Reflexive chunk: sich fühlen + zu Hause. Crucial pair: zu Hause = at home (location, with sein/fühlen) vs nach Hause = homeward (direction, with gehen/fahren). In subordinate clauses (wann/dass/weil ...) the verb moves to the end: ...wann ich mich zu Hause fühle.",
    grammar: "Reflexive (Akk.): ich fühle mich. zu Hause = location (sein/fühlen) vs nach Hause = direction (gehen/fahren). Subordinate clause pushes the verb to the end: ..., wann ich mich zu Hause fühle.",
    level: "A2",
    difficulty: 3,
    tags: ["reflexive", "fixed-expression", "word-order", "spoken"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "der-die-das-gleiche-wie",
    word: "der/die/das gleiche ... wie",
    forms: ["die gleichen ... wie", "genauso ... wie", "größer als (comparative!)"],
    type: "phrase",
    translations: ["the same ... as"],
    examples: [
      { de: "Ich suche Leute, die die gleichen Interessen haben wie ich.", en: "I'm looking for people who have the same interests as I do." },
      { de: "Sie ist so groß wie du.", en: "She is as tall as you." },
      { de: "Er ist größer als ich.", en: "He is taller than I am. (comparative → als)" }
    ],
    facts: "Equality comparisons take WIE (gleich/genauso ... wie), comparatives take ALS (größer als). Double 'die die' = relative pronoun + article, both correct. das Gleiche = the same kind; dasselbe = the very same one (shared object). Relative clauses push the verb to the end.",
    grammar: "Equality uses wie (so groß wie, die gleichen ... wie); comparative uses als (größer als). gleich declines like an adjective. das Gleiche = same kind, dasselbe = the very same object.",
    level: "B1",
    difficulty: 4,
    tags: ["fixed-expression", "word-order", "grammar-trap"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "erzaehlen",
    word: "erzählen",
    forms: ["erzählt", "erzählte", "hat erzählt", "Erzähl mal!"],
    type: "verb",
    translations: ["to tell, narrate"],
    examples: [
      { de: "Erzähl mal!", en: "Tell me! / Go on!" },
      { de: "Erzähl mir eine Geschichte.", en: "Tell me a story." },
      { de: "Sie hat von ihrer Reise erzählt.", en: "She told us about her trip." }
    ],
    facts: "Telling at length (stories, experiences, news) — vs sagen (a single utterance). Erzähl mal! with softening mal is the everyday 'spill!'. Pairs with die Geschichte: eine Geschichte erzählen.",
    grammar: "Weak verb, inseparable er- → no ge-: hat erzählt. Patterns: jemandem (Dat.) etwas (Akk.) erzählen, or von + Dat. erzählen (tell about). Du-imperative drops the -en: Erzähl!",
    level: "A2",
    difficulty: 2,
    tags: ["spoken", "no-ge", "preposition-verb"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 2
  },
  {
    id: "gemuetlich",
    word: "gemütlich",
    forms: ["gemütlicher", "am gemütlichsten"],
    type: "adjective",
    translations: ["cozy, comfortable, snug", "leisurely, unhurried"],
    examples: [
      { de: "Mach es dir gemütlich!", en: "Make yourself comfortable!" },
      { de: "eine gemütliche Wohnung", en: "a cozy apartment" },
      { de: "Wir haben gemütlich gefrühstückt.", en: "We had a leisurely breakfast." }
    ],
    facts: "Famously 'German' word — broader than cozy: warm atmosphere, unhurried pace, friendly togetherness. Noun die Gemütlichkeit is considered near-untranslatable. Of a person: easy-going; 'Na, gemütlich?' to a slow worker is sarcastic.",
    grammar: "From das Gemüt + -lich. Regular adjective and adverb: gemütlich – gemütlicher – am gemütlichsten. Fixed reflexive dative phrase: es sich (Dat.) gemütlich machen — Mach es dir gemütlich!",
    level: "A2",
    difficulty: 2,
    tags: ["spoken", "culture", "fixed-expression"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "schaetzen",
    word: "schätzen",
    forms: ["schätzt", "schätzte", "hat geschätzt"],
    type: "verb",
    translations: ["to estimate, guess", "to value, appreciate"],
    examples: [
      { de: "Ich schätze, es dauert eine Stunde.", en: "I reckon it'll take an hour." },
      { de: "Ich schätze deine Ehrlichkeit.", en: "I appreciate your honesty." },
      { de: "Schätz mal, wie alt sie ist!", en: "Guess how old she is!" }
    ],
    facts: "Root of der Schatz (treasure — also the term of endearment: Schatz! = honey) and of Wortschatz (vocabulary, lit. 'word treasure'). schätzungsweise = approximately. grob geschätzt = roughly estimated.",
    grammar: "Weak verb: schätzte, hat geschätzt. Takes accusative for both senses. Estimate sense often takes a clause: Ich schätze, dass ... / Ich schätze, es dauert ...",
    level: "B1",
    difficulty: 3,
    tags: ["polysemous", "office-german", "spoken"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "gemuet",
    word: "das Gemüt",
    forms: ["die Gemüter"],
    type: "noun",
    translations: ["disposition, temperament", "mind (emotional side), spirits"],
    examples: [
      { de: "Sie hat ein sanftes Gemüt.", en: "She has a gentle disposition." },
      { de: "Das schlägt mir aufs Gemüt.", en: "That gets me down / weighs on my spirits." },
      { de: "Die Diskussion erhitzte die Gemüter.", en: "The discussion heated tempers up." }
    ],
    facts: "The feeling-side of the mind — der Verstand thinks, das Gemüt feels. Root of gemütlich/Gemütlichkeit. Plural die Gemüter = people's tempers in a debate (die Gemüter beruhigen = calm things down).",
    grammar: "Neuter: das Gemüt, plural die Gemüter (umlaut + -er). Idiom pattern: jemandem (Dat.) aufs Gemüt schlagen = to weigh on someone's spirits.",
    level: "B2",
    difficulty: 3,
    tags: ["neuter", "abstract", "idiom", "word-formation"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "beziehung",
    word: "die Beziehung",
    forms: ["die Beziehungen"],
    type: "noun",
    translations: ["relationship", "relation, connection"],
    examples: [
      { de: "Sie sind in einer Beziehung.", en: "They're in a relationship." },
      { de: "Er hat gute Beziehungen.", en: "He has good connections." },
      { de: "in dieser Beziehung", en: "in this respect" }
    ],
    facts: "From beziehen — same root as der Bezug: Bezug is the abstract reference, Beziehung the living connection (people, countries). Bare plural Beziehungen often = useful connections ('Vitamin B' joke). Fernbeziehung = long-distance relationship.",
    grammar: "-ung nouns are always feminine: die Beziehung, plural -en. Preposition: eine Beziehung zu + Dat. (relationship with); zwischen + Dat. for two parties.",
    level: "B1",
    difficulty: 2,
    tags: ["feminine", "office-german", "zug-family", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "fuehren",
    word: "führen",
    forms: ["führt", "führte", "hat geführt"],
    type: "verb",
    translations: ["to lead, guide", "to run, manage", "to carry, conduct (officially: drive)"],
    examples: [
      { de: "Sie führt das Unternehmen.", en: "She runs the company." },
      { de: "Der Weg führt zum See.", en: "The path leads to the lake." },
      { de: "ein Gespräch führen", en: "to hold a conversation" }
    ],
    facts: "Very broad: lead people, run a business, hold conversations (ein Gespräch/Krieg führen), paths leading somewhere. Official register: ein Fahrzeug führen = to operate a vehicle — hence der Führerschein (driving licence).",
    grammar: "Weak verb: führte, hat geführt. Takes accusative. Collocations act as fixed verb-noun pairs: ein Gespräch führen, ein Unternehmen führen, Protokoll führen.",
    level: "B1",
    difficulty: 3,
    tags: ["polysemous", "office-german", "collocations"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "duerfen",
    word: "dürfen",
    forms: ["darf", "darfst", "durfte", "hat gedurft / dürfen"],
    type: "verb",
    translations: ["may, to be allowed to"],
    examples: [
      { de: "Darf ich Sie etwas fragen?", en: "May I ask you something?" },
      { de: "Hier darf man nicht rauchen.", en: "Smoking isn't allowed here." },
      { de: "..., wer ein Fahrzeug führen darf.", en: "..., who is allowed to drive a vehicle." }
    ],
    facts: "The permission modal. Polite requests: Darf ich ...? Negated = prohibition: darf nicht (must not — NOT 'need not', that's muss nicht!). Was darf es sein? = What can I get you? (shops).",
    grammar: "Modal verb, irregular singular: ich darf, du darfst, er darf — plural regular: wir dürfen. Governs a bare infinitive at clause end: Er darf ein Fahrzeug führen. In subordinate clauses the modal goes last, AFTER the infinitive: ..., wer ein Fahrzeug führen darf.",
    level: "A1",
    difficulty: 3,
    tags: ["modal-verb", "word-order", "grammar-trap"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "lassen",
    word: "lassen",
    forms: ["lässt", "ließ", "hat gelassen / lassen", "Lass mich mal ...!"],
    type: "verb",
    translations: ["to let, allow", "to leave (something)", "to have something done (causative)"],
    examples: [
      { de: "Lass mich mal zahlen!", en: "Let me pay (this time)!" },
      { de: "Ich lasse mein Auto reparieren.", en: "I'm having my car repaired." },
      { de: "Lass uns gehen.", en: "Let's go." }
    ],
    facts: "Three big jobs: permission (lass mich = let me), leaving things (Lass das! = stop it/leave it), and the causative — having something done by someone else (Haare schneiden lassen = get a haircut). Lass uns + infinitive = let's.",
    grammar: "Strong verb: lässt, ließ, hat gelassen. Takes accusative + bare infinitive (no zu): Lass mich zahlen. With another infinitive the perfect uses double infinitive: Ich habe es reparieren lassen (not gelassen).",
    level: "A2",
    difficulty: 4,
    tags: ["strong-verb", "polysemous", "grammar-trap", "spoken"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "zahlen",
    word: "zahlen",
    forms: ["zahlt", "zahlte", "hat gezahlt"],
    type: "verb",
    translations: ["to pay"],
    examples: [
      { de: "Zahlen, bitte!", en: "The bill, please!" },
      { de: "Ich zahle bar oder mit Karte.", en: "I'll pay cash or by card." },
      { de: "Lass mich mal zahlen!", en: "Let me pay (this time)!" }
    ],
    facts: "Restaurant word: Zahlen, bitte! calls for the bill. Near-twin bezahlen prefers a direct object (die Rechnung bezahlen); plain zahlen shines in short spoken phrases. Don't confuse with zählen (with umlaut!) = to count.",
    grammar: "Weak verb: zahlte, hat gezahlt. für + Akk. for what you're paying for: Ich zahle für das Essen. Softener mal makes imperatives friendly: Lass mich mal zahlen.",
    level: "A1",
    difficulty: 2,
    tags: ["spoken", "near-synonym", "spelling-trap"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "reden",
    word: "reden",
    forms: ["redet", "redete", "hat geredet"],
    type: "verb",
    translations: ["to talk, speak"],
    examples: [
      { de: "Können wir kurz darüber reden?", en: "Can we talk about it for a moment?" },
      { de: "Lass uns später darüber reden.", en: "Let's talk about it later." },
      { de: "Wir haben lange über die Arbeit geredet.", en: "We talked about work for a long time." }
    ],
    facts: "Casual, conversational talking — vs sprechen, which is more formal and is the verb for language ability (Deutsch sprechen, never Deutsch reden). Proverb: Reden ist Silber, Schweigen ist Gold.",
    grammar: "Weak verb: redete, hat geredet. Topic takes über + Akkusativ (über das Projekt reden); person spoken with takes mit + Dativ (mit dem Chef reden).",
    level: "A2",
    difficulty: 2,
    tags: ["spoken", "near-synonym", "preposition-verb"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "darueber",
    word: "darüber",
    forms: ["darauf", "darin", "damit (no -r-)"],
    type: "adverb",
    translations: ["about it, about that", "above it (spatial)"],
    examples: [
      { de: "Darüber möchte ich nicht reden.", en: "I don't want to talk about that." },
      { de: "Ich habe darüber nachgedacht.", en: "I've thought about it." },
      { de: "Das Regal hängt darüber.", en: "The shelf hangs above it." }
    ],
    facts: "Pronominal adverb replacing über + a thing — German never says über es. Only for things: for people keep the preposition (über ihn reden = talk about him). Question form: worüber? (about what?).",
    grammar: "da + über, with -r- inserted because über begins with a vowel: darüber, darauf, darin, daran — but damit, davon, dazu (consonant, no -r-). Invariable.",
    level: "B1",
    difficulty: 4,
    tags: ["pronominal-adverb", "grammar-trap", "word-formation"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "kurz",
    word: "kurz",
    forms: ["kürzer", "am kürzesten"],
    type: "adjective",
    translations: ["short (length, time)", "briefly, for a moment"],
    examples: [
      { de: "Hast du kurz Zeit?", en: "Do you have a moment?" },
      { de: "Können wir kurz reden?", en: "Can we talk briefly?" },
      { de: "kurz vor dem Meeting", en: "shortly before the meeting" }
    ],
    facts: "As an adverb it is the politeness trick that makes interrupting acceptable: kurz Zeit haben, kurz reden. Time phrases: kurz vor/nach (shortly before/after). kurz gesagt = in short. Opposite: lang.",
    grammar: "Irregular comparison with umlaut: kurz – kürzer – am kürzesten. Used undeclined as an adverb (kurz reden) and declined as an adjective (eine kurze Pause).",
    level: "A1",
    difficulty: 2,
    tags: ["spoken", "time", "declension"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "wiedervorlage",
    word: "die Wiedervorlage",
    forms: ["die Wiedervorlagen", "WV (Abk.)"],
    type: "noun",
    translations: ["follow-up", "resubmission (of a file/task on a later date)"],
    examples: [
      { de: "Ich lege das auf Wiedervorlage.", en: "I'll set that aside to come back to later." },
      { de: "zur Wiedervorlage am 15. März", en: "for follow-up on 15 March" },
      { de: "der Wiedervorlagetermin", en: "the follow-up date" }
    ],
    facts: "Pure office German with no single English equivalent: a file, email or task deliberately parked and scheduled to reappear when it is actionable. Abbreviated WV in offices; German mail clients label the follow-up flag this way. From wieder (again) + Vorlage (submission).",
    grammar: "Feminine (-e ending, from vorlegen): die Wiedervorlage, plural -n. Fixed phrases: etwas auf Wiedervorlage legen (Akk.), zur Wiedervorlage + Datum.",
    level: "C1",
    difficulty: 4,
    tags: ["feminine", "office-german", "compound", "formal"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "vorlage",
    word: "die Vorlage",
    forms: ["die Vorlagen"],
    type: "noun",
    translations: ["template", "master copy, original", "submission (bill, proposal)", "assist (sport)"],
    examples: [
      { de: "Benutze die Vorlage für den Bericht.", en: "Use the template for the report." },
      { de: "Er hat die Vorlage zum Tor gegeben.", en: "He gave the assist for the goal." },
      { de: "nach Vorlage arbeiten", en: "to work from a master copy/model" }
    ],
    facts: "Everyday work word for a document template, and the base of Wiedervorlage. Also the thing you copy from (master, model), a formal proposal put before a committee, and in football the assist.",
    grammar: "Feminine: die Vorlage, plural -n. From vorlegen (separable: legt vor, hat vorgelegt = to present/submit). Pattern: jemandem (Dat.) etwas (Akk.) vorlegen.",
    level: "B2",
    difficulty: 3,
    tags: ["feminine", "office-german", "polysemous"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "bock",
    word: "der Bock",
    forms: ["die Böcke", "Bock haben auf ..."],
    type: "noun",
    translations: ["(slang) Bock haben auf = to feel like, be up for", "billy goat, buck, ram"],
    examples: [
      { de: "Ich habe keinen Bock.", en: "I don't feel like it. / I can't be bothered." },
      { de: "Hast du Bock auf Kino?", en: "You up for a movie?" },
      { de: "Er ist ein sturer Bock.", en: "He's a stubborn mule." }
    ],
    facts: "Casual, youth-flavoured slang — fine with friends, avoid with your boss or in writing; neutral equivalents are Lust haben auf or möchten. Literal animal sense survives in Bockbier (strong beer), einen Bock schießen (to blunder), sturer Bock (stubborn person).",
    grammar: "Masculine: der Bock, plural die Böcke (umlaut + -e). Slang pattern is article-less: Bock haben auf + Akkusativ (Bock auf Kino), negated with kein: keinen Bock haben.",
    level: "B1",
    difficulty: 3,
    tags: ["masculine", "colloquial", "spoken", "idiom", "register-trap"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "ein-bisschen",
    word: "ein bisschen",
    forms: ["a bissl / a bissi (dialect)", "ein wenig", "etwas"],
    type: "phrase",
    translations: ["a little bit, a bit"],
    examples: [
      { de: "Kannst du ein bisschen warten?", en: "Can you wait a little?" },
      { de: "Ich bin ein bisschen müde.", en: "I'm a bit tired." },
      { de: "mit ein bisschen Glück", en: "with a bit of luck" }
    ],
    facts: "Literally a little bite: der Biss (beißen = to bite) + diminutive -chen. Register ladder: ein bisschen (everyday) → ein wenig (written/polished) → etwas (neutral-formal); a bissl / a bissi is Bavarian-Austrian dialect. Old spelling bißchen predates the 1996 reform.",
    grammar: "Invariable — never declines, even after prepositions: mit ein bisschen Glück, ein bisschen Zeit. Modifies nouns (ein bisschen Geduld) and adjectives/verbs adverbially (ein bisschen müde, ein bisschen warten).",
    level: "A1",
    difficulty: 2,
    tags: ["spoken", "fixed-expression", "dialect", "spelling-trap"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "herausfinden",
    word: "herausfinden",
    forms: ["findet heraus", "fand heraus", "hat herausgefunden", "herauszufinden"],
    type: "verb",
    translations: ["to find out, discover, figure out"],
    examples: [
      { de: "Ich versuche herauszufinden, warum das passiert ist.", en: "I'm trying to find out why that happened." },
      { de: "Wir müssen herausfinden, wer das war.", en: "We have to find out who that was." },
      { de: "Das habe ich selbst herausgefunden.", en: "I figured that out myself." }
    ],
    facts: "Almost always introduces an indirect question: herausfinden, wer/was/warum/ob ... Casual speech clips the prefix to rausfinden. Watch the form pair: herauszufinden (zu-infinitive) vs herausgefunden (past participle) — easy to mix up.",
    grammar: "Separable + strong (like finden): findet heraus, fand heraus, hat herausgefunden. zu and ge- both go INSIDE, between prefix and stem: heraus-zu-finden, heraus-ge-funden — never zu herausfinden. The indirect question it introduces is verb-final.",
    level: "B1",
    difficulty: 3,
    tags: ["separable", "strong-verb", "zu-infinitive", "word-order"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "um-zu",
    word: "um ... zu + Infinitiv",
    forms: ["um das herauszufinden", "damit (different subject)", "ohne ... zu"],
    type: "phrase",
    translations: ["in order to, (so as) to"],
    examples: [
      { de: "Um das herauszufinden, werden wir ein Experiment machen.", en: "To find that out, we are going to do an experiment." },
      { de: "Ich lerne Deutsch, um in Berlin zu arbeiten.", en: "I am learning German in order to work in Berlin." },
      { de: "Ich erkläre es, damit du es verstehst.", en: "I am explaining it so that you understand. (different subject → damit)" }
    ],
    facts: "Purpose clause. It has NO subject of its own — it borrows the main clause subject, so both actions must share one doer; if the subjects differ you must switch to damit + full clause. Comma before um is mandatory. Same family: ohne ... zu (without doing), anstatt ... zu (instead of doing).",
    grammar: "Frame: um + (objects/adverbs) + zu-Infinitiv at the very end; with separable verbs zu goes inside (heraus-zu-finden). When the um-clause is fronted it fills position 1, so the conjugated main verb must come immediately after the comma (V2): ..., werden wir ... machen — never ..., wir werden. Verb bracket: conjugated verb ... infinitive/participle clamps the clause. werden + Infinitiv = future; werden + Partizip II = passive.",
    level: "B1",
    difficulty: 4,
    tags: ["word-order", "grammar-trap", "fixed-expression", "zu-infinitive"],
    sources: ["alltag"],
    dates_searched: ["2026-08-18"],
    search_count: 1
  },
  {
    id: "stellen",
    word: "stellen",
    forms: ["stellt", "stellte", "hat gestellt"],
    type: "verb",
    translations: ["to put, place (upright)", "to set", "(gestellt as adj.) staged, posed"],
    examples: [
      { de: "Ich habe das Glas auf den Tisch gestellt.", en: "I put the glass on the table." },
      { de: "Mir wurde eine Frage gestellt.", en: "I was asked a question." },
      { de: "Er hat einen Antrag gestellt.", en: "He filed an application." }
    ],
    facts: "One of three orientation-specific put verbs: stellen (upright), legen (flat), setzen (seated). Key collocations: eine Frage stellen (ask a question), einen Antrag stellen (file an application). gestellt as an adjective = staged/posed (ein gestelltes Foto). Engine of a big compound family: vorstellen, herstellen, feststellen, einstellen, darstellen.",
    grammar: "Weak transitive: stellte, hat gestellt. Direction takes ACCUSATIVE: auf den Tisch stellen. Its intransitive state partner is strong stehen (stand, hat gestanden) with DATIVE: auf dem Tisch stehen. Same action/state split for legen–liegen and setzen–sitzen.",
    level: "A2",
    difficulty: 3,
    tags: ["grammar-trap", "case-sensitive", "collocations", "office-german"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "geben",
    word: "geben",
    forms: ["gibt", "gab", "hat gegeben", "Gib!"],
    type: "verb",
    translations: ["to give", "es gibt = there is / there are"],
    examples: [
      { de: "Ich habe ihm das Buch gegeben.", en: "I gave him the book." },
      { de: "Es gibt einen Grund.", en: "There is a reason." },
      { de: "unter den gegebenen Umständen", en: "under the given circumstances" }
    ],
    facts: "Root of the whole -gabe family: Aufgabe, Ausgabe, Abgabe, Eingabe. es gibt (+ Akkusativ) is the standard there is/are construction; past es gab. Office abbreviation: gegebenenfalls (ggf.) = if applicable/if necessary. gegeben as adjective = given.",
    grammar: "Strong verb with e→i in the present singular: ich gebe, du gibst, er gibt — wir geben. Past gab, hat gegeben. Du-imperative drops the ending: Gib! The classic dative+accusative verb: jemandem (Dat.) etwas (Akk.) geben. es gibt always takes ACCUSATIVE: Es gibt einen Grund.",
    level: "A1",
    difficulty: 3,
    tags: ["strong-verb", "case-sensitive", "gabe-family", "vowel-change"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "ueberhaupt",
    word: "überhaupt",
    forms: ["überhaupt nicht", "überhaupt kein(e)", "überhaupt nichts"],
    type: "adverb",
    translations: ["at all (with negation)", "even, in the first place (in questions)", "on the whole, generally"],
    examples: [
      { de: "Das ist überhaupt kein Problem.", en: "That is no problem at all." },
      { de: "Hast du überhaupt Zeit?", en: "Do you even have time?" },
      { de: "Warum hast du das überhaupt gemacht?", en: "Why did you even do that in the first place?" }
    ],
    facts: "Modal particle carrying attitude rather than content — same family as eigentlich (actually), sowieso (anyway), doch. Etymology hook: über + das Haupt (archaic word for head) = over the heads, i.e. taken all together. In questions it adds doubt or challenge.",
    grammar: "Invariable adverb/particle. Sits directly BEFORE the element it intensifies: überhaupt nicht, überhaupt kein(e), überhaupt nichts. Sentence-initial it means on the whole and the verb still comes second: Überhaupt war die Reise schön.",
    level: "B1",
    difficulty: 4,
    tags: ["modal-particle", "spoken", "negation", "word-order"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "pauschal",
    word: "pauschal",
    forms: ["die Pauschale (Nomen)", "pauschaler", "am pauschalsten"],
    type: "adjective",
    translations: ["flat-rate, lump-sum, all-inclusive", "sweeping, blanket (of statements)"],
    examples: [
      { de: "Wir zahlen pauschal 500 Euro.", en: "We pay a flat 500 euros." },
      { de: "Das kann man nicht pauschal sagen.", en: "You cannot say that across the board." },
      { de: "eine pauschale Aussage", en: "a sweeping statement" }
    ],
    facts: "Two lives: money (flat rate — die Reisekostenpauschale, die Verpflegungspauschale, die Pauschalreise) and argument (over-generalized, usually a mild rebuke). Handy pushback in discussions: Das ist zu pauschal = that is too much of a generalization. Note the spelling: one s.",
    grammar: "Regular adjective declension (eine pauschale Lösung) and used bare as an adverb (pauschal bezahlen, pauschal gesagt = roughly speaking). Noun form die Pauschale is feminine, plural -n.",
    level: "C1",
    difficulty: 4,
    tags: ["office-german", "finance", "polysemous", "spelling-trap"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "ungefaehr",
    word: "ungefähr",
    forms: ["eine ungefähre Vorstellung", "etwa", "ca. / circa", "rund"],
    type: "adverb",
    translations: ["approximately, about, roughly"],
    examples: [
      { de: "Es dauert ungefähr eine Stunde.", en: "It takes about an hour." },
      { de: "Ich weiß ungefähr, wo es ist.", en: "I roughly know where it is." },
      { de: "Hast du eine ungefähre Vorstellung?", en: "Do you have a rough idea?" }
    ],
    facts: "The everyday default for roughly. Register ladder: ungefähr (spoken+written) → etwa (more formal) → ca./circa (written docs) → rund (with numbers) → gegen (clock times: gegen 8 Uhr) → so (casual: so um 8). Etymology hook: un- + old gevære (ambush, ill intent), same root as die Gefahr (danger) — without guile → by chance → approximately. Pairs with schätzen.",
    grammar: "Normally an invariable adverb placed directly before what it modifies: ungefähr zwanzig Leute. Also usable as a declining adjective: eine ungefähre Vorstellung, ein ungefährer Preis.",
    level: "A2",
    difficulty: 2,
    tags: ["spoken", "near-synonym", "quantity", "declension"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "versuchen",
    word: "versuchen",
    forms: ["versucht", "versuchte", "hat versucht", "Versuch es mal!"],
    type: "verb",
    translations: ["to try, attempt"],
    examples: [
      { de: "Ich habe es versucht.", en: "I tried." },
      { de: "Er versucht, pünktlich zu sein.", en: "He tries to be on time." },
      { de: "Ich versuche herauszufinden, warum.", en: "I am trying to find out why." }
    ],
    facts: "versuchen = attempting something difficult; probieren = sampling or testing, especially food (Probier mal! = Taste this!). They overlap in casual I will give it a go. Derivatives: der Versuch (attempt; also experiment — beim ersten Versuch), die Versuchung (temptation).",
    grammar: "Weak verb, inseparable ver- → NO ge- in the participle: hat versucht. Governs a zu-Infinitiv, comma when the clause carries its own content: Er versucht, pünktlich zu sein. With separable verbs zu goes inside: versuchen herauszufinden.",
    level: "A2",
    difficulty: 2,
    tags: ["no-ge", "zu-infinitive", "near-synonym"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "schaffen",
    word: "schaffen",
    forms: ["schafft", "schaffte / schuf", "hat geschafft / hat geschaffen"],
    type: "verb",
    translations: ["to manage, accomplish, get done (weak)", "to create (strong)", "(geschafft, adj.) exhausted"],
    examples: [
      { de: "Ich habe es geschafft!", en: "I did it! / I made it!" },
      { de: "Schaffst du das bis Freitag?", en: "Can you get it done by Friday?" },
      { de: "Er hat ein Meisterwerk geschaffen.", en: "He created a masterpiece." }
    ],
    facts: "Two verbs in one infinitive, told apart only by conjugation — get the participle wrong and the meaning flips: geschafft = managed, geschaffen = created. Also Ich bin geschafft! = I am exhausted. In southern Germany/Swabia plain schaffen just means to work. Arbeitsplätze schaffen = to create jobs.",
    grammar: "WEAK = manage: schaffte, hat geschafft. STRONG = create: schuf, hat geschaffen. The manage sense takes accusative, usually placeholder es (Ich schaffe es nicht) and can extend with a zu-Infinitiv: Ich habe es geschafft, pünktlich zu sein.",
    level: "B1",
    difficulty: 4,
    tags: ["grammar-trap", "strong-verb", "polysemous", "zu-infinitive", "spoken"],
    sources: ["alltag"],
    dates_searched: ["2026-09-08"],
    search_count: 1
  },
  {
    id: "sozusagen",
    word: "sozusagen",
    forms: ["quasi", "gewissermaßen", "im Grunde"],
    type: "adverb",
    translations: ["so to speak, as it were, in a manner of speaking"],
    examples: [
      { de: "Er ist sozusagen mein zweiter Vater.", en: "He is my second father, so to speak." },
      { de: "Sie ist sozusagen die Chefin.", en: "She is the boss, in a manner of speaking." },
      { de: "Das war sozusagen der Wendepunkt.", en: "That was, as it were, the turning point." }
    ],
    facts: "Hedging word: flags that a comparison is loose rather than literal. Without it Er ist mein zweiter Vater is a claim; with it, an image. Register ladder: quasi (very spoken — Das ist quasi fertig) → sozusagen (neutral) → gewissermaßen (formal) → gleichsam (literary). Same hedging cluster as ungefähr, pauschal, schätzen.",
    grammar: "Frozen zu-Infinitiv turned adverb: so + zu + sagen. Written as ONE word — so zu sagen in three words is a classic spelling error. Invariable; sits before the element it hedges or in the mid-field.",
    level: "B2",
    difficulty: 3,
    tags: ["spoken", "hedging", "zu-infinitive", "spelling-trap", "word-formation"],
    sources: ["alltag"],
    dates_searched: ["2026-09-10"],
    search_count: 1
  }
];
