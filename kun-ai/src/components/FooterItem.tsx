import { component$ } from '@builder.io/qwik';
import ArrForward from '/public/arrow_forward.svg?jsx';

export default component$(() => {
  return (
    <div
      class={'-ml-1 mt-8 flex flex-col place-content-between gap-8 p-8'}
      style={{
        backgroundImage: 'url("/footer.svg")',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div class={'pb-10 md:pb-14 text-2xl md:text-3xl md:leading-[50px] font-bold text-[#D5D5D5]'}>
        <h2>
          Step into the future with{' '}
          <span style={{ color: '#8F66FF' }}>Kun.AI</span>:
        </h2>
        <h2>Streamlined workflows, boosted</h2>
        <h2>efficiency, and cost savings</h2>
      </div>
      <button
        class="mb-12 flex h-12 w-44 flex-row place-content-center items-center rounded border border-[#8F66FF]
          font-semibold uppercase text-[#D5D5D5] focus:ring-2 focus:ring-blue-800"
      >
        Let's try it
        <ArrForward class={'ml-3.5'} width={16} height={16} />
      </button>
    </div>
  );
});
