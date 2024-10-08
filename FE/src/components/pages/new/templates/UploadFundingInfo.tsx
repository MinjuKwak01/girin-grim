"use client";
import Title from "../ui/Title";
import ModalButtonField from "../organisms/ModalButtonField";
import InputField from "../organisms/InputField";
import TextareaField from "../organisms/TextareaField";
import OptionsField from "../organisms/OptionsField";
import { FundingInfoState } from "@/store/UploadState/UploadStates";
import { useRecoilState } from "recoil";
import { FundingType } from "@/Model/Funding";

export default function UploadFundingInfo() {
  const [fundingInfo, setFundingInfo] = useRecoilState(FundingInfoState);
  const { fundingTitle, fundingDetail, fundingCategory } = fundingInfo;
  return (
    <>
      <Title headerTitle="펀딩 정보" />
      <div className="flex flex-col gap-10 pl-10">
        <ModalButtonField
          headerText="대학 설정"
          contentText="펀딩과 관련된 학교를 설정해주세요"
          handler={() => {}} //TODO: 모달 열기
        />
        <InputField
          headerText="펀딩 제목"
          contentText="제목을 입력해주세요."
          state={fundingTitle}
          changehandler={(input) =>
            setFundingInfo((prev) => ({ ...prev, fundingTitle: input }))
          }
        />
        <TextareaField
          headerText="펀딩 설명"
          contentText="펀딩을 소개하는 설명을 입력해주세요."
          state={fundingDetail}
          changehanler={(input) =>
            setFundingInfo((prev) => ({ ...prev, fundingDetail: input }))
          }
        />
        <ModalButtonField
          headerText="대표 이미지"
          contentText="이미지 업로드"
          handler={() => {}}
        />
        <OptionsField
          headerText="펀딩 종류"
          setValue={(value: FundingType) =>
            setFundingInfo((prev) => ({ ...prev, fundingCategory: value }))
          }
          value={fundingCategory}
        />
      </div>
    </>
  );
}