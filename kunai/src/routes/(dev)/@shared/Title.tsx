import { component$ } from '@builder.io/qwik';

interface TitleProps {
  title: string;
  description: string;
  editorial: string;
}

export default component$<TitleProps>((props) => {
  return (
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex w-2/3 flex-col items-start justify-between bg-white py-12">
        <h4 class="mb-2 text-sm text-gray-500 lg:mb-4 lg:text-lg">
          {props.editorial}
        </h4>
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight sm:mb-6 sm:text-5xl lg:text-6xl">
          {props.title}
        </h1>
        <p class="text-lg leading-snug sm:text-2xl lg:text-3xl">
          {props.description}
        </p>
      </div>
    </div>
  );
});
