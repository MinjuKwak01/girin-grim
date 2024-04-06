"use client";
import StyledBtn from "@/components/common/StyledBtn";

type Props = {
  goPrev: () => void;
};

export default function PrevBtn({ goPrev }: Props) {
  return (
    <StyledBtn
      text="이전으로"
      style="bg-white border border-zinc-400 text-neutral-400 shadow-md"
      handler={goPrev}
    />
  );
}
