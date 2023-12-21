import {component$} from "@builder.io/qwik";
import Clock from '~/routes/(public)/img/clock_icon.svg?jsx';
import Message from '~/routes/(public)/img/message_icon.svg?jsx';

export default component$(() => {
  return (
    <div class='!bg-[#F2F4F8] lg:max-w-[500px] !p-0 flex-[0_0_auto] w-full md:w-1/2'>
      <div class='!flex !flex-col !h-full'>
        <div class='hidden md:flex flex-col gap-[30px] pt-10 pl-10 pb-0 pr-[14px] !flex-auto'>
          <div class='flex items-center gap-[14px]'>
            <Clock class='w-10 h-10'/>
            <h2 class='text-xl font-semibold leading-[1.5]'>Response within 24 hours</h2>
          </div>
          <div class='flex items-center gap-[14px]'>
            <Message class='w-10 h-10'/>
            <h2 class='text-xl font-semibold leading-[1.5]'>Talk to product and teach experts</h2>
          </div>
        </div>
        <div class='border-t border-[#b58891] px-0 py-5 text-center'>
          Copyright © 2023 Kunai Co. All rights reserved.
        </div>
      </div>
    </div>
  );
});
