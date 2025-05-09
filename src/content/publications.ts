import type { StaticImageData } from "next/image";

import CoDesignTransparency from "@/../public/publications/co-design-transparency.png";
import NeedFindingGeospatialData from "@/../public/publications/need-finding-geospatial-data.png";
import Quickpose from "@/../public/publications/quickpose.png";
import LearnabilityProgramSynthesizers from "@/../public/publications/learnability-program-synthesizers.png";
import ProgramSlicingNbs from "@/../public/publications/program-slicing-nbs.png";
import HousingPolicyWebAutomation from "@/../public/publications/housing-policy-web-automation.png";
import OpenKnowledgeNetwork from "@/../public/publications/open-knowledge-network.png";
import STFP from "@/../public/publications/stfp.png";
import PLHCI from "@/../public/publications/pl-hci.png";
import IncidentalSpecs from "@/../public/publications/incidental-specs.png";
import SoftwareEcosystem from "@/../public/projects/software-ecosystem.svg";
import EquivalenceByCanonicalization from "@/../public/projects/equivalence-by-canonicalization.png";
import STSearch from "@/../public/projects/stsearch.svg";
import LRLWiki from "@/../public/publications/lrl_comparison.png";


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
  workshop: string;
  pdfUrl: string;
}

export type Publication =
  | ConferencePublication
  | JournalPublication
  | WorkshopPublication;

export const PUBLICATIONS: Publication[] = [
  {
    kind: PublicationKind.Journal,
    title:
      "Equivalence by Canonicalization for Synthesis-Backed Refactoring",
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
    title:
      "Syntactic Code Search with Sequence-to-Tree Matching",
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
    authors: [
      "Hellina Hailu Nigatu",
      "John Canny",
      "Sarah E. Chasins",
    ],
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
    title:
      "A Need Finding Study with Low-Resourced Language Content Creators",
    authors: [
      "Hellina Hailu Nigatu",
      "John Canny",
      "Sarah E. Chasins",
    ],
    conference: {
      name: "Proceedings of the 4th ACM African Human Computer Interaction Conference",
      acronym: "AfriCHI",
    },
    // hero: CoDesignTransparency,
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
    workshop: "PLATEAU",
    hero: IncidentalSpecs,
    pdfUrl:
      "https://kilthub.cmu.edu/articles/conference_contribution/Searching_for_Incidental_Specifications/22277332?backTo=/collections/PLATEAU_2023/6454855",
    date: new Date("2023-02-14"),
  },
  {
    kind: PublicationKind.Workshop,
    title: "Change in Software Ecosystems",
    authors: ["Gabriel Matute", "Alvin Cheung", "Sarah E. Chasins"],
    workshop: "PLATEAU",
    hero: SoftwareEcosystem,
    pdfUrl:
      "https://kilthub.cmu.edu/articles/conference_contribution/Change_in_Software_Ecosystems/19799314?backTo=/collections/PLATEAU_2022/5957631",
    date: new Date("2021-11-09"),
  },
];
