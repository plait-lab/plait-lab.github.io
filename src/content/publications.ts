import type { StaticImageData } from "next/image";

import EquivalenceByCanonicalization from "@/../public/projects/equivalence-by-canonicalization.png";
import FastDM from "@/../public/publications/fast-dm.png";
import HousingPolicyWebAutomation from "@/../public/publications/housing-policy-web-automation.png";
import IncidentalSpecs from "@/../public/publications/incidental-specs.png";
import LearnabilityProgramSynthesizers from "@/../public/publications/learnability-program-synthesizers.png";
import NeedFindingGeospatialData from "@/../public/publications/need-finding-geospatial-data.png";
import OpenKnowledgeNetwork from "@/../public/publications/open-knowledge-network.png";
import PBN from "@/../public/projects/PBN.png";
import PLHCI from "@/../public/publications/pl-hci.png";
import ProgramSlicingNbs from "@/../public/publications/program-slicing-nbs.png";
import Quickpose from "@/../public/publications/quickpose.png";
import SoftwareEcosystem from "@/../public/projects/software-ecosystem.svg";
import STFP from "@/../public/publications/stfp.png";
import STSearch from "@/../public/projects/stsearch.svg";
import PagebreaksHero from "@/../public/projects/pagebreaks.png"
import reimaginingMisuse from "@/../public/publications/reimagining-misuse.png"
import CoDesignTransparency from "@/../public/publications/co-design-transparency.png";
import LRLWiki from "@/../public/publications/lrl_comparison.png";
import YouTubeHarm from "@/../public/publications/yt_harms.png"
import AfricaStopWords from "@/../public/publications/africa_stop_words.png"
import EnhancingTranslations from "@/../public/publications/enhancing_translations.png"
import NeedFindingContentAnalysis from "@/../public/publications/need_fidning_africhi.png"
import LessTheMerrier from "@/../public/publications/less_the_merrier.png"
import CapabilitiesApproachShort from "@/../public/publications/CA_short.png"
import ZenosParadox from "@/../public/publications/zenos_paradox.png"
import ExploitationAllTheWay from "@/../public/publications/exploitation_all_the_way_down.png"
import CognateDetection from "@/../public/publications/congnate_detection.png"
import GenderBiasEval from "@/../public/publications/gender_bias_eval.png"
import ZeroShotSpeech from "@/../public/publications/zero_shot_speech.png"
import mRAKL from "@/../public/publications/mrakl.png"
import HILT from "@/../public/projects/hilt.png"
import FlorDB from "@/../public/publications/FlorDB.png"
import quilt from "@/../public/publications/quilt.png"
import eDSLs from "@/../public/publications/eDSLs.png"
import OKN from "@/../public/publications/knowledge_networks.png"

interface PublicationAttributes {
  title: string;
  authors: string[];
  equalContribution?: boolean;
  hero: StaticImageData;
  date: Date;
}

export enum PublicationKind {
  Conference,
  Journal,
  Workshop,
}

export interface ConferencePublication extends PublicationAttributes {
  kind: PublicationKind.Conference;
  conference: {
    name: string;
    acronym: string;
  };
  acmDlUrl: string;
  youtubeUrl?: string;
}

export interface JournalPublication extends PublicationAttributes {
  kind: PublicationKind.Journal;
  journal: {
    name: string;
    volume: number;
    issue: number | string;
  };
  acmDlUrl: string;
}

export interface WorkshopPublication extends PublicationAttributes {
  kind: PublicationKind.Workshop;
  conference: {
    name: string;
    acronym?: string;
  };
  pdfUrl?: string;
}

export type Publication =
  | ConferencePublication
  | JournalPublication
  | WorkshopPublication;

export const PUBLICATIONS: Publication[] = [
  {
    kind: PublicationKind.Conference,
    title:
      "Pagebreaks: Multi-Cell Scopes in Computational Notebooks",
    authors: ["Eric Rawn", "Sarah E. Chasins"],
    conference: {
      name: "Proceedings of the 2025 ACM Conference on Human Factors in Computing Systems",
      acronym: "CHI",
    },
    hero: PagebreaksHero,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3706598.3713620",
    date: new Date("2025-05-25"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "Reimagining Misuse as Creative Practice: Impressions and Implications of Usage Norms on Digital Artists",
    authors: ["Isabel Li", "Ace Chen", "Eric Rawn", "Shm Garanganao Almeda", "Bjoern Hartmann", "Jingyi Li"],
    conference: {
      name: "Proceedings of the 2025 ACM Conference on Human Factors in Computing Systems",
      acronym: "CHI",
    },
    hero: reimaginingMisuse,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3706598.3714068",
    date: new Date("2025-05-25"),
  },
  {
    kind: PublicationKind.Journal,
    title: "Programming by Navigation",
    authors: ["Justin Lubin", "Parker Ziegler", "Sarah E. Chasins"],
    journal: {
      name: "Proceedings of the ACM on Programming Languages",
      volume: 9,
      issue: "PLDI",
    },
    hero: PBN,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3729264",
    date: new Date("2025-06-01"),
  },
  {
    kind: PublicationKind.Journal,
    title:
      "Fast Direct Manipulation Programming with Patch-Reconciliation Correspondence",
    authors: ["Parker Ziegler", "Justin Lubin", "Sarah E. Chasins"],
    journal: {
      name: "Proceedings of the ACM on Programming Languages",
      volume: 9,
      issue: "PLDI",
    },
    hero: FastDM,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3729278",
    date: new Date("2025-06-01"),
  },
  {
    kind: PublicationKind.Journal,
    title: "Equivalence by Canonicalization for Synthesis-Backed Refactoring",
    authors: [
      "Justin Lubin",
      "Jeremy Ferguson*",
      "Kevin Ye*",
      "Jacob Yim*",
      "Sarah E. Chasins",
    ],
    equalContribution: true,
    journal: {
      name: "Proceedings of the ACM on Programming Languages",
      volume: 8,
      issue: "PLDI",
    },
    hero: EquivalenceByCanonicalization,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3656453",
    date: new Date("2024-06-24"),
  },
  {
    kind: PublicationKind.Journal,
    title: "Syntactic Code Search with Sequence-to-Tree Matching",
    authors: [
      "Gabriel Matute",
      "Wode Ni",
      "Titus Barik",
      "Alvin Cheung",
      "Sarah E. Chasins",
    ],
    journal: {
      name: "Proceedings of the ACM on Programming Languages",
      volume: 8,
      issue: "PLDI",
    },
    hero: STSearch,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3656460",
    date: new Date("2024-06-24"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "Low-resourced Languages and Online Knowledge Repositories: A Need-Finding Study",
    authors: ["Hellina Hailu Nigatu", "John Canny", "Sarah E. Chasins"],
    conference: {
      name: "Proceedings of the 2024 ACM Conference on Human Factors in Computing Systems",
      acronym: "CHI",
    },
    hero: LRLWiki,
    acmDlUrl: "https://doi.org/10.1145/3613904.3642605",
    youtubeUrl: "https://www.youtube.com/watch?v=aJ8BIo2O4mY",
    date: new Date("2024-05-11"),
  },
  {
    kind: PublicationKind.Conference,
    title: "A Need Finding Study with Low-Resourced Language Content Creators",
    authors: ["Hellina Hailu Nigatu", "John Canny", "Sarah E. Chasins"],
    conference: {
      name: "Proceedings of the 4th ACM African Human Computer Interaction Conference",
      acronym: "AfriCHI",
    },
    hero: NeedFindingContentAnalysis,
    acmDlUrl: "https://doi.org/10.1145/3628096.3628738",
    // youtubeUrl: "https://youtu.be/Z_kUfUHswYg",
    date: new Date("2023-11-27"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "Co-Designing for Transparency: Lessons from Building a Document Organization Tool in the Criminal Justice Domain",
    authors: [
      "Hellina Hailu Nigatu",
      "Lisa Pickoff-White",
      "John Canny",
      "Sarah E. Chasins",
    ],
    conference: {
      name: "Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency",
      acronym: "FAccT",
    },
    hero: CoDesignTransparency,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3593013.3594093",
    youtubeUrl: "https://youtu.be/Z_kUfUHswYg",
    date: new Date("2023-06-12"),
  },
  {
    kind: PublicationKind.Conference,
    title: "A Need-Finding Study with Users of Geospatial Data",
    authors: ["Parker Ziegler", "Sarah E. Chasins"],
    conference: {
      name: "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
      acronym: "CHI",
    },
    hero: NeedFindingGeospatialData,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3544548.3581370",
    youtubeUrl: "https://youtu.be/ZIZTstW42w0",
    date: new Date("2023-04-19"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "Understanding Version Control as Material Interaction with Quickpose",
    authors: ["Eric Rawn", "Jingyi Li", "Eric Paulos", "Sarah E. Chasins"],
    conference: {
      name: "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
      acronym: "CHI",
    },
    hero: Quickpose,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3544548.3581394",
    youtubeUrl: "https://youtu.be/jTxCNGen8zo",
    date: new Date("2023-04-19"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "Exploring the Learnability of Program Synthesizers by Novice Programmers",
    authors: ["Dhayna Jayagopal*", "Justin Lubin*", "Sarah E. Chasins"],
    equalContribution: true,
    conference: {
      name: "Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology",
      acronym: "UIST",
    },
    hero: LearnabilityProgramSynthesizers,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3526113.3545659",
    youtubeUrl: "https://www.youtube.com/watch?v=k5e6wOPrGic",
    date: new Date("2022-10-29"),
  },
  {
    kind: PublicationKind.Conference,
    title: "Bolt-on, Compact, and Rapid Program Slicing for Notebooks",
    authors: [
      "Shreya Shankar*",
      "Stephen Macke*",
      "Sarah E. Chasins",
      "Andrew Head",
      "Aditya Parameswaran",
    ],
    equalContribution: true,
    conference: {
      name: "Proceedings of the VLDB Endowment",
      acronym: "VLDB",
    },
    hero: ProgramSlicingNbs,
    acmDlUrl: "https://dl.acm.org/doi/10.14778/3565838.3565855",
    date: new Date("2022-09-01"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "Informing Housing Policy through Web Automation: Lessons for Designing Programming Tools for Domain Experts",
    authors: ["Chris Hess", "Sarah E. Chasins"],
    conference: {
      name: "Extended Abstracts of the 2022 CHI Conference on Human Factors in Computing Systems",
      acronym: "CHI EA",
    },
    hero: HousingPolicyWebAutomation,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3491101.3503575",
    youtubeUrl: "https://youtu.be/vNyjg6BSSck",
    date: new Date("2022-04-28"),
  },
  {
    kind: PublicationKind.Journal,
    title: "Infrastructure for rapid open knowledge network development",
    authors: [
      "Michael Cafarella",
      "Michael Anderson",
      "Iz Beltagy",
      "Arie Cattan",
      "Sarah E. Chasins",
      "Ido Dagan",
      "Doug Downey",
      "Oren Etzioni",
      "Sergey Feldman",
      "Tian Gao",
      "Tom Hope",
      "Kexin Huang",
      "Sophie Johnson",
      "Daniel King",
      "Kyle Lo",
      "Yuze Lou",
      "Matthew Shapiro",
      "Dinghao Shen",
      "Shivashankar Subramanian",
      "Lucy Lu Wang",
      "Yuning Wang",
      "Yitong Wang",
      "Daniel S. Weld",
      "Jenny Vo-Phamhi",
      "Anna Zeng",
      "Jiayun Zou",
    ],
    journal: {
      name: "AI Magazine",
      volume: 43,
      issue: 1,
    },
    hero: OpenKnowledgeNetwork,
    acmDlUrl: "https://dl.acm.org/doi/10.1002/aaai.12038",
    date: new Date("2022-03-31"),
  },
  {
    kind: PublicationKind.Conference,
    title: "How Statically-Typed Functional Programmers Write Code",
    authors: ["Justin Lubin", "Sarah E. Chasins"],
    conference: {
      name: "Proceedings of the ACM SIGPLAN International Conference on Object-Oriented Programming, Systems, Languages, and Applications",
      acronym: "OOPSLA",
    },
    hero: STFP,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3485532",
    youtubeUrl: "https://youtu.be/2Z3Z3Z3Z3Z3",
    date: new Date("2021-10-15"),
  },
  {
    kind: PublicationKind.Journal,
    title: "PL and HCI: Better Together",
    authors: ["Sarah E. Chasins", "Elena Glassman", "Joshua Sunshine"],
    journal: {
      name: "Communications of the ACM",
      volume: 64,
      issue: 8,
    },
    hero: PLHCI,
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3469279",
    date: new Date("2021-07-26"),
  },
  {
    kind: PublicationKind.Workshop,
    title: "Searching for Incidental Specifications",
    authors: ["Jeremy Ferguson*", "Kevin Ye*", "Jacob Yim*", "Justin Lubin"],
    equalContribution: true,
    conference:{name: "PLATEAU",},
    hero: IncidentalSpecs,
    pdfUrl:
      "https://kilthub.cmu.edu/articles/conference_contribution/Searching_for_Incidental_Specifications/22277332?backTo=/collections/PLATEAU_2023/6454855",
    date: new Date("2023-02-14"),
  },
  {
    kind: PublicationKind.Workshop,
    title: "Change in Software Ecosystems",
    authors: ["Gabriel Matute", "Alvin Cheung", "Sarah E. Chasins"],
    conference:{name: "PLATEAU",},
    hero: SoftwareEcosystem,
    pdfUrl:
      "https://kilthub.cmu.edu/articles/conference_contribution/Change_in_Software_Ecosystems/19799314?backTo=/collections/PLATEAU_2022/5957631",
    date: new Date("2021-11-09"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      'mRAKL:  Multilingual Retrieval-Augmented Knowledge Graph Construction for Low-Resourced Languages',
      authors: [
       "Hellina Hailu Nigatu", 
       "Min Li",
       "Maartje ter Hoeve ",
       "Saloni Potdar",
       "Sarah E. Chasins"

    ],
    conference:{
      name: "Proceedings of Findings of the Association of Computational Lingustics (ACL Findings)",
      acronym: "ACL"

    } ,
    hero: mRAKL,
    acmDlUrl: "",
    date: new Date("2025-07-27"),
  },
  {
    kind: PublicationKind.Workshop,
    title:
      'Exploring Transliteration-Based Zero-Shot Transfer for Amharic ASR',
      authors: [
      "Hellina Hailu Nigatu", 
      "Hanan Aldarmaki"
    ],
    conference: {
      name:'6th Workshop on African Natural Language Processing',
      acronym: 'AfricaNLP'
    },
    hero: ZeroShotSpeech,
    pdfUrl: "https://openreview.net/pdf?id=YUl0dCLlRi",
    date: new Date("2025-07-31"),
  },
  {
    kind: PublicationKind.Workshop,
    title:
      'Evaluating Gender Bias in Machine Translation for Low-Resource Languages',
      authors: [
       "Walelign Tewabe Sewunetie",
      "Atnafu Lambebo Tonja",
      "Tadesse Destaw Belay",
      "Hellina Hailu Nigatu", 
      "Gashaw Kidanu", 
      "Zewdie Mossie", 
      "Hussien Seid", 
      "Eshete Derb", 
      "Seid Muhie Yimam"
    ],
    conference:{
      name: '5th Workshop on African Natural Language Processing',
      acronym: 'AfricaNLP',},
    hero: GenderBiasEval,
    pdfUrl: "https://openreview.net/pdf?id=9BTp1rhfx7",
    date: new Date("2024-03-03"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      'Cognate Detection for Historical Language Reconstruction of Proto-Sabean Languages: the Case of Ge’ez, Tigrinya, and Amharic',
      authors: [
        "Elleni Sisay Temesgen",
       "Hellina Hailu Nigatu", 
       "Fitsum Assamnew Andargie"
    ],
    conference:{
      name: "Proceedings of the 31st International Conference on Computational Linguistics",
      acronym: "COLING"

    } ,
    hero: CognateDetection,
    acmDlUrl: "https://aclanthology.org/2025.coling-main.496/",
    date: new Date("2025-01-09"),
  },
    
  {
    kind: PublicationKind.Workshop,
    title:
      'Exploitation All the Way Down: Calling out the Root Cause of Bad Online Experiences for Users of the "Majority World"',
      authors: [
       "Hellina Hailu Nigatu", 
       "Zeerak Talat"
    ],
    conference:{
      name:'Chapter in Official Outcome of the UN IGF Data and Artificial Intelligence Governance Coalition report on AI from the Global Majoirty',
     }, hero: ExploitationAllTheWay,
    pdfUrl: "https://arxiv.org/pdf/2501.14748",
    date: new Date("2024-12-14"),
  },

  {
    kind: PublicationKind.Conference,
    title:
      "The Zeno’s Paradox of ‘Low-Resource’ Languages",
      authors: [
       "Hellina Hailu Nigatu", 
       "Atnafu Lambebo Tonja",
       "Benjamin Rosman", 
       "Thamar Solorio", 
       "Monojit Choudhury"
    ],
    conference: {
      name: "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
      acronym: "EMNLP"
    },
    hero: ZenosParadox,
    acmDlUrl: "https://aclanthology.org/2024.emnlp-main.983/",
    date: new Date("2024-11-14"),
  },
  
  {
    kind: PublicationKind.Workshop,
    title:
      "A Capabilities Approach to Studying Bias and Harm in Language Technologies",
      authors: [
      
       "Hellina Hailu Nigatu", 
      "Zeerak Talat"
    ],
    conference:{
      name: "Workshop on New Perspectives on Bias and Discrimination in Language Technology",
    },  
    hero: CapabilitiesApproachShort,
    pdfUrl: "https://arxiv.org/pdf/2411.04298",
    date: new Date("2024-11-04"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "“I Searched for a Religious Song in Amharic and Got Sexual Content Instead’’: Investigating Online Harm in Low-Resourced Languages on YouTube.",
    authors: [
      
       "Hellina Hailu Nigatu", 
      "Inioluwa Deborah Raji"
    ],
    conference: {
      name: "Proceedings of the  2024 ACM Conference on Fairness, Accountability, and Transparency",
      acronym: "FAccT",
    },
    hero: YouTubeHarm,
    acmDlUrl: "https://doi.org/10.1145/3630106.3658546",
    youtubeUrl: "",
    date: new Date("2024-06-04"),
  },
  {
    kind: PublicationKind.Conference,
    title:
      "The Less the Merrier? Investigating Language Representation in Multilingual Models",
    authors: [
      
       "Hellina Hailu Nigatu", 
      "Atnafu Lambebo Tonja", 
       " Jugal Kalita"
    ],
    conference: {
      name: "Proceedings of the Findings of the Association for Computational Linguistics",
      acronym: "EMNLP",
    },
    hero: LessTheMerrier,
    acmDlUrl: "https://aclanthology.org/2023.americasnlp-1.pdf#page=211",
    youtubeUrl: "",
    date: new Date("2023-12-07"),
  },
  {
    kind: PublicationKind.Workshop,
    title:
      "Enhancing Translation for Indigenous Languages: Experiments with Multilingual Models",
    authors: [
      
       "Hellina Hailu Nigatu", 
      "Atnafu Lambebo Tonja", 
      "Olga Kolesnikova",
       "Grigori Sidorov", 
       "Alexander Gelbukh",
       " Jugal Kalita"
    ],
    conference:{
      name: "Proceedings of the Workshop on Natural Language Processing for Indigenous Languages of the Americas",
    },hero: EnhancingTranslations,
    pdfUrl: "https://aclanthology.org/2023.americasnlp-1.pdf#page=211",
    // youtubeUrl: "",
    date: new Date("2023-07-14"),
  },
  {
    kind: PublicationKind.Workshop,
    title:
      "The African Stopwords Project: Curating Stopwords for African Languages",
    authors: [
      "Chris Chinenye Emezue",
       "Hellina Hailu Nigatu", 
      "Cynthia Thinwa", 
      "Lerato Louis", 
      "Idris Abdulmumin", 
      "Samuel Gbenga Oyerinde",
      "Benjamin Ayoade Ajibade",
      "Helper Zhou",
      "Emeka Felix Onwuegbuzia",
      "Handel Chiagozie Emezue",
      "Ifeoluwatayo Adeseye Ige", 
      "Atnafu Lambebo Tonja", 
      "Chiamaka Ijeoma Chukwuneke",
       "Shamsuddeen Hassan Muhammad", 
       "Olanrewaju Samuel",
    ],
    conference:{
      name:  "Proceedings of the 3rd Workshop on African Natural Language Processing",
    },
    hero: AfricaStopWords,
    pdfUrl: "https://arxiv.org/pdf/2304.12155",
    // youtubeUrl: "",
    date: new Date("2022-03-09"),
  },
{
  kind: PublicationKind.Workshop,
  title: "HiLT: A Library for Generating Human-in-the-Loop Data Transformation GUIs",
  authors: ['Sora Kanosue', 'Xiaorui Liu', 'Parker Ziegler', 'Sarah E. Chasins'],
  conference: {
    name: "15th Annual Workshop on the Intersection of HCI and PL",
    acronym: "PLATEAU",
  },
  hero: HILT,
  date: new Date("2025-2-01"),
},
{
  kind: PublicationKind.Conference,
  title: "Flow with FlorDB: Incremental Context Maintenance for the Machine Learning Lifecycle",
  authors: ['Rolando Garcia', 'Pragya Kallanagoudar', 'Chithra Anand', 'Sarah E. Chasins', 'Joseph M. Hellerstein', 'Erin M.T. Kerrison', 'Aditya G. Parameswaran'],
  conference: {
    name: "Conference on Innovative Data Systems Research",
    acronym: "CIDR",
  },
  hero: FlorDB,
  acmDlUrl: "https://www.vldb.org/cidrdb/papers/2025/p33-garcia.pdf",
  date: new Date("2025-1-01"),
},
{
  kind: PublicationKind.Workshop,
  title: "Quilt: Custom UIs for Linking Unstructured Documents to Structured Datasets",
  authors: ['Pragya Kallanagoudar', 'Chithra Anand', 'Rolando Garcia', 'Rebecca M. M. Hicke', 'Aditya G. Parameswaran', 'Eunice Jun', 'Sarah E. Chasins:'],
  conference: {
    name: "Adjunct to the Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology",
    acronym: "UIST Adjunct",
  },
  hero: quilt,
  pdfUrl: "https://dl.acm.org/doi/10.1145/3672539.3686777",
  date: new Date("2024-10-01"),
},
{
  kind: PublicationKind.Conference,
  title: "How Domain Experts Use an Embedded DSL",
  authors: ['Lisa Rennels', 'Sarah E. Chasins'],
  conference: {
    name: "Proceedings of the 2023 ACM SIGPLAN International Conference on Object-Oriented Programming, Systems, Languages, and Applications",
    acronym: "OOPSLA",
  },
  hero: eDSLs,
  acmDlUrl: "https://doi.org/10.1145/3622851",
  date: new Date("2023-10-01"),
},
{
  kind: PublicationKind.Conference,
  title: "Building a Shared Conceptual Model of Complex, Heterogeneous Data Systems: A Demonstration",
  authors: ['Michael R. Anderson', 'Yuze Lou', 'Jiayun Zou', 'Michael J. Cafarella', 'Sarah E. Chasins', 'Doug Downey', 'Tian Gao', 'Kexin Huang', 'Dinghao Shen', 'Jenny M. Vo-Phamhi', 'Yitong Wang', 'Yuning Wang', 'Anna Zeng'],
  conference: {
    name: "Conference on Innovative Data Systems Research",
    acronym: "CIDR",
  },
  hero: OKN,
  acmDlUrl: "https://www.cidrdb.org/cidr2022/papers/p63-anderson.pdf",
  date: new Date("2022-1-01"),
},
];
