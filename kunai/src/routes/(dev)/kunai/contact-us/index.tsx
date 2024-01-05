import {component$} from "@builder.io/qwik";
import ContactUs from "~/routes/(dev)/@shared/ContactUs";
import RightSide from "~/routes/(dev)/kunai/contact-us/sections/RightSide";

export default component$(() => {
  return (
    <div class='ml-auto mr-auto w-full'>
      <div class='flex flex-nowrap md:h-[calc(100vh-76px)] flex-col md:flex-row'>
        <div class='!items-center !flex-auto !flex w-full md:w-1/2 max-w-full'>
          <ContactUs title={'Let\'s talk about your next big project.'} titleClass={'pt-3 pb-4 mb-5 font-normal text-[32pt] leading-[64px] -tracking-[.5px]'}/>
        </div>
        <RightSide/>
      </div>
    </div>
  );
});
