import Link from "next/link";
import { RefObject } from "react";

export default function HeroSection({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) {
  const handleScrollToPackages = () => {
    reference?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="wrapper flex justify-center h-[calc(100svh-6rem)] pb-20! items-center flex-col gap-6">
      <h2 className="text-[clamp(3rem,6vw,6vw)] text-center font-mono">
        YouthLink Network
      </h2>
      <div className="flex gap-3 sm:gap-6 md:gap-8">
        <button
          className="button-primary h-14! w-42! md:h-16! md:w-52!"
          onClick={handleScrollToPackages}
        >
          View Packages
        </button>
        <Link href="about">
          <button className="button-secondary h-14! w-42! md:h-16! md:w-52!">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
}
