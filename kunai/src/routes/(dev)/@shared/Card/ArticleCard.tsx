import { component$ } from '@builder.io/qwik';

interface ArticleCardProps {
  img: string;
  title: string;
  description: string;
}

export default component$<ArticleCardProps>((props) => {
  return (
    <div
      class="overflow-hidden bg-white"
      style={{ width: '301px', height: '374px' }}
    >
      <div class="w-full overflow-hidden" style={{ height: '200px' }}>
        <img
          src={props.img}
          class="h-full w-full object-cover"
          width="301"
          height="200"
          style={{ width: '301px', height: '200px' }}
        />
      </div>
      <div class="box-border w-full bg-white p-4" style={{ height: '174px' }}>
        <h2 class="text-md mb-2 font-bold">{props.title}</h2>
        <p class="text-base text-gray-700">{props.description}</p>
      </div>
    </div>
  );
});
