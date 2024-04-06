import PageTitle from "@/components/common/PageTitle";
import BanNotice from "@/components/pages/new/templates/BanNotice";
import NavigationButtons from "@/components/pages/new/templates/NavigationButtons";
import UploadFundingInfo from "@/components/pages/new/templates/UploadFundingInfo";
import NewPageNavbar from "@/components/pages/new/templates/UploadPageNavbar";

export default function page({
  searchParams,
}: {
  searchParams: { page: "info" | "option" | "plan" | "content" | "creator" };
}) {
  return (
    <section>
      <PageTitle title="펀딩 프로젝트 작성" grey />
      <NewPageNavbar currentPath={searchParams.page} />
      <BanNotice />
      <UploadFundingInfo />
      <NavigationButtons />
    </section>
  );
}
