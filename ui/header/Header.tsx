import Link from "next/link";

export default function Header() {
  return (
    <div className="min-svw flex flex-col border-b border-gray-300">
      <div className="wrapper flex justify-between py-8!">
        <Link href="" className="text-2xl font-mono">
          YouthLink
        </Link>
        <div className="flex gap-4">
          <Link href="about">About Us</Link>
          <Link href="">Contact </Link>
        </div>
      </div>
    </div>
  );
}
