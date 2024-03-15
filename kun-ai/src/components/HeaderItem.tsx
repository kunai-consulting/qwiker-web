import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div
      class={
        'w-full text-3xl font-bold leading-[47px] text-[#D5D5D5] sm:text-5xl md:leading-[67px]'
      }
    >
      <h1 class="text-balance">
        Automate Real Work
        <br />
        with <span class="text-[#8F66FF]">Kun.AI</span>
      </h1>
    </div>
  );
});
