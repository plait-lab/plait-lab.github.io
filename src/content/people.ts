import type { StaticImageData } from "next/image";

import SChasins from "@/../public/headshots/schasins.jpg";
import RGarcia from "@/../public/headshots/rgarcia.jpeg";
import SLim from "@/../public/headshots/slim.jpeg";
import JLubin from "@/../public/headshots/jlubin.jpg";
import GMatute from "@/../public/headshots/gmatute.jpg";
import HHailuNigatu from "@/../public/headshots/hnigatu.jpeg";
import ERawn from "@/../public/headshots/erawn.png";
import PZiegler from "@/../public/headshots/pziegler.png";
import DJayagopal from "@/../public/headshots/djayagopal.jpeg";
import LRennels from "@/../public/headshots/lrennels.jpeg";
import RHicke from "@/../public/headshots/rhicke.jpeg";
import RMishra from "@/../public/headshots/rmishra.jpg";
import JYim from "@/../public/headshots/jyim.jpg";
import HPerlstein from "@/../public/headshots/hperlstein.jpeg";
import ADemirci from "@/../public/headshots/ademirci.jpeg";
import SKim from "@/../public/headshots/skim.jpg";
import LRojas from "@/../public/headshots/lrojas.png";

export interface Person {
  id: string;
  name: string;
  role: string;
  headshot: StaticImageData;
  website?: string;
}

export const PEOPLE = [
  {
    id: "schasins",
    name: "Sarah E. Chasins",
    role: "Faculty",
    headshot: SChasins,
    website: "https://schasins.com/",
  },
  {
    id: "rgarcia",
    name: "Rolando Garcia",
    role: "Ph.D. Candidate",
    headshot: RGarcia,
    website: "https://rlnsanz.github.io/",
  },
  {
    id: "slim",
    name: "Slim Lim",
    role: "Ph.D. Student",
    headshot: SLim,
    website: "https://slim.computer/",
  },
  {
    id: "jlubin",
    name: "Justin Lubin",
    role: "Ph.D. Student",
    headshot: JLubin,
    website: "https://jlubin.net",
  },
  {
    id: "gmatute",
    name: "Gabriel Matute",
    role: "Ph.D. Student",
    headshot: GMatute,
    website: "https://about.gmatute.dev/",
  },
  {
    id: "hhailunigatu",
    name: "Hellina Hailu Nigatu",
    role: "Ph.D. Student",
    headshot: HHailuNigatu,
    website: "https://hhnigatu.github.io/",
  },
  {
    id: "erawn",
    name: "Eric Rawn",
    role: "Ph.D. Student",
    headshot: ERawn,
    website: "https://www.ericrawn.media/",
  },
  {
    id: "pziegler",
    name: "Parker Ziegler",
    role: "Ph.D. Student",
    headshot: PZiegler,
    website: "https://parkerziegler.com/",
  },
  {
    id: "djayagopal",
    name: "Dhanya Jayagopal",
    role: "M.Sc. Student",
    headshot: DJayagopal,
  },
  {
    id: "jyim",
    name: "Jacob Yim",
    role: "M.Sc. Student",
    headshot: JYim,
  },
  {
    id: "lrennels",
    name: "Lisa Rennels",
    role: "Energy & Resources Group Ph.D. Student, EECS M.Sc.",
    headshot: LRennels,
    website: "https://lisarennels.com/",
  },
  {
    id: "adermirci",
    name: "Arda Demirci",
    role: "Undergraduate Student",
    headshot: ADemirci,
    website: "https://www.linkedin.com/in/ardademirci14/",
  },
  {
    id: "rhicke",
    name: "Rebecca Hicke",
    role: "Undergraduate Student",
    headshot: RHicke,
    website: "https://rmatouschekh.github.io/",
  },
  {
    id: "skim",
    name: "Selina Kim",
    role: "Undergraduate Student",
    headshot: SKim,
  },
  {
    id: "rmishra",
    name: "Rajavi Mishra",
    role: "Undergraduate Student",
    headshot: RMishra,
  },
  {
    id: "hperlstein",
    name: "Hannah Perlstein",
    role: "Undergraduate Student",
    headshot: HPerlstein,
    website: "https://www.linkedin.com/in/hannah-perlstein/",
  },
  {
    id: "lrojas",
    name: "Liliana Rojas",
    role: "Undergraduate Student Assistant",
    headshot: LRojas,
    website: "https://www.linkedin.com/in/liliana-rojasl/",
  },
];
