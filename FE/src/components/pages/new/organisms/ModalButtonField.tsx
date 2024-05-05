"use client";
import ModalActionStyledButton from "@/components/common/atoms/ModalActionStyledButton";
import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
  contentText: string;
  handler: () => void;
};

export default function ModalButtonField({
  headerText,
  contentText,
  handler,
}: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10">
      <FieldHeader headerText={headerText} />
      <ModalActionStyledButton
        style="text-color9f9 underline underline-offset-4"
        buttonText={contentText}
        onClick={() => handler()}
      />
    </div>
  );
}
