import staffData from "@/data/staff.json";
import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import { Metadata } from "next";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staff",
  description: "Staff page for YouthLink Network",
};

type staff_data = {
  id: number;
  name: string;
  role: string;
  age: number;
  image_url: string;
  joining_year: number;
};

export default function Staff() {
  return (
    <div className="wrapper mt-8 mb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <IoMdPerson />
          Meet Our Team
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
          Behind every reliable connection is a dedicated team committed to
          delivering excellent service and customer satisfaction. Meet the
          people who work every day to keep Youth Link Network running smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {staffData.map(
          ({ id, name, age, role, image_url, joining_year }: staff_data) => (
            <div
              key={id}
              className="card-border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

                <p className="txt font-medium mt-1 line-clamp-2 min-h-[3rem]">
                  {role}
                </p>

                <div className="mt-auto pt-4 border-t text-sm text-gray-500 space-y-1">
                  <p>{age} years old</p>
                  <p>Joined Youth Link Network in {joining_year}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/"
          className="button-secondary rounded-md! h-14! w-40! flex items-center justify-center gap-2"
        >
          <FaArrowLeftLong />
          Home
        </Link>
      </div>
    </div>
  );
}
