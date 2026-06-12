// Shared chapter data for all subject pages
// Each chapter has: id, title, description, topics[], estimatedTime, completed

export const englishChapters = [
  {
    id: 1, title: "Spotting Errors",
    description: "Identify grammatical errors in sentences covering subject-verb agreement, tenses, prepositions, articles, and pronouns.",
    topics: ["Subject-Verb Agreement", "Tense Errors", "Preposition Usage", "Article Errors", "Pronoun Errors", "Conjunction Errors"],
    estimatedTime: "45 mins", completed: true,
  },
  {
    id: 2, title: "Sentence Improvement",
    description: "Choose the best alternative to improve weak or incorrect sentences for clarity, grammar, and style.",
    topics: ["Word Choice", "Clarity & Concision", "Active vs Passive Voice", "Parallel Structure", "Sentence Restructuring"],
    estimatedTime: "40 mins", completed: true,
  },
  {
    id: 3, title: "Ordering of Sentences",
    description: "Arrange jumbled sentences into a coherent and logical paragraph by identifying the flow of ideas.",
    topics: ["Coherence & Cohesion", "Linking Words", "Topic Sentences", "Cause & Effect", "Chronological Order"],
    estimatedTime: "35 mins", completed: true,
  },
  {
    id: 4, title: "Ordering of Words",
    description: "Rearrange words in a given sentence to form a grammatically correct and meaningful sentence.",
    topics: ["Word Order Rules", "Adjective Placement", "Adverb Placement", "Question Formation", "Negative Sentences"],
    estimatedTime: "30 mins", completed: true,
  },
  {
    id: 5, title: "Synonyms & Antonyms",
    description: "Build vocabulary by learning words with similar and opposite meanings commonly asked in CDS exams.",
    topics: ["Common Synonyms", "Common Antonyms", "Context-Based Meaning", "Word Roots", "One-Word Substitutions"],
    estimatedTime: "50 mins", completed: false,
  },
  {
    id: 6, title: "Comprehension Passage",
    description: "Read passages and answer questions to test your understanding, inference, and vocabulary skills.",
    topics: ["Main Idea", "Inference Questions", "Vocabulary in Context", "Author's Tone", "Specific Detail Questions"],
    estimatedTime: "60 mins", completed: false,
  },
  {
    id: 7, title: "Fill in the Blanks",
    description: "Choose the most appropriate word to fill the blank from the given options, testing grammar and vocabulary.",
    topics: ["Articles (a/an/the)", "Prepositions", "Conjunctions", "Modals", "Verb Forms"],
    estimatedTime: "35 mins", completed: false,
  },
  {
    id: 8, title: "Idioms & Phrases",
    description: "Learn common idioms and phrases used in English, their meanings, and how they are used in sentences.",
    topics: ["Body-Part Idioms", "Colour Idioms", "Animal Idioms", "Time Idioms", "Common Phrases"],
    estimatedTime: "45 mins", completed: false,
  },
  {
    id: 9, title: "Direct & Indirect Speech",
    description: "Master the conversion of direct speech to indirect (reported) speech with correct tense and pronoun shifts.",
    topics: ["Tense Backshift", "Pronoun Changes", "Time Expression Changes", "Reporting Verbs", "Questions in Reported Speech"],
    estimatedTime: "40 mins", completed: false,
  },
  {
    id: 10, title: "Active & Passive Voice",
    description: "Learn to convert sentences between active and passive voice across all tenses and sentence types.",
    topics: ["Simple Tenses", "Continuous Tenses", "Perfect Tenses", "Modal Passive", "Imperative Passive"],
    estimatedTime: "35 mins", completed: false,
  },
  {
    id: 11, title: "Cloze Test",
    description: "Complete a passage by choosing the most suitable word for each blank from the given options.",
    topics: ["Contextual Vocabulary", "Grammar Precision", "Reading Speed", "Coherence", "Elimination Technique"],
    estimatedTime: "40 mins", completed: false,
  },
  {
    id: 12, title: "Para Jumbles",
    description: "Rearrange jumbled paragraphs to form a logically ordered and cohesive passage.",
    topics: ["Opening Sentences", "Closing Sentences", "Linking Clues", "Pronoun Reference", "Connector Words"],
    estimatedTime: "30 mins", completed: false,
  },
];

export const gkChapters = [
  {
    id: 1, title: "Indian Polity",
    description: "Study the Indian Constitution, its features, fundamental rights, duties, and the structure of government.",
    topics: ["Preamble", "Fundamental Rights", "DPSP", "Constitutional Amendments", "Parliamentary System"],
    estimatedTime: "60 mins", completed: true,
  },
  {
    id: 2, title: "History of India",
    description: "Cover Ancient, Medieval, and Modern Indian history including key events, dynasties, and freedom struggle.",
    topics: ["Ancient Civilizations", "Mughal Empire", "British Rule", "Freedom Movement", "Post-Independence"],
    estimatedTime: "75 mins", completed: true,
  },
  {
    id: 3, title: "Indian Geography",
    description: "Learn physical, political, and economic geography of India including rivers, mountains, and climate.",
    topics: ["Physical Features", "Rivers & Lakes", "Climate Zones", "Natural Vegetation", "Minerals & Resources"],
    estimatedTime: "60 mins", completed: true,
  },
  {
    id: 4, title: "General Science",
    description: "Cover basics of Physics, Chemistry, and Biology as applied in daily life and defence context.",
    topics: ["Physics Basics", "Chemical Reactions", "Human Biology", "Environmental Science", "Defence Technology"],
    estimatedTime: "60 mins", completed: true,
  },
  {
    id: 5, title: "Economy",
    description: "Understand the Indian economy, planning, budget, banking, and current economic developments.",
    topics: ["GDP & Growth", "Five Year Plans", "Banking System", "Budget & Fiscal Policy", "International Trade"],
    estimatedTime: "50 mins", completed: true,
  },
  {
    id: 6, title: "World Geography",
    description: "Study continents, oceans, major countries, and global geographical features.",
    topics: ["Continents & Oceans", "Mountain Ranges", "Major Rivers", "Climate Regions", "International Boundaries"],
    estimatedTime: "55 mins", completed: true,
  },
  {
    id: 7, title: "Current Affairs",
    description: "Stay updated with recent national and international events relevant to defence examinations.",
    topics: ["National Events", "International Relations", "Defence News", "Sports", "Awards & Honours"],
    estimatedTime: "40 mins", completed: false,
  },
  {
    id: 8, title: "Defence & Military",
    description: "Learn about Indian armed forces, ranks, operations, and military history.",
    topics: ["Indian Army", "Indian Navy", "Indian Air Force", "Famous Battles", "Military Operations"],
    estimatedTime: "45 mins", completed: false,
  },
  {
    id: 9, title: "Science & Technology",
    description: "Cover recent developments in technology, space, IT, biotechnology, and nuclear science.",
    topics: ["ISRO Missions", "Nuclear Programme", "IT & Cybersecurity", "Biotechnology", "Nanotechnology"],
    estimatedTime: "40 mins", completed: false,
  },
  {
    id: 10, title: "International Organisations",
    description: "Study major international bodies, their roles, headquarters, and India's participation.",
    topics: ["United Nations", "NATO", "SAARC", "G20", "WTO & IMF"],
    estimatedTime: "35 mins", completed: false,
  },
  {
    id: 11, title: "Indian Culture & Heritage",
    description: "Explore Indian art, architecture, dance, music, festivals, and UNESCO heritage sites.",
    topics: ["Classical Dance Forms", "Music Traditions", "Temples & Architecture", "Festivals", "UNESCO Sites"],
    estimatedTime: "45 mins", completed: false,
  },
  {
    id: 12, title: "Sports",
    description: "Learn about national and international sports, tournaments, trophies, and Indian achievements.",
    topics: ["Olympic Games", "Commonwealth Games", "National Sports", "Sports Awards", "Stadiums & Venues"],
    estimatedTime: "30 mins", completed: false,
  },
  {
    id: 13, title: "Awards & Honours",
    description: "Know about Bharat Ratna, Padma Awards, Gallantry Awards, and international awards.",
    topics: ["Bharat Ratna", "Padma Awards", "Gallantry Awards", "Nobel Prizes", "Film & Literature Awards"],
    estimatedTime: "30 mins", completed: false,
  },
  {
    id: 14, title: "Books & Authors",
    description: "Familiarise with important books, their authors, and their significance in Indian and world literature.",
    topics: ["Indian Authors", "World Authors", "Defence-related Books", "Autobiographies", "Classic Literature"],
    estimatedTime: "25 mins", completed: false,
  },
  {
    id: 15, title: "Miscellaneous GK",
    description: "Cover important facts, records, firsts, and commonly asked GK questions not covered elsewhere.",
    topics: ["World Records", "Firsts in India", "Important Dates", "National Symbols", "Inventions & Discoveries"],
    estimatedTime: "35 mins", completed: false,
  },
];

export const mathChapters = [
  {
    id: 1, title: "Number System",
    description: "Understand types of numbers, divisibility rules, HCF, LCM, and properties of integers.",
    topics: ["Natural & Whole Numbers", "Integers", "HCF & LCM", "Divisibility Rules", "Prime Factorisation"],
    estimatedTime: "50 mins", completed: true,
  },
  {
    id: 2, title: "Simplification",
    description: "Apply BODMAS rules and simplify complex arithmetic expressions quickly and accurately.",
    topics: ["BODMAS Rule", "Fractions & Decimals", "Surds & Indices", "Square Roots", "Approximation"],
    estimatedTime: "40 mins", completed: true,
  },
  {
    id: 3, title: "Percentage",
    description: "Learn percentage calculations, conversions, and their application in profit, loss, and discount problems.",
    topics: ["Basic Percentage", "Percentage Change", "Population Problems", "Income & Expenditure", "Election Problems"],
    estimatedTime: "45 mins", completed: true,
  },
  {
    id: 4, title: "Ratio & Proportion",
    description: "Solve problems on ratio, proportion, and their applications including mixtures and partnerships.",
    topics: ["Ratio Basics", "Proportion", "Fourth Proportional", "Mixture Problems", "Partnership"],
    estimatedTime: "40 mins", completed: true,
  },
  {
    id: 5, title: "Profit, Loss & Discount",
    description: "Master problems on cost price, selling price, profit, loss, and successive discounts.",
    topics: ["Profit & Loss Basics", "Discount", "Marked Price", "Successive Discounts", "Dishonest Dealings"],
    estimatedTime: "45 mins", completed: true,
  },
  {
    id: 6, title: "Average",
    description: "Calculate averages and solve problems on weighted averages and their applications.",
    topics: ["Simple Average", "Weighted Average", "Average Speed", "Age Problems", "Cricket Average"],
    estimatedTime: "35 mins", completed: true,
  },
  {
    id: 7, title: "Time, Speed & Distance",
    description: "Solve problems involving speed, time, distance, trains, boats, and streams.",
    topics: ["Basic Speed-Distance", "Relative Speed", "Train Problems", "Boats & Streams", "Circular Tracks"],
    estimatedTime: "55 mins", completed: true,
  },
  {
    id: 8, title: "Time & Work",
    description: "Master problems on time and work, pipes and cisterns, and efficiency-based questions.",
    topics: ["Work Basics", "Efficiency", "Pipes & Cisterns", "Alternate Working", "MDH Formula"],
    estimatedTime: "45 mins", completed: true,
  },
  {
    id: 9, title: "Algebra",
    description: "Learn algebraic identities, equations, and solve linear and quadratic equations.",
    topics: ["Algebraic Identities", "Linear Equations", "Quadratic Equations", "Polynomials", "Inequalities"],
    estimatedTime: "60 mins", completed: true,
  },
  {
    id: 10, title: "Geometry",
    description: "Study lines, angles, triangles, circles, and their properties with proof-based problems.",
    topics: ["Lines & Angles", "Triangles", "Quadrilaterals", "Circles", "Congruence & Similarity"],
    estimatedTime: "65 mins", completed: false,
  },
  {
    id: 11, title: "Mensuration",
    description: "Calculate areas, perimeters, volumes, and surface areas of 2D and 3D figures.",
    topics: ["2D Shapes", "3D Shapes", "Area & Perimeter", "Volume & Surface Area", "Combined Figures"],
    estimatedTime: "55 mins", completed: false,
  },
  {
    id: 12, title: "Trigonometry",
    description: "Master trigonometric ratios, identities, height and distance problems.",
    topics: ["Trig Ratios", "Standard Angles", "Trigonometric Identities", "Height & Distance", "Angle of Elevation"],
    estimatedTime: "60 mins", completed: false,
  },
  {
    id: 13, title: "Statistics",
    description: "Understand mean, median, mode, range, and basic data interpretation from tables and graphs.",
    topics: ["Mean, Median, Mode", "Range & Deviation", "Bar Graphs", "Pie Charts", "Data Tables"],
    estimatedTime: "45 mins", completed: false,
  },
  {
    id: 14, title: "Number Series",
    description: "Identify patterns in number series and find missing or wrong terms.",
    topics: ["Arithmetic Series", "Geometric Series", "Fibonacci Pattern", "Square/Cube Series", "Mixed Series"],
    estimatedTime: "35 mins", completed: false,
  },
  {
    id: 15, title: "Simple & Compound Interest",
    description: "Solve problems on simple interest, compound interest, and their real-world applications.",
    topics: ["Simple Interest Formula", "Compound Interest Formula", "Half-Yearly Compounding", "Effective Rate", "Instalments"],
    estimatedTime: "40 mins", completed: false,
  },
  {
    id: 16, title: "Probability",
    description: "Understand basic probability concepts, events, and solve card/dice/coin problems.",
    topics: ["Basic Probability", "Events & Sample Space", "Coins & Dice", "Cards", "Conditional Probability"],
    estimatedTime: "40 mins", completed: false,
  },
  {
    id: 17, title: "Permutation & Combination",
    description: "Apply counting principles to solve arrangement and selection problems.",
    topics: ["Fundamental Principle", "Permutations", "Combinations", "Arrangement in Circle", "Word Formation"],
    estimatedTime: "45 mins", completed: false,
  },
  {
    id: 18, title: "Coordinate Geometry",
    description: "Study the Cartesian plane, distance formula, midpoint, slope, and equation of lines.",
    topics: ["Cartesian System", "Distance Formula", "Midpoint Formula", "Slope of a Line", "Equation of Line"],
    estimatedTime: "50 mins", completed: false,
  },
];
