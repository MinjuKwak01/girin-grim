import { atom } from "recoil";

type UploadType = "수령형" | "기부형";

//noticeState
export const banNoticeAtom = atom({
  key: "banNoticeAtoms",
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

export const fundingCategoryAtom = atom<UploadType>({
  key: "fundingCategoryAtom",
  default: "수령형",
});
