import Link from "next/link";
import { FaFacebook, FaLocationArrow } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col min-w-svw border-t border-gray-300 mt-auto ">
        <div className="wrapper flex flex-col md:flex-row justify-between pt-14! pb-20! mt-auto min-h-40 gap-10 md:gap-20">
          <div className="flex flex-col flex-2">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-mono">
                YouthLink
              </Link>
              <p className="txt mt-2">
                Delivering fast, reliable, and affordable internet to keep you
                connected, entertained, and productive. Experience seamless
                connectivity backed by trusted local support.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Link href="#">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link href="#">
                <FaWhatsapp className="text-[1.6rem]" />
              </Link>
              {/* <Link href="#">
                <BsLinkedin className="text-2xl" />
              </Link> */}
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl mb-2 font-mono">Contact</h2>
            <p className="txt flex items-center gap-2">
              <IoMdCall />
              Hotline: 0199999999
            </p>
            <a
              href="mailto:sizanalt@example.com"
              className="txt flex items-center gap-2 text-black! hover:underline"
            >
              <IoMdMail /> sizanalt@example.com
            </a>
            <p className="txt flex items-center gap-2">
              <RiWhatsappFill />
              Whatsapp: 0199999999
            </p>
            <p className="txt flex items-center gap-2">
              <FaLocationArrow />
              College Gate, Konabari, Gazipur
            </p>

            <Link
              href="terms"
              className="mt-8 txt underline hover:text-blue-700 hover:font-semibold duration-200"
            >
              Terms and Condition
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center my-4 txt">
        © {new Date().getFullYear()} Youth Link Network. All rights reserved.
      </p>
    </>
  );
}
