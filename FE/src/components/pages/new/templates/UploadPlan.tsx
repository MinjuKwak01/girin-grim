"use client";
import { useEffect, useState } from "react";
import InputField from "../organisms/InputField";
import Title from "../ui/Title";
import DateInput from "../ui/DateInput";
import FieldHeader from "../ui/FieldHeader";
import { useRecoilState } from "recoil";
import { UploadPlanState } from "@/store/UploadState/UploadStates";

type FundingGoal = {
  goalMoney: number;
  startTime: Date;
  endTime: Date;
  estimatedStartTime: Date;
};

const defaultGola: FundingGoal = {
  goalMoney: 0,
  startTime: new Date(),
  endTime: new Date(),
  estimatedStartTime: new Date(),
};

const UploadPlan = () => {
  const [fundingGoal, setFundingGoal] = useRecoilState(UploadPlanState);
  const { goalMoney, endTime, estimatedStartTime, startTime } = fundingGoal;

  const changeGoalMoney = (goalMoney: number) => {
    setFundingGoal({ ...fundingGoal, goalMoney: goalMoney });
  };
  const changeStartTime = (startTime: Date) => {
    if (startTime < new Date()) {
      alert("오늘 이후의 날짜를 선택해주세요.");
      return;
    }

    if (startTime >= endTime)
      setFundingGoal({ ...fundingGoal, startTime, endTime: startTime });
    else setFundingGoal({ ...fundingGoal, startTime });
  };
  const changeEndTime = (endTime: Date) => {
    if (endTime < startTime) {
      alert("시작일보다 빠른 날짜를 선택할 수 없습니다.");
      return;
    }
    if (endTime < new Date()) {
      alert("오늘 이후의 날짜를 선택해주세요.");
      return;
    }
    setFundingGoal({ ...fundingGoal, endTime });
  };
  const changeEstimatedStartTime = (estimatedStartTime: Date) => {
    if (estimatedStartTime < new Date()) {
      alert("오늘 이후의 날짜를 선택해주세요.");
      return;
    }

    if (estimatedStartTime <= endTime) {
      alert("실행일은 종료일 이후여야 합니다.");
      return;
    }

    setFundingGoal({ ...fundingGoal, estimatedStartTime });
  };

  const amountAfterFees = +goalMoney >= 100 ? +goalMoney * 0.9 : 0;
  const amountAfterFeesString =
    "* 수수료 제외 금액 : " + amountAfterFees.toLocaleString() + "원";

  return (
    <>
      <Title headerTitle="옵션 설정" />
      <div className="pl-8">
        <InputField
          type="number"
          headerText="목표 금액"
          contentText="펀딩 목표 금액을 입력해주세요. (기부형은 100크레파스(원)부터 가능합니다.)"
          changehandler={changeGoalMoney}
          state={goalMoney}
          layout="flex w-full gap-5"
          notice={amountAfterFeesString}
        />
        <div className="mt-11">
          <section className="">
            <div className="items-center grid grid-cols-[1fr_11fr]">
              <FieldHeader headerText="펀딩 기간" />
              <div className="flex gap-8 items-center">
                <DateInput
                  labelText="FROM"
                  date={startTime}
                  setDate={changeStartTime}
                />
                ~
                <DateInput
                  labelText="TO"
                  date={endTime}
                  setDate={changeEndTime}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_11fr] items-center mt-11">
              <FieldHeader headerText="실행일" />
              <div className="flex gap-8 items-center">
                <DateInput
                  date={estimatedStartTime}
                  setDate={changeEstimatedStartTime}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UploadPlan;
