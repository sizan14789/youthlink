"use client";

import Link from "next/link";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import office from "@/data/office.json";
import aboutData from "@/data/about.json";
import { motion } from "motion/react";

export default function AboutInner() {
  const { map_embed } = office[0];

  const { hero, whoWeAre, whyChooseUs, missionVision, commitment, contact } =
    aboutData;

  const icons = {
    office_hours: FaClock,
    location: FaLocationArrow,
    email: IoMdMail,
    hotline: IoMdCall,
  };

  const contactContainer = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayStagger: 0.2,
      },
    },
  };

  const contactCard = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const MotionLink = motion.create(Link);

  return (
    <>
      <div className="text-center mb-12">
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="text-4xl font-bold tracking-tight flex gap-2 items-center justify-center"
        >
          <MdOutlineRoundaboutRight /> About Us
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          {hero.desc}
        </motion.p>
      </div>

      <div className="space-y-10 text-gray-700 leading-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p>{whoWeAre.para_1}</p>
          <p className="mt-4">{whoWeAre.para_2}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {missionVision.map(({ id, title, desc }) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ amount: 0.5, once: true }}
                className="rounded-xl border p-6 shadow-sm dim-bg-effect"
                key={id}
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p>{desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.5, once: true }}
            className="text-2xl font-semibold mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ id, title, desc }) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{}}
                  viewport={{ amount: 0.5, once: true }}
                  className="rounded-lg border p-5 dim-bg-effect"
                  key={id}
                >
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{}}
          viewport={{
            amount: 0.5,
            once: true,
          }}
          className="rounded-xl bg-gray-50 border p-8 dim-bg-effect"
        >
          <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
          <p>{commitment.desc}</p>
        </motion.div>
      </div>
      <motion.div
        variants={contactContainer}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{ duration: 0.3 }}
        className="mt-12 rounded-xl border bg-gray-50 p-8"
      >
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

        <motion.div className="space-y-4 text-gray-700">
          {contact.map(({ id, url, type, key, value }) => {
            const Icon = icons[type as keyof typeof icons];

            return (
              <motion.a
                variants={contactCard}
                transition={{ duration: 0.3 }}
                href={url ? url : ""}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 hover:underline ${type === "office_hours" ? "pointer-events-none" : ""}`}
                key={id}
              >
                <Icon className="text-lg" />
                <span>
                  <strong>{key}: </strong> {value}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mt-8">
          <MotionLink
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            href="/"
            className="button-secondary rounded-md! h-14! w-40! flex items-center justify-center gap-2"
          >
            <FaArrowLeftLong />
            Home
          </MotionLink>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="mt-12 rounded-xl border bg-gray-50 p-8"
      >
        <h2 className="text-2xl font-semibold mb-6">Location</h2>
        <iframe
          src={map_embed}
          width="100%"
          height="400"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        />
      </motion.div>
    </>
  );
}
