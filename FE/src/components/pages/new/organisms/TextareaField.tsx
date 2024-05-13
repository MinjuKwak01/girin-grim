import FieldHeader from "../ui/FieldHeader";

type Props = {
  headerText: string;
  contentText: string;
  changehanler: (input: string) => void;
  state: string;
};

export default function TextareaField({
  headerText,
  contentText,
  changehanler,
  state,
}: Readonly<Props>) {
  return (
    <div className="grid grid-cols-[1fr_6fr] mt-10">
      <FieldHeader headerText={headerText} />
      <textarea
        className="text-2xl px-8 py-5 rounded-xl border-2 border-neutral-400 outline-none"
        placeholder={contentText}
        onChange={(e) => changehanler(e.target.value)}
        value={state}
      />
    </div>
  );
}
