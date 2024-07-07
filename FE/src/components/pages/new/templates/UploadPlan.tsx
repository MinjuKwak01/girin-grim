"use client";
import InputField from "../organisms/InputField";
import Title from "../ui/Title";

const UploadPlan = () => {
  return (
    <div>
      <Title headerTitle="옵션 설정" />
      <div className="pl-8">
        <InputField
          headerText="목표 금액"
          contentText="펀딩 목표 금액을 입력해주세요. (기부형은 100크레파스(원)부터 가능합니다.)"
          changehandler={() => {}}
          state=""
          layout="flex items-center w-full "
        />
      </div>
    </div>
  );
};

export default UploadPlan;
