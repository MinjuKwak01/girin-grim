import { cn } from "@/utils/cn";

type Props = {
  title: string;
  grey?: boolean;
};

export default function PageTitle({ title, grey }: Props) {
  return (
    <div
      className={cn(
        "flex items-centertext-3xl font-bold mt-11 text-color121 ",
        {
          "text-color999": grey,
        }
      )}
    >
      <h1 className="shrink-0 mr-[2.375rem]">{title}</h1>
      <hr className="w-full bg-colorede h-[1.5px] border-none" />
    </div>
  );
}
