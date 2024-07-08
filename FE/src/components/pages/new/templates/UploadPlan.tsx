"use client";
import { useEffect, useState } from "react";
import InputField from "../organisms/InputField";
import Title from "../ui/Title";
import DateInput from "../ui/DateInput";
import FieldHeader from "../ui/FieldHeader";

type FundingGoal = {
  goalMoney: string;
  startTime: Date;
  endTime: Date;
  estimatedStartTime: Date;
};

const defaultGola: FundingGoal = {
  goalMoney: "",
  startTime: new Date(),
  endTime: new Date(),
  estimatedStartTime: new Date(),
};

const UploadPlan = () => {
  const [fundingGoal, setFundingGoal] = useState(defaultGola);
  const { goalMoney, endTime, estimatedStartTime, startTime } = fundingGoal;

  const changeGoalMoney = (input: string) => {
    setFundingGoal({ ...fundingGoal, goalMoney: input });
  };
  const changeStartTime = (startTime: Date) => {
    setFundingGoal({ ...fundingGoal, startTime });
  };
  const changeEndTime = (endTime: Date) => {
    setFundingGoal({ ...fundingGoal, endTime });
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
          state={goalMoney + ""}
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
                  setDate={(date) =>
                    setFundingGoal({ ...fundingGoal, estimatedStartTime: date })
                  }
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
