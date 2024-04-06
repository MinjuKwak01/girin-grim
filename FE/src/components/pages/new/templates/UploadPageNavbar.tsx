import { uploadNavLists } from "@/constants/uploadData";
import { cn } from "@/utils/cn";
import Link from "next/link";

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
