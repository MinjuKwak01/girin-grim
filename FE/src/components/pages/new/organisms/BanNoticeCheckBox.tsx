import CheckBox from "../ui/CheckBox";

export default function BanNoticeCheckBox() {
  const checkLabel =
    "위 내용을 숙지했으며 이에 위배되지 않은 품목으로 펀딩을 신청함.";
  return <CheckBox checkLabel={checkLabel} />;
}
