S5.addModule({
  id: "semantics", name: "Semantics", short: "Sem", icon: "💡",
  profs: { g1: "Pr. Chibi", g2: "Pr. Cherif Teimi" },
  materials: "No Google Classroom: <b>attendance matters</b>. The lectures follow John I. Saeed, <i>Semantics</i> (Blackwell). Ask classmates for photos of the slides and the in-class exercises with answer keys.",
  summary: "The study of meaning: signs and symbols, the challenges of defining meaning, reference and sense, theories of naming, prototypes, figurative meaning, lexical relations and sentence meaning.",
  videos: [
    ["S0KUADtLpk4", "Semantics: conceptual & associative meaning, lexical relations (+ quiz)", "Abdelhak English Farm", true],
    ["Pv9h9M8AV34", "Semantics and pragmatics: an overview", "Dr. Amrous: English and ELT", true],
    ["MlRNrSajB-0", "SEMANTICS-1: What is semantics?", "Dr. Nimer Abusalim", false],
    ["6geQjY8b7sA", "Semantics: Crash Course Linguistics #5", "CrashCourse", false]
  ],
  lessons: [
    { title: "1. What is semantics? Signs and semiotics", yt: "semantics semiotics saussure peirce icon index symbol",
      v: [["MlRNrSajB-0", "What is semantics?", "Dr. Nimer Abusalim", false], ["l84UQqrOtMg", "Icon, Symbol, Index: Peirce’s three signs", "Film & Media Studies", false], ["0JtJu9HdQVM", "Saussure: the signifier and signified", "Tom Nicholas", false]],
      body: `
      <p><b>Semantics</b> is the study of <b>meaning</b> communicated through language (words, phrases, sentences). <b>Pragmatics</b> studies meaning in context: what speakers mean by what they say.</p>
      <p>We use the verb <i>mean</i> in many ways: “smoke means fire” (cause and effect), “a red light means stop” (a convention). All of these reflect the human habit of making one thing <b>stand for</b> another. This process is called <b>signification</b>, and its general study is <b>semiotics</b>. Linguistic meaning is one part of semiotics.</p>
      <h4>Saussure (1974)</h4>
      <p>A linguistic sign = <b>signifier</b> (the form, the sound image “tree”) + <b>signified</b> (the concept TREE). The link between them is <b>arbitrary</b>: nothing in the sounds /triː/ resembles a tree.</p>
      <h4>Peirce (1955): icon, index, symbol</h4>
      <table><tr><th>Sign</th><th>Link to meaning</th><th>Examples</th></tr>
      <tr><td><b>Icon</b></td><td>resemblance</td><td>a portrait and its subject; a map; a diagram of an engine</td></tr>
      <tr><td><b>Index</b></td><td>a causal or close association</td><td>smoke → fire; footprints → someone passed; a fever → illness</td></tr>
      <tr><td><b>Symbol</b></td><td>pure convention</td><td>military insignia; black clothes for mourning in some cultures, white in others; <b>words</b></td></tr></table>
      <p>In this classification, words are <b>verbal symbols</b>.</p>` },
    { title: "2. Three challenges in doing semantics", yt: "challenges in semantics circularity linguistic encyclopedic knowledge context",
      v: [["5qCa0O4dOpk", "A theory of semantics & the principle of compositionality", "Dr. Nimer Abusalim", false]],
      body: `
      <p>Simply attaching definitions to words runs into three problems:</p>
      <ol><li><b>Circularity</b>: we can only define words using other words, in the same or another language. A dictionary sends you around in circles.</li>
      <li><b>Linguistic vs encyclopedic knowledge</b>: where does meaning “live”? In the minds of speakers. But is knowing a word’s meaning different from knowing facts about the world? If I believe a whale is a fish and you know it’s a mammal, do we mean different things by <i>whale</i>? We still understand each other (“I dreamt I was swallowed by a whale”).<br>
      Whose knowledge counts? One speaker’s <b>idiolect</b>? Experts? A scientific definition risks making semantics as big as all of science, and ignores that ordinary people talk about animals without studying zoology.</li>
      <li><b>Context</b>: the same utterance means different things in different situations. <i>“Marvellous weather you have here in Ireland”</i> on a sunny day vs in pouring rain; <i>“He’s dying”</i> about a patient vs about a comedian failing to get laughs; <i>“It’s getting late”</i> at a party = “Let’s leave”. The number of possible contexts is enormous, if not infinite.</li></ol>
      <div class="callout">Conclusion: circularity, the linguistic/encyclopedic problem and the role of context show that a simple “definitions” theory is too weak. Semantic analysis must be more complex.</div>
      <p><b>Levels of meaning:</b> word meaning (lexical semantics) → sentence meaning → utterance meaning (pragmatics).</p>` },
    { title: "3. Reference and sense", yt: "sense and reference semantics frege",
      v: [["9c_5OW2wM4Q", "Sense, reference & denotation", "Dr. Nimer Abusalim", false], ["gyZwGwjdP20", "Semantics lesson 7: reference, referent and sense (in Arabic)", "Dr. Khaled Al-Khatib", false]],
      body: `
      <ul><li><b>Reference</b>: the relation between an expression and the <b>thing in the world</b> it points to, its <b>referent</b>. The set of all possible referents of a word is its <b>extension</b> (the extension of <i>dog</i> = all dogs).</li>
      <li><b>Sense</b>: the meaning of an expression <b>within the language system</b>, its relations to other expressions and its “mode of presentation” (Frege). <i>The morning star</i> and <i>the evening star</i> have the same referent (Venus) but different senses.</li></ul>
      <h4>Types of reference</h4>
      <ul><li><b>Referring vs non-referring expressions</b>: words like <i>so, very, maybe, if, not, all</i> can <b>never</b> refer to an entity; they contribute meaning without identifying anything. Nouns can refer: <i>car</i> in “That car looks vicious” identifies an entity. So nouns are <b>potentially referring</b> expressions; the same noun can be non-referring in “I don’t have a car”.</li>
      <li><b>Constant reference</b> (always the same referent: <i>the Eiffel Tower, the Pacific Ocean</i>) vs <b>variable reference</b> (depends on context: <i>the president, I, you, here</i>).</li>
      <li><b>Nominals</b> (names and noun phrases) are the linguistic units that most clearly show reference.</li>
      <li><b>Deixis</b>: words whose reference depends entirely on the situation: <i>I, you, here, there, now, this</i>.</li></ul>` },
    { title: "4. Meaning, thought and reality: names and concepts", yt: "description theory causal theory of names prototype theory rosch",
      v: [["eSS8-i28oho", "Kripke’s causal theory of names", "Jeffrey Kaplan", false], ["mff_sPnz_gs", "Semantics #4: prototype theory", "Ling Troduction", false]],
      body: `
      <h4>How do names refer?</h4>
      <ul><li><b>Description theory</b> (Russell 1967, Frege 1980, Searle 1958): a name is a <b>shorthand for descriptions</b> of its referent. <i>William Shakespeare</i> = “the writer of <i>Hamlet</i> and <i>Othello</i>”, “the most famous Elizabethan playwright”. Understanding a name means associating it with the right description.</li>
      <li><b>Causal theory</b> (Kripke 1980, Donnellan 1972; Devitt & Sterelny 1987): a name is given in an original “baptism” (a naming ceremony) and then <b>passed on</b> from speaker to speaker in a chain. Millions of people can use <i>Napoleon</i> correctly without knowing much about him, because the chain goes back to the original naming (the <b>grounding</b>). Names are socially inherited.</li></ul>
      <h4>How are concepts organised?</h4>
      <ul><li><b>Necessary and sufficient conditions</b> (the classical view): a <i>bachelor</i> = [+adult] [+male] [−married]. This leads to <b>componential analysis</b>: <i>man</i> = [+HUMAN +ADULT +MALE], <i>girl</i> = [+HUMAN −ADULT −MALE].</li>
      <li><b>Prototype theory</b> (Eleanor Rosch and colleagues, 1973–76): categories have <b>central (typical)</b> members and <b>peripheral</b> ones, with fuzzy boundaries. A <i>sparrow</i> is a more typical BIRD than a <i>penguin</i>; a <i>chair</i> is more central to FURNITURE than a <i>lamp</i>.</li></ul>` },
    { title: "5. Figures of speech (figurative meaning)", yt: "metonymy synecdoche hyperbole irony litotes examples",
      v: [["nfYYPMhgMuQ", "Metonymy and synecdoche", "Mometrix Academy", false], ["3K9lfdKQ4CM", "Irony, paradox, hyperbole, litotes, understatement", "Nibble Pop", false]],
      body: `
      <table><tr><th>Figure</th><th>What it does</th><th>Examples</th></tr>
      <tr><td><b>Metaphor</b></td><td>describes one thing as another</td><td>Time is money. He is a lion.</td></tr>
      <tr><td><b>Simile</b></td><td>an explicit comparison with <i>like/as</i></td><td>as brave as a lion</td></tr>
      <tr><td><b>Metonymy</b></td><td>names something by something <i>associated</i> with it</td><td><i>The White House</i> announced… (= US government); <i>the crown</i> (= monarchy); <i>the pen</i> (= writing) is mightier than <i>the sword</i> (= military force); <i>the press</i> (= journalists)</td></tr>
      <tr><td><b>Synecdoche</b></td><td>a <i>part</i> for the whole (or the whole for a part)</td><td>We need more <i>hands</i> (workers); all <i>eyes</i> were on him (people); more <i>brains</i> (intelligent people); new <i>wheels</i> (car)</td></tr>
      <tr><td><b>Hyperbole</b></td><td>deliberate exaggeration</td><td>a <i>mountain</i> of homework; waiting <i>a thousand years</i>; she <i>cried a river</i></td></tr>
      <tr><td><b>Irony</b></td><td>says the opposite of what is meant</td><td>“Wonderful! Another three-hour meeting!”; “What a beautiful day!” in a storm</td></tr>
      <tr><td><b>Litotes</b> /ˈlaɪ.təʊ.tiːz/</td><td>understatement by <b>negating the opposite</b></td><td>“The film was not bad” (= good); “She is no fool” (= intelligent); “The exam was not easy” (= difficult); “not uninteresting”</td></tr></table>
      <div class="callout">⚠️ Metonymy vs synecdoche: in synecdoche the word names a <b>part</b> of the thing (hands are part of workers). In metonymy it names something <b>associated with</b> it but not a part (the White House building ≠ part of the government). Some expressions allow both readings, so justify your answer.</div>` },
    { title: "6. Lexical relations", yt: "lexical relations synonymy antonymy hyponymy meronymy polysemy homonymy",
      v: [["S0KUADtLpk4", "Conceptual & associative meaning, lexical relations", "Abdelhak English Farm", true], ["e_3h0fB8Rhg", "Lexical semantics", "Evan Ashworth", false]],
      body: `
      <ul><li><b>Synonymy</b>: same or very similar meaning (<i>big/large, buy/purchase</i>). Perfect synonyms are rare: they differ in style, formality or collocation (<i>a big mistake / ?a large mistake</i>).</li>
      <li><b>Antonymy</b> (oppositeness):
        <ul><li><b>Gradable</b>: there are degrees in between (<i>hot/cold, big/small</i>); “very hot”, “warm”.</li>
        <li><b>Complementary</b> (binary): no middle ground (<i>dead/alive, true/false, pass/fail</i>).</li>
        <li><b>Reverses</b>: opposite directions (<i>push/pull, come/go, up/down</i>).</li>
        <li><b>Converses</b>: the same relation seen from each side (<i>buy/sell, above/below, teacher/student</i>).</li></ul></li>
      <li><b>Hyponymy</b>: meaning inclusion. <i>tulip, rose</i> are <b>hyponyms</b> of <i>flower</i> (the <b>superordinate</b> or hypernym); tulip and rose are <b>co-hyponyms</b>.</li>
      <li><b>Meronymy</b>: part–whole. <i>wheel</i> is a meronym of <i>car</i>; <i>page</i> of <i>book</i>.</li>
      <li><b>Homonymy</b>: same form, unrelated meanings (<i>bank</i> of a river / <i>bank</i> for money). Same sound only = <b>homophones</b> (<i>flower/flour</i>); same spelling only = <b>homographs</b> (<i>lead</i> the metal / to <i>lead</i>).</li>
      <li><b>Polysemy</b>: one word with several <b>related</b> meanings (<i>head</i> of a person, of a company, of a bed). Dictionaries list polysemous meanings under one entry and homonyms under separate entries.</li></ul>
      <h4>Types of meaning (Leech)</h4>
      <p><b>Conceptual</b> (denotative, dictionary) meaning vs <b>associative</b> meaning: connotative (<i>home</i> = warmth), social, affective, reflected and collocative meaning.</p>` },
    { title: "7. Sentence semantics", yt: "entailment presupposition semantics sentence relations",
      v: [["N9OdeDQKnR4", "Implicatures, entailments, and presuppositions", "The Ling Space", false], ["CZFmeD0vAQc", "Entailment or presupposition?", "Dr. Hana Daana", false]],
      body: `
      <h4>Situations: time, tense and aspect</h4>
      <p>Sentence semantics studies meaning at the level of the sentence. One part of this is how languages mark <b>time</b>. English marks <b>tense</b> on the verb (<i>has / had / will have</i>); Chinese uses <b>time words</b> instead: <i>Tā xiànzài yǒu kè</i> “he now have classes” / <i>Tā zuótiān yǒu kè</i> “he yesterday have classes” / <i>Tā míngtiān yǒu kè</i> “he tomorrow have classes” (Tiee 1986).</p>
      <h4>Relations between sentences</h4>
      <ul><li><b>Entailment</b>: if A is true, B <b>must</b> be true. <i>“The dog killed the cat”</i> entails <i>“The cat is dead”</i>. If you negate A, B no longer follows.</li>
      <li><b>Presupposition</b>: a background assumption that <b>survives negation</b>. <i>“John’s brother is rich”</i> and <i>“John’s brother is not rich”</i> both presuppose that John has a brother. Triggers: definite NPs, <i>stop</i>, <i>regret</i>, <i>again</i>.</li>
      <li><b>Synonymy / paraphrase</b>: two sentences with the same truth conditions (active/passive: <i>The cat chased the mouse / The mouse was chased by the cat</i>).</li>
      <li><b>Contradiction</b>: both cannot be true at once (<i>He is alive / He is dead</i>).</li>
      <li><b>Analytic</b> sentences are true by meaning alone (<i>Bachelors are unmarried</i>); <b>synthetic</b> sentences are true or false depending on facts (<i>My neighbour is a bachelor</i>).</li></ul>` }
  ],
  quiz: [
    { q: "The general study of sign systems is…", o: ["semantics", "semiotics", "syntax", "phonetics"], a: 1 },
    { q: "In Saussure’s terms, the form of a sign is the…", o: ["signified", "signifier", "referent", "index"], a: 1 },
    { q: "Smoke as a sign of fire is (Peirce)…", o: ["an icon", "an index", "a symbol", "a metaphor"], a: 1 },
    { q: "A portrait of a person is…", o: ["an icon", "an index", "a symbol", "a referent"], a: 0 },
    { q: "Words are mostly…", o: ["icons", "indexes", "symbols", "prototypes"], a: 2 },
    { q: "Defining words only with other words is the problem of…", o: ["context", "circularity", "reference", "polysemy"], a: 1 },
    { q: "“It’s getting late” meaning “Let’s leave” illustrates the problem of…", o: ["circularity", "context", "encyclopedic knowledge", "homonymy"], a: 1 },
    { q: "“so, very, maybe, if” are…", o: ["referring expressions", "non-referring expressions", "proper names", "deictics"], a: 1 },
    { q: "“The president” has…", o: ["constant reference", "variable reference", "no reference", "only sense"], a: 1 },
    { q: "The morning star / the evening star have the same…", o: ["sense", "reference", "connotation", "spelling"], a: 1 },
    { q: "The theory that names are passed on in a chain from an original naming is…", o: ["the description theory", "the causal theory", "prototype theory", "componential analysis"], a: 1 },
    { q: "Rosch: a sparrow is a more typical bird than a penguin. This is…", o: ["prototype theory", "the causal theory", "hyponymy", "entailment"], a: 0 },
    { q: "“The White House announced new measures” is…", o: ["synecdoche", "metonymy", "litotes", "hyperbole"], a: 1 },
    { q: "“We need more hands” is…", o: ["synecdoche", "metonymy", "irony", "litotes"], a: 0 },
    { q: "“She is not unintelligent” is…", o: ["hyperbole", "irony", "litotes", "metaphor"], a: 2 },
    { q: "dead / alive are…", o: ["gradable antonyms", "complementary antonyms", "converses", "synonyms"], a: 1 },
    { q: "buy / sell are…", o: ["gradable antonyms", "complementary antonyms", "converses", "hyponyms"], a: 2 },
    { q: "“bank” (river) / “bank” (money) is…", o: ["polysemy", "homonymy", "hyponymy", "meronymy"], a: 1 },
    { q: "“John’s brother is (not) rich” assumes John has a brother. This is…", o: ["entailment", "presupposition", "contradiction", "paraphrase"], a: 1 }
  ],
  exercises: [
    { q: "Identify the figure of speech: (a) “Wonderful! Another three-hour meeting!” (b) “The White House announced new measures.” (c) “I have a mountain of homework.” (d) “We need more hands.” (e) “The film was not particularly bad.” (f) “The pen is mightier than the sword.” (g) “All eyes were fixed on the professor.” (h) “The crown will address the nation.”",
      a: "(a) <b>irony</b>, since the words contrast with the frustration felt · (b) <b>metonymy</b>, the building stands for the US administration · (c) <b>hyperbole</b>, exaggerated quantity · (d) <b>synecdoche</b>, hands stand for workers · (e) <b>litotes</b>, “not bad” means fairly good · (f) <b>metonymy</b>, pen = writing/ideas and sword = military force · (g) <b>synecdoche</b>, eyes stand for people watching · (h) <b>metonymy</b>, the crown stands for the monarch." },
    { q: "Give one icon, one index and one symbol from everyday life.",
      a: "Icon: a photo on an ID card, or a map of Morocco (resemblance). Index: dark clouds → rain, or a high temperature → fever (cause/association). Symbol: the Moroccan flag, a green traffic light, or the word <i>shams</i> “sun” (convention)." },
    { q: "Explain the difference between sense and reference, with an example.",
      a: "<b>Reference</b> is the link between an expression and the entity it picks out in the world (its referent). <b>Sense</b> is its meaning within the language system, the way it presents the referent. <i>The morning star</i> and <i>the evening star</i> refer to the same thing (Venus), but they have different senses. So two expressions can share reference without sharing sense." },
    { q: "Compare the description theory and the causal theory of names.",
      a: "<b>Description theory</b> (Russell, Frege, Searle): a name abbreviates descriptions; <i>Shakespeare</i> = “the author of Hamlet”. To understand a name you must associate the right description with it. <b>Causal theory</b> (Kripke, Donnellan): a name is fixed at an original naming and passed along a chain of speakers; you can use a name correctly with little or wrong descriptive knowledge, because the chain links you to the original referent." },
    { q: "Give hyponyms of “vehicle”, meronyms of “house”, and an example each of gradable, complementary, reverse and converse antonyms.",
      a: "Hyponyms of vehicle: car, bus, bicycle, truck. Meronyms of house: roof, wall, door, kitchen. Gradable: hot/cold. Complementary: alive/dead. Reverse: push/pull. Converse: buy/sell (or parent/child)." },
    { q: "Explain entailment vs presupposition with the sentence “Ali stopped smoking”.",
      a: "<b>Entailment</b>: “Ali stopped smoking” entails “Ali does not smoke now”. If you negate it (“Ali didn’t stop smoking”), this no longer follows. <b>Presupposition</b>: both “Ali stopped smoking” and “Ali didn’t stop smoking” presuppose “Ali used to smoke”. It survives negation, and the verb <i>stop</i> is the trigger." }
  ],
  tips: [
    "Use the scholars’ names with dates: Saussure, Peirce (1955), Frege, Russell, Kripke (1980), Rosch (1975).",
    "Figures of speech come up as exercises: always name the figure AND explain it in one line.",
    "Since there’s no Classroom, ask classmates for the slide photos and redo the in-class exercises."
  ]
});
