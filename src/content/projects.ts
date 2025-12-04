import type { StaticImageData } from "next/image";

import cartokit from "@/../public/projects/cartokit.png";
import CodePlate from "@/../public/projects/codeplate.png";
import DOT from "@/../public/projects/dot.png";
import EntityExtraction from "@/../public/projects/entity-extraction.jpeg";
import EquivalenceByCanonicalization from "@/../public/projects/equivalence-by-canonicalization.png";
import FLOR from "@/../public/projects/flor.png";
import Helena from "@/../public/projects/helena.png";
import Hilt from "@/../public/projects/hilt.png";
import LearnabilityProgramSynthesizers from "@/../public/publications/learnability-program-synthesizers.png";
import LRLWiki from "@/../public/publications/lrl_comparison.png";
import Marshall from "@/../public/projects/marshall.png";
import NeedFindingGeospatialData from "@/../public/publications/need-finding-geospatial-data.png";
import Pagebreaks from "@/../public/projects/pagebreaks.png";
import PBN from "@/../public/projects/PBN.png";
import QuickPose from "@/../public/projects/quickpose.jpg";
import SimplifyTypes from "@/../public/projects/simplify-types.png";
import SoftwareEcosystem from "@/../public/projects/software-ecosystem.svg";
import STFP from "@/../public/publications/stfp.png";
import STSearch from "@/../public/projects/stsearch.svg";
import Translations from "@/../public/projects/translations.png";
import PBCD from "@/../public/projects/perpendInterface.png"
export interface Project {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  order: number;
  href?: string;
  githubUrl?: string;
  acmDlUrl?: string;
  youtubeUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Programming by Scaffolded Demonstration",
    description:
      "A new programming modality where users construct programs by selecting among the outputs of possible next-step edits to their current program.",
    image: {
      src: PBCD,
      alt: "Programming by Scaffolded Demonstration",
    },
    acmDlUrl: "",
    githubUrl: "https://github.com/angela-bi/p5_pbcd",
    order: 16,
  },
  {
    title: "Programming by Navigation",
    description:
      "A new interactive program synthesis paradigm to empower domain experts to write the code they need without programming expertise.",
    image: {
      src: PBN,
      alt: "Programming by Navigation",
    },
    href: "https://honeybee-lang.org",
    acmDlUrl: "https://doi.org/10.1145/3729264",
    githubUrl: "https://github.com/justinlubin/honeybee",
    youtubeUrl: "https://youtu.be/W7N9cU6KcGE",
    order: 24,
  },
  {
    title: "Pagebreaks",
    description:
      "Global variables in computational notebooks are confusing, but notebook users are reluctant to use functions. We built an understanding of why, then designed and implemented a new notebook-customized scoping construct.",
    image: {
      src: Pagebreaks,
      alt: "Pagebreaks",
    },
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3706598.3713620",
    githubUrl: "https://github.com/erawn/pagebreaks",
    order: 23,
  },
  {
    title:
      "Exploring the Translation-As-Explanation Folk Wisdom for Program Editing Tasks",
    description:
      "A controlled trial to investigate whether program translations assist programmers editing code in an unfamiliar language. We found that there was a 67%–89% chance that translations alone actually made participants less likely to complete program modification tasks correctly in our study.",
    image: {
      src: Translations,
      alt: "An overview of the controlled trial for the Translation-As-Explanation study",
    },
    order: 15,
  },
  {
    title: "cartokit",
    description:
      "A direct manipulation programming system for interactive cartography on the web. cartokit allows you to analyze and visualize geospatial data using familiar direct manipulation interactions while simultaneously generating JavaScript or TypeScript code for your map.",
    image: {
      src: cartokit,
      alt: "Three screenshots of maps and associated programs created with cartokit, with the tagline 'Style maps. Get Programs.' beneath the screenshots.",
    },
    href: "https://alpha.cartokit.dev/",
    githubUrl: "https://github.com/parkerziegler/cartokit",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3729278",
    order: 25,
  },
  {
    title:
      "Low-Resourced Languages and Online Knowledge Repositories: A Need-Finding Study",
    description:
      "A need-finding study with Wikipedia contributors in Amharic, Afan Oromo, and Tigrinya to understand barriers to contribution in low-resourced languages.",
    image: {
      src: LRLWiki,
      alt: "Low-Resourced Languages and Online Knowledge Repositories: A Need-Finding Study",
    },
    acmDlUrl: "https://doi.org/10.1145/3613904.3642605",
    youtubeUrl: "https://www.youtube.com/watch?v=aJ8BIo2O4mY",
    order: 7
  },
  {
    title: "A Need-Finding Study with Users of Geospatial Data",
    description:
      "A contextual inquiry study exploring the challenges users face in finding, transforming, analyzing, and visualizing geospatial data, drawing on participants from Earth and climate science, the social sciences, and data journalism.",
    image: {
      src: NeedFindingGeospatialData,
      alt: "A Need-Finding Study with Users of Geospatial Data",
    },
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3544548.3581370",
    youtubeUrl: "https://youtu.be/ZIZTstW42w0",
    order: 20,
  },
  {
    title:
      "DOT: Building a Document Organization tool for the Criminal Justice Domain",
    description:
      "A cross-disciplinary co-design project to build a Document Organization Tool for public defenders and investigative journalists working on police use-of-force and misconduct data disclosures.",
    image: {
      src: DOT,
      alt: "DOT: Building a Document Organization tool for the Criminal Justice Domain",
    },
    githubUrl: "https://github.com/hhnigatu/DOT",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3593013.3594093",
    youtubeUrl: "https://youtu.be/Z_kUfUHswYg",
    order: 6
  },
  {
    title: "Marshall: Extracting Structured Data from Templated Documents",
    description:
      "An instantiation of the Program Sketches with Scorer Holes synthesis framework that extracts structured information from templated PDFs.",
    image: {
      src: EntityExtraction,
      alt: "Entity Extraction From Police Records",
    },
    order: 18,
  },
  {
    title: "Program Sketches with Scorer Holes",
    description:
      "A program synthesizer that fills sketch holes with scorer programs. Suitable for use in domains with messy, unstructured and semi-structured inputs.",
    image: {
      src: Marshall,
      alt: "Program Sketches with Scorer Holes",
    },
    order: 19,
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
    order: 21,
  },
  {
    title: "Syntactic Code Search with Sequence-to-Tree Matching",
    description:
      "A new lightweight code search query language based on tokenizers and tree automata to support accurate and incremental syntactic search queries for interactive settings.",
    image: {
      src: STSearch,
      alt: "Syntactic Code Search with Sequence-to-Tree Matching",
    },
    githubUrl: "https://github.com/plait-lab/stsearch",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3656460",
    order: 16,
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
    order: 17,
  },
  {
    title: "Change in Software Ecosystems",
    description:
      "An analysis of social barriers to implementing 'breaking changes' in existing software ecosystems; opportunities for new techniques to automate upgrades.",
    image: {
      src: SoftwareEcosystem,
      alt: "Change in Software Ecosystems",
    },
    href: "https://kilthub.cmu.edu/articles/conference_contribution/Change_in_Software_Ecosystems/19799314?backTo=/collections/PLATEAU_2022/5957631",
    order: 2
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
    order: 3,
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
    order: 1
  },
  {
    title: "Helena",
    description:
      "A Programming-by-Demonstration tool for automating repetitive interactions with webpages. Designed for non-programmers from the social sciences.",
    image: {
      src: Helena,
      alt: "Helena",
    },
    href: "http://helena-lang.org/",
    githubUrl: "https://github.com/schasins/helena",
    acmDlUrl: "https://dl.acm.org/doi/10.1145/3133875",
    youtubeUrl: "https://www.youtube.com/watch?v=Fy4UBVzOHvU",
    order: 0
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
    order: 13,
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
    order: 12,
  },
  {
    title:
      "CodePlate: Structured Natural Language Interactions for Arduino Programming Tasks",
    description:
      "A structured natural language interaction to generate Arduino programs, used to probe how different styles of natural language programming can affect programmer understanding.",
    image: {
      src: CodePlate,
      alt: "CodePlate: Structured Natural Language Interactions for Arduino Programming Tasks",
    },
    order: 11,
  },
  {
    title:
      "HiLT: A Library for Generating Human-in-the-Loop Data Transformation GUIs",
    description:
      "A Python eDSL for generating bespoke, human-in-the-loop data transformation GUIs.",
    image: {
      src: Hilt,
      alt: "HiLT: A Library for Generating Human-in-the-Loop Data Transformation GUIs",
    },
    githubUrl: "https://github.com/skberkeley/coolnewlanguage",
    order: 10
  },
];
