"use client";

import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import owner from "@/data/owner.json";
import office from "@/data/office.json";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeLeftToRight, fadeUp } from "@/lib/animation";

export default function FooterTitleAndSocials() {
  const { short_desc } = office[0];
  const MotionLink = motion.create(Link);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = { ...fadeLeftToRight };
  const socialCard = { ...fadeUp };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="flex flex-col flex-2"
    >
      <div className="mb-6">
        <MotionLink
          variants={card}
          href="/"
          className="text-3xl font-mono inline-block"
        >
          YouthLink
        </MotionLink>
        <motion.p variants={card} className="txt mt-2">
          {short_desc}
        </motion.p>
      </div>
      <div className="flex gap-4 items-center">
        <MotionLink
          variants={socialCard}
          href={owner[0].facebook}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          <FaFacebook className="text-2xl text-blue-700" />
        </MotionLink>
        <motion.a
          variants={socialCard}
          href={`https://wa.me/${owner[0].whatsapp_number}?text=${encodeURIComponent("Hey there, I would like to talk to someone from YouthLink Network")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-[1.6rem] text-green-600" />
        </motion.a>
      </div>
    </motion.div>
  );
}
