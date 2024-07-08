import { selector } from "recoil";
import {
  banNoticeAtom,
  fundingCategoryAtom,
  fundingDetailAtom,
  fundingGoalAtom,
  fundingOptionIsPickupAtom,
  fundingOptionItemsAtom,
  fundingOptionNameAtom,
  fundingOptionPickupInfoAtom,
  fundingOptionPriceAtom,
  fundingOptionQuantityAtom,
  FundingOptionsAtom,
  fundingTitleAtom,
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
  get: ({ get }) => ({
    name: get(fundingOptionNameAtom),
    price: get(fundingOptionPriceAtom),
    quantity: get(fundingOptionQuantityAtom),
    isPickup: get(fundingOptionIsPickupAtom),
    items: get(fundingOptionItemsAtom),
    pickupInfo: get(fundingOptionPickupInfoAtom),
  }),
  set: ({ set }, newValue) => {
    const { name, price, quantity, isPickup, items, pickupInfo } =
      newValue as FundingOption;
    set(fundingOptionNameAtom, name);
    set(fundingOptionPriceAtom, price);
    set(fundingOptionQuantityAtom, quantity);
    set(fundingOptionIsPickupAtom, isPickup);
    set(fundingOptionItemsAtom, items);
    set(fundingOptionPickupInfoAtom, pickupInfo);
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
  get: ({ get }) => get(FundingOptionsAtom),
  set: ({ set }, newValue) => set(FundingOptionsAtom, newValue),
});

export const UploadPlanState = selector({
  key: "UploadPlanStateSelector",
  get: ({ get }) => {
    const fundingGoal = get(fundingGoalAtom);
    return { ...fundingGoal };
  },
  set: ({ set }, newValue) => {
    set(fundingGoalAtom, newValue);
  },
});
