"use client";
import Title from "../atoms/Title";
import ModalButtonField from "../molecules/ModalButtonField";

export default function UploadFundingInfo() {
  return (
    <div>
      <Title headerTitle="펀딩 정보" />
      <ModalButtonField
        type="button"
        headerText="대학 설정"
        contentText="펀딩 정보 입력하기"
        handler={() => {}} //TODO: 모달 열기
      />
      <ModalButtonField
        type="text"
        headerText="펀딩 제목"
        contentText="제목을 입력해주세요."
      />
      <ModalButtonField
        type="text-area"
        headerText="펀딩 설명"
        contentText="펀딩을 소개하는 설명을 입력해주세요."
      />
      <ModalButtonField
        type="text-area"
        headerText="펀딩 설명"
        contentText="펀딩을 소개하는 설명을 입력해주세요."
      />
      <ModalButtonField
        type="text-area"
        headerText="펀딩 설명"
        contentText="펀딩을 소개하는 설명을 입력해주세요."
      />
    </div>
  );
}
