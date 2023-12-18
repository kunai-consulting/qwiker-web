import { component$ } from "@builder.io/qwik";
import About from "~/routes/(dev)/kunai/about/sections/About";
import Story from "~/routes/(dev)/kunai/about/sections/Story";

export default component$(() => {
  return (
    <>
      <About />
      <Story />
    </>
  );
});
