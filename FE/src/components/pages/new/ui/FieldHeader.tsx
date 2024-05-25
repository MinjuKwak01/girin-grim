import { cn } from "@/utils/cn";

type Props = {
  headerText: string;
  style?: string;
};

export default function FieldHeader({ headerText, style }: Readonly<Props>) {
  style = style || "";
  return (
    <h3
      className={cn("text-neutral-900 text-2xl shrink-0", {
        [style]: style,
      })}
    >
      {headerText}
    </h3>
  );
}
