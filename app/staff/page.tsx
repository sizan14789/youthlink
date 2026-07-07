import { Metadata } from "next";
import StaffPageInside from "./StaffPageInside";

export const metadata: Metadata = {
  title: "Staff",
  description: "Staff page for YouthLink Network",
};

export default function Staff() {
  return (
    <div className="wrapper mt-8 mb-20">
      <StaffPageInside />
    </div>
  );
}
