"use client";

import data from "@/data/packages.json";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCartShopping, FaClockRotateLeft } from "react-icons/fa6";
import owner from "@/data/owner.json";
import { RefObject } from "react";
import { motion } from "motion/react";
import { delay } from "motion";

export default function PackagesSection({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) {
  const { whatsapp_number } = owner[0];

  return (
    <div
      className="wrapper mb-30 pt-12! scroll-mt-8 sm:scroll-mt-16!"
      ref={reference}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Packages</h2>
        <p className="mt-3 txt">Choose the plan that best fits your needs.</p>
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-4 mb-8 rounded-lg border border-green-200 bg-green-50 px-5 py-3 text-center text-sm text-green-800">
          🎬 All internet packages include free access to{" "}
          <strong>
            <a
              href="http://172.16.50.4/"
              target="_blank"
              className="hover:underline duration-150"
            >
              DhakaFlix/SamOnline
            </a>
          </strong>{" "}
          for fast local streaming and downloads.
        </div>
      </div>
      <motion.div className="flex flex-wrap justify-center gap-6">
        {data.map(
          ({ id, name, description, price, offerPrice, speed, duration }) => {
            const message = encodeURIComponent(
              `Hello! I'd like to order the following package:
- Package: ${name}
- Speed: ${speed}
- Price: ${offerPrice} Tk
- Duration: ${duration}
            `,
            );

            return (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                whileHover={{
                  scale: 1.01,
                  y: -5,
                  transition: {
                    duration: 0.1,
                  },
                }}
                transition={{
                  duration: 0.3,
                }}
                className="card-border p-7 w-66 flex flex-col hover:shadow-lg"
                key={id}
              >
                <h2 className="text-3xl font-mono line-clamp-2 min-h-18">
                  {name}
                </h2>
                <p className="txt text-[1rem]! mt-2 mb-4">{description}</p>
                <h2 className=" text-xl flex items-center gap-2 mt-auto">
                  <BsLightningChargeFill className="inline text-base" /> {speed}
                </h2>
                <h2 className=" text-xl flex items-center gap-2">
                  <FaClockRotateLeft className="inline text-base" />
                  {duration}
                </h2>
                <div className="mt-3 flex gap-2 items-end">
                  <h2 className="font-semibold text-xl">{offerPrice}tk</h2>
                  <p className="line-through txt mb-0.5">{price}tk</p>
                </div>
                <a
                  href={`https://wa.me/${whatsapp_number}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary rounded-md! h-11! w-full! text-[14px] mt-4 flex justify-center items-center gap-2"
                >
                  Buy Now <FaCartShopping className="text-base" />
                </a>
              </motion.div>
            );
          },
        )}
      </motion.div>
    </div>
  );
}
