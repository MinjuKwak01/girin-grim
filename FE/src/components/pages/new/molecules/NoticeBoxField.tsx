import { cn } from "@/utils/cn";
import Title from "../atoms/Title";

type Props = {
  noticeTitle: string;
  noticeContents: string[];
};

export default function NoticeBoxField({ noticeTitle, noticeContents }: Props) {
  return (
    <>
      <Title headerTitle={noticeTitle} />
      <div className={cn("border rounded-md mt-2 px-8 py-4")}>
        {noticeContents.map((content, index) => (
          <p key={`${content}-${index}`}>
            {index + 1}. {content}
          </p>
        ))}
      </div>
    </>
  );
}
