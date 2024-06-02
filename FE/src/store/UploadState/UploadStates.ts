import { selector } from "recoil";
import {
  banNoticeAtom,
  fundingCategoryAtom,
  fundingDetailAtom,
  fundingTitleAtom,
} from "./UploadAtoms";
import { FundingInfo } from "@/Model/Funding";

//export State

/**
 * 공지사항 상태를 관리하는 selector
 * banNotice를 관리한다. (첫 페이지)
 */
export const NoticeState = selector({
  key: "NoticeStateSelector",
  get: ({ get }) => {
    const banNotice = get(banNoticeAtom);
    return { banNotice };
  },
  set: ({ set }) => set(banNoticeAtom, (prev) => !prev),
});

/**
 * 펀딩 정보 상태를 관리하는 selector
 * title, detail, category를 관리한다. (첫 페이지)
 */
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
