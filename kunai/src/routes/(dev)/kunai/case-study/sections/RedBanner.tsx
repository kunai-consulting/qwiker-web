import {component$, Slot} from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      class='max-w-3xl justify-center gap-2.5 flex flex-col text-white rounded-[8px] bg-[#ff4a4a] w-[95%] my-10 mx-auto md:w-[70%] md:my-[60px]'>
      <Slot/>
    </div>
  )
})