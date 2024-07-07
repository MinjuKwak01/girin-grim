import { FundingItem, FundingOption, FundingType } from "@/Model/Funding";
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

export const fundingOptionNameAtom = atom({
  key: "fundingOptionNameAtom",
  default: "",
});

export const fundingOptionPriceAtom = atom({
  key: "fundingOptionPriceAtom",
  default: 0,
});

export const fundingOptionQuantityAtom = atom({
  key: "fundingOptionQuantityAtom",
  default: 0,
});

export const fundingOptionIsPickupAtom = atom({
  key: "fundingOptionIsPickupAtom",
  default: false,
});

export const fundingOptionItemsAtom = atom<Omit<FundingItem, "itemId">[]>({
  key: "fundingOptionItemsAtom",
  default: [],
});

export const fundingOptionPickupInfoAtom = atom({
  key: "fundingOptionPickupInfoAtom",
  default: "",
});

export const FundingOptionsAtom = atom<FundingOption[]>({
  key: "FundingOptionsAtom",
  default: [],
});
