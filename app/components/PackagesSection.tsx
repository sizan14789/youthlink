import data from "@/data/packages.json";

export default function PackagesSection() {
  return (
    <div className="wrapper flex flex-wrap justify-center gap-6 my-20  ">
      {data.map(
        ({ id, name, description, price, offerPrice, speed, duration }) => {
          return (
            <div className="card-border p-6 w-60" key={id}>
              <h2 className="text-4xl font-mono">{name}</h2>
              <p className="txt text-[1rem]! mt-2">{description}</p>
              <h2 className="mt-4 text-xl">
                {speed} - {duration}
              </h2>
              <div className="mt-3 flex gap-2 items-end">
                <h2 className="">{offerPrice}tk</h2>
                <p className="line-through txt">{price}tk</p>
              </div>
              <button className="button-primary rounded-md! h-10! w-30! text-[14px] mt-4 ">
                Buy Now
              </button>
            </div>
          );
        },
      )}
    </div>
  );
}
