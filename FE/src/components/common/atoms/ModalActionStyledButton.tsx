"use client";
type Props = {
  buttonText: string;
  onClick: () => void;
};

export default function ModalActionStyledButton({
  onClick,
  buttonText,
}: Readonly<Props>) {
  return (
    <button
      className="py-5 bg-gray-200 rounded-xl border-2 border-neutral-400 text-2xl font-bold"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
