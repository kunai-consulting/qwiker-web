import { component$ } from '@builder.io/qwik';

interface CardProps {
  source?: string;
  title?: string;
  text?: string;
  width: number;
  height: number;
  textHeight: number;
}

export default component$<CardProps>((props) => {
  return (
    <div
      class="relative bg-white"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        overflow: 'hidden',
      }}
    >
      <div
        class="absolute left-0 top-0"
        style={{
          width: '301px',
          height: `${props.height - props.textHeight}px`,
        }}
      >
        <img
          src={props.source}
          alt={props.title}
          class="absolute h-full w-full object-cover shadow-md transition-transform duration-300 hover:scale-110"
          width="301"
          height="200"
        />
        <div class="absolute bottom-0 left-0 w-2/3 bg-white px-4 py-2">
          <h3 class="text-xl font-semibold">{props.title}</h3>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0"
        style={{
          boxSizing: 'border-box',
          width: '301px',
          height: `${props.textHeight}px`,
        }}
      >
        <p class="bg-white px-4 text-black">{props.text}</p>
      </div>
    </div>
  );
});
