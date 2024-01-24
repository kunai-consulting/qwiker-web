import {component$, Slot} from "@builder.io/qwik";

interface PastEventProps {
  eventProperties: { date: string, title: string, location: string }
}

export default component$<PastEventProps>((props) => {
  return (
    <>
      <div class='px-5 md:px-8 py-0 mx-auto my-0 max-w-7xl'>
        <div class='w-full m-0 overflow-hidden relative items-center h-[416px] flex justify-center object-cover'>
          <Slot name='topImage'/>
        </div>
      </div>
      <div
        class='w-full relative max-w-7xl mx-auto my-0 gap-8 flex py-10 px-5 md:py-[60px] md:px-10 flex-col md:flex-row'>
        <div class='flex flex-col gap-10 w-full md:w-3/5'>
          <div>
            <div class='!font-bold text-[#f53535] text-[16px] leading-[1.5] -tracking-[.5px]'>
              {props.eventProperties.date}
            </div>
            <div class='!mb-0 -tracking-[1px] text-4xl leading-[1.5] font-semibold'>
              {props.eventProperties.title}
            </div>
            <div class='font-normal leading-[1.42] -tracking-[1px] text-xl'>
              {props.eventProperties.location}
            </div>
          </div>
          <div class='font-normal gap-[15px] flex flex-col'>
            <Slot name='fullDescription'/>
          </div>
        </div>
        <div class='gap-8 flex flex-col w-full md:w-2/5'>
          <div class='overflow-hidden w-full relative'>
            <Slot name='bottomImage'/>
          </div>
          <div class='overflow-hidden w-full relative'>
            <Slot name='bottomImage1'/>
          </div>
        </div>
      </div>
    </>
  )
})