import {component$} from "@builder.io/qwik";
import AboutBanner from '~/routes/(public)/img/about-us/about-banner.jpg?jsx';

export default component$(() => {
  return (
    <div class='container flex flex-col md:flex-row max-w-7xl gap-5 md:gap-0
    items-center justify-between
    mx-auto my-0 pt-[14px] md:pt-4 px-10 md:px-[90px] pb-10'
    >
      <div class='flex flex-col items-start gap-2.5 md:gap-[30px] w-full md:w-[47%]'>
        <div class='text-[28px] md:text-[44.801px]'>
          We are Kunai
        </div>
        <div class='text-sm md:text-xl whitespace-pre-line'>
          Kunai is a boutique product consultancy that has spent two decades transforming the financial services
          industry.
          <br/><br/>
          We conceive, design, develop, and operate products & services that are changing the world’s relationship with
          money.
        </div>
      </div>
      <div class='relative w-full md:w-1/2 rounded'>
        <AboutBanner/>
      </div>
    </div>
  );
})