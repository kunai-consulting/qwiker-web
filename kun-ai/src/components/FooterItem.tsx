import { Slot, component$ } from '@builder.io/qwik';
import ArrForward from '~/media/arrow_forward.svg?jsx';
import Footer from '~/media/footer.svg';

export default component$(() => {
  return (
    <div
      class={`-ml-1 mt-0 flex flex-col place-content-between gap-8 rounded-2xl border
              border-[#858891] p-8
              max-lg:!bg-[70%_80%] lg:mt-8`}
      style={{ background: `url("${Footer}")` }}
    >
      <div
        class={
          'pb-10 text-2xl font-bold text-[#D5D5D5] md:pb-14 md:text-3xl md:leading-[50px]'
        }
      >
        <h2>
          Start your journey with <span class={'text-[#8F66FF]'}>Kun.AI</span>:
        </h2>
        <h2>Automate Your Business</h2>
      </div>
      <Slot />
    </div>
  );
});
