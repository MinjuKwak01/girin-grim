"use client";

import { useRouter } from "next/navigation";
import { UploadParams } from "@/Model/Upload";
import StyledBtn from "@/components/common/StyledBtn";

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
}: Readonly<Props>) {
  const route = useRouter();

  const goNext = () => {
    if (isLastPage) return route.push("/new/complete");
    const nextPageIndex = uploadParams.indexOf(page) + 1;
    route.replace(`/new?page=${uploadParams[nextPageIndex]}`);
  };
  const goPrev = () => {
    if (isFirstPage) return;
    const nextPageIndex = uploadParams.indexOf(page) - 1;
    route.push(`/new?page=${uploadParams[nextPageIndex]}`);
  };

  return (
    <div className="flex flex-col gap-5 my-14 max-w-72 mx-auto">
      {!isLastPage && (
        <StyledBtn text="다음으로" handler={goNext} style="shadow-md" />
      )}
      {!isFirstPage && (
        <StyledBtn
          text="이전으로"
          style="bg-white border border-zinc-400 text-neutral-400 shadow-md"
          handler={goPrev}
        />
      )}
    </div>
  );
}
