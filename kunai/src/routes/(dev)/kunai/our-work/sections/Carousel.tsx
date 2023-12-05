import { component$, useSignal, $ } from '@builder.io/qwik';
import ImageCard from '../../../@shared/Card/ImageCard';

interface CarouselProps {
  cards: {
    source: string;
    title: string;
    text: string;
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
    { length: props.cards.length - 1 },
    (_, i) => (currentIndex.value + i) % props.cards.length,
  );

  return (
    <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
      <h2 class="mb-8 text-4xl font-medium">
        The Future of Finance Case Studies
      </h2>

      <div class="relative flex flex-col ">
        <div class="flex w-auto justify-center gap-4 overflow-hidden">
          {cardsToDisplay.map((cardIndex) => {
            const card = props.cards[cardIndex];
            return (
              <ImageCard
                key={card.title + '-' + cardIndex}
                source={card.source}
                title={card.title}
                text={card.text}
                width={301}
                height={354}
                textHeight={154}
              />
            );
          })}
        </div>
      </div>

      <div class="mt-4 flex w-full items-center justify-center">
        <button
          onClick$={handlePrevClick}
          class="mr-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-400 hover:bg-gray-100 focus:outline-none"
        >
          {'<'}
        </button>

        <div class="flex items-center justify-center">
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
  );
});
