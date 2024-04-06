"use client";
import Title from "../atoms/Title";
import ModalButtonField from "../molecules/ModalButtonField";

export default function UploadFundingInfo() {
  return (
    <div>
      <Title headerTitle="펀딩 정보" />
      <ModalButtonField
        headerText="대학 설정"
        buttonText="펀딩 정보 입력하기"
        buttonHandler={() => {}}
      />
    </div>
  );
}
