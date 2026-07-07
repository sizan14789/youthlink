"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { nav } from "@/data/header.json";
import { useRef } from "react";

export default function Header() {
  const fullPath = usePathname();
  const path = fullPath.slice(1, fullPath.length);

  const MotionLink = motion.create(Link);

  const navRef = useRef(false);

  const navParent = {
    init: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const navCard = {
    init: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <header className=" flex flex-col border-b items-center justify-center border-gray-300 min-w-svw bg-(--background) h-16 md:h-24">
      <div className="wrapper flex justify-between px-4!">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Link href="/" className="text-2xl md:text-3xl font-mono">
            YouthLink
          </Link>
        </motion.div>
        <motion.div
          variants={navParent}
          initial={navRef.current ? "" : "init"}
          animate="visible"
          onAnimationComplete={() => {
            navRef.current = true;
          }}
          className="flex gap-4 items-center"
        >
          {nav.map(({ id, text, url }) => {
            return (
              <MotionLink
                variants={navCard}
                transition={{
                  duration: 0.3,
                }}
                key={id}
                href={url}
                className={`${path == url ? "text-blue-700" : ""} hover:text-blue-700`}
              >
                {text}
              </MotionLink>
            );
          })}
        </motion.div>
      </div>
    </header>
  );
}
