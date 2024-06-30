export default function Title({
  headerTitle,
}: Readonly<{ headerTitle: string }>) {
  return <h3 className="mt-4 font-semibold text-xl">[{headerTitle}]</h3>;
}
