import { partition, orderBy } from "lodash-es";
import Image from "next/image";

import LabMember from "@/components/people/LabMember";
import LabAlum from "@/components/people/LabAlum";
import Project from "@/components/projects/Project";
import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import { PEOPLE, Role } from "@/content/people";
import { PROJECTS } from "@/content/projects";
import BerkeleyMini from "@/../public/images/berkeley-mini.png";

const Index = () => {
  const [currentLabMembers, alumni] = partition(
    PEOPLE,
    (person) => person.role !== Role.Alumni
  );

  return (
    <main className="stack stack-sm py-8">
      <h1 className="text-center text-7xl md:text-mega">
        <span className="font-bold text-primary">PLAIT</span>
        Lab
      </h1>
      <section className="stack stack-xs p-4">
        <p className="text-center tracking-wider">
          Programming Languages for Approachable and Inclusive Tools
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
              We invent usable programming tools to help teams with little or no 
              formal computing education&#8212;social scientists, journalists, lawyers, 
              scientists, advocates for marginalized groups, and other domain experts. 
              (Working for social good and struggling to write code or process data? Get in touch!)
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
      <section className="stack stack-xs p-4">
        <Heading level="h2">Projects</Heading>
        <div className="grid grid-cols-12 gap-y-20 md:gap-12">
          {orderBy(PROJECTS, (p) => p.order, ["desc"]).map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
      </section>
      <section className="stack stack-lg p-4">
        <Heading level="h2">People</Heading>
        <div className="stack stack-sm">
          <div className="grid grid-cols-12 gap-5">
            {currentLabMembers.map((person) => {
              return <LabMember key={person.id} {...person} />;
            })}
          </div>
        </div>
        <div className="stack stack-sm">
          <Heading level="h3">Alums</Heading>
          <div className="grid grid-cols-12 gap-5">
            {alumni.map((person) => {
              return <LabAlum key={person.id} {...person} />;
            })}
          </div>
        </div>
      </section>
      <section className="stack stack-md p-4">
        <Heading level="h2">Collaborations Outside Computing</Heading>
        <div className="stack stack-sm">
          <div>
              Our work in PLAIT Lab is only possible because of close collaborations with our partners from outside of computing.  This list will be incomplete, but we'd especially like to thank (in alphabetical order):
              <ul>
                <li><a href="https://www.david-anthoff.com" target="_blank">David Anthoff</a>'s Energy and Resources Lab, and especially <a href="https://www.lisarennels.com" target="_blank">Lisa Rennels</a>;</li>
                <li>the <a href="https://www.czbiohub.org/sf/" target="_blank">Chan Zuckerberg Biohub</a>;</li>
                <li>Computational Research for Equity in Legal Systems (<a href="https://crels.berkeley.edu" target="_blank">CRELS</a>);</li>
                <li>the <a href="https://grist.org">Grist</a> climate reporting newsroom;</li>
                <li><a href="https://soc.washington.edu/people/kyle-crowder" target="_blank">Kyle Crowder</a> and the Crowder Sociology lab and especially <a href="https://hesscl.com" target="_blank">Chris Hess</a> and <a href="https://www.ian-kennedy.com" target="_blank">Ian Kennedy</a>;</li>
                <li><a href="https://socialwelfare.berkeley.edu/people/erin-michelle-turner-kerrison" target="_blank">Erin Kerrison</a> and the Kerrison Lab in Social Welfare;</li>
                <li><a href="https://www.kqed.org" target="_blank">KQED</a> and especially <a href="https://www.kqed.org/author/lisapickoffwhite-2" target="_blank">Lisa Pickoff-White</a>;</li>
                <li>the National Association of Criminal Defense Lawyers and especially the <a href="https://www.nacdl.org/Landing/FullDisclosureProject" target="_blank">Full Disclosure Project</a>;</li>
                <li>James Nuñez and the <a href="https://www.nunezlab.org" target="_blank">Nuñez Lab</a> in Molecular and Cell Biology;</li>
                <li>Mercedes Paredes and the UCSF <a href="https://paredeslab.ucsf.edu" target="_blank">Paredes Lab</a> on Neurodevelopment and Disease;</li>
                <li><a href="https://journalism.stanford.edu/people/cheryl-phillips" target="_blank">Cheryl Phillips</a> and <a href="https://biglocalnews.org/">Big Local News</a>; </li>
                <li>the <a href="https://www.urbandisplacement.org" target="_blank">Urban Displacement Project</a> and especially <a href="https://www.urbandisplacement.org/team/tim-thomas-ph-d/" target="_blank">Tim Thomas</a></li>
              </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
