import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from '@builder.io/qwik-city';
import Header from "./component/Header/Header";
import Footer from "./Footer";
import FooterNew from "~/routes/(dev)/kunai/FooterNew";

export default component$(() => {
  const loc = useLocation();
  const isCurrentURLContactUs = loc.url.href.includes('contact-us')

  return (
    <>
      <Header />
      <div class="mx-auto">
        <Slot />
      </div>
      {!isCurrentURLContactUs && <FooterNew />}
    </>
  );
});
