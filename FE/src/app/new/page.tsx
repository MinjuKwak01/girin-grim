import { UploadParams } from "@/Model/Upload";
import PageTitle from "@/components/common/PageTitle";
import BanNotice from "@/components/pages/new/templates/BanNotice";
import NavigationButtons from "@/components/pages/new/templates/NavigationButtons";
import UploadFundingInfo from "@/components/pages/new/templates/UploadFundingInfo";
import UploadOption from "@/components/pages/new/templates/UploadOption";
import NewPageNavbar from "@/components/pages/new/templates/UploadPageNavbar";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { page: UploadParams };
};
export default function page({ searchParams: { page } }: Props) {
  if (!page) redirect("/new?page=info");

  const isFirstPage = page === "info";
  const isLastPage = page === "creator";

  return (
    <section>
      <PageTitle title="펀딩 프로젝트 작성" grey />
      <NewPageNavbar currentPath={page} />
      {page === "info" && (
        <>
          <BanNotice />
          <UploadFundingInfo />
        </>
      )}
      {page == "option" && <UploadOption />}

      <NavigationButtons
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        page={page}
      />
    </section>
  );
}
