import CheckBox from "../ui/CheckBox";
import NoticeBoxField from "../ui/NoticeBoxField";

const banList = [
  "기존 상품· 콘텐츠의 판매 및 홍보",
  "제3자에 후원금 또는 물품 기부",
  "시중에 판매 및 유통되었던 제품·콘텐츠 제공",
  "현금, 주식, 지분, 복권, 사이버머니, 상품권 등 수익성 상품 제공",
  "추첨을 통해서만 제공되는 선물",
  "무기, 군용장비, 라이터 등 위험 품목",
  "이 외 기타 사유로 펀딩 게시가 반려될 수 있습니다.",
  "자세한 문의는 메일로 부탁드립니다.",
];
const checkLabel =
    "위 내용을 숙지했으며 이에 위배되지 않은 품목으로 펀딩을 신청함.";

export default function BanNotice() {
  const noticeTitle = "금지 목록";
  return (
    <section className="flex flex-col">
       <NoticeBoxField noticeTitle={noticeTitle} noticeContents={banList} />
       <CheckBox checkLabel={checkLabel} />
    </section>
  );
}
