import { cn } from "@/utils/cn";
import { useId } from "react";

type Props = {
  checkLabelText: string;
  isNoticeCheck: boolean;
  setIsChecked: (isChecked: boolean) => void;
  style?: string;
};

export default function CheckBox({
  checkLabelText,
  isNoticeCheck,
  setIsChecked,
  style,
}: Readonly<Props>) {
  const id = useId();
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name="scales"
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
        checked={isNoticeCheck}
      />
      <label
        className={cn("ml-2", {
          [style!]: style,
        })}
        htmlFor={id}
      >
        {checkLabelText}
      </label>
    </div>
  );
}
