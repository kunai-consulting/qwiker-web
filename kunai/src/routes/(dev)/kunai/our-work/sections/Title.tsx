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

  const handleNextClick = $(() => {
    currentIndex.value = (currentIndex.value + 1) % props.cards.length;
  });

  const cardsToDisplay = Array.from(
    { length: props.cards.length - 1 },
    (_, i) => (currentIndex.value + i) % props.cards.length,
  );

  return (
    <div class="container relative mx-auto max-w-7xl">
      <div class=" flex flex-col gap-10 px-4 py-6 sm:px-8 sm:py-12 md:flex-row">
        <div class="mb-8 flex flex-col justify-between md:mb-0 md:w-1/3 md:pr-12">
          <div>
            <h4 class="mb-2 text-gray-500">Our Work</h4>
            <h1 class="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              What can we help you build?
            </h1>
            <a href="#" class="mb-4 mt-4 inline-block font-bold text-red-500 ">
              SPEAK WITH A PARTNER →
            </a>
          </div>
          <div class="mt-4 grid w-auto grid-cols-4 items-center">
            <div class="align-center col-span-3 flex">
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
        <div class="md:flex-grow">
          <div class="flex w-full justify-start gap-4 overflow-hidden md:justify-end">
            {cardsToDisplay.map((cardIndex) => {
              const card = props.cards[cardIndex];
              return (
                <ImageCard
                  key={card.title + '-' + cardIndex}
                  source={card.source}
                  title={card.title}
                  text={card.text}
                  width={301}
                  height={459}
                  textHeight={154}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 top-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
});
