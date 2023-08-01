"use client";

import * as Tabs from "@radix-ui/react-tabs";

import NewsItem from "@/components/news/NewsItem";
import HoriztonalScrollList from "@/components/shared/HorizontalScrollList";
import type { NewsItem as NewsItemType } from "@/content/news";

interface Props {
  news: Record<string, NewsItemType[]>;
}

const News: React.FC<Props> = ({ news }) => {
  return (
    <Tabs.Root className="stack stack-xs" defaultValue="2023">
      <Tabs.List className="stack-h stack-h-xs">
        {Object.keys(news).map((year) => {
          return (
            <Tabs.Trigger key={year} value={year} className="trigger px-2 py-1">
              {year}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {Object.entries(news).map(([year, items]) => {
        return (
          <Tabs.Content value={year} key={year}>
            <HoriztonalScrollList>
              {items
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((node, i, arr) => {
                  return (
                    <NewsItem
                      key={node.title}
                      {...node}
                      last={i === arr.length - 1}
                    />
                  );
                })}
            </HoriztonalScrollList>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default News;
