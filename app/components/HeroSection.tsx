import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="wrapper flex justify-center h-[calc(100svh-6rem)] pb-20! items-center flex-col gap-6">
      <h2 className="text-[8vh] text-center font-mono">YouthLink Network</h2>
      <div className="flex gap-6">
        <button className="button-primary">View Packages</button>
        <Link href="about">
          <button className="button-secondary">About Us</button>
        </Link>
      </div>
    </div>
  );
}
