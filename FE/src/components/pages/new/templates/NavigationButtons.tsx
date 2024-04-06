"use client";
import NextBtn from "../organisms/NextBtn";
import PrevBtn from "../organisms/PrevBtn";

export default function NavigationButtons() {
  return (
    <div className="flex flex-col gap-5 mt-14 max-w-72 mx-auto">
      <NextBtn />
      <PrevBtn />
    </div>
  );
}
