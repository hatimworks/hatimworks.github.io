S5.addModule({
  id: "morphology", name: "Morphology", short: "Morph", icon: "🧩",
  profs: { g1: "Pr. Inass Announi", g2: "Pr. Inass Announi" },
  materials: "Google Classroom “Morphology S5 (2026-2027)”: slides for every session and Kahoot revision quizzes. Ask your class group for the code.",
  summary: "The study of the internal structure of words: what a word is, the morphemes that build it, how inflection marks grammar, how new words are formed, and how languages differ in the way they build words.",
  videos: [
    ["cuEWq0cXnSo", "Morphology S5: the whole course in 28 minutes, with exams", "English ABDOU", true],
    ["mxmars38Vlo", "Morphology: derivational & inflectional morphemes, morphs and allomorphs", "Abdelhak English Farm", true],
    ["eFfExqoDhVA", "Morphology — English Studies Linguistics", "Nizar Noury", true],
    ["93sK4jTGrss", "Morphology: Crash Course Linguistics #2", "CrashCourse", false]
  ],
  lessons: [
    { title: "1. What is morphology?", yt: "morphology introduction linguistics english studies",
      v: [["eFfExqoDhVA", "Morphology — English Studies Linguistics", "Nizar Noury", true], ["93sK4jTGrss", "Morphology: Crash Course Linguistics #2", "CrashCourse", false]],
      body: `
      <p>Linguistics splits into <b>microlinguistics</b> (the core levels of the language system: phonetics, phonology, morphology, syntax, semantics) and <b>macrolinguistics</b> (language in use and in society: sociolinguistics, psycholinguistics, discourse analysis…).</p>
      <p><b>Morphology</b> is the scientific study of the <b>internal structure of words</b>. It is the part of grammar that deals with how words are built from smaller meaningful pieces (morphemes), and with the relationships between words that share those pieces (<i>happy, unhappy, happiness</i>).</p>
      <div class="callout">✍️ Exam definition: <i>“Morphology is the branch of linguistics that studies the internal structure of words and the rules by which words are formed.”</i></div>
      <p>To study word structure, we first need to know what a word is. That turns out to be surprisingly hard, as lesson 2 shows.</p>` },
    { title: "2. What is a word? Four definitions and their problems", yt: "what is a word orthographic phonological semantic syntactic definition",
      v: [["mv7t6Q0uebY", "Morphology (part 1)", "Evan Ashworth", false]],
      body: `
      <table><tr><th>Definition</th><th>Idea</th><th>Problem</th></tr>
      <tr><td><b>Orthographic</b></td><td>A word is a string of letters between two spaces.</td><td>Compounds (<i>apartment building</i>: one or two words?), phrasal verbs (<i>look after</i>), clitics (<i>John’s</i>), and spellings that vary (<i>girlfriend / girl friend</i>).</td></tr>
      <tr><td><b>Phonological</b></td><td>A word has exactly one main stress.</td><td>Function words (<i>the, of, as</i>) and clitics (<i>’s</i>) have no stress: <i>Jane’s in the garden</i>.</td></tr>
      <tr><td><b>Semantic</b></td><td>A word expresses one unified concept, or is the minimal unit of meaning.</td><td>One concept can need many words (<i>the man who lives next door</i>), and function words have little meaning.</td></tr>
      <tr><td><b>Syntactic</b></td><td>The smallest unit that belongs to a word class and can be moved in a sentence.</td><td>The most useful definition: <i>Can she ride the bike?</i> moves <i>can</i> as a whole unit.</td></tr></table>
      <p><b>Bloomfield’s definition:</b> a word is <b>“a minimum free form”</b>, the smallest form that can occur on its own.</p>
      <p><b>Open-class</b> words accept new members (nouns, lexical verbs, adjectives, adverbs). <b>Closed-class</b> words form a small fixed set (pronouns, determiners, prepositions, conjunctions, auxiliaries).</p>
      <h4>Words, meaning and the lexicon</h4>
      <ul><li><b>Arbitrariness:</b> the link between the form <i>cat</i> and its meaning is a convention. The exception is <b>onomatopoeia</b> (<i>splash, beep</i>).</li>
      <li>Complex words such as <i>unhappy</i> or <i>helpful</i> have a <b>predictable</b> meaning built from their parts. Simple words (<i>dog, desk</i>) are unpredictable and must be memorised.</li>
      <li>Some units bigger than a word also have unpredictable meaning: <b>idioms</b> (<i>kick the bucket</i>), <b>collocations</b> (<i>white coffee</i>), proverbs.</li>
      <li>A <b>lexical item</b> is any unit whose meaning must be memorised; it can be bigger than a word. Words are grammatical units; lexical items are semantic units.</li>
      <li>The <b>lexicon</b> is the mental dictionary. A <b>lexeme</b> is the abstract word (<i>WRITE</i>) behind its forms (<i>writes, wrote, written</i>).</li>
      <li><b>Pro-forms</b> stand in for other forms: <i>She likes chocolate and so <u>do</u> I.</i></li>
      <li><b>Tokens vs types:</b> count every occurrence (tokens) or every different word (types). In <i>“Mary goes to Edinburgh next week, and she intends going to Washington next month”</i> there are 14 tokens, but <i>to</i> and <i>next</i> each occur twice, so there are 12 types.</li></ul>` },
    { title: "3. Morphemes: free, bound, lexical, functional", yt: "free and bound morphemes lexical functional morphemes",
      v: [["mxmars38Vlo", "Morphology: derivational & inflectional morphemes, morphs and allomorphs", "Abdelhak English Farm", true], ["GLGWYwsd1MU", "Morphology lecture (explained in Arabic)", "Naima Kadim", false]],
      body: `
      <p>A <b>morpheme</b> is the <b>smallest linguistic unit that carries grammatical and/or semantic meaning</b>. It cannot be divided further. Example: <i>unacceptable</i> = <b>un + accept + able</b>.</p>
      <p>To count as a morpheme, a piece must (1) be <b>identifiable</b> in other words and (2) <b>contribute meaning</b>. The <i>-ack</i> in <i>attack, stack, tackle</i> is NOT a morpheme because it adds no meaning.</p>
      <p><b>Notation:</b> <code># nation + al + ize + ation #</code>, where # marks a word boundary and + marks a morpheme boundary.</p>
      <h4>Free vs bound</h4>
      <ul><li><b>Free morphemes</b> can stand alone (<i>happy, house, select</i>). They come in two types:
        <ul><li><b>Lexical</b> (content) morphemes carry real meaning: nouns, verbs, adjectives (<i>boy, run, green</i>). This is an open class.</li>
        <li><b>Functional</b> (grammatical) morphemes show relations between words: prepositions, articles, conjunctions, pronouns, auxiliaries (<i>the, of, and, it</i>). This is a closed class.</li></ul></li>
      <li><b>Bound morphemes</b> must attach to something: affixes (<i>un-, -ness, -s</i>) and <b>bound roots</b> (<i>liber-</i> in liberal/liberty, <i>-ceive</i> in receive/perceive, <i>cran-</i> in cranberry).</li></ul>
      <h4>Types of affixes</h4>
      <table><tr><th>Affix</th><th>Position</th><th>Example</th></tr>
      <tr><td>Prefix</td><td>before the root</td><td><b>re</b>call, <b>un</b>happy</td></tr>
      <tr><td>Suffix</td><td>after the root</td><td>beauti<b>ful</b>ly</td></tr>
      <tr><td>Circumfix</td><td>around the root</td><td>Amazigh <i>arba</i> “boy” → <b>t</b>arba<b>t</b> “girl”</td></tr>
      <tr><td>Infix</td><td>inside the root</td><td>internal change in English: r<b>a</b>n, f<b>ee</b>t</td></tr>
      <tr><td>Transfix</td><td>vowels woven through a consonant root</td><td>Arabic k-t-b → <i>kataba, kitāb, kātib</i></td></tr></table>
      <p>Affixes can also be grouped by <b>origin</b>: native Old English (<i>un-, mis-, be-, out-, -ness, -dom, -hood, -ly</i>) vs foreign (Latin <i>dis-, re-, bi-, ab-</i>; Greek <i>poly-, kilo-</i>; French <i>-age, -ee, mal-</i>).</p>
      <h4>Morphs and allomorphs</h4>
      <p>A <b>morph</b> is the actual form a morpheme takes. When one morpheme has several forms, these are its <b>allomorphs</b>. The English plural has three: /s/ <i>cats</i>, /z/ <i>dogs</i>, /ɪz/ <i>buses</i>, plus irregular ones (<i>oxen</i>, <i>sheep</i> with a zero morph).</p>` },
    { title: "4. Inflection vs derivation", yt: "inflectional vs derivational morphemes english",
      v: [["mxmars38Vlo", "Derivational & inflectional morphemes", "Abdelhak English Farm", true], ["UiYPVP9Hb7M", "Derivational and inflectional morphemes", "TrevTutor", false]],
      body: `
      <div class="grid2"><div class="card"><h4>Inflectional morphemes</h4><ul>
        <li>Never change the word class.</li><li>Add grammatical information (tense, number…).</li><li>Come last in the word (<i>teach-er-<b>s</b></i>).</li><li>Are regular, productive and predictable.</li><li>English has only <b>8</b>, all suffixes.</li></ul></div>
      <div class="card"><h4>Derivational morphemes</h4><ul>
        <li>Often change the class (<i>fame</i> N → <i>famous</i> Adj).</li><li>Create a <b>new word</b> with its own dictionary entry.</li><li>Sit closer to the root.</li><li>Have less predictable meaning, and some have several meanings (<i>de-</i> = undo / remove / reduce).</li><li>Can be prefixes or suffixes, and there are hundreds.</li></ul></div></div>
      <h4>The 8 English inflectional morphemes (learn by heart)</h4>
      <table><tr><th>Suffix</th><th>Meaning</th><th>Attaches to</th><th>Example</th></tr>
      <tr><td>-s</td><td>plural</td><td>N</td><td>cars</td></tr><tr><td>-’s</td><td>possessive</td><td>N</td><td>John’s</td></tr>
      <tr><td>-s</td><td>3rd person singular present</td><td>V</td><td>writes</td></tr><tr><td>-ed</td><td>past tense</td><td>V</td><td>opened</td></tr>
      <tr><td>-ing</td><td>progressive</td><td>V</td><td>singing</td></tr><tr><td>-en / -ed</td><td>past participle</td><td>V</td><td>eaten, opened</td></tr>
      <tr><td>-er</td><td>comparative</td><td>Adj</td><td>faster</td></tr><tr><td>-est</td><td>superlative</td><td>Adj</td><td>biggest</td></tr></table>
      <div class="callout">⚠️ Exam trap: <b>-er</b> in <i>teacher</i> is DERIVATIONAL (verb → noun), but <b>-er</b> in <i>faster</i> is INFLECTIONAL (comparative). Likewise <i>-ing</i> in <i>a beautiful building</i> (noun) is derivational, while in <i>is building</i> it is inflectional.</div>
      <h4>Analysing data from other languages (Turkish examples from class)</h4>
      <ul><li><i>ev</i> “house” → <i>ev-<b>ler</b></i> “houses”: free root + inflectional plural.</li>
      <li><i>güzel</i> “beautiful” → <i>güzel-<b>lik</b></i> “beauty”: Adj → N, so derivational.</li>
      <li><i>öğret-<b>men</b>-<b>ler</b></i> “teachers”: derivational <i>-men</i> (“one who teaches”) followed by inflectional plural.</li>
      <li><i>çalış-<b>ıyor</b></i> “is working”: inflectional present continuous.</li></ul>
      <p>Method: <b>segment → label each morpheme as free/bound → for bound ones, say inflectional or derivational → give its meaning</b>.</p>` },
    { title: "5. Grammatical categories: what inflection expresses", yt: "grammatical categories number person gender tense aspect voice case mood",
      v: [["QLADCI9aaYU", "Tense, Aspect and Mood", "Aze Linguistics", false], ["V8Y7zNaK9y4", "Tense vs Aspect vs Mood", "Swine Herd", false]],
      body: `
      <p>Inflectional morphemes express <b>8 grammatical categories</b>:</p>
      <table><tr><th>Category</th><th>What it marks</th><th>Examples</th></tr>
      <tr><td><b>Number</b></td><td>how many</td><td>car / cars. Arabic has three: singular / <b>dual</b> / plural (<i>kuratun, kurata:n, kura:t</i>).</td></tr>
      <tr><td><b>Person</b></td><td>speaker / addressee / others</td><td>1st I, we · 2nd you · 3rd he, she, it, they</td></tr>
      <tr><td><b>Gender</b></td><td>masculine/feminine (or animate/inanimate…)</td><td>French <i>un petit garçon / une petite fille</i>: agreement on the determiner and the adjective. Arabic and Darija mark it too.</td></tr>
      <tr><td><b>Tense</b></td><td>time of the event</td><td>past / present / future</td></tr>
      <tr><td><b>Aspect</b></td><td>how the event unfolds</td><td>perfective (<i>has eaten</i>) vs imperfective/progressive (<i>was eating</i>)</td></tr>
      <tr><td><b>Voice</b></td><td>agent vs patient</td><td>active <i>Many people saw the film</i> / passive <i>The film was seen by many people</i></td></tr>
      <tr><td><b>Case</b></td><td>role of a noun</td><td>nominative (subject), accusative (object), dative (recipient), genitive (possessor), comitative (in the presence of), ablative (from). Arabic: <i>al-walad-<b>u</b></i> NOM, <i>-<b>a</b></i> ACC, <i>-<b>i</b></i> GEN.</td></tr>
      <tr><td><b>Mood</b></td><td>speaker’s attitude</td><td>declarative, interrogative, imperative (<i>Be quiet!</i>), jussive (order or permission), subjunctive (<i>If I <b>were</b> you</i>; <i>May you succeed</i>)</td></tr></table>
      <h4>Tense vs aspect</h4>
      <p><b>Tense</b> gives the time of the event. <b>Aspect</b> describes how the event unfolds, independent of tense: completed, ongoing or habitual. <i>She was eating</i> = past tense + imperfective aspect.</p>
      <h4>Telic vs atelic</h4>
      <p><b>Telic</b> events have a natural endpoint (<i>build a house, write a letter, run <u>to the store</u></i>). <b>Atelic</b> events don’t (<i>run, swim, laugh</i>). Test: “in an hour” works with telic verbs (<i>wrote a letter in an hour</i>), while “for an hour” goes with atelic ones (<i>swam for an hour</i>).</p>
      <h4>Vendler’s four event types</h4>
      <table><tr><th>Type</th><th>Features</th><th>Example</th></tr>
      <tr><td>State</td><td>no change, no endpoint</td><td>know the answer, love</td></tr>
      <tr><td>Activity</td><td>ongoing, atelic</td><td>run, swim, work</td></tr>
      <tr><td>Accomplishment</td><td>takes time, telic</td><td>build a house, paint a picture</td></tr>
      <tr><td>Achievement</td><td>instantaneous, telic</td><td>win the race, recognize her</td></tr></table>` },
    { title: "6. Morphological typology: how languages build words", yt: "morphological typology isolating agglutinative fusional polysynthetic",
      v: [["bxARj07jFp0", "Long and Short Words: Language Typology", "Tom Scott", false], ["aXKgh61zneQ", "Morphological Language Types", "Randall Eggert", false]],
      body: `
      <p>Languages differ in how much they rely on morphology. English marks plural with a suffix (<i>nut → nuts</i>), while Yoruba uses a separate word.</p>
      <h4>6.1 The analytic ↔ synthetic continuum</h4>
      <p><b>Isolating</b> (extreme analytic: almost no morphology; Vietnamese, Cantonese) → <b>Analytic</b> (little morphology, with word order doing the work; English) → <b>Synthetic</b> (many morphemes per word; Turkish <i>uygar-laş-tır-ama-dık-lar-ımız-dan-mış-sınız-casına</i> “as if you were among those we could not civilise”) → <b>Polysynthetic</b> (one word = a whole sentence) → <b>Incorporating</b> (a noun is built into the verb: Mohawk <i>Akwá'shne</i> “I boat-built”, i.e. “I built a boat”).</p>
      <h4>6.2 Agglutinative vs fusional</h4>
      <ul><li><b>Agglutinative:</b> many affixes, <b>one affix = one meaning</b>, and clear boundaries (Turkish, Swahili, Japanese). Turkish <i>ev-ler-im-de</i> = house-PL-my-in, “in my houses”.</li>
      <li><b>Fusional:</b> <b>one affix = several meanings</b> fused together (Latin, Spanish, Russian). Spanish <i>habl-<b>ó</b></i> = past + 3rd person + singular in a single ending.</li>
      <li>English is <b>not</b> agglutinative: it has few affixes, and one affix can carry several meanings (<i>-s</i> = plural, 3sg or possessive; <i>-ed</i> = past or participle).</li></ul>
      <h4>6.3 Concatenative vs non-concatenative</h4>
      <ul><li><b>Concatenative:</b> morphemes are added one after another in a line (Swahili, Turkish, English).</li>
      <li><b>Non-concatenative:</b> morphemes are interwoven into the root or change it (Semitic languages). Arabic k-t-b gives <i>kitāb</i> “book”, <i>kātib</i> “writer”, <i>maktab</i> “office”, <i>yaktub</i> “he writes”. English irregulars like <i>sing/sang/sung</i> work the same way.</li></ul>` },
    { title: "7. Word-formation processes (bonus: often examined)", yt: "word formation processes compounding blending clipping conversion back-formation",
      v: [["0SsZAZlJYgc", "Morphology: inflectional vs derivational", "The Language Code", false]],
      body: `
      <div class="callout">This lesson completes the course outline. If your professor hasn’t covered it yet, it is a common exam topic, so it’s worth knowing.</div>
      <table><tr><th>Process</th><th>How</th><th>Examples</th></tr>
      <tr><td><b>Derivation</b> (affixation)</td><td>adding affixes</td><td>kind → kind<b>ness</b>, <b>un</b>kind</td></tr>
      <tr><td><b>Compounding</b></td><td>joining free morphemes</td><td>blackboard, apartment building, sunflower</td></tr>
      <tr><td><b>Blending</b></td><td>merging parts of two words</td><td>smoke + fog → smog; breakfast + lunch → brunch</td></tr>
      <tr><td><b>Clipping</b></td><td>shortening</td><td>advertisement → ad; laboratory → lab</td></tr>
      <tr><td><b>Conversion</b> (zero derivation)</td><td>changing class with no affix</td><td>to google; a run; to email</td></tr>
      <tr><td><b>Back-formation</b></td><td>removing a supposed affix</td><td>editor → edit; television → televise</td></tr>
      <tr><td><b>Acronyms / initialisms</b></td><td>first letters</td><td>NASA, UNESCO / BBC, USA</td></tr>
      <tr><td><b>Borrowing</b></td><td>taking words from other languages</td><td>café (French), algebra (Arabic)</td></tr>
      <tr><td><b>Coinage</b></td><td>inventing a new word or brand name</td><td>Kleenex, Xerox</td></tr></table>` }
  ],
  quiz: [
    { q: "Morphology is the study of…", o: ["sound systems", "the internal structure of words", "sentence structure", "meaning in context"], a: 1 },
    { q: "Bloomfield defines the word as…", o: ["a unit with one stress", "a minimum free form", "a string of letters between spaces", "a unified concept"], a: 1 },
    { q: "How many morphemes are in “unbelievably”?", o: ["2", "3", "4", "5"], a: 2, e: "un + believe + able + ly" },
    { q: "Which is a BOUND morpheme?", o: ["house", "the", "-ness", "green"], a: 2 },
    { q: "“the, of, and” are…", o: ["lexical morphemes", "functional morphemes", "bound roots", "derivational affixes"], a: 1 },
    { q: "In “teacher”, -er is…", o: ["inflectional (comparative)", "derivational (V → N)", "a free morpheme", "a circumfix"], a: 1 },
    { q: "Which is NOT one of the 8 English inflectional morphemes?", o: ["-ing", "-est", "-ment", "-’s"], a: 2 },
    { q: "/s/, /z/ and /ɪz/ for the plural are…", o: ["three morphemes", "allomorphs of one morpheme", "infixes", "free morphemes"], a: 1 },
    { q: "Arabic kurata:n (“two balls”) expresses…", o: ["singular", "dual number", "plural", "collective"], a: 1 },
    { q: "“She has eaten” shows…", o: ["imperfective aspect", "perfective aspect", "passive voice", "subjunctive mood"], a: 1 },
    { q: "Which verb phrase is TELIC?", o: ["She ran.", "She slept.", "She wrote a letter.", "She laughed."], a: 2 },
    { q: "“She knows French” is which Vendler type?", o: ["Activity", "Accomplishment", "Achievement", "State"], a: 3 },
    { q: "“win the race” is…", o: ["a state", "an activity", "an accomplishment", "an achievement"], a: 3 },
    { q: "“If I were you” — were expresses…", o: ["subjunctive mood", "imperative mood", "indicative mood", "jussive mood"], a: 0 },
    { q: "The genitive case is shown by…", o: ["She saw him.", "He gave her a gift.", "The teacher’s book.", "They met with her."], a: 2 },
    { q: "A language where one affix = one meaning is…", o: ["fusional", "isolating", "agglutinative", "analytic"], a: 2 },
    { q: "Arabic k-t-b → kitāb, kātib is…", o: ["concatenative morphology", "non-concatenative morphology", "compounding", "clipping"], a: 1 },
    { q: "Vietnamese, with almost no morphology, is…", o: ["polysynthetic", "agglutinative", "isolating", "fusional"], a: 2 },
    { q: "smoke + fog → smog is…", o: ["clipping", "blending", "back-formation", "conversion"], a: 1 }
  ],
  exercises: [
    { q: "Segment these words into morphemes and label each one: unhappiness, nationalization, rewritten, teachers’.",
      a: "<b>un</b> (bound, derivational prefix) + <b>happy</b> (free, lexical) + <b>ness</b> (bound, derivational, Adj→N).<br><b>nation</b> (free) + <b>al</b> (deriv., N→Adj) + <b>ize</b> (deriv., Adj→V) + <b>ation</b> (deriv., V→N): #nation+al+ize+ation#.<br><b>re</b> (deriv. prefix “again”) + <b>write</b> (free) + <b>en</b> (inflectional, past participle).<br><b>teach</b> (free) + <b>er</b> (deriv., V→N) + <b>s</b> (infl., plural) + <b>’</b> (infl., possessive)." },
    { q: "Inflectional or derivational? walker, walks, (a) building, (is) building, taller.",
      a: "walk<b>er</b>: derivational (V→N). walk<b>s</b>: inflectional (3sg present). build<b>ing</b> (noun): derivational. build<b>ing</b> (verb): inflectional (progressive). tall<b>er</b>: inflectional (comparative)." },
    { q: "Arabic: al-waladu / al-walada / al-waladi. What does the suffix variation mark? Name each case.",
      a: "The suffix marks the grammatical category of <b>case</b>: <b>-u</b> = nominative (subject), <b>-a</b> = accusative (object), <b>-i</b> = genitive (after prepositions or in possession)." },
    { q: "Classify by Vendler’s types: win the race, paint a picture, swim, know the answer, recognize her.",
      a: "win the race = <b>achievement</b>; paint a picture = <b>accomplishment</b>; swim = <b>activity</b>; know the answer = <b>state</b>; recognize her = <b>achievement</b>." },
    { q: "John built a house / John was building a house / John ran / John ran to the store. Identify the aspect of the first two, and say which clauses are telic.",
      a: "(1) perfective (completed), (2) imperfective/progressive. Telic: <i>built a house</i>, <i>was building a house</i> (the event has an endpoint even if not reached) and <i>ran to the store</i>. Atelic: <i>ran</i>." },
    { q: "Explain with examples the difference between agglutinative and fusional languages. Where does English fit?",
      a: "In agglutinative languages each affix expresses <b>one</b> meaning and boundaries are clear: Turkish <i>ev-ler-im-de</i> “in my houses”. In fusional languages one affix expresses <b>several</b> meanings at once: Spanish <i>habló</i>, where -ó = past + 3rd person + singular. English is neither purely: it has few affixes, and some are fusional (<i>-s</i> = 3rd person + singular + present), so it is mostly analytic." },
    { q: "French: un petit garçon / une petite fille. Identify the gender markers and how agreement works.",
      a: "Gender is marked on the determiner (<i>un/une</i>) and the adjective (<i>petit/petite</i>, with feminine -e). The noun (garçon/fille) has inherent gender, and the determiner and adjective <b>agree</b> with it." }
  ],
  tips: [
    "Always give definition + example. The 8 inflectional morphemes table is almost guaranteed to come up.",
    "Use the # and + notation when you segment words.",
    "For data analysis (Turkish, Arabic, French, Swahili): say free/bound, inflectional/derivational, and the meaning of every piece.",
    "Do the Kahoot quizzes posted in Classroom: they show the professor’s question style."
  ]
});
