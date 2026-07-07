import Link from "next/link";
import { RefObject } from "react";
import { motion } from "motion/react";

export default function HeroSection({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) {
  const handleScrollToPackages = () => {
    reference?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const MotionLink = motion.create(Link);

  const titleContainer = {
    init: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleCard = {
    init: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const buttonContainer = {
    init: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.1 * 17 + 0.3,
      },
    },
  };

  const buttonCard = {
    init: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="wrapper flex justify-center h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] pb-20! items-center flex-col">
      <div className="mb-4 md:mb-5 lg:mb-6">
        <motion.h2
          variants={titleContainer}
          initial="init"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl text-center font-mono mb-2 md:mb-3"
        >
          {"YouthLink Network".split("").map((character, index) => {
            return (
              <motion.span
                variants={titleCard}
                transition={{ duration: 0.1 }}
                className="inline-block"
                key={index}
              >
                {character === " " ? "\u00A0" : character}
              </motion.span>
            );
          })}
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1 * 17,
            duration: 0.3,
          }}
          className="text-center font-mono txt md:text-base! lg:text-[18px]!"
        >
          Local ISP located at Konabari, Gazipur
        </motion.p>
      </div>
      <motion.div
        variants={buttonContainer}
        initial="init"
        animate="visible"
        className="flex gap-3 sm:flex-row md:gap-6"
      >
        <motion.button
          variants={buttonCard}
          transition={{ duration: 0.2 }}
          className="button-primary txt h-12! w-36! md:h-14! md:w-42! lg:h-14! lg:w-46!"
          onClick={handleScrollToPackages}
        >
          View Packages
        </motion.button>
        <MotionLink
          href="about"
          variants={buttonCard}
          transition={{ duration: 0.2 }}
        >
          <button className="button-secondary txt h-12! w-36! md:h-14! md:w-42! lg:h-14! lg:w-46!">
            About Us
          </button>
        </MotionLink>
      </motion.div>
    </div>
  );
}
