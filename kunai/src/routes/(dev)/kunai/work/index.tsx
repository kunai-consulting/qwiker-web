import {component$} from "@builder.io/qwik";
import TopBanner from "~/routes/(dev)/kunai/work/sections/TopBanner";
import SuccessStories from "~/routes/(dev)/kunai/work/sections/SuccessStories";

export default component$(() => {
  return (
    <>
      <TopBanner/>
      <SuccessStories/>
    </>
  )
});