S5.addModule({
  id: "syntax", name: "Syntax", short: "Syn", icon: "🌳",
  profs: { g1: "Pr. El Kemma", g2: "Pr. Ahmed Smirkou" },
  materials: "Google Classroom “Syntax Module S5; 2026-2027”. Main reference: Andrew Carnie, <i>Syntax: A Generative Introduction</i>. Chapters 1–6 match this course.",
  summary: "Generative syntax: how words group into constituents, how phrase-structure rules build trees, how to test structure, the relations between nodes, X-bar theory and binding theory.",
  videos: [
    ["zDtImKx34QI", "Syntax course: general introduction, lesson 1", "Ahmed Elrhazi English", true],
    ["TDkoyiE2PLI", "Études Anglaises: Introduction to syntax, part 1", "FLSH Agadir", true],
    ["n1zpnN-6pZQ", "Syntax — Trees: Crash Course Linguistics #4", "CrashCourse", false],
    ["n9168PgGHBc", "Syntax (part 1)", "Evan Ashworth", false]
  ],
  lessons: [
    { title: "1. Generative grammar basics", yt: "introduction to syntax generative grammar competence performance",
      v: [["zDtImKx34QI", "Syntax course: general introduction", "Ahmed Elrhazi English", true], ["tZTGglxxS7A", "Introduction to Syntax", "Aze Linguistics", false]],
      body: `
      <p><b>Syntax</b> is the study of how words combine into phrases and sentences. <b>Generative grammar</b> (Noam Chomsky, 1957 onwards) tries to model the <b>unconscious knowledge</b> that lets a native speaker produce and understand an infinite number of new sentences.</p>
      <ul><li><b>Competence</b> = what you know about your language. <b>Performance</b> = what you actually say, including slips, hesitations and errors.</li>
      <li><b>Grammaticality judgements</b> are the linguist’s data. An asterisk * marks an ungrammatical sentence: <i>*Cat the sat mat on the.</i></li>
      <li>A sentence can be grammatical but meaningless: <i>Colorless green ideas sleep furiously</i> (Chomsky). So syntax is separate from meaning.</li>
      <li><b>Prescriptive</b> rules tell you how you “should” speak (“don’t split infinitives”). <b>Descriptive</b> rules describe how people really speak. Linguists describe.</li>
      <li><b>Universal Grammar (UG)</b> is the innate part of language shared by all humans. The <b>logical problem of language acquisition</b> asks how children learn such a complex system so fast from limited input. Chomsky’s answer: part of it is innate.</li>
      <li>Scientific method: observe data → form a hypothesis (a rule) → test it on new data → revise it.</li></ul>` },
    { title: "2. Parts of speech (lexical & functional categories)", yt: "parts of speech syntax distribution lexical functional categories",
      v: [["4fwZVBxou0U", "Syntax: arguments for word-level and phrase-level categories", "Dr. Amrous: English and ELT", true]],
      body: `
      <p>In syntax, categories are defined by <b>distribution</b> (where a word can occur) and <b>morphology</b> (which affixes it takes), <b>not</b> by meaning. “A noun is a person, place or thing” fails: <i>destruction</i> is a noun but describes an action.</p>
      <table><tr><th>Lexical (open)</th><th>Functional (closed)</th></tr>
      <tr><td>N noun, V verb, Adj adjective, Adv adverb</td><td>D determiner (the, a, this, my), T tense (will, can, should, -ed, to), C complementizer (that, if, whether, for), P preposition, Conj (and, or, but), Neg (not)</td></tr></table>
      <h4>Distribution tests</h4>
      <ul><li><b>Noun</b>: follows <i>the</i>, takes plural <i>-s</i>: <i>the ___s</i>.</li>
      <li><b>Verb</b>: follows <i>will</i> or <i>to</i>, takes <i>-ed / -ing</i>.</li>
      <li><b>Adjective</b>: follows <i>very</i>, sits between <i>the</i> and a noun, takes <i>-er / -est</i>.</li>
      <li><b>Adverb</b>: often ends in <i>-ly</i> and modifies a verb, adjective or sentence.</li></ul>
      <h4>Subcategorisation (what a verb needs)</h4>
      <ul><li><b>Intransitive</b>: no object (<i>sleep, arrive</i>). V [NP __ ]</li>
      <li><b>Transitive</b>: one object (<i>hit, see</i>). V [NP __ NP]</li>
      <li><b>Ditransitive</b>: two objects (<i>give, send</i>). V [NP __ NP NP] or [NP __ NP PP]</li>
      <li>Others: clause-taking verbs (<i>think</i> + CP: <i>I think [that he left]</i>).</li></ul>` },
    { title: "3. Constituency and phrase-structure rules", yt: "constituency tests syntax phrase structure rules",
      v: [["A2LpXBR4dU4", "Syntax: phrase structure rules", "Ahmed Elrhazi English", true], ["a2kXW3Cs3j4", "Constituency tests", "Dr. Nimer Abusalim", false], ["5wTem6TBbPI", "Constituency tests", "TrevTutor", false]],
      body: `
      <p>Sentences aren’t flat strings of words. Words group into <b>constituents</b>, units that act together. Phrase-structure rules (PSRs) generate them:</p>
      <pre>S    → NP (T) VP
NP   → (D) (AdjP+) N (PP+)
VP   → (AdvP+) V (NP) (NP) (PP+) (CP)
AdjP → (AdvP) Adj
AdvP → (AdvP) Adv
PP   → P NP
CP   → C S</pre>
      <p>Parentheses = optional; + = can be repeated.</p>
      <h4>Constituency tests</h4>
      <table><tr><th>Test</th><th>How</th><th>Example</th></tr>
      <tr><td><b>Replacement</b></td><td>replace the group with a pro-form (he, it, there, do so, one)</td><td><i>[The old man] left → <u>He</u> left.</i></td></tr>
      <tr><td><b>Stand-alone</b></td><td>it can be the answer to a question</td><td><i>What did you see? — The big dog.</i></td></tr>
      <tr><td><b>Movement</b></td><td>clefting / topicalisation / passive</td><td><i>It was <u>the big dog</u> that I saw.</i></td></tr>
      <tr><td><b>Coordination</b></td><td>only constituents of the same type can be joined with <i>and</i></td><td><i>I saw [the dog] and [the cat].</i></td></tr></table>
      <h4>Structural ambiguity</h4>
      <p><i>I saw the man with the telescope</i> has two meanings, and therefore two trees: the PP <i>with the telescope</i> attaches to the <b>VP</b> (I used the telescope) or to the <b>NP</b> (the man had the telescope).</p>` },
    { title: "4. Drawing trees & structural relations", yt: "how to draw syntax trees step by step",
      v: [["CeuhQ3s-Jss", "How to make a syntax tree", "Fingtam Languages", false], ["n1zpnN-6pZQ", "Syntax — Trees: Crash Course Linguistics #4", "CrashCourse", false]],
      body: `
      <h4>Bottom-up method</h4>
      <ol><li>Write the sentence and label every word with its category (D, N, V, P, Adj…).</li>
      <li>Group modifiers with what they modify, from the inside out (Adj + N, then D + …).</li>
      <li>Build the phrases (NP, PP, VP) using the PSRs.</li><li>Join NP + VP into S (or TP).</li>
      <li>Check that every phrase has a head, no lines cross, and every word is attached.</li></ol>
      <p>Bracket notation: <code>[S [NP [D the] [N student]] [VP [V read] [NP [D a] [N book]]]]</code></p>
      <h4>Structural relations</h4>
      <ul><li><b>Dominance</b>: node A dominates B if A is higher and connected to B by lines going only down.</li>
      <li><b>Immediate dominance</b>: mother → daughter. Daughters of the same mother are <b>sisters</b>.</li>
      <li><b>Precedence</b>: left-to-right order. Lines never cross.</li>
      <li><b>C-command</b>: a node c-commands its sister and everything its sister dominates. This is crucial for binding.</li>
      <li><b>Grammatical relations</b>: <b>subject</b> = the NP daughter of S; <b>direct object</b> = the NP daughter of VP; <b>indirect object</b> = the second NP or the PP in a ditransitive.</li></ul>` },
    { title: "5. X-bar theory", yt: "X-bar theory specifier complement adjunct",
      v: [["-QjFTFotVqo", "Introducing X-bar theory (1): evidence for N-bar", "Dr. Amrous: English and ELT", true], ["n8TYuq173N0", "X-bar theory: specifiers, adjuncts and complements", "TrevTutor", false], ["CIFOSEvcsT4", "X-bar theory: practice sentences", "TrevTutor", false]],
      body: `
      <p>Flat PSRs can’t capture some facts, for example that <i>one</i> can replace <i>student of physics</i> but not just <i>student</i>. X-bar theory adds an intermediate level (X') and says <b>all phrases share the same template</b>:</p>
      <pre>XP → (Specifier) X'
X' → X' (Adjunct)   or   X' → (Adjunct) X'
X' → X (Complement)</pre>
      <ul><li><b>Head</b> (X): the word that names the phrase (N, V, Adj, P…).</li>
      <li><b>Complement</b>: sister to the head and usually required: <i>the king <u>of England</u></i>, <i>destroy <u>the city</u></i>.</li>
      <li><b>Adjunct</b>: sister to X’, optional and repeatable: <i>the king <u>with red hair</u></i>, <i>ran <u>quickly</u></i>.</li>
      <li><b>Specifier</b>: daughter of XP and sister of X’: determiners in NP (<i><u>the</u> king</i>).</li></ul>
      <div class="callout">Test: complements are closer to the head than adjuncts. <i>the king of England with red hair</i> ✔ / <i>*the king with red hair of England</i>. Also, <i>one</i> replaces N’: <i>the <u>student of physics</u> with long hair and the <u>one</u> with short hair</i>.</div>` },
    { title: "6. Binding theory", yt: "binding theory principles A B C syntax",
      v: [["U6McDsR9YeA", "Binding principles A, B and C", "TrevTutor", false], ["d0CKXRoTGZs", "Introduction to binding theory", "Dr. Nimer Abusalim", false]],
      body: `
      <p>Binding theory explains when two noun phrases can refer to the same person. Co-reference is shown with indices (<sub>i</sub>, <sub>j</sub>). An NP is <b>bound</b> when it is c-commanded by a co-indexed NP.</p>
      <table><tr><th>Principle</th><th>Applies to</th><th>Rule</th><th>Example</th></tr>
      <tr><td><b>A</b></td><td>anaphors (himself, each other)</td><td>must be <b>bound</b> in their clause</td><td><i>John<sub>i</sub> likes himself<sub>i</sub></i> ✔ / <i>*John<sub>i</sub> thinks Mary likes himself<sub>i</sub></i></td></tr>
      <tr><td><b>B</b></td><td>pronouns (him, her)</td><td>must be <b>free</b> in their clause</td><td><i>*John<sub>i</sub> likes him<sub>i</sub></i> / <i>John<sub>i</sub> thinks Mary likes him<sub>i</sub></i> ✔</td></tr>
      <tr><td><b>C</b></td><td>R-expressions (John, the boy)</td><td>must be <b>free everywhere</b></td><td><i>*He<sub>i</sub> thinks John<sub>i</sub> left</i></td></tr></table>` }
  ],
  quiz: [
    { q: "Knowledge of language (as opposed to use) is called…", o: ["performance", "competence", "prescription", "pragmatics"], a: 1 },
    { q: "“Colorless green ideas sleep furiously” shows that…", o: ["grammaticality is independent of meaning", "the sentence is ungrammatical", "syntax is meaning", "it’s a performance error"], a: 0 },
    { q: "Parts of speech in generative syntax are best defined by…", o: ["meaning", "distribution and morphology", "spelling", "stress"], a: 1 },
    { q: "Which is a FUNCTIONAL category?", o: ["Noun", "Adjective", "Determiner", "Adverb"], a: 2 },
    { q: "“that” in “I think that he left” is a…", o: ["determiner", "complementizer", "pronoun", "preposition"], a: 1 },
    { q: "“Give” is…", o: ["intransitive", "transitive", "ditransitive", "copular"], a: 2 },
    { q: "Replacing “the old man” with “he” is the… test", o: ["coordination", "replacement", "movement", "stand-alone"], a: 1 },
    { q: "“I saw the man with the telescope” is…", o: ["lexically ambiguous", "structurally ambiguous", "ungrammatical", "a garden path"], a: 1 },
    { q: "The subject is the NP that is the daughter of…", o: ["VP", "S", "PP", "N'"], a: 1 },
    { q: "In X-bar, a complement is sister to…", o: ["XP", "X'", "the head X", "the specifier"], a: 2 },
    { q: "“with red hair” in “the king with red hair” is…", o: ["a complement", "an adjunct", "a specifier", "a head"], a: 1 },
    { q: "“John likes himself” illustrates…", o: ["Principle A", "Principle B", "Principle C", "c-selection"], a: 0 },
    { q: "“*He likes John” (same person) violates…", o: ["Principle A", "Principle B", "Principle C", "X-bar"], a: 2 },
    { q: "A node c-commands…", o: ["only its mother", "its sister and everything the sister dominates", "every node in the tree", "only its daughters"], a: 1 }
  ],
  exercises: [
    { q: "Draw the tree: “The student read a long book.”",
      a: "<pre>[S [NP [D The] [N student]]\n   [VP [V read]\n       [NP [D a] [AdjP [Adj long]] [N book]]]]</pre>" },
    { q: "Draw the two trees for “I saw the man with the telescope” and paraphrase each meaning.",
      a: "(1) VP attachment: <code>[S [NP I] [VP [V saw] [NP the man] [PP with the telescope]]]</code>, meaning “I used the telescope to see him”.<br>(2) NP attachment: <code>[S [NP I] [VP [V saw] [NP [D the] [N man] [PP with the telescope]]]]</code>, meaning “the man who had the telescope”." },
    { q: "Use three constituency tests to show that “the big dog” is a constituent in “I saw the big dog”.",
      a: "Replacement: <i>I saw <u>it</u></i>. Stand-alone: <i>What did you see? — The big dog.</i> Movement (cleft): <i>It was <u>the big dog</u> that I saw.</i> (Coordination also works: <i>I saw the big dog and the small cat.</i>)" },
    { q: "Identify the head, complement, adjunct and specifier in “the student of physics with long hair”.",
      a: "Specifier: <i>the</i> · Head: <i>student</i> · Complement: <i>of physics</i> (sister of N) · Adjunct: <i>with long hair</i> (sister of N’)." },
    { q: "Explain why these are ungrammatical: “*John thinks Mary likes himself” and “*John likes him” (John = him).",
      a: "(1) <i>himself</i> is an anaphor. Principle A says it must be bound <b>in its own clause</b>, but its clause is <i>Mary likes himself</i> and John is outside it. (2) <i>him</i> is a pronoun. Principle B says it must be <b>free</b> in its clause, but it is bound by <i>John</i> in the same clause." }
  ],
  tips: [
    "Trees are a skill: draw at least 2 every day. Use pencil.",
    "Label every node, give every phrase a head, and never cross lines.",
    "Read Carnie chapters 1–6. The video series ‘Carnie 2021 Syntax 4th Edition’ on YouTube follows the book chapter by chapter."
  ]
});
