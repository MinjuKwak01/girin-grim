import { useState } from "react";
import Image from "next/image";
import FieldHeader from "./FieldHeader";
import GiftOptiondDetail from "../organisms/GiftOptiondDetail";

const GiftOptionField = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  //옵션 이름, [구성품], 가격, 수량

  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10 gap-x-8">
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div className="flex items-center gap-7 mr-7">
          <FieldHeader headerText="옵션 이름" />
        </div>

        {isToggleOn ? (
          <Image
            src="/assets/ToggleOn.svg"
            width={10}
            height={10}
            alt="Toggle on"
            onClick={() => {
              setIsToggleOn(!isToggleOn);
            }}
          />
        ) : (
          <Image
            src="/assets/ToggleOff.svg"
            width={10}
            height={10}
            alt="toggle off"
            onClick={() => {
              setIsToggleOn(!isToggleOn);
            }}
          />
        )}
      </div>
      <input
        className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none w-full"
        placeholder="옵션의 이름을 입력해주세요."
      />
      <div />
      {isToggleOn && <GiftOptiondDetail />}
    </div>
  );
};

export default GiftOptionField;
