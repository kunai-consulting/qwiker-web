import {component$, CSSProperties, Slot} from '@builder.io/qwik';
import Arrow from '/public/arrow-rotated.svg?jsx';


interface ReviewProperties {
  title: string;
  description: string;
  styles?: CSSProperties[];
  short: 'left' | "right";
}

export default component$<ReviewProperties>((props) => {
  return (
    <div
      class={'flex flex-col p-8 gap-8 min-w-[25rem] min-h-[36.75rem] relative overflow-hidden w-fit'}
      style={{
        border: '1px solid #858891',
        borderRadius: '15px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 36.92%, rgba(255, 255, 255, 0) 100%)',
        boxShadow: '0px 0px 43px -3px rgba(0, 0, 0, 0.14)',
        backdropFilter: 'blur(22.5px)'
      }}
    >
      <Slot/>
      <div class={'max-w-xs text-[#D5D5D5]'}>
        <div class={'text-xl font-bold uppercase'}>{props.title}</div>
        <div class={'text-base pt-3.5'}>{props.description}</div>
      </div>
      {props.styles && props.styles.map((style, index) =>
        (<div class={'absolute min-w-[413px] h-64'} key={`styles-${index}`} style={{
          zIndex: "-1",
          top: "0",
          left: "0",
          borderRadius: "15px",
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",
          ...style
        }}/>)
      )}
      <button
        class="rounded uppercase w-44 h-12 font-semibold text-[#D5D5D5] flex flex-row items-center place-content-center
          border border-[#D5D5D5] focus:ring-1 focus:ring-gray-400"
      >
        View More
        <Arrow height={12} width={12} class={'ml-3.5'}/>
      </button>
    </div>
  );
});