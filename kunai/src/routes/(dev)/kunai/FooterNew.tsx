import {component$} from "@builder.io/qwik";
import ContactUs from "~/routes/(dev)/@shared/ContactUs";
import FooterNav from "~/routes/(dev)/kunai/footer-nav/FooterNav";

export default component$(() => {
  return (
    <div class='flex p-0 flex-col md:flex-row w-full'>
      <div class='max-w-none md:max-w-[640px] w-full md:w-1/2 ml-auto !items-center !flex md:py-[56px]'>
        <ContactUs title={'Contact Us'} titleClass={'text-[24px] -tracking-[.5px] mb-6'}/>
      </div>
      <FooterNav/>
    </div>
  );
});