"use client";
import { useEffect, useState } from "react";
import navLinks from "@/constants/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "./icons/HomeIcon";

function MobileNav() {
  const pathname = usePathname();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  return (
    <ul className="z-10 not-prose !mx-0 !px-0 !list-none lg:hidden flex gap-1.5 justify-start items-center w-[calc(100%+0.5rem)] uppercase">
      {navLinks.map((link, index) => {
        if (link.name === "Home")
          return (
            <Link href={link.path} className="sm:text-sm text-sm w-max h-full">
              <li
                onClick={() => setSelected(link.name.toLowerCase())}
                className={`mobile-nav h-full ${
                  selected === link.path ? "active" : ""
                }`}
                key={index}
              >
                <HomeIcon />
              </li>
            </Link>
          );
        return (
          <Link
            href={link.path}
            key={index}
            className="sm:text-sm text-sm w-max h-full"
          >
            <li
              onClick={() => setSelected(link.name.toLowerCase())}
              className={`mobile-nav !px-2 h-full ${
                selected === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default MobileNav;
