import data from "@/data/packages.json";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

export default function PackagesSection() {
  return (
    <div className="wrapper flex flex-wrap justify-center gap-6 my-20  ">
      {data.map(
        ({ id, name, description, price, offerPrice, speed, duration }) => {
          return (
            <div className="flex flex-col card-border p-6 w-66" key={id}>
              <h2 className="text-4xl font-mono h-20">{name}</h2>
              <p className="txt text-[1rem]! mt-2 mb-4">{description}</p>
              <h2 className=" text-xl flex items-center gap-2 mt-auto">
                <BsLightningChargeFill className="inline text-base" /> {speed} -{" "}
                {duration}
              </h2>
              <div className="mt-3 flex gap-2 items-end">
                <h2 className="">{offerPrice}tk</h2>
                <p className="line-through txt">{price}tk</p>
              </div>
              <button className="button-primary rounded-md! h-11! w-36! text-[14px] mt-4 flex justify-center items-center gap-2">
                Buy Now <FaCartShopping className="text-base" />
              </button>
            </div>
          );
        },
      )}
    </div>
  );
}
