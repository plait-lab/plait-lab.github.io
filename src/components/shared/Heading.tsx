import * as React from "react";
import cs from "classnames";

export interface Props {
  level: "h1" | "h2" | "h3";
}

const Heading: React.FC<React.PropsWithChildren<Props>> = ({
  level,
  children,
}) => {
  const Tag = level;

  return (
    <Tag
      className={cs({
        "text-2xl font-bold md:text-3xl": level === "h1",
        "text-xl font-bold md:text-2xl": level === "h2",
        "text-lg  md:text-xl": level === "h3",
      })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
