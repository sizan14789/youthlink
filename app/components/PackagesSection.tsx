import data from "@/data/packages.json";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCartShopping, FaClockRotateLeft } from "react-icons/fa6";
import owner from "@/data/owner.json";
import { RefObject } from "react";

export default function PackagesSection({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) {
  const { whatsapp_number } = owner[0];

  return (
    <div className="wrapper mb-30">
      <div className="text-center mb-8" ref={reference}>
        <h2 className="text-4xl font-bold">Our Packages</h2>
        <p className="mt-3 txt">Choose the plan that best fits your needs.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map(
          ({ id, name, description, price, offerPrice, speed, duration }) => {
            const message = encodeURIComponent(
              `Hello! I'd like to order the following package: \n
            - Package: ${name} \n
            - Speed: ${speed} \n
            - Price: ${offerPrice} Tk \n
            - Duration: ${duration} \n
            `,
            );

            return (
              <div
                className="card-border p-7 w-66 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
