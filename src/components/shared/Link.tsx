import NextLink from "next/link";
import * as React from "react";

interface Props {
  href: string;
}

const Link: React.FC<React.PropsWithChildren<Props>> = ({ href, children }) => {
  const isInternal = href.startsWith("/");
  const node = isInternal ? NextLink : "a";
  const className =
    "font-bold text-primary underline decoration-dotted transition-opacity hover:opacity-75";
  const attrs = isInternal
    ? { className }
    : { target: "_blank", rel: "noopener noreferrer", className };

  return React.createElement(node, { href, ...attrs }, children);
};

export default Link;
