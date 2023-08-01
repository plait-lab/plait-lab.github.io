import type { StaticImageData } from "next/image";

import STFP from "@/../public/publications/stfp.png";
import NeedFindingGeospatialData from "@/../public/publications/need-finding-geospatial-data.png";
import EnablingAPIUpgrades from "@/../public/projects/enabling-api-upgrades.svg";
import FLOR from "@/../public/projects/flor.png";
import Helena from "@/../public/projects/helena.png";
import QuickPose from "@/../public/projects/quickpose.jpg";
import DOT from "@/../public/projects/dot.png";
import EntityExtraction from "@/../public/projects/entity-extraction.jpeg";

export interface Project {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  href?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "A Need-Finding Study with Users of Geospatial Data",
    description:
      "A contextual inquiry study exploring the challenges users face in finding, transforming, analyzing, and visualizing geospatial data, drawing on participants from Earth and climate science, the social sciences, and data journalism.",
    image: {
      src: NeedFindingGeospatialData,
      alt: "A Need-Finding Study with Users of Geospatial Data",
    },
    href: "https://dl.acm.org/doi/10.1145/3544548.3581370",
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
  },
  {
    title: "Enabling API Upgrades",
    description:
      "Program transformation tooling for library developers could enable them to ease the upgrading burden when introducing API breaking changes for their downstream users.",
    image: {
      src: EnablingAPIUpgrades,
      alt: "Enabling API Upgrades",
    },
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
    title: "FLOR: Fast Low-Overhead Recovery",
    description: "A hindsight logging toolkit for model training.",
    image: {
      src: FLOR,
      alt: "FLOR: Fast Low-Overhead Recovery",
    },
    href: "https://github.com/ucbrise/flor/",
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
  },
  {
    title: "How Statically-Typed Functional Programmers Write Code",
    description:
      "A grounded theory of how statically-typed functional programmers write code, covering domain modeling, type construction, focusing techniques, exploratory strategies, mental models, and expressions of intent. Ongoing work: collecting programmers’ fine-grained edit histories and developing analyses to parse and understand their behaviors over time.",
    image: {
      src: STFP,
      alt: "How Statically-Typed Functional Programmers Write Code",
    },
    href: "https://dl.acm.org/doi/10.1145/3485532",
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
    href: "https://dl.acm.org/doi/10.1145/3544548.3581394",
  },
];
