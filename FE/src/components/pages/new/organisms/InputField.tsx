import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
  contentText: string;
};

export default function InputField({
  headerText,
  contentText,
}: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10">
      <FieldHeader headerText={headerText} />
      <input
        className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none"
        placeholder={contentText}
      />
    </div>
  );
}
