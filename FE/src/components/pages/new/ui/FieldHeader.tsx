type Props = {
  headerText: string;
};

export default function FieldHeader({ headerText }: Readonly<Props>) {
  return (
    <h3 className="text-neutral-900 text-2xl text-center mt-2">{headerText}</h3>
  );
}
