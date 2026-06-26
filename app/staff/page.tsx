import staffData from "@/data/staff.json";
import Image from "next/image";
import { IoMdPerson } from "react-icons/io";

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
    <>
      <div className="wrapper mt-8 mb-20">
        <h2 className="text-4xl mb-4 text-center md:text-start! font-mono flex items-center gap-2">
          <IoMdPerson />
          Staff
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
          {staffData.map(
            ({ id, name, age, role, image_url, joining_year }: staff_data) => {
              return (
                <div className="card-border p-6 pt-4 flex flex-col" key={id}>
                  <figure className="flex justify-center items-center h-50 w-auto overflow-hidden">
                    <Image
                      src={image_url}
                      height={200}
                      width={200}
                      alt={`${name} dp`}
                      loading="eager"
                      className="h-full object-cover object-center"
                    />
                  </figure>
                  <div className="flex flex-col mt-4 grow text-center sm:text-start">
                    <h2 className="text-2xl font-mono">{name}</h2>
                    <p className="mb-2">{role}</p>
                    <p className="txt text-[1rem]! mt-auto">{age} years old</p>
                    <p className="txt text-[1rem]! ">
                      Joined in {joining_year}
                    </p>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </>
  );
}
