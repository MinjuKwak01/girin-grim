import { cn } from "@/utils/cn";
import Link from "next/link";

type UploadNavList = {
  title: string;
  path: "info" | "option" | "plan" | "content" | "creator";
};

const uploadNavLists: UploadNavList[] = [
  {
    title: "펀딩 정보",
    path: "info",
  },
  {
    title: "옵션 설정",
    path: "option",
  },
  {
    title: "펀딩 계획",
    path: "plan",
  },
  {
    title: "내용 작성",
    path: "content",
  },
  {
    title: "크리에이터 정보",
    path: "creator",
  },
];

type Props = {
  currentPath: "info" | "option" | "plan" | "content" | "creator";
};

export default function NewPageNavbar({ currentPath }: Props) {
  return (
    <nav className="border-t border-b-2 mt-2 py-4 ">
      <ul className="flex item-center gap-5">
        {uploadNavLists.map(({ title, path }, index) => (
          <li key={`${title}-${path}-${index}`}>
            <Link href={`?page=${path}`}>
              <p
                className={cn({
                  "text-main": currentPath === path,
                })}
              >
                {title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
