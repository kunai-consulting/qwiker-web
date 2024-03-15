import { component$, type CSSProperties, Slot } from '@builder.io/qwik';

interface CardProperties {
  orientation?: 'horizontal' | 'vertical';
  title: string;
  description: string;
  styles?: CSSProperties[];
  hide?: boolean;
}

export default component$<CardProperties>((props) => {
  const additionalClass =
    props.orientation === 'horizontal'
      ? 'flex-col sm:flex-col lg:flex-row'
      : 'flex-col';
  return (
    <div
      class={`flex ${additionalClass} relative mb-8 h-fit w-auto items-center justify-between gap-8 overflow-hidden rounded-[15px] border border-[#858891] bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0)] p-8 shadow-[0_0_34px_-3px_rgba(0,0,0,0.1)] backdrop-blur-[22.5px] sm:mb-8 lg:mb-0`}
    >
      <div class={'max-w-none text-[#D5D5D5] sm:max-w-none lg:max-w-xs'}>
        <div class={'text-xl font-bold uppercase'}>{props.title}</div>
        <div class={'pt-3.5 text-base'}>{props.description}</div>
      </div>
      {props.styles &&
        props.styles.map((style, index) => {
          return (
            <div
              class={`absolute -z-[1] ${
                props.hide && index > 0 ? 'hidden lg:block' : 'prefers-contrast'
              } rotate-[79.85deg] opacity-75 blur-[45px] `}
              key={`style-${index}`}
              style={{ ...style }}
            />
          );
        })}
      <Slot />
    </div>
  );
});
