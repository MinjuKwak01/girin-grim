"use client";
import ModalButtonField from "../molecules/ModalButtonField";

export default function UploadOption() {
  return (
    <ModalButtonField
      headerText="옵션 설정"
      contentText="기부형은 1000크레파스 단위로 기부가 가능하며 별도의 옵션 설정이 불가능합니다."
      type="button"
      handler={() => {}}
    />
  );
}
