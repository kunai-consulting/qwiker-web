import { component$, CSSProperties, Slot } from '@builder.io/qwik';

interface CardProperties {
  orientation?: 'horizontal' | 'vertical';
  title: string;
  description: string;
  styles?: CSSProperties[];
}

export default component$<CardProperties>((props) => {
  return (
    <div
      class={`flex ${
        props.orientation === 'horizontal' ? 'flex-row' : 'flex-col'
      } relative min-h-[14rem] min-w-[25rem] items-center justify-between gap-8 overflow-hidden p-8`}
      style={{
        border: `1px solid #858891`,
        borderRadius: `15px`,
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.08) 36.92%, rgba(255, 255, 255, 0) 100%)`,
        boxShadow: `0px 0px 34px -3px rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(22.5px)`,
      }}
    >
      <div class={'max-w-xs text-[#D5D5D5]'}>
        <div class={'text-xl font-bold uppercase'}>{props.title}</div>
        <div class={'pt-3.5 text-base'}>{props.description}</div>
      </div>
      {props.styles &&
        props.styles.map((style, index) => (
          <div
            class={'absolute'}
            key={`style-${index}`}
            style={{
              zIndex: '-1',
              opacity: '0.76',
              filter: 'blur(45px)',
              transform: 'rotate(79.85deg)',
              ...style,
            }}
          />
        ))}
      <Slot />
    </div>
  );
});
