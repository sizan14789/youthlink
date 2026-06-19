import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex flex-col border-b items-center justify-center border-gray-300 min-w-svw bg-(--background) h-24">
      <div className="wrapper flex justify-between px-4!">
        <Link href="/" className="text-3xl font-mono">
          YouthLink
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="about">About Us</Link>
          <Link href="staff">Staff</Link>
        </div>
      </div>
    </div>
  );
}
