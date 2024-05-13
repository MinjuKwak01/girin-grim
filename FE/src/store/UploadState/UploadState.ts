import { selector } from "recoil";
import {
  banNoticeAtom,
  fundingCategoryAtom,
  fundingDetailAtom,
  fundingTitleAtom,
} from "./UploadAtoms";

//export State
export const NoticeState = selector({
  key: "NoticeState",
  get: ({ get }) => {
    const banNotice = get(banNoticeAtom);
    return { banNotice };
  },
  set: ({ set }) => set(banNoticeAtom, true),
});

export const FundingInfoState = selector({
  key: "FundingInfoState",
  get: ({ get }) => {
    const fundingTitle = get(fundingTitleAtom);
    const fundingDetail = get(fundingDetailAtom);
    const fundingCategory = get(fundingCategoryAtom);
    return { fundingTitle, fundingDetail, fundingCategory };
  },
  set: ({ set }) => set(banNoticeAtom, true),
});
