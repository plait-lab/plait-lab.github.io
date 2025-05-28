"use client";

import * as React from "react";
import Link from "next/link";

import MobileNav from "@/components/header/MobileNav";
import NavLink from "@/components/header/NavLink";
import { NAVIGATION } from "@/content/navigation";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="mx-auto flex max-w-screen-md items-center justify-between p-4">
      <Link
        href="/"
        className="text-xl tracking-widest"
        onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
      >
        <span className="font-bold text-primary">PLAIT</span><span className="black">Lab</span>
      </Link>
      <nav className="sm:stack-h sm:stack-h-sm hidden sm:visible sm:flex">
        {NAVIGATION.map(({ title, path }) => {
          return (
            <NavLink key={title} href={path}>
              {title}
            </NavLink>
          );
        })}
      </nav>
      <MobileNav
        toggle={() => {
          setMobileMenuOpen((prevOpen) => !prevOpen);
        }}
        visible={mobileMenuOpen}
      />
    </header>
  );
};

export default Header;
