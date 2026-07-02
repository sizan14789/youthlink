import Link from "next/link";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { Metadata } from "next";
import office from "@/data/office.json";

export const metadata: Metadata = {
  title: "About",
  description: "About page for YouthLink Network",
};

export default function About() {
  const { office_hour, location, mail, hotline } = office[0];

  return (
    <section className="wrapper px-4 py-16 mt-8 mb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight flex gap-2 items-center justify-center">
          <MdOutlineRoundaboutRight /> About Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Connecting homes, businesses, and communities with reliable,
          high-speed internet and customer service you can depend on.
        </p>
      </div>

      <div className="space-y-10 text-gray-700 leading-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p>
            Youth Link Network is a dedicated Internet Service Provider focused
            on delivering stable, affordable, and high-performance internet
            connectivity. Whether you're attending online classes, working
            remotely, streaming your favorite content, gaming, or managing a
            business, we are committed to keeping you connected with a fast and
            dependable network.
          </p>
          <p className="mt-4">
            Our team continuously works to improve network performance, expand
            coverage, and provide prompt customer support. We believe that
            reliable internet access should be simple, accessible, and backed by
            people who genuinely care about customer satisfaction.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p>
              To provide fast, reliable, and affordable internet services while
              delivering exceptional customer support and building long-term
              trust with every customer we serve.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p>
              To become one of the most trusted internet service providers by
              continuously improving our technology, expanding our coverage, and
              ensuring a seamless online experience for everyone.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-sm">
                Stable and fast internet packages designed for everyday use,
                entertainment, education, and business.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Affordable Packages</h3>
              <p className="text-sm">
                Flexible plans that provide excellent value without compromising
                on quality or reliability.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Reliable Support</h3>
              <p className="text-sm">
                Our support team is committed to resolving issues promptly and
                assisting customers whenever they need help.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Modern Infrastructure</h3>
              <p className="text-sm">
                We continuously invest in network improvements to ensure
                consistent performance and dependable connectivity.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Customer First</h3>
              <p className="text-sm">
                Every decision we make is focused on providing a better
                experience for our customers and community.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Trusted Service</h3>
              <p className="text-sm">
                We are committed to transparency, professionalism, and building
                lasting relationships through dependable service.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 border p-8">
          <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
          <p>
            At Youth Link Network, our goal extends beyond simply providing
            internet access. We aim to create meaningful connections by
            delivering reliable service, responsive support, and continuous
            innovation. As technology evolves, we remain committed to improving
            our network and ensuring our customers enjoy a secure, fast, and
            uninterrupted online experience.
          </p>
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

          <p className="flex items-center gap-3">
            <FaLocationArrow className="text-lg" />
            <span>
              <strong>Location:</strong> {location}
            </span>
          </p>

          <p className="flex items-center gap-3">
            <IoMdMail className="text-lg" />
            <span>
              <strong>Email:</strong> {mail}
            </span>
          </p>

          <p className="flex items-center gap-3">
            <IoMdCall className="text-lg" />
            <span>
              <strong>Hotline:</strong> {hotline}
            </span>
          </p>
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
