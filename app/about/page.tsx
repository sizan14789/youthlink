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
          Proudly serving Konabari, Gazipur with fast, reliable broadband
          internet and responsive local customer support you can count on.
        </p>
      </div>

      <div className="space-y-10 text-gray-700 leading-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p>
            Youth Link Network is a local Internet Service Provider proudly
            serving the Konabari and surrounding Gazipur areas. We believe that
            reliable internet is essential for education, work, entertainment,
            and staying connected with family and friends. Our goal is simple—to
            provide stable, high-speed internet at an affordable price without
            compromising on quality.
          </p>
          <p className="mt-4">
            From home users and students to small businesses and offices, we
            work every day to ensure a smooth online experience. Our local
            support team is always ready to assist, continuously improving our
            network and customer service to meet the growing needs of our
            community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p>
              To deliver fast, dependable, and affordable internet services
              throughout Konabari and nearby communities while providing honest
              pricing, prompt support, and a customer-first experience.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p>
              To become the most trusted local internet service provider in
              Gazipur by continuously expanding our coverage, improving network
              performance, and building lasting relationships with our
              customers.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-sm">
                Reliable fiber internet with stable speeds for streaming,
                gaming, online classes, remote work, and everyday browsing.
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
              <h3 className="font-semibold mb-2">FTP Entertainment Support</h3>
              <p className="text-sm">
                Enjoy access to popular BDIX FTP services including SamOnline
                and DhakaFlix, giving you fast local access to movies, TV
                series, games, software, and more without relying on
                international bandwidth.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Reliable Support</h3>
              <p className="text-sm">
                Our local support team responds quickly to technical issues so
                you can get back online with minimal interruption.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Customer First</h3>
              <p className="text-sm">
                Every customer matters to us. We believe in honest
                communication, dependable service, and long-term relationships
                built on trust.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <h3 className="font-semibold mb-2">Trusted Service</h3>
              <p className="text-sm">
                Our growing customer base reflects our commitment to quality
                service, transparency, and continuous improvement in everything
                we do.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 border p-8">
          <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
          <p>
            At Youth Link Network, we're more than just an internet
            provider—we're your local connectivity partner. Whether you're
            attending online classes, running a business, enjoying your favorite
            movies, or gaming with friends, we're committed to delivering the
            speed, stability, and support you deserve. As our community grows,
            we'll continue investing in better infrastructure and better service
            for every customer.
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
