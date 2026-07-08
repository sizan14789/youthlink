"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { contacts } from "@/data/footer.json";
import { motion } from "motion/react";
import { fadeRightToLeft, fadeUp } from "@/lib/animation";

export default function FooterContacts() {
  const MotionLink = motion.create(Link);

  const ContactIconMap = {
    hotline: IoMdCall,
    email: IoMdMail,
    whatsapp: RiWhatsappFill,
    location: FaLocationArrow,
  };

  const contactContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const contactCard = {
    ...fadeRightToLeft,
  };

  const contactHeader = {
    ...fadeUp,
  };

  return (
    <motion.div
      variants={contactContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        amount: 0.5,
        once: true,
      }}
      className="flex flex-1 flex-col"
    >
      <motion.h2 variants={contactCard} className="text-2xl mb-2 font-mono">
        Contact
      </motion.h2>
      {contacts?.map(({ id, url, key, value, type }) => {
        const CurIcon = ContactIconMap[type as keyof typeof ContactIconMap];

        return (
          <motion.a
            variants={contactCard}
            key={id}
            href={url ? url : ""}
            target="_blank"
            className="txt flex items-center gap-2 hover:underline group"
          >
            <CurIcon className="group-hover:text-blue-700 hover:duration-150" />
            {key}: {value}
          </motion.a>
        );
      })}

      <MotionLink
        variants={fadeUp}
        href="/terms"
        className="mt-8 txt underline hover:text-blue-700 hover:font-semibold hover:duration-200 inline-block"
      >
        Terms and Conditions
      </MotionLink>
    </motion.div>
  );
}
