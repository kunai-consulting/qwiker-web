import { component$ } from "@builder.io/qwik";
import Title from "./sections/Title";
import Expertise from "./sections/Expertise";

export default component$(() => {
  return (
    <>
      <Title />
      <Expertise />
    </>
  );
});
