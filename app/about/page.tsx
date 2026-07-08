import { Metadata } from "next";
import AboutInner from "./AboutInner";

export const metadata: Metadata = {
  title: "About",
  description: "About page for YouthLink Network",
};

export default function About() {
  return (
    <section className="wrapper px-4 py-16 mt-8 mb-20">
      <AboutInner />
    </section>
  );
}
