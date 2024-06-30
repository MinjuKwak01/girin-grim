import NoticeBoxField from "../ui/NoticeBoxField";

export default function BanNoticeContent() {
  return <NoticeBoxField noticeTitle="금지 목록" noticeContents={banList} />;
}
