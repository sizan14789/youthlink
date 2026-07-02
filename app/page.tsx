"use client";

import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import Subscribe from "./components/Subscribe";

export default function Home() {
  const reference = useRef(null);

  return (
    <>
      <HeroSection reference={reference} />
      <PackagesSection reference={reference} />
      {/* <Subscribe /> */}
    </>
  );
}
