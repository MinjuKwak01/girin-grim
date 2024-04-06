"use client";
import ModalActionStyledButton from "@/components/common/atoms/ModalActionStyledButton";

type Props = {
  headerText: string;
  buttonText: string;
  buttonHandler: () => void;
};

export default function ModalButtonField({
  headerText,
  buttonText,
  buttonHandler,
}: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr]">
      <h3 className="text-neutral-900 text-2xl text-center my-auto">
        {headerText}
      </h3>
      <ModalActionStyledButton
        buttonText={buttonText}
        onClick={() => buttonHandler()}
      />
    </div>
  );
}
