import {component$} from '@builder.io/qwik';
import ArrForward from '/public/arrow_forward.svg?jsx';

export default component$(() => {
  return (
    <div
      class={'flex flex-col place-content-between gap-8 p-8 -ml-1 mt-8'}
      style={{backgroundImage: "url(\"/footer.svg\")", backgroundRepeat: "no-repeat"}}
    >
      <div class={'text-[32px] font-bold text-[#D5D5D5] pb-14'}>
        <h2>Step into the future with <span style={{color: '#8F66FF'}}>Kun.AI</span>:</h2>
        <h2>Streamlined workflows, boosted</h2>
        <h2>efficiency, and cost savings</h2>
      </div>
      <button
        class="rounded uppercase w-44 h-12 font-semibold text-[#D5D5D5] flex flex-row items-center place-content-center
          border border-[#8F66FF] focus:ring-2 focus:ring-blue-800 mb-12"
      >
        Let's try it
        <ArrForward class={'ml-3.5'} width={16} height={16}/>
      </button>
    </div>
  );
});
