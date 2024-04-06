"use client";
import NextBtn from "../organisms/NextBtn";
import PrevBtn from "../organisms/PrevBtn";

type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
};

export default function NavigationButtons({ isFirstPage, isLastPage }: Props) {
  return (
    <div className="flex flex-col gap-5 mt-14 max-w-72 mx-auto">
      {!isLastPage && <NextBtn />}
      {!isFirstPage && <PrevBtn />}
    </div>
  );
}
