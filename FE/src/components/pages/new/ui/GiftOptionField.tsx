import { useState } from "react";
import FieldHeader from "./FieldHeader";
import GiftOptiondDetail from "../organisms/GiftOptiondDetail";
import ToggleState from "./ToggleState";
import { FundingOption } from "@/Model/Funding";
import CheckBox from "./CheckBox";
import { cn } from "@/utils/cn";

type Props = {
  option: FundingOption & { isSelected: boolean };
  // setGlobalOptions: () => void;
  changeIsSelected: () => void;
  changeName: (item: string) => void;
  changePrice: (item: number) => void;
  changeIsPickup: (item: boolean) => void;
  changeItems: (
    item: {
      name: string;
    }[],
  ) => void;
  changeQuantity: (item: number) => void;
  changePickupInfo: (item: string) => void;
};

const GiftOptionField = ({
  option,
  changeIsSelected,
  changeIsPickup,
  changeItems,
  changeName,
  changePrice,
  changeQuantity,
  changePickupInfo,
}: Props) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const { isSelected } = option;

  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10 gap-x-8">
      <div className="flex items-center gap-4">
        <CheckBox
          isNoticeCheck={isSelected}
          setIsChecked={(e) => {
            changeIsSelected();
          }}
        />
        <div className="flex items-center gap-7 mr-7">
          <FieldHeader headerText="옵션 이름" />
        </div>
        <ToggleState
          isToggleOn={isToggleOn}
          switchToggle={(state) => setIsToggleOn(state)}
        />
      </div>
      <input
        className={cn(
          "text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none w-full",
          isSelected ? "border-neutral-200" : "bg-colorede cursor-not-allowed",
        )}
        disabled={!isSelected}
        placeholder="옵션의 이름을 입력해주세요."
        value={option.name}
        onChange={(e) => {
          changeName(e.target.value);
        }}
      />
      <div />
      {isToggleOn && (
        <GiftOptiondDetail
          option={option}
          changeIsPickup={changeIsPickup}
          changeItems={changeItems}
          changePrice={changePrice}
          changeQuantity={changeQuantity}
          changePickupInfo={changePickupInfo}
        />
      )}
    </div>
  );
};

export default GiftOptionField;
