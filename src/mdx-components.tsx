import type { MDXComponents } from "mdx/types";

import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import Link from "@/components/shared/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: (props) => <Heading level="h2" {...props} />,
    h3: (props) => <Heading level="h3" {...props} />,
    ol: (props) => <ol {...props} className="ml-4 list-decimal" />,
    li: (props) => <li {...props} className="pl-2 text-sm tracking-wider" />,
    p: (props) => <Text {...props} />,
    tr: (props) => (
      <tr {...props} className="border-b border-dashed border-gray-200" />
    ),
    th: (props) => (
      <th
        {...props}
        className="p-1 text-left text-xs tracking-wider first:w-20 sm:p-2 sm:text-sm"
      />
    ),
    td: (props) => (
      <td
        {...props}
        className="p-1 text-left text-xs tracking-wider first:w-20 sm:p-2 sm:text-sm"
      />
    ),
    a: (props) => <Link href={props.href!} {...props} />,
  };
}
