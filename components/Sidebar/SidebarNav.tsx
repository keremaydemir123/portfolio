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

  return (
    <ul className="mt-8 flex flex-col items-start w-full uppercase">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`btnx from-left ${selected === link.path ? "active" : ""}`}
          onClick={() => setSelected(link.path)}
        >
          <li className="md:text-base lg:text-lg tracking-wider">
            {link.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default SidebarNav;
