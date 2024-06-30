import ModalButtonField from "./ModalButtonField";

const DonateOptions = () => {
  const headerText = "옵션 설정";
  const contentText =
    "기부형은 1000크레파스 단위로 기부가 가능하며 별도의 옵션 설정이 불가능합니다.";
  const style = "text-colorc32";
  const handler = () => {};

  const modalButtonFieldProps = {
    headerText,
    contentText,
    handler,
    style,
  };
  return <ModalButtonField {...modalButtonFieldProps} />;
};

export default DonateOptions;
