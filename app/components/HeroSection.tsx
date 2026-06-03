export default function HeroSection() {
  return (
    <div className="wrapper flex justify-center h-100 items-center flex-col gap-6 my-20">
      <h2 className="text-[8vh] text-center font-mono">YouthLink Network</h2>
      <div className="flex gap-6">
        <button className="button-primary">View Packages</button>
        <button className="button-secondary">About Us</button>
      </div>
    </div>
  );
}
