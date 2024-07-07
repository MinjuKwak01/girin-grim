import { selector } from "recoil";
import {
  banNoticeAtom,
  fundingCategoryAtom,
  fundingDetailAtom,
  fundingOptionPickupInfo,
  FundingOptionsAtom,
  fundingTitleAtom,
  fundintOptionIsPickupAtom,
  fundintOptionItemsAtom,
  fundintOptionNameAtom,
  fundintOptionPriceAtom,
  fundintOptionQuantityAtom,
} from "./UploadAtoms";
import { FundingInfo, FundingOption } from "@/Model/Funding";

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

/**
 * 업로드 페이지의 펀딩 옵션 상태를 관리하는 selector
 * name, price, quantity, isPickup, items를 관리한다. (두 번째 페이지)
 */

const FundingOptionState = selector({
  key: "FundingOptionStateSelector",
  get: ({ get }) => {
    const name = get(fundintOptionNameAtom);
    const price = get(fundintOptionPriceAtom);
    const quantity = get(fundintOptionQuantityAtom);
    const isPickup = get(fundintOptionIsPickupAtom);
    const items = get(fundintOptionItemsAtom);
    const pickupInfo = get(fundingOptionPickupInfo);

    return {
      name,
      price,
      quantity,
      isPickup,
      items,
      pickupInfo,
    };
  },
  set: ({ set }, newValue) => {
    const { isPickup, items, name, price, quantity, pickupInfo } =
      newValue as FundingOption;

    set(fundintOptionNameAtom, name);
    set(fundintOptionPriceAtom, price);
    set(fundintOptionQuantityAtom, quantity);
    set(fundintOptionIsPickupAtom, isPickup);
    set(fundintOptionItemsAtom, items);
    set(fundingOptionPickupInfo, pickupInfo);
  },
});

/**
 * 선택된 펀딩 옵션들의 상태를 관리하는 selector
 * FundingOption의 경우 현장수령 정보에 맞는 pickupInfo를 추가로 관리한다.
 *
 * 이는 서버 요청시 변환과정이 필요하다.
 */
export const FundingOptionsState = selector<FundingOption[]>({
  key: "FundingOptionsStateSelector",
  get: ({ get }) => {
    const options = get(FundingOptionState);
    return [options];
  },
  set: ({ set }, newValue) => {
    set(FundingOptionsAtom, newValue);
  },
});
