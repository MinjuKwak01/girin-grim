import { FundingType } from "@/Model/Funding";
import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
  value: string;
  setValue: (value: FundingType) => void;
};

const options = [
  {
    value: "DONATE",
    text: "기부형",
  },
  {
    value: "GIFT",
    text: "선물형",
  },
];

export default function OptionsField({
  headerText,
  setValue,
  value,
}: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10">
      <FieldHeader headerText={headerText} />
      <div>
        <select
          className="text-xl pl-8 pr-20 py-3  rounded-xl border-2 border-neutral-400 outline-none text-color9f9"
          onChange={(e) => setValue(e.target.value as FundingType)}
          value={value}
        >
          {options.map(({ text, value }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
        <span className="block">
          : 서포터가 특정 옵션을 통해 후원할 수 있습니다.
        </span>
      </div>
    </div>
  );
}
