export default function Title({
  headerTitle,
}: Readonly<{ headerTitle: string }>) {
  return <h3 className="font-semibold">[{headerTitle}]</h3>;
}
