"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cs from "classnames";

interface Props {
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const NavLink: React.FC<React.PropsWithChildren<Props>> = ({
  href,
  onClick,
  className,
  children,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cs(
        "text-xl tracking-wider transition-opacity hover:opacity-75 md:text-sm",
        {
          "font-bold text-primary": href === pathname,
        },
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
