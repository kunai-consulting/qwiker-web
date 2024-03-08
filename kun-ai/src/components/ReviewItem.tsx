import { component$, CSSProperties, Slot } from '@builder.io/qwik';
// import Arrow from '/public/arrow-rotated.svg?jsx';

interface ReviewProperties {
  title: string;
  description: string;
  styles?: CSSProperties[];
  short: 'left' | 'right';
}

export default component$<ReviewProperties>((props) => {
  return (
    <div
      class={
        'xs:mb-8 relative mb-8 flex h-auto w-full flex-col gap-8 overflow-hidden p-3.5 md:p-8 lg:mb-0'
      }
      style={{
        border: '1px solid #858891',
        borderRadius: '15px',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 36.92%, rgba(255, 255, 255, 0) 100%)',
        boxShadow: '0px 0px 43px -3px rgba(0, 0, 0, 0.14)',
        // backdropFilter: 'blur(22.5px)',
      }}
    >
      <Slot />
      <div class={'max-w-xs px-4 text-[#D5D5D5] md:px-0'}>
        <div class={'text-xl font-bold uppercase'}>{props.title}</div>
        <div class={'pt-3.5 text-base'}>{props.description}</div>
      </div>
      {props.styles &&
        props.styles.map((style, index) => (
          <div
            class={'absolute h-56 w-full md:h-64'}
            key={`styles-${index}`}
            style={{
              zIndex: '-1',
              top: '0',
              left: '0',
              borderRadius: '15px',
              clipPath:
                'polygon(0 0, 100% 0, 100% 30%, 100% 45%, 100% 59%, 5% 100%, 0 100%, 0% 30%)',
              ...style,
            }}
          />
        ))}
      {/* <button
        class="mx-4 flex h-12 w-44 flex-row place-content-center items-center rounded border border-[#D5D5D5] font-semibold uppercase
          text-[#D5D5D5] focus:ring-1 focus:ring-gray-400 md:mx-0"
      >
        View More
        <Arrow height={12} width={12} class={'ml-3.5'} />
      </button> */}
    </div>
  );
});
