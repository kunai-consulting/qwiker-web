import { component$ } from "@builder.io/qwik";

interface IconCardProps {
  source: string;
  title: string;
  description: string;
}

export default component$<IconCardProps>((props) => {
  return (
    <div class="max-w-xs rounded-lg border border-gray-300 bg-white p-4">
      <div class="mb-4 flex justify-center">
        <img width="121" height="88" src={props.source} class="h-32 w-44" />
      </div>
      <h2 class="mb-2 text-xl font-bold">{props.title}</h2>
      <p class="text-gray-600">{props.description}</p>
    </div>
  );
});
