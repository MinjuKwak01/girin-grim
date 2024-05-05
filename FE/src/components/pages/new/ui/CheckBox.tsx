import { useId } from "react";

type Props = {
  checkLabel: string;
};

export default function CheckBox({ checkLabel }: Props) {
  const id = useId();
  return (
    <div className="self-end">
      <input type="checkbox" id={id} name="scales" />
      <label className="ml-2" htmlFor={id}>
        {checkLabel}
      </label>
    </div>
  );
}
