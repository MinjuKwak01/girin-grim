import { selector } from "recoil";
import {
  banNoticeAtom,
  fundingCategoryAtom,
  fundingDetailAtom,
  fundingTitleAtom,
} from "./UploadAtoms";
import { FundingInfo } from "@/Model/Funding";

//export State
export const NoticeState = selector({
  key: "NoticeStateSelector",
  get: ({ get }) => {
    const banNotice = get(banNoticeAtom);
    return { banNotice };
  },
  set: ({ set }) => set(banNoticeAtom, (prev) => !prev),
});

export const FundingInfoState = selector({
  key: "FundingInfoStateSelector",
  get: ({ get }) => {
    const fundingTitle = get(fundingTitleAtom);
    const fundingDetail = get(fundingDetailAtom);
    const fundingCategory = get(fundingCategoryAtom);
    return { fundingTitle, fundingDetail, fundingCategory };
  },
  set: ({ set }, newValue) => {
    const { fundingTitle, fundingDetail, fundingCategory } =
      newValue as FundingInfo;

    set(fundingTitleAtom, fundingTitle);
    set(fundingDetailAtom, fundingDetail);
    set(fundingCategoryAtom, fundingCategory);
  },
});
