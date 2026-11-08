S5.addModule({
  id: "phonology", name: "Phonology", short: "Phon", icon: "🔊",
  profs: { g1: "Pr. Kably", g2: "Pr. Aziz El Ghouati" },
  materials: "Course book: <i>Phonology and Morphology</i> by Ahmed Alaoui, Malika Jmila & Taoufik Allah Afkinich (2019). The faculty has run out of copies, so try a bookshop or copy shop. Group 2 has a Google Classroom; group 1 works from class handouts.",
  summary: "How speech sounds are made (phonetics) and how they work as a system (phonology): consonants, vowels, natural classes, distinctive features, phonemes and allophones, phonological processes and suprasegmentals.",
  videos: [
    ["efQ-Or5FItI", "Phonology — English Studies exam preparation", "Nizar Noury", true],
    ["IbokdScBU5Y", "Phonetics & Phonology — lesson 1", "Abdelhak English Farm", true],
    ["0JKInUG2JZ4", "Phonology, phonemes, phones and allophones", "Abdelhak English Farm", true],
    ["imH7hdOgxrU", "Phonology: Crash Course Linguistics #10", "CrashCourse", false]
  ],
  lessons: [
    { title: "1. Phonetics vs phonology", yt: "phonetics vs phonology english studies",
      v: [["IbokdScBU5Y", "Phonetics & Phonology — lesson 1", "Abdelhak English Farm", true], ["mQn_7iVLK58", "Phonetics lesson 1: organs of speech (S5 Linguistics)", "EnglEasyPeasy", true]],
      body: `
      <p><b>Phonetics</b> studies the <b>physical</b> properties of speech sounds. It has three branches:</p>
      <ul><li><b>Articulatory phonetics</b>: how sounds are produced by the organs of speech.</li><li><b>Acoustic phonetics</b>: the physical properties of sound waves.</li><li><b>Auditory phonetics</b>: how the ear and brain perceive sounds.</li></ul>
      <p><b>Phonology</b> studies the <b>abstract, mental system</b> of sounds in a particular language: which sounds contrast, how they are organised and which patterns they follow. Every [p] you produce is physically slightly different, but your mind treats them all as the same unit /p/.</p>
      <div class="callout">Classic example: the plural <b>-s</b> is pronounced /s/ in <i>cats</i>, /z/ in <i>dogs</i> and /ɪz/ in <i>buses</i>. Phonetics describes these three sounds; phonology explains the <b>rule</b> that chooses between them (based on the last sound of the word).</div>
      <p>The life of a sound has three steps: <b>production</b> (speaker) → <b>transmission</b> (air) → <b>perception</b> (listener).</p>
      <p><b>Vowels</b> are produced with <b>no obstruction</b> of the airflow; <b>consonants</b> involve <b>obstruction</b> (complete or partial).</p>
      <p><b>Notation:</b> /slashes/ for phonemes (phonology), [brackets] for actual sounds (phonetics).</p>` },
    { title: "2. Consonants: voicing, place and manner", yt: "place and manner of articulation english consonants",
      v: [["ErUMoDm69Ow", "Place of articulation", "Abdelhak English Farm", true], ["ixqEN8cxeGw", "Manner of articulation", "Abdelhak English Farm", true], ["QytOGNZZSxE", "Places & manner of articulation, vowels chart", "Nizar Noury", true]],
      body: `
      <p>Every consonant is described by <b>voicing</b> + <b>place</b> + <b>manner</b>: [b] = voiced bilabial stop; [s] = voiceless alveolar fricative.</p>
      <p><b>Voicing</b>: the vocal folds vibrate for voiced sounds (b d g v z ð ʒ dʒ m n ŋ l r w j) and don’t for voiceless ones (p t k f s θ ʃ tʃ h). Test: put your fingers on your throat and say “zzzz” then “ssss”.</p>
      <h4>Place of articulation</h4>
      <table><tr><th>Place</th><th>Articulators</th><th>English sounds</th></tr>
      <tr><td>Bilabial</td><td>both lips</td><td>p b m w</td></tr><tr><td>Labiodental</td><td>lower lip + upper teeth</td><td>f v</td></tr>
      <tr><td>Dental (interdental)</td><td>tongue tip + upper teeth</td><td>θ (think) ð (this)</td></tr><tr><td>Alveolar</td><td>tongue tip + alveolar ridge</td><td>t d s z n l</td></tr>
      <tr><td>Palato-alveolar (post-alveolar)</td><td>tongue blade + ridge/palate</td><td>ʃ (shoe) ʒ (vision) tʃ dʒ r</td></tr><tr><td>Palatal</td><td>tongue + hard palate</td><td>j (yes)</td></tr>
      <tr><td>Velar</td><td>back of tongue + soft palate</td><td>k g ŋ (sing)</td></tr><tr><td>Glottal</td><td>the vocal folds (glottis)</td><td>h, ʔ (glottal stop)</td></tr></table>
      <h4>Manner of articulation</h4>
      <ul><li><b>Stops / plosives</b>: complete closure, then sudden release (p b t d k g).</li>
      <li><b>Fricatives</b>: a narrow gap causes friction (f v θ ð s z ʃ ʒ h).</li>
      <li><b>Affricates</b>: a stop released slowly as a fricative (tʃ <i>church</i>, dʒ <i>judge</i>).</li>
      <li><b>Nasals</b>: the velum is lowered and air flows through the nose (m n ŋ).</li>
      <li><b>Liquids</b>: l is <b>lateral</b> (air flows around the sides of the tongue); r is the other liquid.</li>
      <li><b>Glides / semi-vowels</b>: w, j, which are vowel-like and move quickly to the next vowel.</li></ul>
      <h4>English consonant chart</h4>
      <table><tr><th></th><th>Bilab.</th><th>Labiodent.</th><th>Dental</th><th>Alveolar</th><th>Post-alv.</th><th>Palatal</th><th>Velar</th><th>Glottal</th></tr>
      <tr><td>Stop</td><td>p b</td><td></td><td></td><td>t d</td><td></td><td></td><td>k g</td><td>ʔ</td></tr>
      <tr><td>Fricative</td><td></td><td>f v</td><td>θ ð</td><td>s z</td><td>ʃ ʒ</td><td></td><td></td><td>h</td></tr>
      <tr><td>Affricate</td><td></td><td></td><td></td><td></td><td>tʃ dʒ</td><td></td><td></td><td></td></tr>
      <tr><td>Nasal</td><td>m</td><td></td><td></td><td>n</td><td></td><td></td><td>ŋ</td><td></td></tr>
      <tr><td>Liquid</td><td></td><td></td><td></td><td>l</td><td>r</td><td></td><td></td><td></td></tr>
      <tr><td>Glide</td><td>w</td><td></td><td></td><td></td><td></td><td>j</td><td>(w)</td><td></td></tr></table>
      <p>In each cell, the voiceless sound comes first and the voiced one second.</p>` },
    { title: "3. Vowels and diphthongs", yt: "english vowels high low front back rounded diphthongs",
      v: [["5k7cDsk3ZqI", "Phonetics: classification of vowels", "Ahmed Elrhazi English", true], ["PGHIF4k3Ctk", "Phonemic chart: vowels and consonants", "Abdelhak English Farm", true]],
      body: `
      <p>Vowels are described by three criteria:</p>
      <ol><li><b>Height</b>: how high the tongue is (high / mid / low).</li><li><b>Backness</b>: which part of the tongue is raised (front / central / back).</li><li><b>Rounding</b>: lip shape (rounded / unrounded).</li></ol>
      <table><tr><th></th><th>Front</th><th>Central</th><th>Back</th></tr>
      <tr><td>High</td><td>i (seat), ɪ (bit)</td><td></td><td>u (boot), ʊ (put)</td></tr>
      <tr><td>Mid</td><td>e (say), ɛ (bed)</td><td>ə (sofa), ʌ (cup)</td><td>o (go), ɔ (saw)</td></tr>
      <tr><td>Low</td><td>æ (cat)</td><td>a</td><td>ɑ (car), ɒ (lot, British)</td></tr></table>
      <p>In English, the back vowels u ʊ o ɔ ɒ are <b>rounded</b>; front and central vowels are unrounded. You may also see vowels described as <b>tense</b> (long: iː uː) vs <b>lax</b> (short: ɪ ʊ).</p>
      <p><b>Diphthongs</b> glide from one vowel position to another: aɪ (<i>bye</i>), eɪ (<i>say</i>), ɔɪ (<i>boy</i>), aʊ (<i>now</i>), əʊ (<i>go</i>), ɪə (<i>near</i>), eə (<i>hair</i>), ʊə (<i>tour</i>).</p>
      <div class="callout">Practice: “high front unrounded” = [i]; “high back rounded” = [u]; “mid central” = [ə]; “low front” = [æ].</div>` },
    { title: "4. Natural classes", yt: "natural classes phonology",
      v: [["j1iB8OsoJGc", "Phonology: Occam’s razor and natural classes", "Randall Eggert, University of Utah", false]],
      body: `
      <p>A <b>natural class</b> is a group of sounds that <b>share one or more phonetic features</b>, so that a rule can refer to all of them at once with fewer features than it would need for any single member.</p>
      <ul><li><b>Obstruents</b> (stops, fricatives, affricates) vs <b>sonorants</b> (vowels, nasals, liquids, glides).</li>
      <li><b>Coronal</b>: made with the front or blade of the tongue: t d s z n l ʃ ʒ tʃ dʒ r.</li>
      <li><b>Anterior</b>: made at or in front of the alveolar ridge (labials, dentals, alveolars).</li>
      <li><b>Sibilants</b>: hissing or hushing sounds: s z ʃ ʒ tʃ dʒ.</li>
      <li>Others: voiceless stops [p t k], nasals [m n ŋ], high vowels [i u], front vowels [i ɪ e ɛ æ].</li></ul>
      <table><tr><th>Set</th><th>Natural class?</th><th>Shared features</th></tr>
      <tr><td>[p t k]</td><td>✔</td><td>voiceless stops</td></tr><tr><td>[s z ʃ ʒ]</td><td>✔</td><td>sibilant fricatives</td></tr>
      <tr><td>[m n ŋ]</td><td>✔</td><td>nasals</td></tr><tr><td>[i u]</td><td>✔</td><td>high vowels</td></tr>
      <tr><td>[f v θ ð]</td><td>✔</td><td>non-sibilant fricatives</td></tr><tr><td>[b d g p l]</td><td>✘</td><td>no single feature unites them all</td></tr></table>
      <p>To complete a class, find the missing member: [b d g <b>v</b>] voiced obstruents · [s ʃ <b>z / ʒ</b>] sibilants · [p k <b>t</b>] voiceless stops.</p>` },
    { title: "5. Distinctive features (SPE)", yt: "distinctive features phonology SPE",
      v: [["Q1mr2bBL1TE", "Distinctive features of consonant sounds", "Dr. Mohsine Wahib", true], ["KlKITL5pmF0", "Phonological features", "TrevTutor", false]],
      body: `
      <p>In generative phonology (Chomsky & Halle, <i>The Sound Pattern of English</i>, 1968, known as <b>SPE</b>), every sound is a bundle of binary <b>[± features]</b>.</p>
      <h4>Major class features</h4>
      <table><tr><th>Class</th><th>[syllabic]</th><th>[consonantal]</th><th>[sonorant]</th></tr>
      <tr><td>Vowels</td><td>+</td><td>−</td><td>+</td></tr>
      <tr><td>Glides (j, w)</td><td>−</td><td>−</td><td>+</td></tr>
      <tr><td>Laryngeal glides (h, ʔ)</td><td>−</td><td>−</td><td>−</td></tr>
      <tr><td>Liquids & nasals</td><td>−</td><td>+</td><td>+</td></tr>
      <tr><td>Obstruents (stops, fricatives, affricates)</td><td>−</td><td>+</td><td>−</td></tr></table>
      <h4>Five features for consonants</h4>
      <ul><li><b>[continuant]</b>: air is not completely blocked. + = fricatives, l, r, w, j; − = stops, nasals, affricates.</li>
      <li><b>[nasal]</b>: velum lowered, air through the nose: m n ŋ.</li>
      <li><b>[strident]</b>: loud, turbulent noise: s z ʃ ʒ tʃ dʒ. Note that f, v, θ and ð are [−strident].</li>
      <li><b>[anterior]</b>: made at or in front of the alveolar ridge. + = labials, dentals, alveolars; − = post-alveolars, palatals, velars, glottals.</li>
      <li><b>[coronal]</b>: tongue blade raised. + = dentals, alveolars, post-alveolars; − = labials, velars, glottals.</li></ul>
      <h4>Worked examples</h4>
      <table><tr><th></th><th>cont</th><th>nas</th><th>strid</th><th>ant</th><th>cor</th></tr>
      <tr><td>/s/</td><td>+</td><td>−</td><td>+</td><td>+</td><td>+</td></tr>
      <tr><td>/m/</td><td>−</td><td>+</td><td>−</td><td>+</td><td>−</td></tr>
      <tr><td>/ʃ/</td><td>+</td><td>−</td><td>+</td><td>−</td><td>+</td></tr>
      <tr><td>/k/</td><td>−</td><td>−</td><td>−</td><td>−</td><td>−</td></tr>
      <tr><td>/t/</td><td>−</td><td>−</td><td>−</td><td>+</td><td>+</td></tr></table>
      <div class="callout">⚠️ [continuant] ≠ [strident]: /f/ is +cont but −strid, and /tʃ/ is −cont but +strid. [anterior] ≠ [coronal]: /t/ is +ant +cor, while /ʃ/ is −ant +cor.</div>
      <p>Other features you may see: [±voice], [±high], [±low], [±back], [±round] (for vowels), [±lateral] (l).</p>` },
    { title: "6. Phonemes, allophones & discovery procedures", yt: "phoneme allophone minimal pairs complementary distribution",
      v: [["0JKInUG2JZ4", "Phonemes, phones and allophones", "Abdelhak English Farm", true], ["I7JjtO7-9dM", "Complementary distribution", "Aze Linguistics", false], ["zGM8dSLCnyc", "Phonemes, allophones and minimal pairs", "TrevTutor", false]],
      body: `
      <p>A <b>phoneme</b> is an abstract sound unit that <b>distinguishes meaning</b>, written /p/. Its actual pronunciations are its <b>allophones</b>, written [pʰ], [p], [p˺].</p>
      <h4>Discovery procedures (structuralist method)</h4>
      <ol><li><b>Minimal pairs</b>: two words that differ in one sound only. <i>pat / bat</i> shows that /p/ and /b/ are separate phonemes. The method works in every language (French <i>pain/bain</i>; Arabic <i>sˤaːm/saːm</i>).</li>
      <li><b>Overlapping (contrastive) distribution</b>: the sounds occur in the same environments and change meaning, so they are separate phonemes.</li>
      <li><b>Free variation</b>: same environment, but no change in meaning, so they are variants of one phoneme (e.g. released [t] vs unreleased [t˺] at the end of <i>cat</i>).</li>
      <li><b>Complementary distribution</b>: the sounds <b>never</b> occur in the same environment, so they are allophones of one phoneme. English /p/ has [pʰ] word-initially before a stressed vowel (<i>pin</i>), plain [p] after /s/ (<i>spin</i>) and unreleased [p˺] word-finally (<i>stop</i>).</li>
      <li><b>Defective distribution</b>: a phoneme missing in some positions. English [h] occurs only before vowels (never finally), and [ŋ] never occurs word-initially.</li></ol>
      <h4>Basic vs derived allophone</h4>
      <p>To decide which allophone is basic (the one that represents the phoneme), structuralists use <b>frequency</b> (the one found in the widest range of contexts) and <b>markedness</b> (the least marked, most “normal” one). Plain [p] is basic, while [pʰ] and [p˺] are derived.</p>
      <h4>Steps to a phonemic analysis</h4>
      <ol><li>List the environments where each sound appears (what comes before and after).</li><li>Look for minimal pairs.</li><li>Decide whether the distribution is contrastive, complementary or free variation.</li><li>Conclude: one phoneme or two? Which allophone is basic?</li><li>Write the rule: <code>/p/ → [pʰ] / #___V́</code> (“/p/ becomes aspirated at the beginning of a word before a stressed vowel”).</li></ol>` },
    { title: "7. Phonological processes & syllable structure", yt: "assimilation elision epenthesis syllable structure onset nucleus coda",
      v: [["4jLwFEUw1XY", "Syllable structure: onset, nucleus & coda", "Billie English", false], ["AhD9IutIIXY", "Syllables (in Arabic/Darija)", "Abdelhak English Farm", true]],
      body: `
      <h4>The syllable</h4>
      <p>A syllable = <b>onset</b> (initial consonants) + <b>rhyme</b>, and the rhyme = <b>nucleus</b> (usually a vowel) + <b>coda</b> (final consonants). <i>street</i> /striːt/: onset str, nucleus iː, coda t. English allows up to 3 onset consonants and 4 coda consonants (<i>texts</i> /teksts/).</p>
      <h4>Common phonological processes</h4>
      <table><tr><th>Process</th><th>Definition</th><th>Example</th></tr>
      <tr><td><b>Assimilation</b></td><td>a sound becomes more like its neighbour</td><td><i>ten bikes</i> → te[m] bikes; plural -s voicing (cat[s] / dog[z])</td></tr>
      <tr><td><b>Elision / deletion</b></td><td>a sound is dropped</td><td><i>next day</i> → nex’ day; <i>handbag</i> → han’bag</td></tr>
      <tr><td><b>Epenthesis / insertion</b></td><td>a sound is added</td><td>plural /ɪz/ in <i>buses</i>; <i>film</i> → [filəm]</td></tr>
      <tr><td><b>Aspiration</b></td><td>a puff of air after voiceless stops</td><td>[pʰ]in, [tʰ]op</td></tr>
      <tr><td><b>Nasalisation</b></td><td>a vowel becomes nasal before a nasal consonant</td><td><i>hand</i> [hæ̃nd]</td></tr></table>` },
    { title: "8. Coarticulation & suprasegmentals", yt: "coarticulation secondary articulation suprasegmental features",
      v: [["AhRPK4hfnIw", "Secondary articulation, with examples from English, Arabic and Amazigh", "Dr. Amrous: English and ELT", true], ["NB_HCaL9JFc", "Co-articulation: secondary articulation", "Aze Linguistics", false], ["T9yNLL9Q6Do", "Suprasegmental features", "Aze Linguistics", false]],
      body: `
      <p><b>Coarticulation</b> is the overlap of articulatory movements: speech is continuous, so each sound is influenced by its neighbours. When a sound gets an extra, secondary place of articulation, this is called <b>secondary articulation</b>:</p>
      <ul><li><b>Palatalisation</b> (tongue raised toward the palate): <i>keen</i> [kʲiːn]</li>
      <li><b>Labialisation</b> (lips rounded): <i>cool</i> [kʷuːl]</li>
      <li><b>Nasalisation</b>: <i>hand</i> [hæ̃nd]; French <i>bon</i> [bɔ̃]</li>
      <li><b>Pharyngealisation</b> (constriction in the pharynx): the Arabic emphatics, as in <i>ṭabīb</i> [tˤɑˈbiːb] “doctor”</li>
      <li><b>Velarisation</b>: the “dark” l at the end of <i>feel</i> [ɫ]</li>
      <li><b>Glottalisation</b>: <i>shut up</i> → [ʃʌʔ ʌp] in some accents</li></ul>
      <p><b>Double articulation</b>: two places of articulation of <b>equal</b> importance at the same time. [w] is labial-velar (lips + velum).</p>
      <h4>Suprasegmental features</h4>
      <p>These features apply <b>above</b> single segments:</p>
      <ul><li><b>Stress</b>: prominence on a syllable. It can change word class: <i>REcord</i> (N) vs <i>reCORD</i> (V), <i>PREsent</i> vs <i>preSENT</i>.</li>
      <li><b>Intonation</b>: the pitch melody of an utterance. Falling for statements and wh-questions; rising for yes/no questions.</li>
      <li><b>Length</b>: iː vs ɪ (<i>sheep / ship</i>).</li>
      <li><b>Tone</b>: pitch that changes word meaning (Mandarin <i>mā</i> “mother” vs <i>mǎ</i> “horse”).</li>
      <li><b>Rhythm</b>: English is stress-timed.</li></ul>
      <p><b>Mixed vowel series:</b> practise contrasting long/short and front/back pairs: iː–ɪ, uː–ʊ, ɑː–æ, ɔː–ɒ.</p>` }
  ],
  quiz: [
    { q: "Phonology studies…", o: ["the physical properties of sounds", "the abstract sound system of a language", "sound waves only", "spelling"], a: 1 },
    { q: "The branch of phonetics that studies how sounds are produced is…", o: ["acoustic", "auditory", "articulatory", "phonemic"], a: 2 },
    { q: "[b] is a…", o: ["voiceless bilabial stop", "voiced bilabial stop", "voiced labiodental fricative", "voiced alveolar stop"], a: 1 },
    { q: "Which sound is a voiceless alveolar fricative?", o: ["z", "ʃ", "s", "θ"], a: 2 },
    { q: "[tʃ] and [dʒ] are…", o: ["fricatives", "affricates", "liquids", "glides"], a: 1 },
    { q: "[ŋ] is a…", o: ["bilabial nasal", "alveolar nasal", "velar nasal", "palatal glide"], a: 2 },
    { q: "“High back rounded” vowel:", o: ["i", "æ", "u", "ə"], a: 2 },
    { q: "Which set is a natural class?", o: ["[b, d, g, p, l]", "[m, n, ŋ]", "[s, i, k]", "[f, a, r]"], a: 1 },
    { q: "Vowels are…", o: ["[+syll, +cons, −son]", "[+syll, −cons, +son]", "[−syll, −cons, +son]", "[−syll, +cons, +son]"], a: 1 },
    { q: "Obstruents are…", o: ["[−son]", "[+son]", "[+syll]", "[−cons]"], a: 0 },
    { q: "Which is [+strident]?", o: ["f", "θ", "s", "p"], a: 2 },
    { q: "/ʃ/ is…", o: ["+anterior +coronal", "−anterior +coronal", "+anterior −coronal", "−anterior −coronal"], a: 1 },
    { q: "pat / bat is a…", o: ["minimal pair", "free variation", "complementary distribution", "diphthong"], a: 0 },
    { q: "[pʰ] in pin and [p] in spin are…", o: ["different phonemes", "allophones in complementary distribution", "in free variation", "a minimal pair"], a: 1 },
    { q: "[ŋ] never starts an English word. This is…", o: ["free variation", "defective distribution", "coarticulation", "assimilation"], a: 1 },
    { q: "“ten bikes” → te[m] bikes is…", o: ["elision", "epenthesis", "assimilation", "aspiration"], a: 2 },
    { q: "“hand” [hæ̃nd] shows…", o: ["palatalisation", "nasalisation", "labialisation", "glottalisation"], a: 1 },
    { q: "REcord (noun) vs reCORD (verb) is distinguished by…", o: ["tone", "stress", "length", "voicing"], a: 1 }
  ],
  exercises: [
    { q: "Describe (voicing, place, manner): [p] [z] [m] [ʃ] [k] [l] [dʒ].",
      a: "[p] voiceless bilabial stop · [z] voiced alveolar fricative · [m] voiced bilabial nasal · [ʃ] voiceless palato-alveolar fricative · [k] voiceless velar stop · [l] voiced alveolar lateral liquid · [dʒ] voiced palato-alveolar affricate." },
    { q: "Give the sound: voiceless bilabial stop; voiced alveolar fricative; voiced bilabial glide; mid central vowel; high front unrounded vowel; low front vowel.",
      a: "[p] · [z] · [w] · [ə] · [i] · [æ]" },
    { q: "Give a feature matrix (+/−) for [k], [p], [n], [z], [i].",
      a: "[k] = [−syll, +cons, −son, −cont, −nas, −strid, −ant, −cor, −voice] · [p] = [−syll, +cons, −son, −cont, −nas, −strid, +ant, −cor, −voice] · [n] = [−syll, +cons, +son, −cont, +nas, +ant, +cor, +voice] · [z] = [−syll, +cons, −son, +cont, −nas, +strid, +ant, +cor, +voice] · [i] = [+syll, −cons, +son, +high, −back, −round]." },
    { q: "Which set is a natural class? Give the shared features: [p, t, k] · [s, z, ʃ, ʒ] · [m, n, ŋ] · [i, u] · [f, v, θ, ð] · [b, d, g, p, l].",
      a: "[p t k] ✔ voiceless stops · [s z ʃ ʒ] ✔ sibilant (strident) fricatives · [m n ŋ] ✔ nasals · [i u] ✔ high vowels · [f v θ ð] ✔ non-strident fricatives · [b d g p l] ✘ (l is a sonorant and p is voiceless, so no feature set covers exactly these)." },
    { q: "Odd one out: [iː ɪ e æ] · [uː ʊ ɔː ɑː] · [ɛ eɪ æ ɒ]. Explain.",
      a: "[iː ɪ e æ]: <b>æ</b> is low (the others are high/mid front), or <b>iː</b> if you focus on length. [uː ʊ ɔː ɑː]: <b>ɑː</b> is unrounded (the others are rounded back vowels). [ɛ eɪ æ ɒ]: <b>eɪ</b> is a diphthong (or ɒ, the only back rounded vowel). Always justify with the feature you used." },
    { q: "Explain with examples the difference between complementary distribution and free variation.",
      a: "In <b>complementary distribution</b>, two sounds never occur in the same environment, so they are predictable allophones of one phoneme: [pʰ] only word-initially before a stressed vowel (pin), [p] after s (spin). In <b>free variation</b>, two sounds can occur in the same environment without changing meaning: final [t] released or unreleased in <i>cat</i>. In both cases they belong to one phoneme; the difference is that complementary distribution is predictable from the context, and free variation is not." },
    { q: "Describe the coarticulation in: keen [kʲiːn], cool [kʷuːl], hand [hæ̃nd], shut up [ʃʌʔ ʌp].",
      a: "keen: <b>palatalisation</b> of /k/ before the front vowel iː. cool: <b>labialisation</b> of /k/ before the rounded vowel uː. hand: <b>nasalisation</b> of the vowel before the nasal /n/. shut up: <b>glottalisation</b>, /t/ replaced by a glottal stop [ʔ]." }
  ],
  tips: [
    "Learn the consonant chart and the vowel chart by heart. They come up in every exam.",
    "Describe a sound in the order the question asks (e.g. oral/nasal, voiced/voiceless, place, manner).",
    "In phonemic analysis, always end with a rule: /p/ → [pʰ] / #___V́.",
    "Download a phonetic transcription app or use the IPA keyboard to practise transcription daily."
  ]
});
