"use client";

import * as React from "react";

import NavLink from "@/components/header/NavLink";
import { NAVIGATION } from "@/content/navigation";

interface Props {
  toggle: () => void;
  visible: boolean;
}

const MobileNav: React.FC<Props> = ({ toggle, visible }) => {
  return (
    <>
      <button
        className="sm:hidden"
        aria-label="Open Mobile Menu"
        onClick={toggle}
      >
        {visible ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>
      {visible ? (
        <>
          <nav className="stack stack-sm absolute top-[62px] right-0 left-0 bottom-0 z-10 flex h-screen flex-col bg-white py-12 px-4 backdrop-blur sm:hidden">
            {NAVIGATION.map((navItem) => (
              <NavLink key={navItem.title} href={navItem.path} onClick={toggle}>
                {navItem.title}
              </NavLink>
            ))}
          </nav>
        </>
      ) : null}
    </>
  );
};

export default MobileNav;
