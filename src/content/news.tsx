import Link from "@/components/shared/Link";

export interface NewsItem {
  title: string;
  date: Date;
  description: React.ReactNode;
}

export const NEWS: Record<string, NewsItem[]> = {
  2023: [
    {
      title: "New paper at FAccT '23",
      date: new Date("2023-06-15"),
      description: (
        <p className="text-xs tracking-wider">
          Hellina published the first paper of her Ph.D. journey at FAccT 2023!
          Check out{" "}
          <Link href="https://dl.acm.org/doi/10.1145/3593013.3594093">
            Co-Designing for Transparency: Lessons from Building a Document
            Organization Tool in the Criminal Justice Domain
          </Link>
          .
        </p>
      ),
    },
    {
      title: "Two papers at CHI '23 ⛵",
      date: new Date("2023-04-23"),
      description: (
        <p className="text-xs tracking-wider">
          Parker and Eric each published the first papers in their Ph.D.
          journies! Check out{" "}
          <Link href="https://dl.acm.org/doi/10.1145/3544548.3581370">
            A Need-Finding Study with Users of Geospatial Data
          </Link>{" "}
          and{" "}
          <Link href="https://dl.acm.org/doi/abs/10.1145/3544548.3581394">
            Understanding Version Control as Material Interaction with Quickpose
          </Link>
          .
        </p>
      ),
    },
    {
      title: "PLAIT goes to Napa",
      date: new Date("2023-04-17"),
      description: (
        <p className="text-xs tracking-wider">
          Justin, Eric, and Parker all presented{" "}
          <Link href="https://epic.berkeley.edu/wiki/_media/retreats/2023spring/a-need-finding-study-with-users-of-geospatial-data.pdf">
            their
          </Link>{" "}
          <Link href="https://epic.berkeley.edu/wiki/_media/retreats/2023spring/lubin-sp23-slides.pdf">
            research
          </Link>{" "}
          at this spring&apos;s{" "}
          <Link href="https://epic.berkeley.edu/">EPIC Data Lab</Link> retreat
          in Napa, CA.
        </p>
      ),
    },
    {
      title: "PLATEAU 2023",
      date: new Date("2023-02-14"),
      description: (
        <p className="text-xs tracking-wider">
          Jeremy, Jacob, Kevin, and Justin headed to{" "}
          <Link href="https://2023.plateau-workshop.org/">PLATEAU 2023</Link> to
          present their workshop paper{" "}
          <Link href="https://kilthub.cmu.edu/articles/conference_contribution/Searching_for_Incidental_Specifications/22277332?backTo=/collections/PLATEAU_2023/6454855">
            Searching for Incidental Specifications
          </Link>
          !
        </p>
      ),
    },
  ],
};
