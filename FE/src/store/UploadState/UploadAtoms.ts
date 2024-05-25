import { FundingType } from "@/Model/Funding";
import { atom } from "recoil";

//noticeState
export const banNoticeAtom = atom({
  key: "banNoticeAtom",
  default: false,
});

//uploadState
export const fundingTitleAtom = atom({
  key: "fundingTitleAtom",
  default: "",
});

export const fundingDetailAtom = atom({
  key: "fundingDetailAtom",
  default: "",
});

export const fundingCategoryAtom = atom<FundingType>({
  key: "fundingCategoryAtom",
  default: "GIFT",
});
