import { component$ } from "@builder.io/qwik";
import { Editorial } from "./sections/Editorial";
import { TeamBuilding } from "./sections/TeamBuilding";
import Custom from "./sections/Custom";
import Contact from "./sections/Contact";
import Category from "./sections/Category";
import Hero from "./sections/Hero";
import Spotlight from "./sections/Spotlight";

export default component$(() => {
  return (
    <>
      <Hero />
      <Spotlight />
      <Editorial />
      <TeamBuilding />
      <Custom />
      <Contact />
      <Category />
    </>
  );
});
