import {component$} from "@builder.io/qwik";
import FiresideDinner from '~/routes/(public)/img/events/fireside-dinner.jpg?jsx'
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";

export default component$(() => {
  return (
    <>
      <div class='relative flex'>
        <div class='relative w-full z-[100]'>
          <div
            class='!flex !flex-col !ml-auto !mr-auto py-[6.25rem] px-[30px] md:py-20 md:pr-0 md:pl-16 max-w-7xl my-0 mx-auto gap-5 text-white'>
            <h2
              class='font-semibold leading-[1.5] mb-2 -tracking-[.5px] text-2xl md:!w-3/4 md:mb-4 md:-tracking-[1px] md:text-4xl'>
              OUR FLAVOR OF FIRESIDE CHATS
            </h2>
            <div
              class='eading-[1.5] -tracking-[.5px] text-[16px] font-normal w-full md:leading-[1.42] md:-tracking-[1px] md:text-xl md:w-3/5'>
              KUNAI Fintech Firesides are all about bringing exceptional
              people together for an invitation-only dinner series.
              Our CEO, Sandeep Sood, hosts heartfelt, unrecorded interviews
              with remarkable individuals in the world of fintech.
            </div>
          </div>
        </div>
        <div class='!object-cover !absolute !w-full !h-full overflow-hidden'>
          <FiresideDinner class='h-full w-full object-cover'
            style={{objectPosition: '0 30%'}}
          />
        </div>
      </div>
      <PastEvents/>
    </>
  )
});