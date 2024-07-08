import { cn } from "@/utils/cn";
import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText?: string;
  contentText: string;
  changehandler: (input: string) => void;
  state: string;
  layout?: string;
  type?: "text" | "number";
  children?: React.ReactNode;
  disabled?: boolean;
  notice?: string;
};

export default function InputField({
  headerText,
  contentText,
  changehandler,
  state,
  layout,
  disabled,
  type = "text",
  notice,
}: Readonly<Props>) {
  layout = layout || "";
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
          onChange={(e) => changehandler(e.target.value)}
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
