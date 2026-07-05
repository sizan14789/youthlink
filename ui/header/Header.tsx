"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const fullPath = usePathname();
  const path = fullPath.slice(1, fullPath.length);

  return (
    <div className=" flex flex-col border-b items-center justify-center border-gray-300 min-w-svw bg-(--background) h-16 md:h-24">
      <div className="wrapper flex justify-between px-4!">
        <Link href="/" className="text-2xl md:text-3xl font-mono">
          YouthLink
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="about"
            className={`${path == "about" ? "text-blue-700" : ""}`}
          >
            About Us
          </Link>
          <Link
            href="staff"
            className={`${path == "staff" ? "text-blue-700" : ""}`}
          >
            Staff
          </Link>
        </div>
      </div>
    </div>
  );
}
