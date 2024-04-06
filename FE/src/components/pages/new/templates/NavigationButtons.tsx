"use client";

import { useRouter } from "next/navigation";
import NextBtn from "../organisms/NextBtn";
import PrevBtn from "../organisms/PrevBtn";
import { UploadParams } from "@/Model/Upload";

const uploadParams = ["info", "option", "plan", "content", "creator"];

type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  page: UploadParams;
};

export default function NavigationButtons({
  isFirstPage,
  isLastPage,
  page,
}: Props) {
  const route = useRouter();

  const goNext = () => {
    if (isLastPage) return route.replace("/new/complete");
    const nextPageIndex = uploadParams.indexOf(page) + 1;
    route.replace(`/new?page=${uploadParams[nextPageIndex]}`);
  };
  const goPrev = () => {
    if (isFirstPage) return;
    const nextPageIndex = uploadParams.indexOf(page) - 1;
    route.replace(`/new?page=${uploadParams[nextPageIndex]}`);
  };

  return (
    <div className="flex flex-col gap-5 my-14 max-w-72 mx-auto">
      {!isLastPage && <NextBtn goNext={() => goNext()} />}
      {!isFirstPage && <PrevBtn goPrev={() => goPrev()} />}
    </div>
  );
}
