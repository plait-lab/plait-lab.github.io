import Image from "next/image";

import News from "@/components/news/News";
import LabMember from "@/components/people/LabMember";
import Project from "@/components/projects/Project";
import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import { NEWS } from "@/content/news";
import { PEOPLE } from "@/content/people";
import { PROJECTS } from "@/content/projects";
import BerkeleyMini from "@/../public/images/berkeley-mini.png";

const Index = () => {
  return (
    <main className="stack stack-sm py-8">
      <h1 className="text-center text-7xl md:text-mega">
        <span className="font-bold text-primary">PLAIT</span>
        Lab
      </h1>
      <section className="stack stack-xs p-4">
        <p className="text-center tracking-wider">
          Programming Languages for Accessible and Inclusive Tools
        </p>
        <div className="stack-h stack-h-xs items-center justify-center">
          <p className="text-center tracking-wider">@ UC Berkeley EECS</p>
          <Image
            src={BerkeleyMini}
            alt="University of California, Berkeley Logo"
            height={24}
            width={24}
          />
        </div>
      </section>
      <section className="stack stack-md p-4">
        <Heading level="h2">Research Themes</Heading>
        <div className="stack stack-sm">
          <div>
            <Heading level="h3">PL for Social Good</Heading>
            <Text>
              We invent usable programming tools to help teams working for
              social good—social scientists, journalists, lawyers, domain
              experts focused on marginalized groups. (Working for social good
              and struggling to write code or process data? Get in touch!)
            </Text>
          </div>
          <div>
            <Heading level="h3">PL+HCI</Heading>
            <Text>
              We combine techniques from Programming Languages and
              Human-Computer Interaction to make programming languages and
              programming tools that work better for coders and non-coders
              alike.
            </Text>
          </div>
        </div>
      </section>
      <section className="stack stack-xs relative p-4">
        <Heading level="h2">News</Heading>
        <News news={NEWS} />
      </section>
      <section className="stack stack-xs p-4">
        <Heading level="h2">People</Heading>
        <div className="grid grid-cols-12 gap-5">
          {PEOPLE.map((person) => {
            return <LabMember key={person.id} {...person} />;
          })}
        </div>
      </section>
      <section className="stack stack-xs p-4">
        <Heading level="h2">Projects</Heading>
        <div className="grid grid-cols-12 gap-y-20 md:gap-12">
          {PROJECTS.map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Index;
