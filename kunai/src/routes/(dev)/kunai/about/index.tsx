import { component$ } from "@builder.io/qwik";
import About from "~/routes/(dev)/kunai/about/sections/About";
import Story from "~/routes/(dev)/kunai/about/sections/Story";

export default component$(() => {
  return (
    <>
      <About
        title={'We are Kunai'}
        subtitle1={'Kunai is a boutique product consultancy that has spent two decades transforming the financial services industry.'}
        subtitle2={'We conceive, design, develop, and operate products & services that are changing the world’s relationship with money.'}
      />
      <Story />
    </>
  );
});
