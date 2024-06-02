import { selector } from "recoil";
import {
  banNoticeAtom,
  fundingCategoryAtom,
  fundingDetailAtom,
  fundingTitleAtom,
  fundintOptionIsPickupAtom,
  fundintOptionItemsAtom,
  fundintOptionNameAtom,
  fundintOptionPriceAtom,
  fundintOptionQuantityAtom,
} from "./UploadAtoms";
import { FundingInfo, FundingOptions } from "@/Model/Funding";

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

export const FundingOptionState = selector<FundingOptions>({
  key: "FundingOptionStateSelector",
  get: ({ get }) => {
    const name = get(fundintOptionNameAtom);
    const price = get(fundintOptionPriceAtom);
    const quantity = get(fundintOptionQuantityAtom);
    const isPickup = get(fundintOptionIsPickupAtom);
    const items = get(fundintOptionItemsAtom);

    return {
      name,
      price,
      quantity,
      isPickup,
      items,
    };
  },
  set: ({ set }, newValue) => {
    const { isPickup, items, name, price, quantity } =
      newValue as FundingOptions;

    set(fundintOptionNameAtom, name);
    set(fundintOptionPriceAtom, price);
    set(fundintOptionQuantityAtom, quantity);
    set(fundintOptionIsPickupAtom, isPickup);
    set(fundintOptionItemsAtom, items);
  },
});
