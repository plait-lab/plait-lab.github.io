import type { StaticImageData } from "next/image";

import STFP from "@/../public/publications/stfp.png";
import NeedFindingGeospatialData from "@/../public/publications/need-finding-geospatial-data.png";
import SoftwareEcosystem from "@/../public/projects/software-ecosystem.svg";
import FLOR from "@/../public/projects/flor.png";
import Helena from "@/../public/projects/helena.png";
import QuickPose from "@/../public/projects/quickpose.jpg";
import DOT from "@/../public/projects/dot.png";
import EntityExtraction from "@/../public/projects/entity-extraction.jpeg";
import EquivalenceByCanonicalization from "@/../public/projects/equivalence-by-canonicalization.png";
import STSearch from "@/../public/projects/stsearch.svg";
import SimplifyTypes from "@/../public/projects/simplify-types.png";
import LearnabilityProgramSynthesizers from "@/../public/publications/learnability-program-synthesizers.png";
import LRLWiki from "@/../public/publications/lrl_comparison.png";

export interface Project {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  href?: string;
  githubUrl?: string;
  acmDlUrl?: string;
  youtubeUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Low-Resourced Languages and Online Knowledge Repositories: A Need-Finding Study",
    description:
      "A need-finding study with Wikipedia contributors in Amharic, Afan Oromo, and Tigrinya to understand barriers to contribution in low-resourced languages.",
    image: {
      src: LRLWiki,
      alt: "Low-Resourced Languages and Online Knowledge Repositories: A Need-Finding Study",
    },
    acmDlUrl: "https://doi.org/10.1145/3613904.3642605",
    youtubeUrl: "https://www.youtube.com/watch?v=aJ8BIo2O4mY",
  },
      
    title: "A Need-Finding Study with Users of Geospatial Data",
    description:
      "A contextual inquiry study exploring the challenges users face in finding, transforming, analyzing, and visualizing geospatial data, drawing on participants from Earth and climate science, the social sciences, and data journalism.",
    image: {
      src: NeedFindingGeospatialData,
      alt: "A Need-Finding Study with Users of Geospatial Data",
    },
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3544548.3581370",
    youtubeUrl: "https://youtu.be/ZIZTstW42w0",
  },
  {
    title:
      "DOT: Building a Document Organization tool for the Criminal Justice Domain",
    description:
      "A cross-discipline co-design project to build a Document Organization Tool for public defenders and investigative journalists working on police use-of-force and misconduct data disclosures.",
    image: {
      src: DOT,
      alt: "DOT: Building a Document Organization tool for the Criminal Justice Domain",
    },
    githubUrl: "https://github.com/hhnigatu/DOT",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3593013.3594093",
    youtubeUrl: "https://youtu.be/Z_kUfUHswYg",
  },
  {
    title: "Entity Extraction From Police Records",
    description:
      "Program synthesis tool to match documents based on locational similarities.",
    image: {
      src: EntityExtraction,
      alt: "Entity Extraction From Police Records",
    },
  },
  {
    title: "cobbler: The Component-Based Refactoring Synthesizer",
    description:
      "A program synthesizer that synthesizes compositions of library components equivalent to user-provided code using a novel and fast program equivalence check. Refactors thousands of real-world programs!",
    image: {
      src: EquivalenceByCanonicalization,
      alt: "Equivalence by Canonicalization for Synthesis-Backed Refactoring",
    },
    githubUrl: "https://github.com/justinlubin/cobbler",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3656453",
  },
  {
    title: "Syntactic Code Search with Sequence-to-Tree Matching",
    description:
      "A new lightweight code search query language based on tokenizers and tree automatas to support accurate and incremental syntactic search queries for interactive settings.",
    image: {
      src: STSearch,
      alt: "Syntactic Code Search with Sequence-to-Tree Matching",
    },
    githubUrl: "https://github.com/plait-lab/stsearch",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3656460",
  },
  {
    title:
      "Exploring the Learnability of Program Synthesizers by Novice Programmers",
    description:
      "A thematic analysis on the first-use usability of program synthesizers by novice programmers, including findings on specification modalities, interpreting synthesis outputs, and user behaviors.",
    image: {
      src: LearnabilityProgramSynthesizers,
      alt: "Exploring the Learnability of Program Synthesizers by Novice Programmers",
    },
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3526113.3545659",
    youtubeUrl: "https://www.youtube.com/watch?v=k5e6wOPrGic",
  },
  {
    title: "Change in Software Ecosystems",
    description:
      "An analysis of social challenges to propagate breaking changes in existing software ecosystems to discover opportunities for new techniques to automate upgrades.",
    image: {
      src: SoftwareEcosystem,
      alt: "Change in Software Ecosystems",
    },
    href: "https://kilthub.cmu.edu/articles/conference_contribution/Change_in_Software_Ecosystems/19799314?backTo=/collections/PLATEAU_2022/5957631",
  },
  {
    title: "Simplifying Refinement Types",
    description:
      "A deterministic syntax-directed algorithm to synthesize simple types that guarantee contraints from a refinement type, including common background theories and an OCaml implementation.",
    image: {
      src: SimplifyTypes,
      alt: "Simplifying Refinement Types",
    },
    githubUrl: "https://github.com/plait-lab/simplify-types",
  },
  {
    title: "FLOR: Fast Low-Overhead Recovery",
    description: "A hindsight logging toolkit for model training.",
    image: {
      src: FLOR,
      alt: "FLOR: Fast Low-Overhead Recovery",
    },
    githubUrl: "https://github.com/ucbrise/flor/",
    acmDlUrl: "https://dl.acm.org/doi/10.14778/3436905.3436925",
  },
  {
    title: "Helena",
    description:
      "Programming-by-demonstration tool for automating repetitive interactions with webpages. Designed for non-programmers from the social sciences.",
    image: {
      src: Helena,
      alt: "Helena",
    },
    href: "http://helena-lang.org/",
    githubUrl: "https://github.com/schasins/helena",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3133875",
    youtubeUrl: "https://www.youtube.com/watch?v=Fy4UBVzOHvU",
  },
  {
    title: "How Statically-Typed Functional Programmers Write Code",
    description:
      "A grounded theory (and experimental validation) of how statically-typed functional programmers write code, covering domain modeling, type construction, focusing techniques, exploratory strategies, mental models, and expressions of intent.",
    image: {
      src: STFP,
      alt: "How Statically-Typed Functional Programmers Write Code",
    },
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3485532",
    youtubeUrl: "https://youtu.be/2Z3Z3Z3Z3Z3",
  },
  {
    title:
      "Understanding Version Control as Material Interaction with Quickpose",
    description:
      "A version control tool for creative programmers. We used this tool to study how people use different versions of their programs in their process—navigating between, annotating and arranging, and backtracking to previous versions of their programs.",
    image: {
      src: QuickPose,
      alt: "Understanding Version Control as Material Interaction with Quickpose",
    },
    href: "https://www.ericrawn.media/quickpose",
    githubUrl: "https://github.com/erawn/Quickpose",
    acmDlUrl: "https://dl.acm.org/doi/abs/10.1145/3544548.3581394",
    youtubeUrl: "https://youtu.be/jTxCNGen8zo",
  },
];
