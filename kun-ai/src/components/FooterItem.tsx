import { component$ } from '@builder.io/qwik';
import ArrForward from '~/media/arrow_forward.svg?jsx';

export default component$(() => {
  return (
    <div
      class='-ml-1 mt-0 flex flex-col place-content-between gap-8 rounded-2xl border
              border-[#858891] bg-[url("/footer.svg")] bg-no-repeat p-8
              max-lg:bg-[70%_80%] lg:mt-8'
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
      <a
        href="mailto:ss@kun.ai"
        class="mb-2 flex h-12 w-44 flex-row place-content-center items-center rounded border border-[#8F66FF] font-semibold
          uppercase text-[#D5D5D5] focus:ring-2 focus:ring-blue-800 lg:mb-12"
      >
        Let's try it
        <ArrForward class={'ml-3.5'} width={16} height={16} />
      </a>
    </div>
  );
});
