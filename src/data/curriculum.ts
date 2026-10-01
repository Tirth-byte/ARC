// Generated from Tirth's fixed Winter Arc 2026 curriculum PDF.
export const curriculum = [
  {
    "id": "quest-01",
    "phaseId": "computation",
    "day": 1,
    "date": "2026-10-01",
    "title": "What is computation?",
    "bigQuestion": "What is computation?",
    "learningTargets": [
      "Define computation, algorithm, input/output, state",
      "distinguish a computer from computation."
    ],
    "paperTask": "Explain a simple algorithm using only paper and pencil.",
    "conceptIds": [
      "What is computation?"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-02",
    "phaseId": "computation",
    "day": 2,
    "date": "2026-10-02",
    "title": "Turing machines + Limits of computation",
    "bigQuestion": "How does turing machines + Limits of computation work?",
    "learningTargets": [
      "Tape, head, states, transition rules, universality",
      "why this simple model matters",
      "Decidability, the Halting Problem, diagonal reasoning, why unlimited hardware does not solve everything."
    ],
    "paperTask": "Simulate a tiny Turing machine by hand. Explain why a perfect halt-checker leads to contradiction.",
    "conceptIds": [
      "Turing machines",
      "Limits of computation"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-03",
    "phaseId": "computation",
    "day": 3,
    "date": "2026-10-03",
    "title": "Information & binary",
    "bigQuestion": "How does information & binary work?",
    "learningTargets": [
      "Bits, bytes, number bases, representation, encoding",
      "why binary is practical rather than magical."
    ],
    "paperTask": "Convert values between decimal and binary; explain what a bit represents.",
    "conceptIds": [
      "Information",
      "binary"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-04",
    "phaseId": "computation",
    "day": 4,
    "date": "2026-10-04",
    "title": "Boolean logic + Transistors to logic gates",
    "bigQuestion": "How does boolean logic + Transistors to logic gates work?",
    "learningTargets": [
      "AND, OR, NOT, XOR, truth tables, Boolean expressions",
      "Switching, voltage states, MOSFET intuition, how gates emerge from physical components."
    ],
    "paperTask": "Build truth tables and simplify a small logical expression. Draw transistor -> gate -> logical operation as a causal chain.",
    "conceptIds": [
      "Boolean logic",
      "Transistors to logic gates"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-05",
    "phaseId": "computation",
    "day": 5,
    "date": "2026-10-05",
    "title": "Circuits that remember & calculate",
    "bigQuestion": "How does circuits that remember & calculate work?",
    "learningTargets": [
      "Adders, multiplexers, latches, flip-flops, registers."
    ],
    "paperTask": "Draw a half-adder/full-adder and explain carry.",
    "conceptIds": [
      "Circuits that remember",
      "calculate"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-06",
    "phaseId": "computation",
    "day": 6,
    "date": "2026-10-06",
    "title": "CPU architecture",
    "bigQuestion": "How does cPU architecture work?",
    "learningTargets": [
      "ALU, control unit, registers, program counter, instruction cycle."
    ],
    "paperTask": "Trace fetch -> decode -> execute for one instruction.",
    "conceptIds": [
      "CPU architecture"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-07",
    "phaseId": "computation",
    "day": 7,
    "date": "2026-10-07",
    "title": "Memory hierarchy + Assembly & machine code",
    "bigQuestion": "How does memory hierarchy + Assembly & machine code work?",
    "learningTargets": [
      "Registers, cache, RAM, storage, locality, latency vs capacity",
      "Instructions, opcodes, registers, addressing",
      "relation between assembly and binary."
    ],
    "paperTask": "Draw the hierarchy and explain why one memory type is not enough. Trace a tiny add/store program conceptually.",
    "conceptIds": [
      "Memory hierarchy",
      "Assembly",
      "machine code"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-08",
    "phaseId": "computation",
    "day": 8,
    "date": "2026-10-08",
    "title": "Compilers & programming languages",
    "bigQuestion": "How does compilers & programming languages work?",
    "learningTargets": [
      "Lexing, parsing, IR, optimization, code generation, runtime."
    ],
    "paperTask": "Trace one C/C++ statement from source toward machine code.",
    "conceptIds": [
      "Compilers",
      "programming languages"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-09",
    "phaseId": "computation",
    "day": 9,
    "date": "2026-10-09",
    "title": "Operating systems + Processes, threads & concurrency",
    "bigQuestion": "How does operating systems + Processes, threads & concurrency work?",
    "learningTargets": [
      "Kernel, system calls, files, processes, virtual memory, scheduling",
      "Process vs thread, context switching, race conditions, locks, deadlocks."
    ],
    "paperTask": "Explain what the OS does when a program starts. Create a race-condition example and explain the fix.",
    "conceptIds": [
      "Operating systems",
      "Processes",
      "threads",
      "concurrency"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-10",
    "phaseId": "computation",
    "day": 10,
    "date": "2026-10-10",
    "title": "PHASE I BOSS FIGHT",
    "bigQuestion": "How does pHASE I BOSS FIGHT work?",
    "learningTargets": [
      "Connect computation -> binary -> gates -> CPU -> memory -> compiler -> OS -> program."
    ],
    "paperTask": "From memory, explain what physically/logically happens after pressing Run.",
    "conceptIds": [
      "PHASE I BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-11",
    "phaseId": "systems",
    "day": 11,
    "date": "2026-10-11",
    "title": "Networks from first principles",
    "bigQuestion": "How does networks from first principles work?",
    "learningTargets": [
      "Packets, links, switches, routers, addressing, layers."
    ],
    "paperTask": "Draw two computers communicating through routers.",
    "conceptIds": [
      "Networks from first principles"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-12",
    "phaseId": "systems",
    "day": 12,
    "date": "2026-10-12",
    "title": "IP & routing",
    "bigQuestion": "How does iP & routing work?",
    "learningTargets": [
      "IPv4/IPv6 intuition, subnets, routing tables, hops, NAT."
    ],
    "paperTask": "Trace how a packet finds a remote network.",
    "conceptIds": [
      "IP",
      "routing"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-13",
    "phaseId": "systems",
    "day": 13,
    "date": "2026-10-13",
    "title": "DNS + TCP vs UDP",
    "bigQuestion": "How does dNS + TCP vs UDP work?",
    "learningTargets": [
      "Names vs addresses, recursive resolution, root/TLD/authoritative servers, caching",
      "Reliability, ordering, handshakes, retransmission, latency tradeoffs."
    ],
    "paperTask": "Trace resolving a domain from an empty cache. Choose TCP/UDP for 5 applications and justify each.",
    "conceptIds": [
      "DNS",
      "TCP vs UDP"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-14",
    "phaseId": "systems",
    "day": 14,
    "date": "2026-10-14",
    "title": "HTTP & the web",
    "bigQuestion": "How does hTTP & the web work?",
    "learningTargets": [
      "Requests, responses, methods, headers, status codes, cookies."
    ],
    "paperTask": "Write a conceptual HTTP request/response by hand.",
    "conceptIds": [
      "HTTP",
      "the web"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-15",
    "phaseId": "systems",
    "day": 15,
    "date": "2026-10-15",
    "title": "HTTPS, TLS & cryptography",
    "bigQuestion": "How does hTTPS, TLS & cryptography work?",
    "learningTargets": [
      "Symmetric/asymmetric encryption, hashes, certificates, key exchange."
    ],
    "paperTask": "Explain how strangers create a secure channel.",
    "conceptIds": [
      "HTTPS",
      "TLS",
      "cryptography"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-16",
    "phaseId": "systems",
    "day": 16,
    "date": "2026-10-16",
    "title": "Servers, databases, cache & CDN + Distributed systems",
    "bigQuestion": "How does servers, databases, cache & CDN + Distributed systems work?",
    "learningTargets": [
      "Backend request path, persistence, caching, load balancing, CDNs",
      "Replication, partitioning, consistency, availability, failure."
    ],
    "paperTask": "Draw the path from browser to database and back. Explain why network failure makes coordination difficult.",
    "conceptIds": [
      "Servers",
      "databases",
      "cache",
      "CDN",
      "Distributed systems"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-17",
    "phaseId": "systems",
    "day": 17,
    "date": "2026-10-17",
    "title": "Consensus & reliability",
    "bigQuestion": "How does consensus & reliability work?",
    "learningTargets": [
      "Leader election intuition, quorum, retries, idempotency, fault tolerance."
    ],
    "paperTask": "Design a simple reliable order-processing flow.",
    "conceptIds": [
      "Consensus",
      "reliability"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-18",
    "phaseId": "systems",
    "day": 18,
    "date": "2026-10-18",
    "title": "PHASE II BOSS FIGHT",
    "bigQuestion": "How does pHASE II BOSS FIGHT work?",
    "learningTargets": [
      "Integrate DNS, TCP/TLS, HTTP, servers, databases and distributed systems."
    ],
    "paperTask": "Explain everything that happens after typing a URL and pressing Enter.",
    "conceptIds": [
      "PHASE II BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-19",
    "phaseId": "mathematics",
    "day": 19,
    "date": "2026-10-19",
    "title": "Logic, sets & functions",
    "bigQuestion": "How does logic, sets & functions work?",
    "learningTargets": [
      "Propositions, quantifiers, sets, relations, functions, mappings."
    ],
    "paperTask": "Translate everyday claims into logical/mathematical form.",
    "conceptIds": [
      "Logic",
      "sets",
      "functions"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-20",
    "phaseId": "mathematics",
    "day": 20,
    "date": "2026-10-20",
    "title": "Proof + Infinity",
    "bigQuestion": "How does proof + Infinity work?",
    "learningTargets": [
      "Direct proof, contradiction, contrapositive, induction",
      "what proof actually establishes",
      "Countable vs uncountable sets, Cantor's diagonal idea."
    ],
    "paperTask": "Write one small proof in your own words. Explain how two infinite sets can have different sizes.",
    "conceptIds": [
      "Proof",
      "Infinity"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-21",
    "phaseId": "mathematics",
    "day": 21,
    "date": "2026-10-21",
    "title": "Combinatorics",
    "bigQuestion": "How does combinatorics work?",
    "learningTargets": [
      "Counting principles, permutations, combinations."
    ],
    "paperTask": "Solve and explain three counting problems.",
    "conceptIds": [
      "Combinatorics"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-22",
    "phaseId": "mathematics",
    "day": 22,
    "date": "2026-10-22",
    "title": "Probability",
    "bigQuestion": "How does probability work?",
    "learningTargets": [
      "Sample spaces, conditional probability, independence."
    ],
    "paperTask": "Build a probability tree for a real scenario.",
    "conceptIds": [
      "Probability"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-23",
    "phaseId": "mathematics",
    "day": 23,
    "date": "2026-10-23",
    "title": "Bayes' theorem + Statistics",
    "bigQuestion": "How does bayes' theorem + Statistics work?",
    "learningTargets": [
      "Prior, likelihood, posterior, base-rate effects",
      "Distributions, mean/variance, sampling, estimation, correlation vs causation."
    ],
    "paperTask": "Solve one medical-test-style Bayes problem conceptually. Explain why a sample can mislead.",
    "conceptIds": [
      "Bayes' theorem",
      "Statistics"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-24",
    "phaseId": "mathematics",
    "day": 24,
    "date": "2026-10-24",
    "title": "Vectors & vector spaces",
    "bigQuestion": "How does vectors & vector spaces work?",
    "learningTargets": [
      "Magnitude, direction, basis, dimension, dot product."
    ],
    "paperTask": "Explain a vector as more than an arrow.",
    "conceptIds": [
      "Vectors",
      "vector spaces"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-25",
    "phaseId": "mathematics",
    "day": 25,
    "date": "2026-10-25",
    "title": "Matrices as transformations",
    "bigQuestion": "How does matrices as transformations work?",
    "learningTargets": [
      "Linear maps, multiplication, rotations/scaling, systems of equations."
    ],
    "paperTask": "Draw what a matrix does to a 2D grid.",
    "conceptIds": [
      "Matrices as transformations"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-26",
    "phaseId": "mathematics",
    "day": 26,
    "date": "2026-10-26",
    "title": "Eigenvalues & eigenvectors + Derivatives",
    "bigQuestion": "How does eigenvalues & eigenvectors + Derivatives work?",
    "learningTargets": [
      "Invariant directions, repeated transformations, applications",
      "Rate of change, slope, local approximation, chain rule intuition."
    ],
    "paperTask": "Explain eigenvectors without starting from the formula. Derive the derivative of a simple function geometrically.",
    "conceptIds": [
      "Eigenvalues",
      "eigenvectors",
      "Derivatives"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-27",
    "phaseId": "mathematics",
    "day": 27,
    "date": "2026-10-27",
    "title": "Integrals",
    "bigQuestion": "How does integrals work?",
    "learningTargets": [
      "Accumulation, area, fundamental theorem intuition."
    ],
    "paperTask": "Explain why differentiation and integration are linked.",
    "conceptIds": [
      "Integrals"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-28",
    "phaseId": "mathematics",
    "day": 28,
    "date": "2026-10-28",
    "title": "Optimization",
    "bigQuestion": "How does optimization work?",
    "learningTargets": [
      "Objectives, gradients, local/global minima, constraints."
    ],
    "paperTask": "Perform a few manual gradient-descent steps.",
    "conceptIds": [
      "Optimization"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-29",
    "phaseId": "mathematics",
    "day": 29,
    "date": "2026-10-29",
    "title": "Graphs & networks + Information theory",
    "bigQuestion": "How does graphs & networks + Information theory work?",
    "learningTargets": [
      "Nodes, edges, paths, connectivity, shortest paths",
      "Entropy, surprise, bits, compression, mutual information intuition."
    ],
    "paperTask": "Model a real system as a graph. Explain why unlikely events carry more information.",
    "conceptIds": [
      "Graphs",
      "networks",
      "Information theory"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-30",
    "phaseId": "mathematics",
    "day": 30,
    "date": "2026-10-30",
    "title": "PHASE III BOSS FIGHT",
    "bigQuestion": "How does pHASE III BOSS FIGHT work?",
    "learningTargets": [
      "Connect probability, linear algebra, calculus, optimization and information."
    ],
    "paperTask": "Explain why modern ML needs all five.",
    "conceptIds": [
      "PHASE III BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-31",
    "phaseId": "ai",
    "day": 31,
    "date": "2026-10-31",
    "title": "What does learning mean?",
    "bigQuestion": "What does learning mean?",
    "learningTargets": [
      "Models, parameters, features, targets, generalization, train/test split."
    ],
    "paperTask": "Define learning without using the phrase 'AI learns'.",
    "conceptIds": [
      "What does learning mean?"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-32",
    "phaseId": "ai",
    "day": 32,
    "date": "2026-11-01",
    "title": "Linear regression + Logistic regression & classification",
    "bigQuestion": "How does linear regression + Logistic regression & classification work?",
    "learningTargets": [
      "Prediction, loss, line fitting, parameters",
      "Probabilities, sigmoid intuition, decision boundaries."
    ],
    "paperTask": "Fit a tiny line conceptually and explain the error. Explain why classification can come from a continuous score.",
    "conceptIds": [
      "Linear regression",
      "Logistic regression",
      "classification"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-33",
    "phaseId": "ai",
    "day": 33,
    "date": "2026-11-02",
    "title": "Neural networks",
    "bigQuestion": "How does neural networks work?",
    "learningTargets": [
      "Layers, weights, biases, activations, representations."
    ],
    "paperTask": "Draw a tiny network and trace one input forward.",
    "conceptIds": [
      "Neural networks"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-34",
    "phaseId": "ai",
    "day": 34,
    "date": "2026-11-03",
    "title": "Loss functions",
    "bigQuestion": "How does loss functions work?",
    "learningTargets": [
      "Why optimization needs an objective",
      "MSE and cross-entropy intuition."
    ],
    "paperTask": "Compare two bad predictions and how loss judges them.",
    "conceptIds": [
      "Loss functions"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-35",
    "phaseId": "ai",
    "day": 35,
    "date": "2026-11-04",
    "title": "Gradient descent",
    "bigQuestion": "How does gradient descent work?",
    "learningTargets": [
      "Gradient direction, learning rate, optimization landscape."
    ],
    "paperTask": "Explain why moving opposite the gradient can reduce loss.",
    "conceptIds": [
      "Gradient descent"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-36",
    "phaseId": "ai",
    "day": 36,
    "date": "2026-11-05",
    "title": "Backpropagation + Embeddings",
    "bigQuestion": "How does backpropagation + Embeddings work?",
    "learningTargets": [
      "Chain rule through a computation graph",
      "credit assignment",
      "Representing meaning/objects as vectors",
      "similarity and geometry."
    ],
    "paperTask": "Trace how one error changes an earlier weight. Give examples of relationships an embedding space can encode.",
    "conceptIds": [
      "Backpropagation",
      "Embeddings"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-37",
    "phaseId": "ai",
    "day": 37,
    "date": "2026-11-06",
    "title": "CNNs & inductive bias",
    "bigQuestion": "How does cNNs & inductive bias work?",
    "learningTargets": [
      "Convolution, locality, shared weights, feature hierarchies."
    ],
    "paperTask": "Explain why CNNs suit images.",
    "conceptIds": [
      "CNNs",
      "inductive bias"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-38",
    "phaseId": "ai",
    "day": 38,
    "date": "2026-11-07",
    "title": "Sequence models",
    "bigQuestion": "How does sequence models work?",
    "learningTargets": [
      "RNN intuition, hidden state, long-range dependency problem."
    ],
    "paperTask": "Trace a short sequence through a recurrent state.",
    "conceptIds": [
      "Sequence models"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-39",
    "phaseId": "ai",
    "day": 39,
    "date": "2026-11-08",
    "title": "Attention + Transformers",
    "bigQuestion": "How does attention + Transformers work?",
    "learningTargets": [
      "Queries, keys, values, weighted information retrieval",
      "Self-attention, positional information, MLP blocks, residuals."
    ],
    "paperTask": "Explain attention using a concrete sentence. Draw one simplified transformer block.",
    "conceptIds": [
      "Attention",
      "Transformers"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-40",
    "phaseId": "ai",
    "day": 40,
    "date": "2026-11-09",
    "title": "Tokenization & language modeling",
    "bigQuestion": "How does tokenization & language modeling work?",
    "learningTargets": [
      "Tokens, context, next-token probabilities, decoding."
    ],
    "paperTask": "Tokenize a sentence conceptually and explain prediction.",
    "conceptIds": [
      "Tokenization",
      "language modeling"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-41",
    "phaseId": "ai",
    "day": 41,
    "date": "2026-11-10",
    "title": "Training LLMs",
    "bigQuestion": "How does training LLMs work?",
    "learningTargets": [
      "Pretraining, fine-tuning, preference optimization, inference."
    ],
    "paperTask": "Explain what changes during training vs inference.",
    "conceptIds": [
      "Training LLMs"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-42",
    "phaseId": "ai",
    "day": 42,
    "date": "2026-11-11",
    "title": "Hallucination & uncertainty",
    "bigQuestion": "How does hallucination & uncertainty work?",
    "learningTargets": [
      "Why fluent generation can be wrong",
      "calibration, grounding, verification."
    ],
    "paperTask": "Create three failure modes and mitigation ideas.",
    "conceptIds": [
      "Hallucination",
      "uncertainty"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-43",
    "phaseId": "ai",
    "day": 43,
    "date": "2026-11-12",
    "title": "RAG, tools & agents + Reinforcement learning",
    "bigQuestion": "How does rAG, tools & agents + Reinforcement learning work?",
    "learningTargets": [
      "Retrieval, vector search, tool calls, planning loops, state",
      "Agent, environment, reward, policy, exploration/exploitation."
    ],
    "paperTask": "Design a grounded assistant architecture. Model a simple game as an RL problem.",
    "conceptIds": [
      "RAG",
      "tools",
      "agents",
      "Reinforcement learning"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-44",
    "phaseId": "ai",
    "day": 44,
    "date": "2026-11-13",
    "title": "PHASE IV BOSS FIGHT",
    "bigQuestion": "How does pHASE IV BOSS FIGHT work?",
    "learningTargets": [
      "Connect math -> neural nets -> attention -> LLM training -> agentic systems."
    ],
    "paperTask": "Explain how next-token prediction can produce complex behavior without claiming magic.",
    "conceptIds": [
      "PHASE IV BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-45",
    "phaseId": "physics",
    "day": 45,
    "date": "2026-11-14",
    "title": "Motion & forces",
    "bigQuestion": "How does motion & forces work?",
    "learningTargets": [
      "Newtonian mechanics, inertia, force, momentum, energy."
    ],
    "paperTask": "Explain a moving object using force, momentum and energy.",
    "conceptIds": [
      "Motion",
      "forces"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-46",
    "phaseId": "physics",
    "day": 46,
    "date": "2026-11-15",
    "title": "Energy & conservation",
    "bigQuestion": "How does energy & conservation work?",
    "learningTargets": [
      "Work, kinetic/potential energy, conservation laws."
    ],
    "paperTask": "Trace energy through a familiar system.",
    "conceptIds": [
      "Energy",
      "conservation"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-47",
    "phaseId": "physics",
    "day": 47,
    "date": "2026-11-16",
    "title": "Thermodynamics + Entropy & arrow of time",
    "bigQuestion": "How does thermodynamics + Entropy & arrow of time work?",
    "learningTargets": [
      "Temperature, heat, microstates, laws of thermodynamics",
      "Statistical entropy, disorder caveats, irreversibility."
    ],
    "paperTask": "Explain why heat flows spontaneously one way. Connect microscopic reversibility to macroscopic time direction.",
    "conceptIds": [
      "Thermodynamics",
      "Entropy",
      "arrow of time"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-48",
    "phaseId": "physics",
    "day": 48,
    "date": "2026-11-17",
    "title": "Electricity & electromagnetism",
    "bigQuestion": "How does electricity & electromagnetism work?",
    "learningTargets": [
      "Charge, fields, voltage, current, electromagnetic waves."
    ],
    "paperTask": "Explain how electrical signals can carry information.",
    "conceptIds": [
      "Electricity",
      "electromagnetism"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-49",
    "phaseId": "physics",
    "day": 49,
    "date": "2026-11-18",
    "title": "Special relativity",
    "bigQuestion": "How does special relativity work?",
    "learningTargets": [
      "Invariant light speed, simultaneity, time dilation, length contraction."
    ],
    "paperTask": "Explain a light-clock thought experiment.",
    "conceptIds": [
      "Special relativity"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-50",
    "phaseId": "physics",
    "day": 50,
    "date": "2026-11-19",
    "title": "General relativity",
    "bigQuestion": "How does general relativity work?",
    "learningTargets": [
      "Equivalence principle, spacetime curvature, gravitational time dilation."
    ],
    "paperTask": "Explain gravity without calling it simply a force.",
    "conceptIds": [
      "General relativity"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-51",
    "phaseId": "physics",
    "day": 51,
    "date": "2026-11-20",
    "title": "Quantum mechanics + Stars & black holes",
    "bigQuestion": "How does quantum mechanics + Stars & black holes work?",
    "learningTargets": [
      "States, superposition, probability amplitudes, measurement",
      "Fusion, stellar evolution, escape, event horizons."
    ],
    "paperTask": "Explain what quantum theory predicts vs common misconceptions. Trace a massive star toward a black hole.",
    "conceptIds": [
      "Quantum mechanics",
      "Stars",
      "black holes"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-52",
    "phaseId": "physics",
    "day": 52,
    "date": "2026-11-21",
    "title": "Cosmology",
    "bigQuestion": "How does cosmology work?",
    "learningTargets": [
      "Expansion, Big Bang model, cosmic history, evidence and open questions."
    ],
    "paperTask": "Draw a timeline of the universe.",
    "conceptIds": [
      "Cosmology"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-53",
    "phaseId": "physics",
    "day": 53,
    "date": "2026-11-22",
    "title": "PHASE V BOSS FIGHT",
    "bigQuestion": "How does pHASE V BOSS FIGHT work?",
    "learningTargets": [
      "Connect information, entropy, time, relativity and quantum uncertainty."
    ],
    "paperTask": "Explain which connections are established physics and which are open questions.",
    "conceptIds": [
      "PHASE V BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-54",
    "phaseId": "biology",
    "day": 54,
    "date": "2026-11-23",
    "title": "What is life?",
    "bigQuestion": "What is life?",
    "learningTargets": [
      "Cells, metabolism, homeostasis, reproduction, evolution",
      "fuzzy boundaries."
    ],
    "paperTask": "Propose criteria for life and test a virus against them.",
    "conceptIds": [
      "What is life?"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-55",
    "phaseId": "biology",
    "day": 55,
    "date": "2026-11-24",
    "title": "Cells & chemistry",
    "bigQuestion": "How does cells & chemistry work?",
    "learningTargets": [
      "Membranes, proteins, energy, molecular machinery."
    ],
    "paperTask": "Draw a cell as a system of flows and functions.",
    "conceptIds": [
      "Cells",
      "chemistry"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-56",
    "phaseId": "biology",
    "day": 56,
    "date": "2026-11-25",
    "title": "DNA, genes & information",
    "bigQuestion": "How does dNA, genes & information work?",
    "learningTargets": [
      "DNA structure, replication, transcription, translation."
    ],
    "paperTask": "Trace DNA -> RNA -> protein.",
    "conceptIds": [
      "DNA",
      "genes",
      "information"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-57",
    "phaseId": "biology",
    "day": 57,
    "date": "2026-11-26",
    "title": "Mutation & natural selection + Evolution of complexity",
    "bigQuestion": "How does mutation & natural selection + Evolution of complexity work?",
    "learningTargets": [
      "Variation, heredity, selection, drift, fitness",
      "Cooperation, multicellularity, constraints, tradeoffs."
    ],
    "paperTask": "Explain evolution without saying organisms 'try' to adapt. Explain how simple selection can yield complex structures.",
    "conceptIds": [
      "Mutation",
      "natural selection",
      "Evolution of complexity"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-58",
    "phaseId": "biology",
    "day": 58,
    "date": "2026-11-27",
    "title": "Ecology & networks",
    "bigQuestion": "How does ecology & networks work?",
    "learningTargets": [
      "Food webs, competition, mutualism, feedback, stability."
    ],
    "paperTask": "Model an ecosystem as a network.",
    "conceptIds": [
      "Ecology",
      "networks"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-59",
    "phaseId": "biology",
    "day": 59,
    "date": "2026-11-28",
    "title": "Aging & biological tradeoffs",
    "bigQuestion": "How does aging & biological tradeoffs work?",
    "learningTargets": [
      "Damage, repair, selection, competing hypotheses."
    ],
    "paperTask": "Compare two major explanations of aging.",
    "conceptIds": [
      "Aging",
      "biological tradeoffs"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-60",
    "phaseId": "biology",
    "day": 60,
    "date": "2026-11-29",
    "title": "PHASE VI BOSS FIGHT",
    "bigQuestion": "How does pHASE VI BOSS FIGHT work?",
    "learningTargets": [
      "Connect genes, information, evolution, optimization and networks."
    ],
    "paperTask": "Explain where the computer-code analogy for DNA works and where it fails.",
    "conceptIds": [
      "PHASE VI BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-61",
    "phaseId": "psychology",
    "day": 61,
    "date": "2026-11-30",
    "title": "Neurons & neural signaling",
    "bigQuestion": "How does neurons & neural signaling work?",
    "learningTargets": [
      "Action potentials, synapses, excitation/inhibition, plasticity."
    ],
    "paperTask": "Trace one signal through a neuron and synapse.",
    "conceptIds": [
      "Neurons",
      "neural signaling"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-62",
    "phaseId": "psychology",
    "day": 62,
    "date": "2026-12-01",
    "title": "Brain organization + Perception",
    "bigQuestion": "How does brain organization + Perception work?",
    "learningTargets": [
      "Major systems, specialization, distributed processing",
      "Sensation, inference, attention, illusions."
    ],
    "paperTask": "Draw a functional map without treating regions as isolated modules. Explain why perception is construction, not a camera feed.",
    "conceptIds": [
      "Brain organization",
      "Perception"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-63",
    "phaseId": "psychology",
    "day": 63,
    "date": "2026-12-02",
    "title": "Memory",
    "bigQuestion": "How does memory work?",
    "learningTargets": [
      "Working, episodic, semantic, procedural memory",
      "reconstruction."
    ],
    "paperTask": "Explain why confident memories can still be wrong.",
    "conceptIds": [
      "Memory"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-64",
    "phaseId": "psychology",
    "day": 64,
    "date": "2026-12-03",
    "title": "Learning & plasticity + Emotion & motivation",
    "bigQuestion": "How does learning & plasticity + Emotion & motivation work?",
    "learningTargets": [
      "Reinforcement, association, prediction error, habit",
      "Adaptive functions, reward, stress, regulation."
    ],
    "paperTask": "Connect biological learning with ML carefully. Explain an emotion as a system rather than a weakness/strength.",
    "conceptIds": [
      "Learning",
      "plasticity",
      "Emotion",
      "motivation"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-65",
    "phaseId": "psychology",
    "day": 65,
    "date": "2026-12-04",
    "title": "Decision-making & biases",
    "bigQuestion": "How does decision-making & biases work?",
    "learningTargets": [
      "Heuristics, framing, availability, confirmation, sunk cost."
    ],
    "paperTask": "Find three biases in hypothetical decisions.",
    "conceptIds": [
      "Decision-making",
      "biases"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-66",
    "phaseId": "psychology",
    "day": 66,
    "date": "2026-12-05",
    "title": "Intelligence & problem solving",
    "bigQuestion": "How does intelligence & problem solving work?",
    "learningTargets": [
      "Reasoning, knowledge, working memory, expertise",
      "measurement limits."
    ],
    "paperTask": "Compare expertise with raw problem-solving ability.",
    "conceptIds": [
      "Intelligence",
      "problem solving"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-67",
    "phaseId": "psychology",
    "day": 67,
    "date": "2026-12-06",
    "title": "Language & thought + Consciousness",
    "bigQuestion": "How does language & thought + Consciousness work?",
    "learningTargets": [
      "Language processing, concepts, communication, limits of linguistic influence",
      "Subjective experience, major theories, hard problem, uncertainty."
    ],
    "paperTask": "Argue both sides of whether language shapes thought. Separate observations, theories and philosophical claims.",
    "conceptIds": [
      "Language",
      "thought",
      "Consciousness"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-68",
    "phaseId": "psychology",
    "day": 68,
    "date": "2026-12-07",
    "title": "PHASE VII BOSS FIGHT",
    "bigQuestion": "How does pHASE VII BOSS FIGHT work?",
    "learningTargets": [
      "Connect biological brains, artificial networks, learning, memory and consciousness."
    ],
    "paperTask": "Make a comparison table: real similarity vs misleading analogy.",
    "conceptIds": [
      "PHASE VII BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-69",
    "phaseId": "economics",
    "day": 69,
    "date": "2026-12-08",
    "title": "Scarcity, incentives & tradeoffs",
    "bigQuestion": "How does scarcity, incentives & tradeoffs work?",
    "learningTargets": [
      "Opportunity cost, marginal thinking, unintended consequences."
    ],
    "paperTask": "Analyze one everyday choice using opportunity cost.",
    "conceptIds": [
      "Scarcity",
      "incentives",
      "tradeoffs"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-70",
    "phaseId": "economics",
    "day": 70,
    "date": "2026-12-09",
    "title": "Game theory + Money",
    "bigQuestion": "How does game theory + Money work?",
    "learningTargets": [
      "Strategies, payoffs, Nash equilibrium, cooperation, repeated games",
      "Functions of money, trust, ledgers, monetary systems."
    ],
    "paperTask": "Solve a prisoner's-dilemma-style game. Explain why a piece of paper/digital balance can hold value.",
    "conceptIds": [
      "Game theory",
      "Money"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-71",
    "phaseId": "economics",
    "day": 71,
    "date": "2026-12-10",
    "title": "Banking & credit",
    "bigQuestion": "How does banking & credit work?",
    "learningTargets": [
      "Deposits, lending, interest, risk, central-bank basics."
    ],
    "paperTask": "Trace what happens conceptually when a bank makes a loan.",
    "conceptIds": [
      "Banking",
      "credit"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-72",
    "phaseId": "economics",
    "day": 72,
    "date": "2026-12-11",
    "title": "Inflation + Markets & prices",
    "bigQuestion": "How does inflation + Markets & prices work?",
    "learningTargets": [
      "Price levels, demand/supply pressures, expectations, monetary/fiscal context",
      "Supply, demand, price signals, externalities, market failures."
    ],
    "paperTask": "Explain multiple possible causes rather than one slogan. Analyze a price change from both sides of a market.",
    "conceptIds": [
      "Inflation",
      "Markets",
      "prices"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-73",
    "phaseId": "economics",
    "day": 73,
    "date": "2026-12-12",
    "title": "Firms & organizations",
    "bigQuestion": "How does firms & organizations work?",
    "learningTargets": [
      "Transaction costs, specialization, principal-agent problems."
    ],
    "paperTask": "Explain why companies exist instead of everyone freelancing.",
    "conceptIds": [
      "Firms",
      "organizations"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-74",
    "phaseId": "economics",
    "day": 74,
    "date": "2026-12-13",
    "title": "Law & institutions",
    "bigQuestion": "How does law & institutions work?",
    "learningTargets": [
      "Rules, contracts, property, enforcement, courts, institutional incentives."
    ],
    "paperTask": "Explain how credible rules change behavior.",
    "conceptIds": [
      "Law",
      "institutions"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-75",
    "phaseId": "economics",
    "day": 75,
    "date": "2026-12-14",
    "title": "States & political systems + Trade & globalization",
    "bigQuestion": "How does states & political systems + Trade & globalization work?",
    "learningTargets": [
      "Institutions, representation, separation of powers, bureaucracy, legitimacy",
      "compare descriptively",
      "Comparative advantage, specialization, supply chains, distributional effects."
    ],
    "paperTask": "Map how a policy can move through institutions without endorsing a side. Explain how trade can create aggregate gains and uneven effects.",
    "conceptIds": [
      "States",
      "political systems",
      "Trade",
      "globalization"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-76",
    "phaseId": "economics",
    "day": 76,
    "date": "2026-12-15",
    "title": "PHASE VIII BOSS FIGHT",
    "bigQuestion": "How does pHASE VIII BOSS FIGHT work?",
    "learningTargets": [
      "Connect incentives, game theory, markets, firms, law and government."
    ],
    "paperTask": "Analyze one social problem from at least four institutional perspectives.",
    "conceptIds": [
      "PHASE VIII BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-77",
    "phaseId": "history",
    "day": 77,
    "date": "2026-12-16",
    "title": "Hunter-gatherers to agriculture",
    "bigQuestion": "How does hunter-gatherers to agriculture work?",
    "learningTargets": [
      "Domestication, surplus, settlement, population, tradeoffs."
    ],
    "paperTask": "Explain why agriculture transformed social organization.",
    "conceptIds": [
      "Hunter-gatherers to agriculture"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-78",
    "phaseId": "history",
    "day": 78,
    "date": "2026-12-17",
    "title": "Cities, writing & states + Money, trade & empires",
    "bigQuestion": "How does cities, writing & states + Money, trade & empires work?",
    "learningTargets": [
      "Administration, records, taxation, law, coordination",
      "Long-distance exchange, institutions, military/logistical scale."
    ],
    "paperTask": "Connect information storage to state capacity. Trace how trade networks spread goods and ideas.",
    "conceptIds": [
      "Cities",
      "writing",
      "states",
      "Money",
      "trade"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-79",
    "phaseId": "history",
    "day": 79,
    "date": "2026-12-18",
    "title": "Scientific revolution",
    "bigQuestion": "How does scientific revolution work?",
    "learningTargets": [
      "Measurement, experimentation, institutions, cumulative knowledge."
    ],
    "paperTask": "Explain what changed in methods of knowing.",
    "conceptIds": [
      "Scientific revolution"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-80",
    "phaseId": "history",
    "day": 80,
    "date": "2026-12-19",
    "title": "Printing & information revolutions",
    "bigQuestion": "How does printing & information revolutions work?",
    "learningTargets": [
      "Replication of ideas, literacy, coordination, institutions."
    ],
    "paperTask": "Compare printing with the Internet without forcing equivalence.",
    "conceptIds": [
      "Printing",
      "information revolutions"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-81",
    "phaseId": "history",
    "day": 81,
    "date": "2026-12-20",
    "title": "Industrial revolution",
    "bigQuestion": "How does industrial revolution work?",
    "learningTargets": [
      "Energy, machines, factories, productivity, urbanization."
    ],
    "paperTask": "Explain why energy density and machinery mattered.",
    "conceptIds": [
      "Industrial revolution"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-82",
    "phaseId": "history",
    "day": 82,
    "date": "2026-12-21",
    "title": "Electricity, medicine & modernity + Computers, Internet & AI",
    "bigQuestion": "How does electricity, medicine & modernity + Computers, Internet & AI work?",
    "learningTargets": [
      "Infrastructure, public health, communication, life expectancy",
      "Information processing, networks, automation, economic/social change."
    ],
    "paperTask": "Trace how one infrastructure changes many systems. Place computing in the longer history of information technology.",
    "conceptIds": [
      "Electricity",
      "medicine",
      "modernity",
      "Computers",
      "Internet"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-83",
    "phaseId": "history",
    "day": 83,
    "date": "2026-12-22",
    "title": "PHASE IX BOSS FIGHT",
    "bigQuestion": "How does pHASE IX BOSS FIGHT work?",
    "learningTargets": [
      "Build a causal chain from agriculture to AI."
    ],
    "paperTask": "Draw a civilization map showing technology, energy, institutions and information.",
    "conceptIds": [
      "PHASE IX BOSS FIGHT"
    ],
    "isBossFight": true
  },
  {
    "id": "quest-84",
    "phaseId": "philosophy",
    "day": 84,
    "date": "2026-12-23",
    "title": "What is knowledge?",
    "bigQuestion": "What is knowledge?",
    "learningTargets": [
      "Belief, truth, justification, Gettier-style problems, epistemic humility."
    ],
    "paperTask": "Write your own criteria for saying 'I know'.",
    "conceptIds": [
      "What is knowledge?"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-85",
    "phaseId": "philosophy",
    "day": 85,
    "date": "2026-12-24",
    "title": "How do we know? + Philosophy of science",
    "bigQuestion": "How does how do we know? + Philosophy of science work?",
    "learningTargets": [
      "Reason, observation, induction, skepticism, Bayesian thinking",
      "Falsifiability, models, paradigms, underdetermination, uncertainty."
    ],
    "paperTask": "Take one belief and trace its evidence. Explain why science can be reliable without absolute certainty.",
    "conceptIds": [
      "How do we know?",
      "Philosophy of science"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-86",
    "phaseId": "philosophy",
    "day": 86,
    "date": "2026-12-25",
    "title": "Causation",
    "bigQuestion": "How does causation work?",
    "learningTargets": [
      "Correlation, intervention, counterfactuals, mechanisms."
    ],
    "paperTask": "Separate correlation from causal evidence in an example.",
    "conceptIds": [
      "Causation"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-87",
    "phaseId": "philosophy",
    "day": 87,
    "date": "2026-12-26",
    "title": "Free will & determinism",
    "bigQuestion": "How does free will & determinism work?",
    "learningTargets": [
      "Determinism, compatibilism, agency, responsibility."
    ],
    "paperTask": "Present at least three positions fairly.",
    "conceptIds": [
      "Free will",
      "determinism"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-88",
    "phaseId": "philosophy",
    "day": 88,
    "date": "2026-12-27",
    "title": "Ethics + Identity & self",
    "bigQuestion": "How does ethics + Identity & self work?",
    "learningTargets": [
      "Consequences, duties, virtues, moral uncertainty",
      "Continuity, memory, body, psychological identity."
    ],
    "paperTask": "Analyze one dilemma under three frameworks without declaring a universal winner. Work through a teleportation-style thought experiment.",
    "conceptIds": [
      "Ethics",
      "Identity",
      "self"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-89",
    "phaseId": "philosophy",
    "day": 89,
    "date": "2026-12-28",
    "title": "Meaning",
    "bigQuestion": "How does meaning work?",
    "learningTargets": [
      "Purpose, value, existentialism, flourishing, constructed vs discovered meaning."
    ],
    "paperTask": "Write your current view and strongest objection to it.",
    "conceptIds": [
      "Meaning"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-90",
    "phaseId": "philosophy",
    "day": 90,
    "date": "2026-12-29",
    "title": "GRAND CONNECTION MAP",
    "bigQuestion": "How does gRAND CONNECTION MAP work?",
    "learningTargets": [
      "Find recurring patterns: information, optimization, networks, feedback, emergence, incentives, uncertainty."
    ],
    "paperTask": "Create one giant hand-drawn map connecting every phase.",
    "conceptIds": [
      "GRAND CONNECTION MAP"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-91",
    "phaseId": "philosophy",
    "day": 91,
    "date": "2026-12-30",
    "title": "THE GREAT EXPLANATION + FINAL 100-QUESTION TRIAL",
    "bigQuestion": "How does tHE GREAT EXPLANATION + FINAL 100-QUESTION TRIAL work?",
    "learningTargets": [
      "Explain a modern action from neurons to silicon to networks to AI to society",
      "Retrieval, explanation, derivation, comparison, connection."
    ],
    "paperTask": "Explain sending a ChatGPT message through as many layers as you can. Answer 100 mixed questions without notes; mark every weak area.",
    "conceptIds": [
      "THE GREAT EXPLANATION",
      "FINAL 100-QUESTION TRIAL"
    ],
    "isBossFight": false
  },
  {
    "id": "quest-92",
    "phaseId": "philosophy",
    "day": 92,
    "date": "2026-12-31",
    "title": "DECEMBER 31 - WINTER ARC REVIEW",
    "bigQuestion": "How does dECEMBER 31 - WINTER ARC REVIEW work?",
    "learningTargets": [
      "Review what changed, unresolved questions, strongest connections, next curriculum."
    ],
    "paperTask": "Write: 'What can I explain now that October 1 me could not?'",
    "conceptIds": [
      "DECEMBER 31 - WINTER ARC REVIEW"
    ],
    "isBossFight": false
  }
];
