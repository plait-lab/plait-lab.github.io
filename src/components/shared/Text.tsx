import * as React from "react";
import cs from "classnames";

interface Props {
  className?: string;
}

const Text: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <p className={cs("text-sm tracking-wider", className)}>{children}</p>;
};

export default Text;
