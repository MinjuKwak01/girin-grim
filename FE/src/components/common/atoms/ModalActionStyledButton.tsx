"use client";

import { cn } from "@/utils/cn";

type Props = {
  style?: string;
  buttonText: string;
  onClick: () => void;
};

export default function ModalActionStyledButton({
  style,
  onClick,
  buttonText,
}: Readonly<Props>) {
  return (
    <button
      className={cn(
        "py-5 bg-gray-200 rounded-xl border-2 border-neutral-400 text-2xl font-bold underline-offset-4",
        {
          [style!]: style,
        },
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
