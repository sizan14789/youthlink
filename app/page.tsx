"use client";

import { RefObject, useRef } from "react";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";

export default function Home() {
  const reference = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroSection reference={reference} />
      <PackagesSection reference={reference} />
    </>
  );
}
