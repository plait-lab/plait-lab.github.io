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
import JFerguson from "@/../public/headshots/jferguson.jpg";
import KYe from "@/../public/headshots/kye.jpg";
import HPerlstein from "@/../public/headshots/hperlstein.jpeg";
import ADemirci from "@/../public/headshots/ademirci.jpeg";
import SKim from "@/../public/headshots/skim.jpg";
import LRojas from "@/../public/headshots/lrojas.png";
import DCao from "@/../public/headshots/dcao.jpg";
import SKanosue from "@/../public/headshots/skanosue.jpg";
import LWalker from "@/../public/headshots/lwalker.jpeg";
import PKallanagoudar from "@/../public/headshots/pkallanagoudar.jpeg";
import ABi from "@/../public/headshots/abi.png";
import XLiu from "@/../public/headshots/xliu.jpg";

export enum Role {
  Faculty = "Faculty",
  PhDCandidate = "PhD Candidate",
  PhdStudent = "PhD Student",
  MScStudent = "MS Student",
  UndergraduateStudent = "Undergraduate Student",
  StudentAssistant = "Assistant",
  OnLeave = "PhD Student (on leave)"
}
export const RoleOrder: Record<Role, number> = {
  [Role.Faculty]: 1,
  [Role.PhDCandidate]: 2,
  [Role.PhdStudent]: 3,
  [Role.MScStudent]: 4,
  [Role.UndergraduateStudent]: 5,
  [Role.StudentAssistant]: 6,
  [Role.OnLeave]: 7,
};

export interface Person {
  id: string;
  name: string;
  role: Role;
  headshot: StaticImageData;
  website?: string;
  alum: Boolean;
  graduation?: number;
}

export const PEOPLE = [
  {
    id: "schasins",
    name: "Sarah E. Chasins",
    role: Role.Faculty,
    headshot: SChasins,
    website: "https://schasins.com/",
    alum: false,
  },
  {
    id: "rgarcia",
    name: "Rolando Garcia",
    role: Role.PhDCandidate,
    headshot: RGarcia,
    website: "https://rlnsanz.github.io/",
    alum: true,
    graduation: 2024
  },
  {
    id: "hhailunigatu",
    name: "Hellina Hailu Nigatu",
    role: Role.PhDCandidate,
    headshot: HHailuNigatu,
    website: "https://hhnigatu.github.io/",
    alum: false,
  },
  {
    id: "slim",
    name: "Slim Lim",
    role: Role.OnLeave,
    headshot: SLim,
    website: "https://slim.computer/",
    alum: false,
  },
  {
    id: "jlubin",
    name: "Justin Lubin",
    role: Role.PhDCandidate,
    headshot: JLubin,
    website: "https://jlubin.net",
    alum: false,
  },
  {
    id: "dcao",
    name: "David Minh-Duy Cao",
    role: Role.PhdStudent,
    headshot: DCao,
    website: "https://cao.sh",
    alum: false,
  },
  {
    id: "gmatute",
    name: "Gabriel Matute",
    role: Role.MScStudent,
    headshot: GMatute,
    website: "https://about.gmatute.dev/",
    alum: true,
  },
  {
    id: "erawn",
    name: "Eric Rawn",
    role: Role.PhdStudent,
    headshot: ERawn,
    website: "https://www.ericrawn.media/",
    alum: false,
  },
  {
    id: "pziegler",
    name: "Parker Ziegler",
    role: Role.PhdStudent,
    headshot: PZiegler,
    website: "https://parkerziegler.com/",
    alum: false,
  },
  {
    id: "djayagopal",
    name: "Dhanya Jayagopal",
    role: Role.MScStudent,
    headshot: DJayagopal,
    alum: true,
    graduation: 2022
  },
  {
    id: "jyim",
    name: "Jacob Yim",
    role: Role.MScStudent,
    headshot: JYim,
    website: "https://jcbym.github.io/",
    alum: true,
    graduation: 2024
  },
  {
    id: "jferguson",
    name: "Jeremy Ferguson",
    role: Role.MScStudent,
    headshot: JFerguson,
    website: "https://www.linkedin.com/in/jeremy-ferguson-66051715a/",
    alum: true,
    graduation: 2024
  },
  {
    id: "kye",
    name: "Kevin Ye",
    role: Role.UndergraduateStudent,
    headshot: KYe,
    website: "https://www.linkedin.com/in/kevinyeeeee/",
    alum: true,
    graduation: 2023
  },
  {
    id: "skanosue",
    name: "Sora Kanosue",
    role: Role.MScStudent,
    headshot: SKanosue,
    website: "https://skanosue.com",
    alum: true,
    graduation: 2024
  },
  {
    id: "lrennels",
    name: "Lisa Rennels",
    role: Role.MScStudent,
    headshot: LRennels,
    website: "https://lisarennels.com/",
    alum: true,
    graduation: 2024
  },
  {
    id: "adermirci",
    name: "Arda Demirci",
    role: Role.UndergraduateStudent,
    headshot: ADemirci,
    website: "https://www.linkedin.com/in/ardademirci14/",
    alum: true,
    graduation: 2022
  },
  {
    id: "rhicke",
    name: "Rebecca Hicke",
    role: Role.UndergraduateStudent,
    headshot: RHicke,
    website: "https://rmatouschekh.github.io/",
    alum: true,
    graduation: 2021
  },
  {
    id: "skim",
    name: "Selina Kim",
    role: Role.UndergraduateStudent,
    headshot: SKim,
    alum: true,
    graduation: 2022
  },
  {
    id: "rmishra",
    name: "Rajavi Mishra",
    role: Role.UndergraduateStudent,
    headshot: RMishra,
    alum: true,
    graduation: 2022
  },
  {
    id: "hperlstein",
    name: "Hannah Perlstein",
    role: Role.UndergraduateStudent,
    headshot: HPerlstein,
    website: "https://www.linkedin.com/in/hannah-perlstein/",
    alum: true,
    graduation: 2022
  },
  {
    id: "lrojas",
    name: "Liliana Rojas",
    role: Role.StudentAssistant,
    headshot: LRojas,
    website: "https://www.linkedin.com/in/liliana-rojasl/",
    alum: true,
    graduation: 2024
  },
  {
    id: "lwalker",
    name: "Laila Walker",
    role: Role.UndergraduateStudent,
    headshot: LWalker,
    alum: true,
    graduation: 2025
  },
  {
    id: "pkallanagoudar",
    name: "Pragya Kallanagoudar",
    role: Role.UndergraduateStudent,
    headshot: PKallanagoudar,
    alum: true,
    graduation: 2025
  },
  {
    id: "abi",
    name: "Angela Bi",
    role: Role.UndergraduateStudent,
    headshot: ABi,
    website: "https://angelabi.framer.website",
    alum: true,
    graduation: 2025
  },
  {
    id: "xliu",
    name: "Xiaorui Liu",
    role: Role.UndergraduateStudent,
    headshot: XLiu,
    alum: true,
    graduation: 2025
  },
];
