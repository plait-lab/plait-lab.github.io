import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import ReadingGroupTable from "@/app/reading-group/reading-group.mdx";

const ReadingGroup = () => {
  return (
    <main className="stack stack-sm py-8">
      <section className="stack stack-md p-4">
        <Heading level="h1">Reading Group</Heading>
        <Text>
          The PLAIT Lab Reading Group is a casual meeting that we have once a
          week, ideally over lunch. We usually either discuss a recently
          published paper or talk about our own works in progress.
        </Text>
        <ReadingGroupTable />
      </section>
    </main>
  );
};

export default ReadingGroup;
