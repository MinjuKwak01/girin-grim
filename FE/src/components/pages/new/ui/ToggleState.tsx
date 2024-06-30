import Image from "next/image";

type Props = {
  isToggleOn: boolean;
  switchToggle: (isToggleOn: boolean) => void;
};

const ToggleState = ({ isToggleOn, switchToggle }: Props) => {
  return (
    <>
      {isToggleOn ? (
        <Image
          src="/assets/ToggleOn.svg"
          width={10}
          height={10}
          alt="Toggle on"
          onClick={() => {
            switchToggle(false);
          }}
        />
      ) : (
        <Image
          src="/assets/ToggleOff.svg"
          width={10}
          height={10}
          alt="toggle off"
          onClick={() => {
            switchToggle(true);
          }}
        />
      )}
    </>
  );
};

export default ToggleState;
