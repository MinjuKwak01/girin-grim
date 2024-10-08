"use client";
import ModalActionStyledButton from "@/components/common/atoms/ModalActionStyledButton";
import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
  contentText: string;
  handler: () => void;
  style?: string;
};

export default function ModalButtonField({
  headerText,
  contentText,
  handler,
  style,
}: Readonly<Props>) {
  const buttonStyle = "text-color9f9 underline underline-offset-4 " + style;

  return (
    <div className="grid grid-cols-[1fr_8fr]">
      <FieldHeader headerText={headerText} />
      <ModalActionStyledButton
        style={buttonStyle}
        buttonText={contentText}
        onClick={() => handler()}
      />
    </div>
  );
}