import Image from "next/image";
import CheckBox from "../ui/CheckBox";
import InputField from "./InputField";
import { useState } from "react";

type Option = {
  price: number;
  name: string;
  isPickup: boolean;
  items: { name: string }[];
  quantity: number;
};

const defaultOptions: Option = {
  price: 0,
  name: "",
  isPickup: false,
  items: [{ name: "" }],
  quantity: 0,
};

const GiftOptiondDetail = () => {
  const [option, setOptions] = useState(defaultOptions);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <CheckBox
          checkLabelText="현장 수령 상품"
          isNoticeCheck={false}
          setIsChecked={() => {}}
          style="text-xl"
        />
        <span className="text-color9f9 text-xl font-normal leading-tight">
          (현장 수령 장소 및 시간을 입력할 수 있습니다)
        </span>
      </div>

      <div className="flex flex-col items-start gap-5">
        {/*  */}
        {option.items.map(({ name }, index) => (
          <InputField
            key={`${index}-${name}`}
            contentText="옵션의 구성품의 이름을 입력해주세요."
            headerText="옵션 구성품"
            changehandler={() => {}}
            state={name}
          />
        ))}
        <Image
          className="cursor-pointer self-center"
          src={"/assets/AddButton.svg"}
          width={43}
          height={43}
          alt="Add option Button"
          onClick={() =>
            setOptions((prev) => ({
              ...prev,
              items: [...prev.items, defaultOptions],
            }))
          }
        />
        <InputField
          contentText="옵션의 이름을 입력해주세요."
          headerText="가격"
          changehandler={() => {}}
          state={option.name}
        />
      </div>
    </div>
  );
};

export default GiftOptiondDetail;
