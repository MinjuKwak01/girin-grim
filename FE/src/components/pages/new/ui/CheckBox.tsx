import { cn } from "@/utils/cn";
import { useId } from "react";

type Props = {
  checkLabelText?: string;
  isNoticeCheck: boolean;
  setIsChecked: (isChecked: boolean) => void;
  style?: string;
  disabled?: boolean;
};

export default function CheckBox({
  checkLabelText,
  isNoticeCheck,
  setIsChecked,
  style,
  disabled,
}: Readonly<Props>) {
  const id = useId();
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name="scales"
        onChange={(e) => {
          e.stopPropagation();
          setIsChecked(e.target.checked);
        }}
        checked={isNoticeCheck}
        disabled={disabled}
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
