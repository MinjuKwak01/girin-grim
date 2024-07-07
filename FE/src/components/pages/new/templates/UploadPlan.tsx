"use client";
import { useState } from "react";
import InputField from "../organisms/InputField";
import Title from "../ui/Title";

type FundingGoal = {
  goalMoney: string;
  startTime: string;
  endTime: string;
  estimatedStartTime: string;
};

const defaultGola: FundingGoal = {
  goalMoney: "",
  startTime: "",
  endTime: "",
  estimatedStartTime: "",
};

const UploadPlan = () => {
  const [fundingGoal, setFundingGoal] = useState(defaultGola);
  const { goalMoney, endTime, estimatedStartTime, startTime } = fundingGoal;

  const changeGoalMoney = (input: string) => {
    setFundingGoal({ ...fundingGoal, goalMoney: input });
  };

  const amountAfterFees = +goalMoney >= 100 ? +goalMoney * 0.9 : 0;
  const amountAfterFeesString =
    "* 수수료 제외 금액 : " + amountAfterFees.toLocaleString() + "원";
  return (
    <div>
      <Title headerTitle="옵션 설정" />
      <div className="pl-8 flex">
        <InputField
          type="number"
          headerText="목표 금액"
          contentText="펀딩 목표 금액을 입력해주세요. (기부형은 100크레파스(원)부터 가능합니다.)"
          changehandler={changeGoalMoney}
          state={goalMoney + ""}
          layout="flex w-full gap-5"
          notice={amountAfterFeesString}
        />
      </div>
    </div>
  );
};

export default UploadPlan;
