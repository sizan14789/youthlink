import FooterContacts from "./FooterContacts";
import FooterTitleAndSocials from "./FooterTitleAndSocials";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col min-w-svw border-t border-gray-300 mt-auto ">
        <div className="wrapper flex flex-col md:flex-row justify-between pt-14! pb-20! mt-auto min-h-40 gap-10 md:gap-20">
          <FooterTitleAndSocials />
          <FooterContacts />
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
