"use client";

import * as React from "react";

const HoriztonalScrollList: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const container = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = container.current;

    function handleFadeOnScroll(n: HTMLDivElement) {
      return () => {
        const isAtRightEdge = n.scrollLeft + n.clientWidth >= n.scrollWidth;
        const isAtLeftEdge = n.scrollLeft === 0;

        if (isAtRightEdge) {
          n.classList.remove("fade-edges");
          n.classList.add("fade-edge-l");
        } else if (isAtLeftEdge) {
          n.classList.remove("fade-edges");
          n.classList.add("fade-edge-r");
        } else {
          n.classList.remove("fade-edge-l", "fade-edge-r");
          n.classList.add("fade-edges");
        }
      };
    }

    node?.addEventListener("scroll", handleFadeOnScroll(node));
    return () => {
      node?.removeEventListener("scroll", handleFadeOnScroll(node));
    };
  }, []);

  return (
    <div className="fade-edge-r flex overflow-auto" ref={container}>
      {children}
    </div>
  );
};

export default HoriztonalScrollList;
