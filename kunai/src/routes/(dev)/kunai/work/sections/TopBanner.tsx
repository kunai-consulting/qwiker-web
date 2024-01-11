import {component$} from "@builder.io/qwik";
import WorkBanner from '~/routes/(public)/img/work/work-banner.jpg?jsx'
import WorkBannerMobile from '~/routes/(public)/img/work/work-banner-mobile.jpg?jsx'

export default component$(() => {
  return (
    <div class='bg-black flex flex-col relative md:bg-none md:flex-row'>
      <div
        class='p-[30px] text-white flex flex-col my-0 mx-auto max-w-7xl relative w-full z-[100] md:py-[50px] md:pr-0 md:pl-[40px]'>
        <div class='!flex !w-full md:!w-1/2 !flex-col !gap-6'>
          <div class='!flex !flex-col !gap-2'>
            <div class='text-lg tracking-[.396px] font-bold leading-7 md:text-[22px] md:tracking-[.484px]'>
              “They will design, build, and deploy your product for the same amount of time and money that {' '}
              <span class='bg-white inline-block h-4 relative w-14'/>
              * will charge you to build a PowerPoint deck.”
            </div>
            <div class='w-1/2 border border-[#FF0000] md:w-[30%]'/>
            <div class='text-sm leading-normal !font-bold'>
              - EVP at Top Three US Bank
            </div>
            <div class='!italic !leading-normal text-xs -tracking-[.5px] font-normal'>
              *Legacy consultancy name redacted
            </div>
          </div>
          <div class='!leading-normal font-normal -tracking-[.5px] text-sm'>
            Kunai was born out of the frustration our founders faced sitting on the other side of the table. Our leaders
            were frustrated with consulting contracts designed to create dependency and reward mediocrity.
            <br/><br/>
            <b>So they built a different kind of consultancy,{' '}</b>
            with a flexible engagement models, deep functional experience, and a passionate team that will out-hustle
            your current consultancy.
          </div>
        </div>
      </div>
      <div class='relative h-full w-full overflow-hidden md:absolute flex items-center justify-center'>
        <WorkBanner class='hidden md:block max-w-none md:h-full md:w-auto lg:w-full lg:h-auto'/>
        <WorkBannerMobile class='block md:hidden'/>
      </div>
    </div>
  )
});