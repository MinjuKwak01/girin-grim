"use client";
import ModalActionStyledButton from "@/components/common/atoms/ModalActionStyledButton";

type Props = {
  type: "button" | "text" | "text-area";
  headerText: string;
  contentText: string;
  handler?: () => void;
};

export default function ModalButtonField({
  type,
  headerText,
  contentText,
  handler,
}: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10">
      <h3 className="text-neutral-900 text-2xl text-center mt-2">
        {headerText}
      </h3>
      {handler && (
        <>
          {type === "button" && (
            <ModalActionStyledButton
              buttonText={contentText}
              onClick={() => handler()}
            />
          )}
        </>
      )}
      {type === "text" && (
        <input
          className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none"
          placeholder={contentText}
        />
      )}
      {type === "text-area" && (
        <textarea
          className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none"
          placeholder={contentText}
        />
      )}
    </div>
  );
}
