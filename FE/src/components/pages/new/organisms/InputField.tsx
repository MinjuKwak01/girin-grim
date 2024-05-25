import { cn } from "@/utils/cn";
import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
  contentText: string;
  changehandler: (input: string) => void;
  state: string;
  layout?: string;
};

export default function InputField({
  headerText,
  contentText,
  changehandler,
  state,
  layout,
}: Readonly<Props>) {
  layout = layout || "";
  return (
    <div
      className={cn("grid grid-cols-[1fr_8fr]", {
        [layout]: layout,
      })}
    >
      <FieldHeader headerText={headerText} style="mt-4" />
      <input
        className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none w-full"
        placeholder={contentText}
        onChange={(e) => changehandler(e.target.value)}
        value={state}
      />
    </div>
  );
}
