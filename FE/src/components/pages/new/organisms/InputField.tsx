import { cn } from "@/utils/cn";
import FieldHeader from "../ui/FieldHeader";
type InputType = "text" | "number";

type Props<T extends InputType> = {
  headerText?: string;
  contentText: string;
  changehandler: (input: T extends "number" ? number : string) => void;
  state: T extends "number" ? number : string;
  layout?: string;
  type?: T;
  children?: React.ReactNode;
  disabled?: boolean;
  notice?: string;
};

export default function InputField<T extends InputType>({
  headerText,
  contentText,
  changehandler,
  state,
  layout,
  disabled,
  type = "text" as T,
  notice,
}: Readonly<Props<T>>) {
  layout = layout || "";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changehandler(e.target.value as any);
  };
  return (
    <div
      className={cn("grid grid-cols-[1fr_8fr] w-full", {
        [layout]: layout,
      })}
    >
      {headerText ? <FieldHeader headerText={headerText} /> : <div />}
      <div className="w-full">
        <input
          className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none w-full"
          placeholder={contentText}
          onChange={onChange}
          value={state}
          type={type}
          disabled={disabled}
        />
        {notice && (
          <div className="bg-colorede py-8 mt-5 rounded-xl pl-6 text-2xl">
            {notice}
          </div>
        )}
      </div>
    </div>
  );
}
