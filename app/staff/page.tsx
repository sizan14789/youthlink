import staffData from "@/data/staff.json";
import Image from "next/image";

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
        <h2 className="text-4xl mb-4 text-center font-mono">Staff</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {staffData.map(
            ({ id, name, age, role, image_url, joining_year }: staff_data) => {
              return (
                <div className="border p-6 w-60 flex flex-col" key={id}>
                  <figure className="flex justify-center items-center h-50 w-auto">
                    <Image
                      src={image_url}
                      height={200}
                      width={200}
                      alt={`${name} dp`}
                      className="object-cover"
                    />
                  </figure>
                  <div className="flex flex-col mt-3 grow">
                    <h2 className="text-2xl font-mono">{name}</h2>
                    <p className=" ">{role}</p>
                    <p className="txt text-[1rem]! mt-auto">{age} years old</p>
                    <p className="txt text-[1rem]! ">
                      Joined us in {joining_year}
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
