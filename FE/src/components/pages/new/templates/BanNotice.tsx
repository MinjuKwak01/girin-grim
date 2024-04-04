import BanNoticeCheckBox from "../organisms/BanNoticeCheckBox";
import BanNoticeContent from "../organisms/BanNoticeContent";

export default function BanNotice() {
  return (
    <section className="flex flex-col">
      <BanNoticeContent />
      <BanNoticeCheckBox />
    </section>
  );
}
