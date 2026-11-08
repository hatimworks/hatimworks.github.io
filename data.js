/* S5 Guide — course content.
   Everything here is written as study notes, built from the topics covered in class.
   Lesson bodies use simple HTML. */

window.S5 = {
  student: "Hatim",
  programme: "S5 English Studies · Linguistics · Group 1 · 2026/2027",
  keyDates: [
    { date: "2026-11-11", label: "Digital Skills — weekly assignment due (Wed, midnight)", module: "digital" },
    { date: "2026-11-13", label: "Arabic — have your midterm project group formed (Fri)", module: "arabic" },
    { date: "2026-12-06", label: "Digital Skills — midterm REPORT deadline", module: "digital" },
    { date: "2026-12-16", label: "Digital Skills — group PRESENTATION in class (Wednesday group)", module: "digital" }
  ],
  timetable: [
    { day: "Wednesday", time: "11:30–13:00", module: "tta", room: "Amphi C" },
    { day: "Wednesday", time: "13:00–14:30", module: "digital", room: "Amphi C" },
    { day: "Thursday", time: "10:00–11:30", module: "semantics", room: "Room 2" },
    { day: "Thursday", time: "11:30–13:00", module: "syntax", room: "Amphi C" },
    { day: "Thursday", time: "13:00–14:30", module: "phonology", room: "Room 3" },
    { day: "Friday", time: "08:30–10:00", module: "morphology", room: "Amphi C" },
    { day: "Friday", time: "10:00–11:30", module: "arabic", room: "Amphi C" }
  ],

  plan: [
    { phase: "Week 1 — Get back in the game", items: [
      "Join a Digital Skills project group (max 6) and an Arabic project group.",
      "Read the Digital Skills midterm guidelines (topics, rubric, deadlines).",
      "Email Pr. Belmahi professionally about the missed work.",
      "Do the Digital Skills assignment due Wednesday at midnight.",
      "Attend EVERY class this week — especially Semantics and Teaching Theories (no online space).",
      "Get the book Phonology and Morphology (Alaoui, Jmila & Afkinich)."
    ]},
    { phase: "Week 2 — Foundations", items: [
      "Morphology lessons 1–3 (word, morpheme, free/bound) + quiz.",
      "Phonology lessons 1–3 (phonetics vs phonology, consonants, vowels) + quiz.",
      "Teaching Theories lessons 1–2 (key terms, behaviourism).",
      "Digital Skills: agree on the group research question and outline."
    ]},
    { phase: "Week 3 — Core theory", items: [
      "Morphology lessons 4–6 (inflection/derivation, grammatical categories, typology).",
      "Phonology lessons 4–6 (natural classes, distinctive features, phonemics).",
      "Semantics lessons 1–4.",
      "Teaching Theories lessons 3–5 (mentalism, cognitivism, constructivism, Krashen)."
    ]},
    { phase: "Week 4 — Syntax + methods", items: [
      "Syntax lessons 1–5 (word classes → trees → X-bar).",
      "Teaching Theories lessons 6–8 (all the methods).",
      "Semantics lessons 5–7.",
      "Digital Skills: write your section of the report."
    ]},
    { phase: "Week 5 — Report + revision", items: [
      "Digital Skills: finish and submit the report before 6 December.",
      "Redo every quiz on this site until you get 100%.",
      "Arabic: revise Unit 1 and Unit 2 notes."
    ]},
    { phase: "Weeks 6+ — Exam mode", items: [
      "Digital Skills presentation (16 December): rehearse twice with a timer.",
      "One module per day: read the lesson summaries, do the exercises, check the glossary.",
      "Practise exam-style answers: definition + example + explanation.",
      "Sleep. Seriously."
    ]}
  ],

  modules: [
  /* ---------------------------------------------------------------- MORPHOLOGY */
  {
    id: "morphology", name: "Morphology", short: "Morph", icon: "🧩",
    prof: "Pr. Inass Announi", slot: "Friday 08:30–10:00 · Amphi C",
    where: "Google Classroom — Morphology S5 (2026-2027), code iq47uhmm. Slides for sessions 1–5 + two Kahoot quizzes.",
    files: "S5 CLAUDE/Morphology",
    summary: "The study of the internal structure of words: what a word is, the morphemes that build it, how inflection marks grammar, and how languages differ in the way they build words.",
    lessons: [
      { title: "1. What is morphology?", body: `
        <p><b>Linguistics</b> splits into <b>microlinguistics</b> (the core, “pure” levels: phonetics, phonology, <b>morphology</b>, syntax, semantics) and <b>macrolinguistics</b> (language in use: sociolinguistics, psycholinguistics, etc.).</p>
        <p><b>Morphology</b> is the scientific study of the <b>internal structure of words</b> — the part of grammar that deals with how words are built from smaller meaningful pieces (morphemes) and how words relate to each other.</p>
        <div class="callout">Exam line: <i>“Morphology is the branch of linguistics that studies the internal structure of words and the rules by which words are formed.”</i></div>` },
      { title: "2. What is a word? (4 definitions)", body: `
        <table><tr><th>Definition</th><th>Idea</th><th>Problem</th></tr>
        <tr><td><b>Orthographic</b></td><td>A word is a string of letters between two spaces.</td><td>Compounds (<i>apartment building</i>), phrasal verbs (<i>look after</i>), clitics (<i>John’s</i>) — is it one word or two?</td></tr>
        <tr><td><b>Phonological</b></td><td>A word has one main stress.</td><td>Function words (<i>the, of</i>) and clitics (<i>’s</i>) have no stress.</td></tr>
        <tr><td><b>Semantic</b></td><td>A word expresses one unified concept / is the minimal unit of meaning.</td><td>Concepts can need several words (<i>the man who lives next door</i>); function words have little meaning.</td></tr>
        <tr><td><b>Syntactic</b></td><td>The smallest unit that belongs to a word class and can be moved in a sentence.</td><td>Best so far — words are the building blocks of syntax.</td></tr></table>
        <p><b>Bloomfield’s definition:</b> a word is <b>“a minimum free form”</b> — the smallest form that can stand on its own.</p>
        <p><b>Open-class</b> words accept new members (nouns, lexical verbs, adjectives, adverbs). <b>Closed-class</b> words form a fixed set (pronouns, determiners, prepositions, conjunctions, auxiliaries).</p>
        <h4>Words, lexical items, lexemes</h4>
        <ul><li><b>Arbitrariness:</b> the link between <i>cat</i> and its meaning is a convention (exception: onomatopoeia — <i>splash, beep</i>).</li>
        <li>Complex words like <i>unhappy, helpful</i> have <b>predictable</b> meaning; idioms (<i>kick the bucket</i>), collocations (<i>white coffee</i>) and proverbs have <b>unpredictable</b> meaning.</li>
        <li>A <b>lexical item</b> is a unit whose meaning must be memorised — it can be bigger than a word (an idiom).</li>
        <li>The <b>lexicon</b> = the mental dictionary. A <b>lexeme</b> is the abstract word (<i>WRITE</i>) behind its forms (<i>writes, wrote, written</i>).</li>
        <li><b>Pro-forms</b> replace other forms: <i>She likes chocolate and so <u>do</u> I.</i></li>
        <li><b>Tokens vs types:</b> in “Mary goes to Edinburgh next week, and she intends going to Washington next month” count every occurrence (tokens) vs every different word (types).</li></ul>` },
      { title: "3. Morphemes", body: `
        <p>A <b>morpheme</b> is the <b>smallest linguistic unit that carries grammatical and/or semantic meaning</b>. It cannot be divided further. <i>unacceptable</i> = <b>un + accept + able</b>.</p>
        <p>A real morpheme must (1) be <b>identifiable</b> in other words and (2) <b>contribute meaning</b>. The <i>-ack</i> in <i>attack, stack, tackle</i> is NOT a morpheme — it means nothing.</p>
        <p><b>Notation:</b> <code># nation + al + ize + ation #</code> (# = word boundary, + = morpheme boundary).</p>
        <h4>Free vs bound</h4>
        <ul><li><b>Free morphemes</b> stand alone: <i>happy, house, select</i>.
          <ul><li><b>Lexical</b> (content) — nouns, verbs, adjectives: <i>boy, run, green</i>.</li>
          <li><b>Functional</b> (grammatical) — prepositions, articles, conjunctions, pronouns, auxiliaries: <i>the, of, and</i>.</li></ul></li>
        <li><b>Bound morphemes</b> must attach to something: affixes (<i>un-, -ness, -s</i>) and bound roots (<i>liber-</i> in liberal/liberty, <i>-ceive</i> in receive/perceive).</li></ul>
        <h4>Types of affixes</h4>
        <table><tr><th>Affix</th><th>Position</th><th>Example</th></tr>
        <tr><td>Prefix</td><td>before the root</td><td><b>re</b>call, <b>un</b>happy</td></tr>
        <tr><td>Suffix</td><td>after the root</td><td>beauti<b>ful</b>ly</td></tr>
        <tr><td>Circumfix</td><td>around the root</td><td>Amazigh <i>arba</i> “boy” → <b>t</b>arba<b>t</b> “girl”</td></tr>
        <tr><td>Infix</td><td>inside the root</td><td>internal change: r<b>a</b>n, f<b>ee</b>t</td></tr>
        <tr><td>Transfix</td><td>vowels woven through a consonant root</td><td>Arabic k-t-b → <i>kataba, kitāb, kātib</i></td></tr></table>
        <p>Affixes can also be grouped by origin: native Old English (<i>un-, mis-, -ness, -hood, -dom</i>) vs foreign (Latin <i>dis-, re-, bi-</i>; Greek <i>poly-, kilo-</i>; French <i>-age, -ee</i>).</p>` },
      { title: "4. Inflection vs derivation", body: `
        <div class="grid2"><div class="card"><h4>Inflectional morphemes</h4><ul>
          <li>Never change the word class.</li><li>Add grammatical information (tense, number…).</li><li>Always come last (<i>teach-er-<b>s</b></i>).</li><li>Very productive, regular meaning.</li><li>English has only <b>8</b>.</li></ul></div>
        <div class="card"><h4>Derivational morphemes</h4><ul>
          <li>Often change the class (<i>fame</i> N → <i>famous</i> Adj).</li><li>Create a <b>new word</b> (new dictionary entry).</li><li>Come closer to the root.</li><li>Meaning less predictable; can have several meanings (<i>de-</i> = undo / remove / reduce).</li><li>Prefixes and suffixes; hundreds of them.</li></ul></div></div>
        <h4>The 8 English inflectional morphemes</h4>
        <table><tr><th>Suffix</th><th>Meaning</th><th>Example</th></tr>
        <tr><td>-s</td><td>plural (N)</td><td>cars</td></tr><tr><td>-’s</td><td>possessive (N)</td><td>John’s</td></tr>
        <tr><td>-s</td><td>3rd person singular present (V)</td><td>writes</td></tr><tr><td>-ed</td><td>past tense (V)</td><td>opened</td></tr>
        <tr><td>-ing</td><td>progressive (V)</td><td>singing</td></tr><tr><td>-en / -ed</td><td>past participle (V)</td><td>eaten</td></tr>
        <tr><td>-er</td><td>comparative (Adj)</td><td>faster</td></tr><tr><td>-est</td><td>superlative (Adj)</td><td>biggest</td></tr></table>
        <div class="callout">Trap: <b>-er</b> in <i>teacher</i> is DERIVATIONAL (verb → noun). <b>-er</b> in <i>faster</i> is INFLECTIONAL (comparative).</div>
        <h4>Analysing words from other languages (Turkish data from class)</h4>
        <p><i>ev</i> “house” → <i>ev-<b>ler</b></i> (plural, inflectional) · <i>güzel</i> “beautiful” → <i>güzel-<b>lik</b></i> “beauty” (Adj→N, derivational) · <i>öğret-<b>men</b>-<b>ler</b></i> “teachers” (derivational + inflectional) · <i>çalış-<b>ıyor</b></i> “is working” (present continuous, inflectional).</p>` },
      { title: "5. Grammatical categories (what inflection expresses)", body: `
        <table><tr><th>Category</th><th>What it marks</th><th>Examples</th></tr>
        <tr><td><b>Number</b></td><td>how many</td><td>car/cars; Arabic sing./<b>dual</b>/plural: <i>kuratun, kurata:n, kura:t</i></td></tr>
        <tr><td><b>Person</b></td><td>speaker / addressee / others</td><td>I, we / you / he, she, they</td></tr>
        <tr><td><b>Gender</b></td><td>masc./fem., animate…</td><td>French <i>un petit garçon / une petite fille</i> (agreement on det + adj)</td></tr>
        <tr><td><b>Tense</b></td><td>time of the event</td><td>past / present / future</td></tr>
        <tr><td><b>Aspect</b></td><td>how the event unfolds</td><td>perfective (<i>has eaten</i>) vs imperfective/progressive (<i>was eating</i>)</td></tr>
        <tr><td><b>Voice</b></td><td>agent vs patient</td><td>active <i>Many people saw the film</i> / passive <i>The film was seen…</i></td></tr>
        <tr><td><b>Case</b></td><td>role of a noun</td><td>nominative (subject), accusative (object), dative (recipient), genitive (possessor), comitative (with), ablative (from). Arabic: <i>al-walad-<b>u</b></i> NOM, <i>-<b>a</b></i> ACC, <i>-<b>i</b></i> GEN</td></tr>
        <tr><td><b>Mood</b></td><td>speaker’s attitude</td><td>declarative, interrogative, imperative (<i>Be quiet!</i>), jussive, subjunctive (<i>If I <b>were</b> you</i>; <i>May you succeed</i>)</td></tr></table>
        <h4>Aspect in depth</h4>
        <p><b>Telic</b> = has a natural endpoint (<i>build a house, write a letter, run to the store</i>). <b>Atelic</b> = no endpoint (<i>run, swim, laugh</i>).</p>
        <p><b>Vendler’s 4 event types:</b> <b>State</b> (<i>know the answer</i>) · <b>Activity</b> (<i>swim</i>, ongoing, atelic) · <b>Accomplishment</b> (<i>paint a picture</i>, long, telic) · <b>Achievement</b> (<i>win the race</i>, instant, telic).</p>` },
      { title: "6. Morphological typology", body: `
        <p>Languages differ in how much they use morphology. English expresses plural with a suffix (<i>nuts</i>); Yoruba uses a separate word.</p>
        <h4>6.1 The analytic → synthetic continuum</h4>
        <p><b>Isolating</b> (extreme analytic: almost no morphology — Vietnamese, Cantonese) → <b>Analytic</b> (little morphology, word order does the work — English) → <b>Synthetic</b> (many morphemes per word — Turkish: <i>uygar-laş-tır-ama-dık-lar-ımız-dan-mış-sınız-casına</i>) → <b>Polysynthetic</b> (one word = a whole sentence) → <b>Incorporating</b> (a noun is built into the verb: Mohawk <i>Akwá'shne</i> “I boat-built”).</p>
        <h4>6.2 Agglutinative vs fusional</h4>
        <ul><li><b>Agglutinative:</b> many affixes, <b>one affix = one meaning</b>, clear boundaries (Turkish, Swahili, Japanese): <i>ev-ler-im-de</i> “in my houses”.</li>
        <li><b>Fusional:</b> <b>one affix = several meanings</b> fused together (Latin, Spanish, Russian): Spanish <i>habl-<b>ó</b></i> = past + 3rd person + singular.</li>
        <li>English is <b>not</b> agglutinative: few affixes, and one affix can carry many meanings (<i>-s</i> = plural / 3sg / possessive).</li></ul>
        <h4>6.3 Concatenative vs non-concatenative</h4>
        <ul><li><b>Concatenative:</b> morphemes added one after another in a line (Swahili, Turkish, English).</li>
        <li><b>Non-concatenative:</b> morphemes are interwoven into the root (Semitic: Arabic k-t-b → <i>kitāb</i> “book”, <i>yaktub</i> “he writes”, <i>maktab</i> “office”).</li></ul>` }
    ],
    quiz: [
      { q: "Morphology is the study of…", o: ["sound systems", "the internal structure of words", "sentence structure", "meaning in context"], a: 1 },
      { q: "Bloomfield defines the word as…", o: ["a unit with one stress", "a minimum free form", "a string of letters between spaces", "a unified concept"], a: 1 },
      { q: "How many morphemes are in “unbelievably”?", o: ["2", "3", "4", "5"], a: 2, e: "un + believe + able + ly" },
      { q: "Which is a BOUND morpheme?", o: ["house", "the", "-ness", "green"], a: 2 },
      { q: "In “teacher”, -er is…", o: ["inflectional (comparative)", "derivational (V → N)", "a free morpheme", "a circumfix"], a: 1 },
      { q: "Which is NOT one of the 8 English inflectional morphemes?", o: ["-ing", "-est", "-ment", "-’s"], a: 2 },
      { q: "Arabic kurata:n (“two balls”) expresses…", o: ["singular", "dual number", "plural", "collective"], a: 1 },
      { q: "“She has eaten” shows…", o: ["imperfective aspect", "perfective aspect", "passive voice", "subjunctive mood"], a: 1 },
      { q: "Which verb phrase is TELIC?", o: ["She ran.", "She slept.", "She wrote a letter.", "She laughed."], a: 2 },
      { q: "“She knows French” is which Vendler type?", o: ["Activity", "Accomplishment", "Achievement", "State"], a: 3 },
      { q: "“If I were you” — were expresses…", o: ["subjunctive mood", "imperative mood", "indicative mood", "jussive mood"], a: 0 },
      { q: "A language where one affix = one meaning is…", o: ["fusional", "isolating", "agglutinative", "analytic"], a: 2 },
      { q: "Arabic k-t-b → kitāb, kātib is an example of…", o: ["concatenative morphology", "non-concatenative morphology", "compounding", "clipping"], a: 1 },
      { q: "Vietnamese, with almost no morphology, is…", o: ["polysynthetic", "agglutinative", "isolating", "fusional"], a: 2 }
    ],
    exercises: [
      "Segment and label: unhappiness, nationalization, rewritten, teachers’, biggest.",
      "Say whether each -er/-s/-ing is inflectional or derivational: walker, walks, building (noun), building (verb), taller.",
      "Arabic data: al-waladu / al-walada / al-waladi — what does -u/-a/-i mark? Name each case.",
      "Classify by Vendler: win the race, paint a picture, swim, know the answer, recognize her.",
      "Explain with examples the difference between agglutinative and fusional languages."
    ],
    tips: [
      "Always give a definition + an example. Examiners love the 8 inflectional morphemes table.",
      "Use the # and + notation when you segment words.",
      "For data analysis (Turkish, Arabic, French), say: free/bound, inflectional/derivational, and the meaning."
    ]
  },

  /* ---------------------------------------------------------------- PHONOLOGY */
  {
    id: "phonology", name: "Phonology", short: "Phon", icon: "🔊",
    prof: "Pr. Kably (Group 1) · Group 2: Pr. El Ghouati", slot: "Thursday 13:00–14:30 · Room 3",
    where: "No Classroom for group 1. Book: Phonology and Morphology — Alaoui, Jmila & Afkinich (2019). Group 2 Classroom: S5 PHONOLOGY 2026/2027.",
    files: "S5 CLAUDE/Phonology",
    summary: "How speech sounds are made (phonetics) and how they work as a system in a language (phonology): consonants, vowels, natural classes, distinctive features, phonemes and allophones, and suprasegmentals.",
    lessons: [
      { title: "1. Phonetics vs phonology", body: `
        <p><b>Phonetics</b> studies the <b>physical</b> properties of speech sounds. Three branches: <b>articulatory</b> (how sounds are produced), <b>acoustic</b> (sound waves), <b>auditory</b> (how sounds are perceived).</p>
        <p><b>Phonology</b> studies the <b>abstract, mental system</b> of sounds in a particular language — which sounds contrast and the patterns they follow.</p>
        <div class="callout">Classic example: the plural <b>-s</b> is pronounced /s/ in <i>cats</i>, /z/ in <i>dogs</i>, /ɪz/ in <i>buses</i>. Phonetics describes the three sounds; phonology explains the rule that chooses between them.</div>
        <p>The “life” of a sound: <b>production</b> (speaker) → <b>transmission</b> (air) → <b>perception</b> (listener).</p>
        <p><b>Vowels</b> are produced with <b>no obstruction</b> of the air; <b>consonants</b> involve <b>obstruction</b>.</p>` },
      { title: "2. Describing consonants: voice, place, manner", body: `
        <p>Every consonant = <b>voicing</b> + <b>place</b> + <b>manner</b>. E.g. [b] = voiced bilabial stop; [s] = voiceless alveolar fricative.</p>
        <h4>Place of articulation</h4>
        <table><tr><th>Place</th><th>Articulators</th><th>Sounds</th></tr>
        <tr><td>Bilabial</td><td>both lips</td><td>p b m w</td></tr><tr><td>Labiodental</td><td>lower lip + upper teeth</td><td>f v</td></tr>
        <tr><td>Dental</td><td>tongue tip + teeth</td><td>θ ð</td></tr><tr><td>Alveolar</td><td>tongue + alveolar ridge</td><td>t d s z n l</td></tr>
        <tr><td>Palato-alveolar</td><td>tongue blade + ridge/palate</td><td>ʃ ʒ tʃ dʒ r</td></tr><tr><td>Palatal</td><td>tongue + hard palate</td><td>j</td></tr>
        <tr><td>Velar</td><td>back of tongue + soft palate</td><td>k g ŋ</td></tr><tr><td>Glottal</td><td>vocal folds</td><td>h ʔ</td></tr></table>
        <h4>Manner of articulation</h4>
        <ul><li><b>Stops/plosives</b> — complete closure then release: p b t d k g.</li>
        <li><b>Fricatives</b> — narrow gap, friction: f v θ ð s z ʃ ʒ h.</li>
        <li><b>Affricates</b> — stop + fricative release: tʃ (church), dʒ (judge).</li>
        <li><b>Nasals</b> — air through the nose (velum lowered): m n ŋ.</li>
        <li><b>Liquids</b> — l (lateral: air around the sides of the tongue), r.</li>
        <li><b>Glides / semi-vowels</b> — w, j.</li></ul>` },
      { title: "3. Describing vowels and diphthongs", body: `
        <p>Vowels are described by <b>height</b> (high/mid/low), <b>backness</b> (front/central/back) and <b>rounding</b> (rounded/unrounded).</p>
        <table><tr><th></th><th>Front</th><th>Central</th><th>Back</th></tr>
        <tr><td>High</td><td>i (seat), ɪ (bit)</td><td></td><td>u (boot), ʊ (put)</td></tr>
        <tr><td>Mid</td><td>e (say), ɛ (bed)</td><td>ə (sofa), ʌ (cup)</td><td>o (go), ɔ (saw)</td></tr>
        <tr><td>Low</td><td>æ (cat)</td><td>a</td><td>ɑ (car), ɒ (lot, BrE)</td></tr></table>
        <p>Back vowels u ʊ o ɔ are <b>rounded</b>; front vowels are unrounded.</p>
        <p><b>Diphthongs</b> glide from one vowel position to another: aɪ (<i>bye</i>), eɪ (<i>say</i>), ɔɪ (<i>boy</i>), aʊ (<i>now</i>), əʊ (<i>go</i>), ɪə (<i>near</i>), eə (<i>hair</i>), ʊə (<i>tour</i>).</p>
        <p><b>Practice:</b> “high front unrounded” = [i]; “mid central” = [ə]; “low front” = [æ].</p>` },
      { title: "4. Natural classes", body: `
        <p>A <b>natural class</b> is a group of sounds that <b>share one or more phonetic features</b> and that a rule can treat together, using fewer features than needed for any one member.</p>
        <ul><li><b>Obstruents</b> (stops, fricatives, affricates) vs <b>sonorants</b> (vowels, nasals, liquids, glides).</li>
        <li><b>Coronal</b> — made with the tongue front/blade: t d s z n l ʃ ʒ tʃ dʒ r.</li>
        <li><b>Anterior</b> — made at or in front of the alveolar ridge: labials, dentals, alveolars.</li>
        <li><b>Sibilants</b> — hissing/hushing: s z ʃ ʒ tʃ dʒ.</li></ul>
        <p>Examples: [p t k] = voiceless stops ✔ · [m n ŋ] = nasals ✔ · [s z ʃ ʒ] = sibilant fricatives ✔ · [b d g p l] ✘ (no feature unites them all).</p>` },
      { title: "5. Distinctive features (SPE)", body: `
        <p>In generative phonology (Chomsky & Halle, <i>The Sound Pattern of English</i>, 1968) sounds are bundles of binary <b>[± features]</b>.</p>
        <h4>Major class features</h4>
        <table><tr><th>Class</th><th>[syllabic]</th><th>[consonantal]</th><th>[sonorant]</th></tr>
        <tr><td>Vowels</td><td>+</td><td>−</td><td>+</td></tr>
        <tr><td>Glides (j, w)</td><td>−</td><td>−</td><td>+</td></tr>
        <tr><td>Laryngeal glides (h, ʔ)</td><td>−</td><td>−</td><td>−</td></tr>
        <tr><td>Liquids & nasals</td><td>−</td><td>+</td><td>+</td></tr>
        <tr><td>Obstruents</td><td>−</td><td>+</td><td>−</td></tr></table>
        <h4>Five features for consonants</h4>
        <ul><li><b>[continuant]</b> — air not completely blocked: + = fricatives, l, r, w, j; − = stops, nasals, affricates.</li>
        <li><b>[nasal]</b> — velum lowered: m n ŋ.</li>
        <li><b>[strident]</b> — loud turbulent noise: s z ʃ ʒ tʃ dʒ (f, v, θ, ð are −strident).</li>
        <li><b>[anterior]</b> — at or before the alveolar ridge: labials, dentals, alveolars (+); postalveolar, palatal, velar, glottal (−).</li>
        <li><b>[coronal]</b> — tongue blade raised: dentals, alveolars, postalveolars (+); labials, velars, glottals (−).</li></ul>
        <p><b>Worked examples:</b> /s/ = [+cont, −nas, +strid, +ant, +cor] · /m/ = [−cont, +nas, −strid, +ant, −cor] · /ʃ/ = [+cont, −nas, +strid, −ant, +cor] · /k/ = [−cont, −nas, −strid, −ant, −cor].</p>
        <div class="callout">[continuant] ≠ [strident]: /f/ is +cont but −strid; /tʃ/ is −cont but +strid. [anterior] ≠ [coronal]: /t/ is +ant +cor; /ʃ/ is −ant +cor.</div>` },
      { title: "6. Phonemes, allophones & discovery procedures", body: `
        <p>A <b>phoneme</b> is an abstract sound unit that <b>distinguishes meaning</b> (written /p/). Its actual realisations are <b>allophones</b> (written [pʰ], [p˺]).</p>
        <h4>How to find phonemes (structuralist procedures)</h4>
        <ol><li><b>Minimal pairs</b> — two words differing in one sound only: <i>pat/bat</i> → /p/ and /b/ are separate phonemes.</li>
        <li><b>Overlapping (contrastive) distribution</b> — the sounds occur in the same environments and change meaning → separate phonemes.</li>
        <li><b>Free variation</b> — same environment, but no change in meaning → allophones of one phoneme.</li>
        <li><b>Complementary distribution</b> — the sounds never occur in the same environment → allophones of one phoneme. English [pʰ] (initial, before a stressed vowel: <i>pin</i>), [p] (after s: <i>spin</i>), [p˺] (unreleased, final: <i>stop</i>).</li>
        <li><b>Defective distribution</b> — a phoneme missing in some positions: English [h] only before vowels, [ŋ] never word-initially.</li></ol>
        <p><b>Basic vs derived</b> allophone: the basic one is the most <b>frequent</b> (widest distribution) and the least <b>marked</b>.</p>
        <h4>Steps to a phonemic analysis</h4>
        <ol><li>List the environments of each sound.</li><li>Look for minimal pairs.</li><li>Check: contrastive, complementary or free variation?</li><li>Decide: one phoneme or two? Name the basic allophone.</li><li>Write the rule: /X/ → [Y] / ___ environment.</li></ol>` },
      { title: "7. Coarticulation & suprasegmentals", body: `
        <p><b>Coarticulation (secondary articulation):</b> one sound influences its neighbours.</p>
        <ul><li>Palatalisation: <i>keen</i> [kʲiːn]</li><li>Labialisation: <i>cool</i> [kʷuːl]</li><li>Nasalisation: <i>hand</i> [hæ̃nd], French <i>bon</i> [bɔ̃]</li><li>Pharyngealisation: Arabic <i>ṭabīb</i> [tˤɑˈbiːb]</li><li>Glottalisation: <i>shut up</i> [ʃʌʔ ʌp]</li></ul>
        <p><b>Double articulation:</b> two equal places at the same time (e.g. [w] = labial-velar).</p>
        <h4>Suprasegmental features</h4>
        <p>They go <b>above</b> single segments: <b>stress</b> (<i>REcord</i> N vs <i>reCORD</i> V), <b>intonation</b> (rising for yes/no questions, falling for statements), <b>length</b> (iː vs ɪ), <b>tone</b> (Chinese), and the <b>syllable</b> (onset + nucleus + coda).</p>
        <p><b>Mixed vowel series:</b> practise transcribing and contrasting long/short and front/back pairs: iː–ɪ, uː–ʊ, ɑː–æ, ɔː–ɒ.</p>` }
    ],
    quiz: [
      { q: "Phonology studies…", o: ["the physical properties of sounds", "the abstract sound system of a language", "sound waves only", "spelling"], a: 1 },
      { q: "[b] is a…", o: ["voiceless bilabial stop", "voiced bilabial stop", "voiced labiodental fricative", "voiced alveolar stop"], a: 1 },
      { q: "Which sound is a voiceless alveolar fricative?", o: ["z", "ʃ", "s", "θ"], a: 2 },
      { q: "[tʃ] and [dʒ] are…", o: ["fricatives", "affricates", "liquids", "glides"], a: 1 },
      { q: "“High back rounded” vowel:", o: ["i", "æ", "u", "ə"], a: 2 },
      { q: "Which set is a natural class?", o: ["[b, d, g, p, l]", "[m, n, ŋ]", "[s, i, k]", "[f, a, r]"], a: 1 },
      { q: "Vowels are…", o: ["[+syll, +cons, −son]", "[+syll, −cons, +son]", "[−syll, −cons, +son]", "[−syll, +cons, +son]"], a: 1 },
      { q: "Which is [+strident]?", o: ["f", "θ", "s", "p"], a: 2 },
      { q: "/ʃ/ is…", o: ["+anterior +coronal", "−anterior +coronal", "+anterior −coronal", "−anterior −coronal"], a: 1 },
      { q: "pat / bat is a…", o: ["minimal pair", "free variation", "complementary distribution", "diphthong"], a: 0 },
      { q: "[pʰ] in pin and [p] in spin are…", o: ["different phonemes", "allophones in complementary distribution", "in free variation", "a minimal pair"], a: 1 },
      { q: "[ŋ] never starts an English word. This is…", o: ["free variation", "defective distribution", "coarticulation", "assimilation"], a: 1 },
      { q: "“hand” [hæ̃nd] shows…", o: ["palatalisation", "nasalisation", "labialisation", "glottalisation"], a: 1 }
    ],
    exercises: [
      "Describe (voice, place, manner): [p] [z] [m] [ʃ] [k] [l] [dʒ].",
      "Give the sound: voiceless bilabial stop; voiced alveolar fricative; voiced bilabial glide; mid central vowel.",
      "Feature matrix (+/−) for [k], [p], [n], [z], [i].",
      "Odd one out: [iː ɪ e æ] · [uː ʊ ɔː ɑː] — explain why.",
      "Complete the natural class: [b d g __] voiced obstruents · [s ʃ __] · [p k __].",
      "Explain with examples the difference between complementary distribution and free variation."
    ],
    tips: [
      "Learn the consonant chart and vowel chart by heart — they come up in every exam.",
      "When asked to describe a sound, use the order the professor asks for (e.g. nasal/oral, voiced/voiceless, place, manner).",
      "In phonemic analysis, always state your conclusion as a rule: /p/ → [pʰ] / #___V́."
    ]
  },

  /* ---------------------------------------------------------------- SYNTAX */
  {
    id: "syntax", name: "Syntax", short: "Syn", icon: "🌳",
    prof: "Pr. El Kemma (Group 1) · Classroom by Pr. Smirkou", slot: "Thursday 11:30–13:00 · Amphi C",
    where: "Google Classroom — Syntax Module S5; 2026-2027, code qvn3onl2. Main book: Andrew Carnie, Syntax: A Generative Introduction.",
    files: "S5 CLAUDE/Syntax",
    summary: "Generative syntax: how words group into constituents, how phrase-structure rules build trees, how to test structure, and the relations between nodes (X-bar, c-command, binding).",
    lessons: [
      { title: "1. Generative grammar basics", body: `
        <p><b>Syntax</b> = the study of how words combine into sentences. <b>Generative grammar</b> (Chomsky) models the unconscious knowledge a native speaker has.</p>
        <ul><li><b>Competence</b> (what you know) vs <b>performance</b> (what you actually say, with errors).</li>
        <li><b>Grammaticality judgements:</b> * marks an ungrammatical sentence (<i>*Cat the sat</i>).</li>
        <li><b>Prescriptive</b> rules (“don’t split infinitives”) vs <b>descriptive</b> rules (how people really speak). Linguists describe.</li>
        <li><b>Universal Grammar (UG):</b> the innate part shared by all humans; the <b>logical problem of acquisition</b> (children learn a huge system from limited input).</li></ul>` },
      { title: "2. Parts of speech", body: `
        <p>Categories are defined by <b>distribution</b> (where they occur) and <b>morphology</b> (which affixes they take), not by meaning.</p>
        <ul><li><b>Lexical</b> (open): N, V, Adj, Adv.</li><li><b>Functional</b> (closed): D (the, a, this), T (will, can, -ed, to), C (that, if, whether), P, Conj, Neg.</li></ul>
        <p>Test: a noun can follow <i>the</i> and take plural <i>-s</i>; an adjective can follow <i>very</i> and take <i>-er</i>; a verb can follow <i>will</i> and take <i>-ed</i>.</p>
        <p><b>Subcategorisation:</b> intransitive (<i>sleep</i>), transitive (<i>hit</i> + NP), ditransitive (<i>give</i> + NP + PP/NP).</p>` },
      { title: "3. Constituency and phrase-structure rules", body: `
        <p>Words form <b>constituents</b> (groups that act as a unit). Phrase-structure rules generate them:</p>
        <pre>S  → NP (T) VP
NP → (D) (AdjP+) N (PP+)
VP → (AdvP+) V (NP) (PP+) (CP)
AdjP → (AdvP) Adj
PP → P NP
CP → C S</pre>
        <h4>Constituency tests</h4>
        <ul><li><b>Replacement</b> with a pro-form: <i>[The old man] left → <u>He</u> left.</i></li>
        <li><b>Stand-alone</b> (answer to a question): <i>What did you see? — The big dog.</i></li>
        <li><b>Movement</b> (clefting / topicalisation): <i>It was <u>the big dog</u> that I saw.</i></li>
        <li><b>Coordination:</b> only like constituents conjoin: <i>[the dog] and [the cat]</i>.</li></ul>
        <p><b>Structural ambiguity:</b> <i>I saw the man with the telescope</i> — PP attached to V (I used the telescope) or to N (the man had it). Two trees = two meanings.</p>` },
      { title: "4. Drawing trees & structural relations", body: `
        <p>Steps: (1) label every word’s category; (2) group modifiers with what they modify, from the inside out; (3) build phrases up to S; (4) check every phrase has a head.</p>
        <pre>[S [NP [D the] [N student]] [VP [V read] [NP [D a] [N book]]]]</pre>
        <ul><li><b>Dominance:</b> a node is above another and connected by lines going down.</li>
        <li><b>Immediate dominance:</b> mother → daughter. Daughters of the same mother are <b>sisters</b>.</li>
        <li><b>Precedence:</b> left-to-right order (no crossing lines).</li>
        <li><b>C-command:</b> a node c-commands its sister and everything its sister dominates.</li>
        <li><b>Grammatical relations:</b> subject = NP daughter of S; direct object = NP daughter of VP.</li></ul>` },
      { title: "5. X-bar theory", body: `
        <p>All phrases share one template:</p>
        <pre>XP → (Specifier) X'
X' → X' (Adjunct)    or   X' → (Adjunct) X'
X' → X (Complement)</pre>
        <ul><li><b>Head</b> (X): the word that names the phrase.</li>
        <li><b>Complement:</b> sister to the head, required (<i>the king <u>of England</u></i>).</li>
        <li><b>Adjunct:</b> sister to X', optional, can be repeated (<i>the king <u>with red hair</u></i>).</li>
        <li><b>Specifier:</b> daughter of XP, sister of X' (determiners in NP).</li></ul>
        <p>Test: complements come closer to the head than adjuncts — <i>the king of England with red hair</i> ✔ / <i>*the king with red hair of England</i>.</p>` },
      { title: "6. Binding theory", body: `
        <ul><li><b>Principle A:</b> an anaphor (<i>himself</i>) must be bound in its clause — <i>John<sub>i</sub> likes himself<sub>i</sub></i>.</li>
        <li><b>Principle B:</b> a pronoun (<i>him</i>) must be free in its clause — <i>*John<sub>i</sub> likes him<sub>i</sub></i>.</li>
        <li><b>Principle C:</b> an R-expression (<i>John</i>) must be free everywhere — <i>*He<sub>i</sub> likes John<sub>i</sub></i>.</li></ul>
        <p>“Bound” = c-commanded by a co-indexed noun phrase.</p>` }
    ],
    quiz: [
      { q: "Knowledge of language (as opposed to use) is called…", o: ["performance", "competence", "prescription", "pragmatics"], a: 1 },
      { q: "Parts of speech in generative syntax are best defined by…", o: ["meaning", "distribution and morphology", "spelling", "stress"], a: 1 },
      { q: "Which is a FUNCTIONAL category?", o: ["Noun", "Adjective", "Determiner", "Adverb"], a: 2 },
      { q: "“Give” is…", o: ["intransitive", "transitive", "ditransitive", "copular"], a: 2 },
      { q: "Replacing “the old man” with “he” is the… test", o: ["coordination", "replacement", "movement", "stand-alone"], a: 1 },
      { q: "In X-bar, a complement is sister to…", o: ["XP", "X'", "the head X", "the specifier"], a: 2 },
      { q: "“with red hair” in “the king with red hair” is…", o: ["a complement", "an adjunct", "a specifier", "a head"], a: 1 },
      { q: "“John likes himself” illustrates…", o: ["Principle A", "Principle B", "Principle C", "c-selection"], a: 0 },
      { q: "“*He likes John” (same person) violates…", o: ["Principle A", "Principle B", "Principle C", "X-bar"], a: 2 },
      { q: "A node c-commands…", o: ["only its mother", "its sister and everything the sister dominates", "every node in the tree", "only its daughters"], a: 1 }
    ],
    exercises: [
      "Draw trees: (a) The student read a long book. (b) The girl with the red hat smiled at me.",
      "Draw the two trees for “I saw the man with the telescope” and paraphrase each meaning.",
      "Use 3 constituency tests to prove that “the big dog” is a constituent in “I saw the big dog”.",
      "Identify the head, complement and adjunct in “a student of physics with long hair”.",
      "Explain why “*Mary saw herself’s mother” and “*John thinks Mary likes himself” are ungrammatical."
    ],
    tips: [
      "Practise drawing trees every day — it’s a skill, not a memory test.",
      "Always label every node and make sure each phrase has a head.",
      "Read Carnie chapters 1–6 (in your Syntax folder) — they match this course."
    ]
  },

  /* ---------------------------------------------------------------- SEMANTICS */
  {
    id: "semantics", name: "Semantics", short: "Sem", icon: "💡",
    prof: "Pr. Chibi", slot: "Thursday 10:00–11:30 · Room 2",
    where: "No Classroom — attendance required. Slides (photos) for sessions 1–4 in your folder. The lectures follow J. Saeed, Semantics.",
    files: "S5 CLAUDE/Semantics",
    summary: "The study of meaning: signs and symbols, the problems with defining meaning, reference and sense, theories of naming, prototypes, figures of speech and sentence meaning.",
    lessons: [
      { title: "1. What is semantics? Semantics and semiotics", body: `
        <p><b>Semantics</b> = the study of <b>meaning</b> communicated through language (words and sentences). <b>Pragmatics</b> = meaning in context (what speakers mean).</p>
        <p>Humans constantly make one thing <b>stand for</b> another — this is <b>signification</b>. The general study of sign systems is <b>semiotics</b>; linguistic meaning is one part of it (Saussure).</p>
        <p><b>Saussure:</b> a sign = <b>signifier</b> (the form, e.g. the sound <i>tree</i>) + <b>signified</b> (the concept). The link is <b>arbitrary</b>.</p>
        <h4>Peirce (1955): icon, index, symbol</h4>
        <table><tr><th>Sign</th><th>Link to meaning</th><th>Example</th></tr>
        <tr><td><b>Icon</b></td><td>resemblance</td><td>a portrait, a map, a diagram of an engine</td></tr>
        <tr><td><b>Index</b></td><td>cause / association</td><td>smoke → fire, footprints → someone passed</td></tr>
        <tr><td><b>Symbol</b></td><td>pure convention</td><td>military insignia, black clothes for mourning, <b>words</b></td></tr></table>` },
      { title: "2. Three challenges in doing semantics", body: `
        <ol><li><b>Circularity:</b> we can only define words with other words.</li>
        <li><b>Linguistic vs encyclopedic knowledge:</b> where does meaning live? If I believe a whale is a fish and you know it’s a mammal, do we mean different things by <i>whale</i>? Whose knowledge counts — the average speaker (an <b>idiolect</b>?) or experts?</li>
        <li><b>Context:</b> utterances mean different things in different situations. <i>“Marvellous weather”</i> in the sun vs the rain; <i>“It’s getting late”</i> = “Let’s leave”. Possible contexts are almost infinite.</li></ol>
        <div class="callout">Conclusion: semantic analysis has to be more complex than simply attaching definitions to words.</div>
        <p><b>Levels of meaning:</b> word meaning (lexical semantics), sentence meaning, utterance meaning (pragmatics).</p>` },
      { title: "3. Reference and sense", body: `
        <ul><li><b>Reference:</b> the relation between a word/expression and the <b>thing in the world</b> it points to (its <b>referent</b>). The set of all possible referents = the <b>extension</b>.</li>
        <li><b>Sense:</b> the meaning a word has <b>inside the language system</b>, its relations with other words (Frege). <i>The morning star</i> and <i>the evening star</i> have the same reference (Venus) but different senses.</li></ul>
        <h4>Types of reference</h4>
        <ul><li><b>Referring vs non-referring expressions:</b> <i>so, very, maybe, if, not, all</i> can never refer; nouns like <i>car</i> in “That car looks vicious” do refer → nouns are potentially referring.</li>
        <li><b>Constant reference</b> (<i>the Eiffel Tower, the Pacific</i>) vs <b>variable reference</b> (<i>the president, I, you</i> — depends on context).</li>
        <li><b>Nominals</b> (names and noun phrases) are the units that most clearly show reference.</li></ul>` },
      { title: "4. Meaning, thought and reality: names and concepts", body: `
        <h4>Theories of how names work</h4>
        <ul><li><b>Description theory</b> (Russell, Frege, Searle): a name is a shorthand for descriptions — <i>Shakespeare</i> = “the writer of Hamlet and Othello”, “the most famous Elizabethan playwright”. Understanding a name = associating it with the right description.</li>
        <li><b>Causal theory</b> (Kripke, Donnellan; Devitt & Sterelny): a name is given in an original “baptism” and then <b>passed on</b> in a chain of speakers. You can use <i>Napoleon</i> correctly without knowing descriptions — the chain goes back to the original naming (grounding).</li></ul>
        <h4>Concepts</h4>
        <ul><li><b>Necessary and sufficient conditions</b> (classical view): a <i>bachelor</i> = adult + male + unmarried.</li>
        <li><b>Prototype theory</b> (Eleanor Rosch, 1970s): categories have <b>central (typical)</b> and <b>peripheral</b> members. A <i>sparrow</i> is a better BIRD than a <i>penguin</i>; a <i>chair</i> is more central to FURNITURE than a <i>lamp</i>. Boundaries are fuzzy.</li></ul>` },
      { title: "5. Figures of speech (figurative meaning)", body: `
        <table><tr><th>Figure</th><th>What it does</th><th>Example</th></tr>
        <tr><td><b>Metaphor</b></td><td>describes one thing as another</td><td>Time is money.</td></tr>
        <tr><td><b>Metonymy</b></td><td>uses something <i>associated</i> with the thing</td><td><i>The White House</i> announced… (= US government); <i>The crown</i> (= monarchy); <i>The pen is mightier than the sword</i></td></tr>
        <tr><td><b>Synecdoche</b></td><td>a <i>part</i> for the whole (or whole for part)</td><td>We need more <i>hands</i>; all <i>eyes</i> were on him; more <i>brains</i></td></tr>
        <tr><td><b>Hyperbole</b></td><td>deliberate exaggeration</td><td>a <i>mountain</i> of homework; waiting <i>a thousand years</i>; she <i>cried a river</i></td></tr>
        <tr><td><b>Irony</b></td><td>says the opposite of what is meant</td><td>“What a beautiful day!” (in a storm)</td></tr>
        <tr><td><b>Litotes</b> /ˈlaɪ.təʊ.tiːz/</td><td>understatement by <b>negating the opposite</b></td><td>“not bad” (= good); “She is no fool”; “not uninteresting”</td></tr></table>
        <div class="callout">Metonymy vs synecdoche: synecdoche = PART of the thing (hands → workers). Metonymy = something CLOSELY ASSOCIATED but not a part (the press → journalists).</div>` },
      { title: "6. Lexical relations", body: `
        <ul><li><b>Synonymy:</b> same meaning (<i>big/large</i>) — rarely perfect.</li>
        <li><b>Antonymy:</b> <b>gradable</b> (<i>hot/cold</i> — “very hot”), <b>complementary</b> (<i>dead/alive</i> — no middle), <b>reverses</b> (<i>push/pull</i>), <b>converses</b> (<i>buy/sell, above/below</i>).</li>
        <li><b>Hyponymy:</b> inclusion — <i>tulip</i> is a hyponym of <i>flower</i> (the superordinate).</li>
        <li><b>Meronymy:</b> part–whole — <i>wheel</i> is a meronym of <i>car</i>.</li>
        <li><b>Homonymy:</b> same form, unrelated meanings (<i>bank</i> of a river / money <i>bank</i>). <b>Homophones</b> (<i>flower/flour</i>), <b>homographs</b> (<i>lead</i> the metal / to <i>lead</i>).</li>
        <li><b>Polysemy:</b> one word, related meanings (<i>head</i> of a person / of a company).</li></ul>` },
      { title: "7. Sentence semantics", body: `
        <h4>Situations: time, tense and aspect</h4>
        <p>Languages mark time differently: English marks <b>tense</b> on the verb; Chinese uses <b>time words</b> (<i>Tā zuótiān yǒu kè</i> = “he yesterday have classes”).</p>
        <h4>Relations between sentences</h4>
        <ul><li><b>Entailment:</b> if A is true, B must be true. <i>“The dog killed the cat” → “The cat is dead”.</i></li>
        <li><b>Presupposition:</b> background assumed even when negated. <i>“John’s brother is (not) rich” → John has a brother.</i></li>
        <li><b>Synonymy / paraphrase:</b> two sentences with the same truth conditions (active/passive).</li>
        <li><b>Contradiction:</b> both cannot be true. <i>“He is alive” / “He is dead”.</i></li>
        <li><b>Analytic</b> (true by meaning: <i>bachelors are unmarried</i>) vs <b>synthetic</b> (true by facts) sentences.</li></ul>` }
    ],
    quiz: [
      { q: "The general study of sign systems is…", o: ["semantics", "semiotics", "syntax", "phonetics"], a: 1 },
      { q: "In Saussure’s terms, the form of a sign is the…", o: ["signified", "signifier", "referent", "index"], a: 1 },
      { q: "Smoke as a sign of fire is (Peirce)…", o: ["an icon", "an index", "a symbol", "a metaphor"], a: 1 },
      { q: "Words are mostly…", o: ["icons", "indexes", "symbols", "prototypes"], a: 2 },
      { q: "Defining words only with other words is the problem of…", o: ["context", "circularity", "reference", "polysemy"], a: 1 },
      { q: "“The president” has…", o: ["constant reference", "variable reference", "no reference", "only sense"], a: 1 },
      { q: "The theory that names are passed on in a chain from an original naming is…", o: ["the description theory", "the causal theory", "prototype theory", "componential analysis"], a: 1 },
      { q: "Rosch: a sparrow is a more typical bird than a penguin. This is…", o: ["prototype theory", "the causal theory", "hyponymy", "entailment"], a: 0 },
      { q: "“The White House announced new measures” is…", o: ["synecdoche", "metonymy", "litotes", "hyperbole"], a: 1 },
      { q: "“We need more hands” is…", o: ["synecdoche", "metonymy", "irony", "litotes"], a: 0 },
      { q: "“She is not unintelligent” is…", o: ["hyperbole", "irony", "litotes", "metaphor"], a: 2 },
      { q: "dead / alive are…", o: ["gradable antonyms", "complementary antonyms", "converses", "synonyms"], a: 1 },
      { q: "“The king of France is bald” assumes France has a king. This is…", o: ["entailment", "presupposition", "contradiction", "paraphrase"], a: 1 }
    ],
    exercises: [
      "Identify the figure of speech: “Wonderful! Another three-hour meeting!” · “I have a mountain of homework” · “The crown will address the nation” · “The film was not particularly bad” · “All eyes were fixed on the professor”.",
      "Give one icon, one index and one symbol from everyday life in Morocco.",
      "Explain, with an example, the difference between sense and reference.",
      "Compare the description theory and the causal theory of names.",
      "Give the hyponyms of “vehicle” and the meronyms of “house”."
    ],
    tips: [
      "Pr. Chibi uses exercises with answer keys in class — redo them (they’re in your photos).",
      "Use the scholars’ names: Saussure, Peirce, Frege, Russell, Kripke, Rosch.",
      "Since there’s no Classroom, attendance + your own notes are essential."
    ]
  },

  /* ---------------------------------------------------------------- TEACHING THEORIES */
  {
    id: "tta", name: "Teaching Theories & Approaches", short: "TTA", icon: "🎓",
    prof: "Pr. Brigui", slot: "Wednesday 11:30–13:00 · Amphi C",
    where: "No Classroom, no booklet yet (maybe after the programme). Slide photos for sessions 1–5 in your folder. About 2 sessions left.",
    files: "S5 CLAUDE/Teaching Theories & Approaches",
    summary: "The learning theories behind language teaching (behaviourism, mentalism, cognitivism, constructivism, humanism, Krashen) and the main teaching methods from Grammar-Translation to the post-method era.",
    lessons: [
      { title: "1. Theory, approach, method, technique", body: `
        <table><tr><th>Term</th><th>Definition</th><th>Question it answers</th></tr>
        <tr><td><b>Theory</b></td><td>An explanation of how learning occurs.</td><td>How does learning happen?</td></tr>
        <tr><td><b>Approach</b></td><td>A set of assumptions/principles about language and language teaching.</td><td>What principles should guide teaching?</td></tr>
        <tr><td><b>Method</b></td><td>A systematic way of organising teaching based on those principles.</td><td>How is teaching organised?</td></tr>
        <tr><td><b>Technique</b></td><td>A specific classroom procedure or activity — the narrowest concept.</td><td>What exactly do teacher and learners do? (dictation, role-play, repetition)</td></tr></table>
        <p>Order: <b>Theory → Approach → Method → Technique</b> (Anthony’s model).</p>
        <p><b>What shapes teaching:</b> beliefs about language → beliefs about learning → principles → approaches/methods → classroom practices → learning experiences. Teaching decisions are never neutral: when our idea of language changes, our teaching changes.</p>` },
      { title: "2. Behaviourism", body: `
        <p><b>Key figures:</b> Pavlov (classical conditioning), Watson, <b>Skinner</b> (operant conditioning, <i>Verbal Behavior</i>, 1957).</p>
        <ul><li>The child is born a <b>blank slate</b> (tabula rasa); the environment writes on it.</li>
        <li>Learning = <b>habit formation</b> through <b>stimulus → response → reinforcement</b>.</li>
        <li>Learning a language = acquiring a set of appropriate mechanical habits through <b>imitation and repetition</b>.</li>
        <li><b>Errors</b> are signs of failure — bad habits — and must be <b>corrected immediately</b>.</li>
        <li>L2 learners must <b>repress L1 habits</b> (interference) and acquire L2 habits.</li>
        <li>Explanation is avoided; the rule comes after the habit (<b>inductive</b>).</li></ul>
        <p><b>In the classroom:</b> teacher-led, students listen, do a task, get feedback; drills; rewards, praise and points (still common: quizzes before exams, grades as reinforcement).</p>
        <p><b>Method it produced:</b> the Audio-Lingual Method.</p>` },
      { title: "3. Mentalism / innatism (Chomsky)", body: `
        <p>Chomsky’s 1959 review of Skinner attacked behaviourism. Arguments that children are not just imitating:</p>
        <ol><li>Children produce sentences they have <b>never heard</b> (creativity).</li>
        <li>They make <b>overgeneralisation</b> errors (<i>*mouses, *goed</i>) that adults never say.</li>
        <li>They often <b>cannot repeat</b> what an adult says (long, complex utterances).</li>
        <li>Few children get much <b>explicit grammar correction</b> — parents correct truth and politeness.</li>
        <li><b>Critical period</b>: children who have not acquired language by about 7 never fully catch up.</li></ol>
        <p><b>LAD</b> (Language Acquisition Device) / <b>Universal Grammar</b>: children are born with abstract knowledge of language; they <b>discover the rules</b> by unconscious <b>hypothesis testing</b> (“plural = add -s”) and revise them to include exceptions.</p>` },
      { title: "4. Cognitivism (Ausubel)", body: `
        <p>Cognitive psychology arose as a reaction to behaviourism. It looks at <b>mental processes</b>: how information is received, organised into existing schemata, stored and retrieved. The mind is like an <b>information processor</b>; <b>memory</b> is central. The learner is <b>active</b>.</p>
        <h4>Ausubel: meaningful learning</h4>
        <ul><li>Learning happens by <b>relating new information to existing cognitive structure</b> — “hanging new items on existing cognitive pegs” (subsumption).</li>
        <li><b>Meaningful learning</b> lasts; <b>rote learning</b> (isolated memorisation) is quickly forgotten.</li>
        <li>Mnemonic devices “manufacture meaningfulness” to link lists of items.</li>
        <li><b>Advance organisers</b>: give students a framework before new content.</li></ul>` },
      { title: "5. Constructivism & humanism", body: `
        <ul><li><b>Cognitive constructivism (Piaget):</b> learners build knowledge individually through stages of development; <b>assimilation</b> and <b>accommodation</b>.</li>
        <li><b>Social constructivism (Vygotsky):</b> learning is social. The <b>Zone of Proximal Development (ZPD)</b> = the gap between what a learner can do alone and with help. <b>Scaffolding</b> = temporary support from a teacher/peer.</li>
        <li><b>Humanism (Rogers, Maslow):</b> the whole person — feelings, motivation, self-esteem. The teacher is a <b>facilitator</b>; a safe, low-anxiety classroom. Maslow’s hierarchy of needs.</li></ul>` },
      { title: "6. Krashen’s Monitor Model (5 hypotheses)", body: `
        <ol><li><b>Acquisition–learning:</b> <b>acquisition</b> is subconscious (like a child); <b>learning</b> is conscious knowledge of rules.</li>
        <li><b>Monitor:</b> learned rules only act as an editor. Three conditions: <b>enough time</b>, <b>focus on form</b>, <b>knowledge of the rule</b>. Over-users (always monitoring, like introverts), under-users (extroverts), optimal users.</li>
        <li><b>Natural order:</b> rules are acquired in a predictable order, independent of teaching order (-ing, plural, copula → auxiliary, articles → irregular past → regular past, 3rd person -s, possessive ’s). The easiest rules are not necessarily first.</li>
        <li><b>Input:</b> we acquire through <b>comprehensible input</b> just one step beyond our level: <b>i + 1</b>.</li>
        <li><b>Affective filter:</b> an imaginary barrier. Anxious, unmotivated learners with low self-esteem have a <b>high filter</b> that blocks input; relaxed, confident, motivated learners have a low filter.</li></ol>` },
      { title: "7. Traditional & structural methods", body: `
        <table><tr><th>Method</th><th>Key features</th><th>Weakness</th></tr>
        <tr><td><b>Grammar-Translation (GTM)</b></td><td>Explicit grammar rules (deductive), translation of literary texts, vocabulary lists, L1 used, reading/writing focus, accuracy.</td><td>No speaking or listening; boring; students can’t communicate.</td></tr>
        <tr><td><b>Direct Method</b></td><td>Only L2 in class, no translation, meaning through objects/pictures/mime, grammar taught inductively, speaking & pronunciation, Q&A.</td><td>Needs native-like teachers; hard for abstract meaning.</td></tr>
        <tr><td><b>Audio-Lingual Method (ALM)</b></td><td>Based on behaviourism + structural linguistics: dialogues, <b>drills</b> (repetition, substitution, chain), habit formation, immediate error correction, minimal pairs, language lab.</td><td>Mechanical; learners can repeat but not create language (Chomsky’s critique).</td></tr></table>` },
      { title: "8. Humanistic, communicative and modern methods", body: `
        <h4>Humanistic / “designer” methods (1970s)</h4>
        <ul><li><b>Silent Way</b> (Gattegno): the teacher is mostly silent; Cuisenaire rods, colour charts; learners discover.</li>
        <li><b>Suggestopedia</b> (Lozanov): relaxed atmosphere, music, comfortable chairs — lower the anxiety.</li>
        <li><b>Community Language Learning</b> (Curran): teacher as counsellor; learners form a community; translation by the “knower”.</li>
        <li><b>Total Physical Response</b> (Asher): commands + physical actions (“Stand up! Touch your nose!”); listening before speaking.</li></ul>
        <h4>Communicative & contemporary</h4>
        <ul><li><b>CLT</b>: communicative competence (Hymes), real communication, fluency over accuracy, pair/group work, authentic materials, information gaps.</li>
        <li><b>TBLT</b>: lessons built around meaningful <b>tasks</b> (pre-task → task cycle → language focus).</li>
        <li><b>CBI</b>: learn language through subject content (e.g. learn English by studying history).</li></ul>
        <h4>Modern lesson frameworks</h4>
        <ul><li><b>PPP</b>: Presentation → Practice → Production.</li><li><b>ESA</b> (Harmer): Engage → Study → Activate (flexible order).</li><li><b>Lexical Approach</b> (Lewis): language = chunks/collocations, not grammar + words.</li></ul>
        <h4>Post-method era</h4>
        <p><b>Post-method condition</b> (Kumaravadivelu): no single best method; teachers build their own practice from macro-strategies (particularity, practicality, possibility). <b>Eclectic approach</b>: combine techniques from several methods according to the learners and context.</p>` }
    ],
    quiz: [
      { q: "The narrowest of the four concepts (a classroom activity) is…", o: ["theory", "approach", "method", "technique"], a: 3 },
      { q: "“The child is born a blank slate” is a belief of…", o: ["mentalism", "behaviourism", "cognitivism", "humanism"], a: 1 },
      { q: "Operant conditioning is associated with…", o: ["Chomsky", "Skinner", "Vygotsky", "Krashen"], a: 1 },
      { q: "In behaviourism, errors are…", o: ["natural steps", "signs of failure to correct immediately", "ignored", "signs of creativity"], a: 1 },
      { q: "“*goed” and “*mouses” support…", o: ["imitation theory", "hypothesis testing (mentalism)", "behaviourism", "the affective filter"], a: 1 },
      { q: "“Hanging new items on existing cognitive pegs” is…", o: ["rote learning", "Ausubel’s meaningful learning", "the ZPD", "operant conditioning"], a: 1 },
      { q: "The ZPD and scaffolding come from…", o: ["Piaget", "Vygotsky", "Skinner", "Rogers"], a: 1 },
      { q: "i + 1 is part of Krashen’s…", o: ["monitor hypothesis", "input hypothesis", "natural order hypothesis", "affective filter"], a: 1 },
      { q: "An anxious learner who blocks input has a…", o: ["low affective filter", "high affective filter", "strong monitor", "large LAD"], a: 1 },
      { q: "Drills, dialogues and habit formation define…", o: ["GTM", "the Direct Method", "the Audio-Lingual Method", "CLT"], a: 2 },
      { q: "“Stand up! Touch your nose!” is typical of…", o: ["Suggestopedia", "TPR", "Silent Way", "CLL"], a: 1 },
      { q: "Engage → Study → Activate is…", o: ["PPP", "ESA", "TBLT", "CBI"], a: 1 },
      { q: "Using L1 translation of literary texts and explicit rules is…", o: ["GTM", "Direct Method", "ALM", "TBLT"], a: 0 }
    ],
    exercises: [
      "Define and distinguish: theory, approach, method, technique — with one example each.",
      "Compare behaviourism and mentalism on: the learner, errors, the role of the environment.",
      "Explain Krashen’s 5 hypotheses and give one classroom implication of each.",
      "Compare GTM, the Direct Method and ALM in a table (L1 use, grammar, skills, errors).",
      "You teach a class of shy beginners: which method(s) would you choose and why?"
    ],
    tips: [
      "Learn each theory as: key figure + main idea + view of errors + method it produced.",
      "Tables comparing methods are the fastest way to revise — make your own.",
      "Only ~2 sessions left: ask classmates for any slides you’re missing."
    ]
  },

  /* ---------------------------------------------------------------- DIGITAL SKILLS */
  {
    id: "digital", name: "Digital Skills", short: "Digi", icon: "💻",
    prof: "Pr. Nouha Belmahi", slot: "Wednesday 13:00–14:30 · Amphi C (Wednesday group)",
    where: "Teams community: WEDNESDAY – Digital Skills 26/27 – Pr Belmahi. Attendance is mandatory. Office hours: Tuesday 11:00–13:00 (email first).",
    files: "S5 CLAUDE/Digital Skills/Teams course files",
    summary: "Practical skills for university work: organising files, searching and evaluating information, building a research plan, writing professional documents, presenting, and understanding the Internet. Graded mostly through a group midterm project.",
    lessons: [
      { title: "⚠ The midterm group project (read first)", body: `
        <div class="callout danger"><b>Report deadline: 6 December.</b> Presentation in class: <b>16 December</b> (Wednesday group). Groups of max 6 — individual work is NOT accepted.</div>
        <h4>Topics (one per group)</h4>
        <ol><li>Growing up and coming of age in literature</li><li>Tradition and modernity in short stories</li><li>Identity, home and migration in literature</li><li>Myths and folktales across cultures</li><li>Colonialism and its legacy in literature</li><li>Grammar in everyday English</li><li>Writing a good essay</li><li>Reading critically: summarizing and paraphrasing</li><li>Verbal and nonverbal communication</li><li>Culture and communication</li></ol>
        <h4>The report (Word, 1,500–2,000 words)</h4>
        <ul><li>Title page with all names · table of contents · page numbers</li><li>Introduction, 2–3 sections with headings, conclusion</li><li>At least <b>5 sources</b>, including <b>2 academic</b> (Google Scholar…)</li><li>References in <b>one</b> style: APA or MLA</li><li>Appendix “Research Process” (1 page): keywords & search engines used, why you trusted your sources, who did what</li></ul>
        <h4>The presentation (PowerPoint, 8–10 min)</h4>
        <ul><li>8–12 slides · every member presents · 2–3 minutes of questions to individuals</li></ul>
        <h4>Rules</h4>
        <ul><li>Submit both files on Teams, named professionally: <code>Group3_DigitalSkills_Report_v1.docx</code></li><li>AI tools only to check grammar — and you must mention it in the appendix.</li><li>Grades can be adjusted individually if someone didn’t contribute.</li></ul>
        <h4>Grading (/20)</h4>
        <table><tr><th>Part</th><th>Criterion</th><th>Pts</th></tr>
        <tr><td rowspan="4">Report</td><td>Content & research quality</td><td>4</td></tr><tr><td>Quality/evaluation of sources</td><td>2</td></tr><tr><td>Professional formatting</td><td>2</td></tr><tr><td>Correct, consistent references</td><td>2</td></tr>
        <tr><td rowspan="3">Presentation</td><td>Structure & clarity</td><td>2</td></tr><tr><td>Slide design</td><td>2</td></tr><tr><td>Delivery, timing, answers</td><td>2</td></tr>
        <tr><td rowspan="2">Process</td><td>Research Process appendix</td><td>2</td></tr><tr><td>File naming & on-time submission</td><td>2</td></tr></table>` },
      { title: "Session 1 — What are digital skills?", body: `
        <p><b>Digital skills</b> = the ability to use digital technologies <b>effectively, critically, creatively and responsibly</b> to achieve a goal — not just knowing software.</p>
        <p>For English Studies you must find and evaluate information, research, write reports, present, communicate professionally and collaborate online.</p>
        <p>Course blocks: digital mindset & workspace → files & cloud → search & information literacy → academic research → Word documents → PowerPoint → Excel → collaboration → AI & digital literacy → professional digital identity.</p>
        <div class="callout">The most important skill: <b>learning how to learn</b> — search, test, evaluate, adapt.</div>` },
      { title: "Session 2 — Your digital workspace", body: `
        <ul><li>Know your file extensions: .docx .pdf .pptx .xlsx .jpg/.png .mp4 .txt — turn on <b>File name extensions</b> in File Explorer.</li>
        <li><b>Professional naming:</b> <code>Name_Course_Task_Version</code> → <code>Belmahi_DigitalSkills_Assignment1_v2.docx</code>. Never “finalfinalREAL2”.</li>
        <li>3 rules: dates as <b>YYYY-MM-DD</b>; no spaces/accents/symbols; version numbers (v1, v2).</li>
        <li>Readings: <code>Author_Year_ShortTitle.pdf</code> (Said_1978_Orientalism.pdf).</li>
        <li>Folders should mirror how you work (Assignments / Readings / Presentations / Notes).</li>
        <li>Cloud (OneDrive, Google Drive): access anywhere, share, <b>version history</b>. But <b>sync is not backup</b>.</li>
        <li><b>3-2-1 backup rule:</b> 3 copies, 2 types of storage, 1 copy elsewhere.</li>
        <li>Search instead of scrolling: <code>*.pdf</code> in File Explorer, <code>type:pdf</code> in Drive, Ctrl+F inside a file. <b>Zotero</b> organises readings and builds bibliographies.</li></ul>` },
      { title: "Session 3 — Searching and evaluating information", body: `
        <ul><li>Right tool: Google for general info, Wikipedia for an overview (a <b>door, not a destination</b>), <b>Google Scholar</b> for academic sources, library databases.</li>
        <li>Search with <b>keywords</b>, not full questions: <i>Moroccan folktales oral tradition</i>.</li>
        <li><b>Operators:</b> <code>"exact phrase"</code>, <code>-exclude</code>, <code>OR</code>, <code>site:</code> (site:edu), <code>filetype:pdf</code>. Use Tools → time/type/language filters.</li>
        <li><b>The 5 questions:</b> Who wrote it? When? Why? How do they know? Is it useful for my question?</li>
        <li><b>Red flags:</b> no author, no date, no references, many ads, shocking headline, strange URL.</li>
        <li><b>Read laterally:</b> open new tabs and check what others say about the source.</li>
        <li><b>Misinformation</b> (false, no intent to deceive) vs <b>disinformation</b> (deliberate).</li>
        <li><b>AI chatbots are not search engines</b> — they can invent sources and quotes.</li>
        <li>Google Scholar: [PDF] links, <b>Cited by</b>, Related articles. Keep a <b>search log</b> (date, tool, keywords, source found).</li></ul>` },
      { title: "Session 4 — From sources to a research plan", body: `
        <p>The 6-step journey: <b>Question → Search → Read → Organize → Cite → Document</b>.</p>
        <ol><li><b>Question:</b> a topic is not a research question. Narrow it — which people/places/texts? which period? which angle? → <i>How do small cafés in Kenitra use Instagram stories to attract students?</i> (focused, open, realistic).</li>
        <li><b>Search:</b> Google Scholar, DOAJ, ERIC, JSTOR… One good source leads to others: look <b>back</b> (its references), <b>forward</b> (Cited by), <b>sideways</b> (related).</li>
        <li><b>Read strategically:</b> title & abstract → conclusion → introduction → only the sections you need.</li>
        <li><b>Organize:</b> a shared <b>research table</b> (source · main idea in your words · section · exact quote + page). Organise by <b>idea</b>, not source by source.</li>
        <li><b>Cite honestly:</b> quote (marks + page), paraphrase (your words AND structure + citation), summary (+ citation). Changing a few words is still plagiarism. Choose <b>APA 7</b> or <b>MLA 9</b> and stay consistent.</li>
        <li><b>Document:</b> the Research Process appendix (how you searched, why you trusted sources, who did what).</li></ol>` },
      { title: "Session 5 — Writing and designing professional documents", body: `
        <ul><li><b>Introduction = funnel:</b> context → focus → research question → plan. <b>Conclusion:</b> remind the question → give the answer → limits/next steps.</li>
        <li><b>Body paragraph in 4 moves:</b> Point → Evidence (cited) → Explanation → Link.</li>
        <li>Synthesis words: <i>Both X and Y show… / In contrast, Z argues… / Moreover… / Therefore…</i></li>
        <li><b>Academic style:</b> no contractions, precise words, less “I think” (→ “This report argues…”), no “stuff”, “so yeah”.</li>
        <li><b>Design principles:</b> hierarchy, consistency, alignment, proximity, white space. Font 11–12 pt, one or two fonts, 1.15–1.5 spacing.</li>
        <li><b>Word tools:</b> Styles (Heading 1/2), Navigation pane, automatic Table of Contents, page numbers, captions, Read Aloud, Editor.</li>
        <li><b>Inclusive documents:</b> real headings, alt text for images, good contrast, don’t rely on colour alone.</li>
        <li>Save the final as <b>PDF</b>; check hidden metadata (File → Info → Inspect Document).</li></ul>` },
      { title: "Session 6 — Presenting in a digital world", body: `
        <p><b>6 stages:</b> Build (one <b>shared</b> deck in OneDrive/Google Drive, not five copies) → Design (themes, Slide Master, Designer) → Visuals (check the <b>licence</b>: public domain/CC0, CC BY… use Unsplash, Pexels, Wikimedia, Openverse; always credit) → Enrich (video, live polls with Forms/Mentimeter + QR code) → Rehearse (speaker notes, Presenter View, <b>Speaker Coach</b>) → Share (export PDF, embed fonts, compress pictures).</p>
        <h4>Persuasion (Aristotle)</h4>
        <p><b>Ethos</b> (credibility: cite sources) · <b>Pathos</b> (emotion: a story, an example) · <b>Logos</b> (logic: evidence, data).</p>
        <ul><li>Structure it like an episode: hook → problem → clues → reveal → conclusion. Know your one-sentence message.</li>
        <li><b>One idea per slide</b>, large text, few words, points appear one by one; honest charts (axis from 0).</li>
        <li>Delivery: slower than you think, pauses, eye contact, rehearse twice with a timer. Questions: listen → rephrase → answer → check.</li>
        <li><b>Persuade, don’t manipulate</b> (Forer/Barnum effect: vague statements feel personal).</li></ul>` },
      { title: "Session 7 — The Internet, the web and online learning", body: `
        <ul><li><b>Internet</b> = the global network (infrastructure). <b>Web</b> = one service on it (linked pages in a browser). A WhatsApp call uses the Internet, not the web.</li>
        <li>Journey of a click: browser → provider → <b>DNS</b> finds the server → server sends the page in <b>packets</b>.</li>
        <li>URL: <code>https://</code> (protocol, s = secure) · domain · extension (.ma, .uk, .org, .edu) · path.</li>
        <li>Web pages = <b>HTML</b> (structure) + <b>CSS</b> (style) + <b>JavaScript</b> (interaction).</li>
        <li><b>https = encrypted, not honest.</b> Cookies = small files sites store; manage them.</li>
        <li>History: 1969 ARPANET (first message “LO”) · 1983 TCP/IP · 1989 Tim Berners-Lee invents the web · 1991 first website · 1998 Google · 2004 social media · 2007 smartphone · 2012 MOOCs · 2022 generative AI.</li>
        <li>Web 1.0 read → Web 2.0 write/share → Web 3 / AI era.</li>
        <li>Learning modes: face-to-face / online / hybrid; <b>synchronous</b> (live) vs <b>asynchronous</b>. <b>MOOCs</b> (Coursera, edX, FutureLearn). Apps are a supplement, not enough.</li></ul>` }
    ],
    quiz: [
      { q: "The professional file-name formula from Session 2 is…", o: ["Course_final_final", "Name_Course_Task_Version", "Date only", "Anything you like"], a: 1 },
      { q: "The 3-2-1 rule means…", o: ["3 copies, 2 storage types, 1 elsewhere", "3 folders, 2 files, 1 backup", "3 sources, 2 academic, 1 blog", "3 slides per minute"], a: 0 },
      { q: "Wikipedia should be used as…", o: ["a citable academic source", "a door, not a destination", "never", "the main source"], a: 1 },
      { q: "Which operator searches only one website?", o: ["OR", "-", "site:", "\"…\""], a: 2 },
      { q: "False information shared deliberately to deceive is…", o: ["misinformation", "disinformation", "satire", "paraphrase"], a: 1 },
      { q: "“How do small cafés in Kenitra use Instagram stories to attract students?” is…", o: ["a topic", "a good research question", "a yes/no question", "too broad"], a: 1 },
      { q: "Changing only a few words of a source is…", o: ["a paraphrase", "a summary", "plagiarism", "a quote"], a: 2 },
      { q: "A body paragraph’s 4 moves are…", o: ["Hook, problem, clue, reveal", "Point, evidence, explanation, link", "Intro, body, conclusion, references", "Build, design, rehearse, share"], a: 1 },
      { q: "Ethos is…", o: ["emotion", "logic", "credibility", "structure"], a: 2 },
      { q: "A WhatsApp voice call uses…", o: ["the web", "the Internet, not the web", "neither", "only DNS"], a: 1 },
      { q: "https means the site is…", o: ["honest", "encrypted", "free", "academic"], a: 1 },
      { q: "The midterm report needs at least…", o: ["3 sources, 1 academic", "5 sources, 2 academic", "10 sources", "2 sources"], a: 1 },
      { q: "The report submission deadline is…", o: ["16 December", "6 December", "18 December", "1 December"], a: 1 }
    ],
    exercises: [
      "Rename professionally: assignment.docx, essayfinal2.docx, IMG_8392.jpg, document.pdf.",
      "Turn into keywords: “How do young people in Morocco use English on social media?”",
      "Evaluate a blog with no author or date vs a peer-reviewed article using the 5 questions.",
      "Rewrite academically: “Lots of people think social media is bad, so yeah.”",
      "Write one reference in APA 7 and the same in MLA 9."
    ],
    tips: [
      "This module is graded by the PROJECT — join a group now, it is worth 20 points.",
      "Professional emails only: subject, greeting, short message, closing, full name.",
      "Deadlines are the day before the Wednesday class. Check Teams every 2–3 days."
    ]
  },

  /* ---------------------------------------------------------------- ARABIC */
  {
    id: "arabic", name: "Arabic (Foreign Language)", short: "Arab", icon: "📜", rtl: true,
    prof: "Pr. Yacoubi", slot: "Friday 10:00–11:30 · Amphi C",
    where: "The course will be handed out when the programme is finished. Midterm group project — form a group before the next session; the professor explains it on Friday.",
    files: "—",
    summary: "اللغة العربية: المحور الأول «اللغة» (منتهٍ) والمحور الثاني «اللغة والثقافة» (قادم)، مع مشروع جماعي.",
    lessons: [
      { title: "المحور الأول: اللغة — ١. تقديم حول اللغة", body: `
        <p><b>اللغة</b> نظام من الرموز (الأصوات والكلمات) يستعمله الإنسان للتواصل والتعبير عن أفكاره ومشاعره. يعرّفها ابن جني بأنها «أصوات يعبّر بها كل قوم عن أغراضهم».</p>
        <ul><li>وظائفها: التواصل، التفكير، حفظ الثقافة ونقلها، بناء الهوية.</li><li>خصائصها العامة: الاعتباطية، الإنتاجية (توليد جمل جديدة)، التقطيع المزدوج، الطابع الاجتماعي.</li></ul>` },
      { title: "٢. اللغة العربية: ماهيتها وخصائصها", body: `
        <p>العربية لغة <b>سامية</b>، تقوم على نظام <b>الجذر والوزن</b>.</p>
        <h4>الخصائص التركيبية</h4>
        <ul><li>الإعراب: تتغير أواخر الكلمات بحسب موقعها (الرفع، النصب، الجر، الجزم).</li><li>الجملة الاسمية (مبتدأ + خبر) والجملة الفعلية (فعل + فاعل + مفعول).</li><li>مرونة الرتبة بفضل الإعراب.</li></ul>
        <h4>الخصائص الصرفية</h4>
        <ol><li><b>الاشتقاق:</b> توليد كلمات من جذر واحد: ك-ت-ب ← كَتَبَ، كاتِب، مكتوب، مَكتَب، كِتاب.</li>
        <li><b>الزيادة:</b> إضافة حروف إلى الجذر لتغيير المعنى (حروف «سألتمونيها»): كَتَبَ ← كاتَبَ، استكتب.</li>
        <li><b>النحت:</b> صنع كلمة من كلمتين أو أكثر: بسملة (بسم الله)، حوقلة (لا حول ولا قوة إلا بالله)، عبشمي (عبد شمس).</li></ol>
        <div class="callout">ربط مع مادة Morphology: الاشتقاق العربي مثال على <b>non-concatenative morphology</b>.</div>` },
      { title: "٣. العبارات الاصطلاحية (Idioms)", body: `
        <p>تعبير ثابت لا يُفهم معناه من معاني كلماته منفردة، بل له معنى مجازي متعارف عليه.</p>
        <ul><li>«ضرب أخماسًا في أسداس» = تحيّر.</li><li>«رجع بخفّي حنين» = عاد خائبًا.</li><li>«على قدم وساق» = بجد ونشاط.</li><li>«قلب له ظهر المجن» = عاداه بعد مودة.</li></ul>
        <p>خصائصها: الثبات (لا يجوز تغيير كلماتها)، المجازية، الارتباط بالثقافة.</p>` },
      { title: "٤. المتلازمات اللفظية (Collocations)", body: `
        <p>كلمات تتلازم عادة في الاستعمال دون أن يكون معناها مجازيًا بالضرورة.</p>
        <ul><li>«شنّ حربًا»، «أبرم عقدًا»، «ألقى محاضرة»، «سدّد دينًا»، «اتخذ قرارًا».</li></ul>
        <p>الفرق: العبارة الاصطلاحية معناها مجازي غير قابل للاستنتاج، أما المتلازمة فمعناها شفاف لكن اختيار الكلمات ثابت بالعُرف.</p>` },
      { title: "المحور الثاني: اللغة والثقافة (قادم)", body: `
        <ol><li><b>ما هي الثقافة؟</b> مجموع المعارف والمعتقدات والقيم والعادات والفنون التي يكتسبها الإنسان بوصفه عضوًا في مجتمع (تعريف تايلور).</li>
        <li><b>المشترك الإنساني والخصوصية الثقافية:</b> قيم كونية يشترك فيها البشر، وخصوصيات تميز كل مجتمع (اللغة، العادات، الرموز).</li>
        <li><b>مظاهر الثقافة في استعمال اللغة:</b> التحيات، الأمثال، العبارات الاصطلاحية، ألفاظ القرابة، المجاملات.</li>
        <li><b>تطبيقات:</b> تحليل نصوص أدبية واستخراج مكوناتها الثقافية، وتحليل العلاقة بين اللغة والسياق والثقافة والأدب.</li></ol>
        <div class="callout danger">مشروع منتصف الأسدوس: كوّن مجموعتك قبل الحصة القادمة (الجمعة).</div>` }
    ],
    quiz: [
      { q: "صنع كلمة «بسملة» من «بسم الله» يسمى…", o: ["الاشتقاق", "الزيادة", "النحت", "الإعراب"], a: 2 },
      { q: "توليد «كاتب، مكتوب، مكتب» من ك-ت-ب يسمى…", o: ["الاشتقاق", "النحت", "التلازم", "الترادف"], a: 0 },
      { q: "«رجع بخفّي حنين» مثال على…", o: ["متلازمة لفظية", "عبارة اصطلاحية", "نحت", "اشتقاق"], a: 1 },
      { q: "«اتخذ قرارًا» مثال على…", o: ["عبارة اصطلاحية", "متلازمة لفظية", "نحت", "زيادة"], a: 1 },
      { q: "تغيّر أواخر الكلمات حسب موقعها في الجملة يسمى…", o: ["الإعراب", "الاشتقاق", "النحت", "الزيادة"], a: 0 }
    ],
    exercises: [
      "اشتقّ خمس كلمات من الجذر د-ر-س وبيّن معنى كل منها.",
      "ميّز بين العبارة الاصطلاحية والمتلازمة اللفظية مع ثلاثة أمثلة لكل منهما.",
      "استخرج المكونات الثقافية من مثل شعبي مغربي تختاره."
    ],
    tips: [
      "Form your project group before Friday — the professor explains the project then.",
      "Link Arabic morphology (الاشتقاق) to your Morphology course: it helps in both exams.",
      "The professor will share the course at the end — keep your own notes until then."
    ]
  }
  ],

  glossary: [
    ["Allophone", "phonology", "A variant of a phoneme that doesn’t change meaning ([pʰ], [p])."],
    ["Agglutinative", "morphology", "A language where each affix carries one meaning (Turkish)."],
    ["Anaphor", "syntax", "A reflexive/reciprocal (himself, each other) that must be bound in its clause."],
    ["Aspect", "morphology", "How an event unfolds in time (perfective, imperfective)."],
    ["Bound morpheme", "morphology", "A morpheme that can’t stand alone (un-, -ness)."],
    ["C-command", "syntax", "A node c-commands its sister and everything the sister dominates."],
    ["Coarticulation", "phonology", "Overlap of articulations between neighbouring sounds."],
    ["Competence", "syntax", "The unconscious knowledge a speaker has of their language."],
    ["Complementary distribution", "phonology", "Sounds that never occur in the same environment — allophones."],
    ["Comprehensible input", "tta", "Input just beyond the learner’s level (i+1) — Krashen."],
    ["Derivation", "morphology", "Word formation that creates a new word, often changing the class."],
    ["Distinctive feature", "phonology", "A binary property ([±voice]) that distinguishes sounds."],
    ["Entailment", "semantics", "If A is true, B must also be true."],
    ["Fusional", "morphology", "A language where one affix carries several meanings (Spanish)."],
    ["Hyponymy", "semantics", "Inclusion of meaning: rose is a hyponym of flower."],
    ["Icon / Index / Symbol", "semantics", "Peirce: sign by resemblance / association / convention."],
    ["Inflection", "morphology", "Adds grammatical info without changing the class (8 in English)."],
    ["LAD", "tta", "Language Acquisition Device — Chomsky’s innate capacity."],
    ["Litotes", "semantics", "Understatement by negating the opposite (“not bad”)."],
    ["Metonymy", "semantics", "Naming something by an associated thing (the White House)."],
    ["Minimal pair", "phonology", "Two words differing in one sound (pat/bat)."],
    ["Morpheme", "morphology", "The smallest unit carrying meaning or grammatical function."],
    ["Natural class", "phonology", "A group of sounds sharing features ([p t k])."],
    ["Phoneme", "phonology", "An abstract sound unit that distinguishes meaning."],
    ["Presupposition", "semantics", "Background assumption that survives negation."],
    ["Prototype", "semantics", "The most typical member of a category (Rosch)."],
    ["Reference / Sense", "semantics", "Link to the world / meaning within the language system."],
    ["Scaffolding", "tta", "Temporary support helping a learner inside the ZPD."],
    ["Synecdoche", "semantics", "A part for the whole (more hands)."],
    ["Telic", "morphology", "An event with a natural endpoint (build a house)."],
    ["X-bar theory", "syntax", "Every phrase has a head, complement, adjunct and specifier."],
    ["ZPD", "tta", "Zone of Proximal Development — Vygotsky."],
    ["Affective filter", "tta", "Emotional barrier (anxiety, low motivation) blocking input."],
    ["Behaviourism", "tta", "Learning as habit formation through stimulus–response–reinforcement."],
    ["Research question", "digital", "A focused, open, realistic question your report answers."],
    ["Plagiarism", "digital", "Using someone’s words or ideas without credit."],
    ["3-2-1 rule", "digital", "3 copies, 2 storage types, 1 copy elsewhere."]
  ]
};
