import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
};

const options = ["수령형", "기부형"];

export default function OptionsField({ headerText }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10">
      <FieldHeader headerText={headerText} />
      <div>
        <select className="text-xl pl-8 pr-20 py-3  rounded-xl border-2 border-neutral-400 outline-none text-color9f9">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <span className="block">
          : 서포터가 특정 옵션을 통해 후원할 수 있습니다.
        </span>
      </div>
    </div>
  );
}
