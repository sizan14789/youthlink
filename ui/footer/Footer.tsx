import Link from "next/link";
import { FaFacebook, FaLocationArrow } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import owner from "@/data/owner.json";
import office from "@/data/office.json";

export default function Footer() {
  const { short_desc, location, mail, hotline } = office[0];

  return (
    <>
      <div className="flex flex-col min-w-svw border-t border-gray-300 mt-auto ">
        <div className="wrapper flex flex-col md:flex-row justify-between pt-14! pb-20! mt-auto min-h-40 gap-10 md:gap-20">
          <div className="flex flex-col flex-2">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-mono">
                YouthLink
              </Link>
              <p className="txt mt-2">{short_desc}</p>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href={owner[0].facebook}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                <FaFacebook className="text-2xl" />
              </Link>
              <a
                href={`https://wa.me/${owner[0].whatsapp_number}?text=${encodeURIComponent("Hey there, I would like to talk to someone from YouthLink Network")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-[1.6rem]" />
              </a>
              {/* <Link href="#">
                <BsLinkedin className="text-2xl" />
              </Link> */}
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl mb-2 font-mono">Contact</h2>
            <a
              href={`tel:${hotline}`}
              className="txt flex items-center gap-2 hover:underline"
            >
              <IoMdCall />
              Hotline: {hotline}
            </a>
            <a
              href={`mailto:${mail}`}
              className="txt flex items-center gap-2 hover:underline"
            >
              <IoMdMail />
              {mail}
            </a>
            <a
              href={`https://wa.me/${owner[0].whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="txt flex items-center gap-2 hover:underline"
            >
              <RiWhatsappFill />
              WhatsApp: {owner[0].whatsapp_number}
            </a>
            <p className="txt flex items-center gap-2">
              <FaLocationArrow />
              {location}
            </p>

            <Link
              href="/terms"
              className="mt-8 txt underline hover:text-blue-700 hover:font-semibold duration-200"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-400/50 mt-8 py-4">
          <p className="text-center txt">
            © {new Date().getFullYear()} YouthLink Network. All rights reserved
            | Designed and Developed by{" "}
            <a
              href="https://github.com/sizan14789"
              className="hover:text-blue-700"
              target="_blank"
            >
              Sizan Molla
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
