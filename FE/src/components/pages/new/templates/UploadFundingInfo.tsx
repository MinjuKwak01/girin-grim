"use client";
import Title from "../ui/Title";
import ModalButtonField from "../organisms/ModalButtonField";
import InputField from "../organisms/InputField";
import TextareaField from "../organisms/TextareaField";
import OptionsField from "../organisms/OptionsField";

export default function UploadFundingInfo() {
  return (
    <>
      <Title headerTitle="펀딩 정보" />
      <ModalButtonField
        headerText="대학 설정"
        contentText="펀딩과 관련된 학교를 설정해주세요"
        handler={() => {}} //TODO: 모달 열기
      />
      <InputField headerText="펀딩 제목" contentText="제목을 입력해주세요." />
      <TextareaField
        headerText="펀딩 설명"
        contentText="펀딩을 소개하는 설명을 입력해주세요."
      />
      <ModalButtonField
        headerText="대표 이미지"
        contentText="이미지 업로드"
        handler={() => {}}
      />
      <OptionsField headerText="펀딩 종류" />
    </>
  );
}
