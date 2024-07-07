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

// optionState
export const fundintOptionNameAtom = atom({
  key: "fundintOptionNameAtom",
  default: "",
});

export const fundintOptionPriceAtom = atom({
  key: "fundintOptionPriceAtom",
  default: 0,
});

export const fundintOptionQuantityAtom = atom({
  key: "fundintOptionQuantityAtom",
  default: 0,
});

export const fundintOptionIsPickupAtom = atom({
  key: "fundintOptionIsPickupAtom",
  default: false,
});

export const fundintOptionItemsAtom = atom<Omit<FundingItem, "itemId">[]>({
  key: "fundintOptionItemsAtom",
  default: [],
});

export const fundingOptionPickupInfo = atom({
  key: "fundintOptionIsPickupAtom",
  default: "",
});

export const FundingOptionsAtom = atom<FundingOption[]>({
  key: "FundingOptionsAtom",
  default: [],
});
