"use client";
import StyledBtn from "@/components/common/StyledBtn";

type Props = {
  goNext: () => void;
};

export default function NextBtn({ goNext }: Props) {
  return <StyledBtn text="다음으로" handler={goNext} />;
}
