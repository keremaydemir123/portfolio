"use client";
import { useEffect, useState } from "react";
import navLinks from "@/constants/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarNav() {
  const pathname = usePathname();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  function handleNavClick() {
    setSelected(pathname);
    scrollTo(0, 0);
  }

  return (
    <ul className="mt-8 mb-4 flex flex-col gap-1 items-start w-full uppercase text-base font-light">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`btnx from-left ${selected === link.path ? "active" : ""}`}
          onClick={handleNavClick}
        >
          <li className="tracking-wider">{link.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default SidebarNav;
