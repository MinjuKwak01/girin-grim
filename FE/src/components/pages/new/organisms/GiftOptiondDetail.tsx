"use client";
import Image from "next/image";
import CheckBox from "../ui/CheckBox";
import InputField from "./InputField";
import { FundingOption } from "@/Model/Funding";
import { useEffect, useState } from "react";

type Props = {
  option: FundingOption & { isSelected: boolean };
  changeIsPickup: (isPickup: boolean) => void;
  changeItems: (items: { name: string }[]) => void;
  changePrice: (price: number) => void;
  changeQuantity: (quantity: number) => void;
  changePickupInfo: (pickupInfo: string) => void;
};

const GiftOptiondDetail = ({
  option,
  changeIsPickup,
  changeItems,
  changePrice,
  changeQuantity,
  changePickupInfo,
}: Props) => {
  const [isNoLimit, setIsNoLimit] = useState(false);

  useEffect(() => {
    if (isNoLimit) {
      changeQuantity(0);
    }
  }, [isNoLimit]);

  const { isSelected } = option;

  const quantityInputStyle = isNoLimit ? "opacity-50" : "";

  return (
    <div className="flex flex-col">
      <div className="flex mt-4">
        <CheckBox
          checkLabelText="현장 수령 상품"
          isNoticeCheck={option.isPickup}
          setIsChecked={changeIsPickup}
          style="text-xl"
          disabled={!isSelected}
        />

        <span className="text-color9f9 text-xl font-normal leading-tight">
          (현장 수령 장소 및 시간을 입력할 수 있습니다)
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 mt-4">
        {option.isPickup && (
          <InputField
            contentText="현장 수령 장소 및 시간을 입력해주세요."
            changehandler={(input) => changePickupInfo(input as string)}
            state={option.pickupInfo}
            layout="gap-6"
          />
        )}
        {option.items.map(({ name }, index) => (
          <InputField
            key={`${index}`}
            contentText="옵션의 구성품의 이름을 입력해주세요."
            headerText="옵션 구성품"
            changehandler={(input) => {
              const newItems = [...option.items];
              newItems[index].name = input + "";
              changeItems(newItems);
            }}
            layout="gap-6"
            state={name}
          />
        ))}
        <Image
          className="cursor-pointer self-center"
          src={"/assets/AddButton.svg"}
          width={43}
          height={43}
          alt="Add option Button"
          onClick={() => {
            changeItems([...option.items, { name: "" }]);
          }}
        />
        <InputField
          contentText=""
          headerText="가격"
          changehandler={(input) => changePrice(input as number)}
          state={option.price + ""}
          type="number"
          layout="gap-[5.5rem] w-[400px] flex"
        />
        <div className="flex items-center gap-8">
          <InputField
            contentText=""
            headerText="최대 수량"
            changehandler={(input) => changeQuantity(input as number)}
            state={option.quantity + ""}
            type="number"
            layout={`gap-10 w-[400px] flex ${quantityInputStyle}`}
            disabled={isNoLimit}
          />
          <CheckBox
            isNoticeCheck={isNoLimit}
            checkLabelText="제한 없음"
            style="inline text-xl"
            setIsChecked={(isCheck) => {
              setIsNoLimit(isCheck);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GiftOptiondDetail;
