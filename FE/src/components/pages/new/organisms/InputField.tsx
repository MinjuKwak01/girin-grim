import { cn } from "@/utils/cn";
import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText?: string;
  contentText: string;
  changehandler: (input: string | number) => void;
  state: string;
  layout?: string;
  type?: "text" | "number";
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function InputField({
  headerText,
  contentText,
  changehandler,
  state,
  layout,
  disabled,
  type = "text",
}: Readonly<Props>) {
  layout = layout || "";
  return (
    <div
      className={cn("grid grid-cols-[1fr_8fr] w-full", {
        [layout]: layout,
      })}
    >
      {headerText ? <FieldHeader headerText={headerText} /> : <div />}
      <div>
        <input
          className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none w-full"
          placeholder={contentText}
          onChange={(e) => changehandler(e.target.value)}
          value={state}
          type={type}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
