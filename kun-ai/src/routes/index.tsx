import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hello World App",
  meta: [
    {
      name: "description",
      content: "Future is coming",
    },
  ],
};
