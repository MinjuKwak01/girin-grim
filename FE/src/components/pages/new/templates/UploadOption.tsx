"use client";
import { useRecoilValue } from "recoil";
import { FundingInfoState } from "@/store/UploadState/UploadStates";
import DonateOptions from "../organisms/DonateOptions";
import GiftOptions from "../organisms/GiftOptions";

export default function UploadOption() {
  const { fundingCategory } = useRecoilValue(FundingInfoState);

  return (
    <>
      {fundingCategory === "DONATE" && <DonateOptions />}
      {fundingCategory === "GIFT" && <GiftOptions />}
    </>
  );
}
