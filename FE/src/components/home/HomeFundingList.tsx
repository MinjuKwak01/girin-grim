"use client";
import useFeeds from "@/hooks/useFeeds";
import Grid from "./Grid";
import HomeHeader from "./HomeHeader";
import Univ from "./Univ";

export default function HomeFundingList() {
  const { data, isLoading, error } = useFeeds();
  if (!data || isLoading) return <div>loading...</div>;

  const { favUniversity, funding } = data.response;

  return (
    <section>
      <Univ favUniversity={favUniversity} />
      <HomeHeader />
      <Grid fundings={funding} />
    </section>
  );
}
