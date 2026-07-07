"use client";

import staffData from "@/data/staff.json";
import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "motion/react";

type staff_data = {
  id: number;
  name: string;
  role: string;
  age: number;
  image_url: string;
  joining_year: number;
};

export default function StaffPageInside() {
  return (
    <>
      <div className="text-center mb-12">
        <motion.h1
          initial={{
            y: 15,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="text-4xl font-bold flex items-center justify-center gap-3"
        >
          <IoMdPerson />
          Meet Our Team
        </motion.h1>

        <motion.p
          initial={{
            y: 15,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.4,
          }}
          className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7"
        >
          Behind every reliable connection is a dedicated team committed to
          delivering excellent service and customer satisfaction. Meet the
          people who work every day to keep YouthLink Network running smoothly.
        </motion.p>
      </div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {staffData.map(
          ({ id, name, age, role, image_url, joining_year }: staff_data) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              key={id}
              className="card-border p-6 flex flex-col duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <figure className="w-40 h-40 mx-auto overflow-hidden rounded-full border-2 border-gray-200">
                <Image
                  src={image_url}
                  alt={`${name} profile`}
                  width={160}
                  height={160}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </figure>

              <div className="mt-5 flex flex-col grow text-center">
                <h2 className="text-2xl font-semibold">{name}</h2>

                <p className="txt font-medium mt-1 line-clamp-2 min-h-12">
                  {role}
                </p>

                <div className="mt-auto pt-4 border-t text-sm text-gray-500 space-y-1">
                  <p>{age} years old</p>
                  <p>Joined YouthLink Network in {joining_year}</p>
                </div>
              </div>
            </motion.div>
          ),
        )}
      </motion.div>

      <div className="mt-14 flex justify-center">
        <motion.button
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 22,
          }}
          viewport={{
            once: true,
            amount: 1,
          }}
        >
          <Link
            href="/"
            className="button-secondary rounded-md! h-14! w-40! flex items-center justify-center gap-2"
          >
            <FaArrowLeftLong />
            Home
          </Link>
        </motion.button>
      </div>
    </>
  );
}
