import ColoredPoligon from "@/components/common/icons/ColoredPoligon";
import Poligon from "@/components/common/icons/Poligon";
import { uploadNavLists } from "@/constants/uploadData";
import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {
  currentPath: "info" | "option" | "plan" | "content" | "creator";
};

export default function NewPageNavbar({ currentPath }: Props) {
  const currnetIndex = uploadNavLists.findIndex(
    ({ path }) => path === currentPath
  );
  return (
    <nav className="border-t-2 border-t-color999 border-b-4 my-8 py-5">
      <ul className="flex item-center gap-5">
        {uploadNavLists.map(({ title, path }, index) => (
          <li
            key={`${title}-${path}-${index}`}
            className="flex items-center gap-4"
          >
            <Link href={`?page=${path}`}>
              <p
                className={cn("text-xl", {
                  "text-main": currnetIndex >= index,
                })}
              >
                {title}
              </p>
            </Link>
            {index !== uploadNavLists.length - 1 && (
              <>{currnetIndex > index ? <ColoredPoligon /> : <Poligon />}</>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
