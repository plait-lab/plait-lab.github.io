import { orderBy, partition } from "lodash-es";

import Publication from "@/components/publications/Publication";
import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import { PUBLICATIONS, PublicationKind } from "@/content/publications";

const Publications = () => {
  const [publications, workshopPublications] = partition(
    orderBy(PUBLICATIONS, (d) => d.date.getTime(), ["desc"]),
    (p) => p.kind !== PublicationKind.Workshop
  );

  return (
    <main className="stack stack-sm py-8">
      <section className="stack stack-lg p-4">
        <Heading level="h2">Conference and Journal Publications</Heading>
        <ul className="stack stack-xl">
          {publications.map((publication) => (
            <Publication key={publication.title} {...publication} />
          ))}
        </ul>
        <Heading level="h2">Workshop Publications</Heading>
        <ul className="stack stack-xl">
          {workshopPublications.map((publication) => (
            <Publication key={publication.title} {...publication} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Publications;
