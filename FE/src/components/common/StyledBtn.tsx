"use client";

import { cn } from "@/utils/cn";

type Props = {
  text: string;
  handler?: () => void;
  style?: string;
  disable?: boolean;
};

export default function StyledBtn({
  text,
  handler,
  style,
  disable = false,
}: Readonly<Props>) {
  return (
    <button
      disabled={disable}
      className={cn(
        `w-full h-[4.375rem] bg-main text-white font-nanum text-2xl tracking-[1.3px] rounded-[8px] overflow-hidden`,
        {
          [style!]: style,
          "cursor-default": disable,
          "cursor-pointer": !disable,
        }
      )}
      style={{ opacity: disable ? 0.5 : 1 }}
      onClick={() => handler && handler()}
    >
      {text}
    </button>
  );
}
