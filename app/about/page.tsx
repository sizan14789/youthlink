import Link from "next/link";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { Metadata } from "next";
import office from "@/data/office.json";
import aboutData from "@/data/about.json";

export const metadata: Metadata = {
  title: "About",
  description: "About page for YouthLink Network",
};

export default function About() {
  const { office_hour, location, mail, hotline } = office[0];

  const { hero, whoWeAre, whyChooseUs, missionVision, commitment } = aboutData;

  return (
    <section className="wrapper px-4 py-16 mt-8 mb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight flex gap-2 items-center justify-center">
          <MdOutlineRoundaboutRight /> About Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {hero.desc}
        </p>
      </div>

      <div className="space-y-10 text-gray-700 leading-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p>{whoWeAre.para_1}</p>
          <p className="mt-4">{whoWeAre.para_2}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {missionVision.map(({ id, title, desc }) => {
            return (
              <div
                className="rounded-xl border p-6 shadow-sm dim-bg-effect"
                key={id}
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ id, title, desc }) => {
              return (
                <div className="rounded-lg border p-5 dim-bg-effect" key={id}>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 border p-8 dim-bg-effect">
          <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
          <p>{commitment.desc}</p>
        </div>
      </div>
      <div className="mt-12 rounded-xl border bg-gray-50 p-8">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-3">
            <FaClock className="text-lg" />
            <span>
              <strong>Office Hours:</strong> {office_hour}
            </span>
          </p>

          <a
            href="https://maps.app.goo.gl/ZdnUVzFmb1nSjBBg9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:underline"
          >
            <FaLocationArrow className="text-lg" />
            <span>
              <strong>Location:</strong> {location}
            </span>
          </a>

          <a
            href={`mailto:${mail}`}
            className="flex items-center gap-3 hover:underline"
          >
            <IoMdMail className="text-lg" />
            <span>
              <strong>Email:</strong> {mail}
            </span>
          </a>

          <a
            href={`tel:${hotline}`}
            className="flex items-center gap-3 hover:underline"
          >
            <IoMdCall className="text-lg" />
            <span>
              <strong>Hotline:</strong> {hotline}
            </span>
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="button-secondary rounded-md! h-14! w-40! flex items-center justify-center gap-2"
          >
            <FaArrowLeftLong />
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
