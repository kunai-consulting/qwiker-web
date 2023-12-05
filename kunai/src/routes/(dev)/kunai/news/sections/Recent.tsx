import { component$, useSignal, $ } from '@builder.io/qwik';
import ArticleCard from '../../../@shared/Card/ArticleCard';

interface CarouselProps {
  cards: {
    img: string;
    title: string;
    description: string;
  }[];
}

export default component$<CarouselProps>((props) => {
  const currentIndex = useSignal(0);

  const handlePrevClick = $(() => {
    currentIndex.value =
      (currentIndex.value - 1 + props.cards.length) % props.cards.length;
  });

  const handleNextClick = $(() => {
    currentIndex.value = (currentIndex.value + 1) % props.cards.length;
  });

  const cardsToDisplay = Array.from(
    { length: 3 },
    (_, i) => (currentIndex.value + i) % props.cards.length,
  );

  return (
    <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
      <h2 class="mb-8 text-4xl font-medium">Recent Thoughts on FinTech</h2>

      <div class="relative flex flex-col items-center">
        <div class="flex w-full justify-center gap-10 overflow-hidden">
          {cardsToDisplay.map((cardIndex) => {
            const card = props.cards[cardIndex];
            return (
              <ArticleCard
                key={card.title + '-' + cardIndex}
                title={card.title}
                description={card.description}
                img={card.img}
              />
            );
          })}
        </div>

        <div class="mt-4 flex w-auto items-center justify-center">
          <button
            onClick$={handlePrevClick}
            class="mr-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-400 hover:bg-gray-100 focus:outline-none"
          >
            {'<'}
          </button>

          <div class="align-center flex">
            {props.cards.map((_, index) => (
              <div
                key={index}
                class={[
                  'mx-1 h-2 w-8 rounded-full',
                  index === currentIndex.value ? 'bg-red-500' : 'bg-gray-300',
                ]}
              ></div>
            ))}
          </div>

          <button
            onClick$={handleNextClick}
            class="ml-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-400 hover:bg-gray-100 focus:outline-none"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
});
