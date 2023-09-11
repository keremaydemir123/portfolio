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
    <ul className="z-10 not-prose !mx-0 !px-0 !list-none lg:hidden flex gap-1.5 justify-start items-center w-[calc(100%+0.5rem)] uppercase sticky -top-8 left-0 right-0 bg-base-100 -translate-x-1">
      {navLinks.map((link, index) => {
        if (link.name === "Home")
          return (
            <li
              onClick={() => setSelected(link.name.toLowerCase())}
              className={`btnx !px-2 ${selected === link.path ? "active" : ""}`}
              key={index}
            >
              <Link href={link.path}>
                <HomeIcon />
              </Link>
            </li>
          );
        return (
          <Link
            href={link.path}
            key={index}
            className="sm:text-sm text-sm w-max"
          >
            <li
              onClick={() => setSelected(link.name.toLowerCase())}
              className={`btnx !px-2 ${selected === link.path ? "active" : ""}`}
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
