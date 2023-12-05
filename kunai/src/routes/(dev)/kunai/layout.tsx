import { component$, Slot } from "@builder.io/qwik";
import Header from "./Header";
import Footer from "./Footer";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="mx-auto">
        <Slot />
      </div>
      <Footer />
    </>
  );
});
