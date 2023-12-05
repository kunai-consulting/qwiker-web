import type {QwikKeyboardEvent, Signal} from '@builder.io/qwik';
import {component$, useStore, $, useTask$, useSignal} from '@builder.io/qwik';
import AnnualSpend from './AnnualSpend';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";

interface CreditCardProps extends QuestionProps {
  selectedCardId: Signal<number>,
  annualSpend: Signal<number>
}

export default component$<CreditCardProps>((props) => {
  const annualSpend = useSignal(0);

  const state = useStore({
    selectedCard: '',
    selectedFactor: 0,
    selectedCardId: 0,
    showCards: false
  });

  const cards = [
    { title: 'Rapid Rewards® Plus Credit Card', factor: 3000, id: 1 }, //exclude this
    { title: 'Rapid Rewards® Priority Credit Card', factor: 7500, id: 2 },
    { title: 'Rapid Rewards® Premier Credit Card', factor: 6000, id: 3 },
    { title: 'Rapid Rewards® Plus Business Credit Card', factor: 3000, id: 4 }, //and exclude this
    { title: 'Rapid Rewards® Premier Business Credit Card', factor: 6000, id: 5 },
    { title: 'Rapid Rewards® Performance Business Credit Card', factor: 9000, id: 6 }
  ];

  const handleSelection = $((option: any) => {
    state.selectedCard = option.title;
    state.selectedFactor = option.factor;
    state.selectedCardId = option.id;
    props.isAnswered(state.selectedFactor + annualSpend.value)
    props.selectedCardId.value = option.id;
    props.annualSpend.value = annualSpend.value;
  });

  const handleKeyPress = $((event: QwikKeyboardEvent, option: any) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelection(option);
    }
  });

  useTask$(({ track }) => {
    track(() => state.selectedCard);
    track(() => state.selectedCardId);
    track(() => annualSpend.value);
    props.isAnswered(state.selectedFactor + annualSpend.value)
    props.selectedCardId.value = state.selectedCardId;
    props.annualSpend.value = annualSpend.value;
  });

  useTask$(({ track }) => {
    track(() => state.showCards);
    if (!state.showCards) {
      state.selectedCard = '';
      state.selectedFactor = 0;
      annualSpend.value = 0;
      props.isAnswered(state.selectedFactor + annualSpend.value);
      props.selectedCardId.value = 0;
      props.annualSpend.value = annualSpend.value;
    }
  });

  return (
    <div class="flex flex-col p-4 bg-white">
      <div class="mb-4 flex w-full justify-between">
        <h2 class="text-lg font-semibold">
          Do you have a Southwest Rapid Rewards credit card?{' '}
          <span class="font-normal">(Optional)</span>
        </h2>
        <div
          class={`flex h-8 w-14 cursor-pointer items-center rounded-full bg-gray-300 p-1 ${
            state.showCards ? 'bg-green-400' : ''
          } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
          onClick$={() => (state.showCards = !state.showCards)}
          onKeyDown$={(event) => {
            // Toggle on enter or space key press
            if (event.key === 'Enter' || event.key === ' ') {
              state.showCards = !state.showCards;
            }
          }}
          aria-label="Show option"
          aria-checked
          role="switch"
          tabIndex={0}
        >
          <div
            class={`h-6 w-6 transform rounded-full bg-white shadow-md ${
              state.showCards ? 'translate-x-6' : ''
            }`}
          ></div>
        </div>
      </div>
      {state.showCards && (
        <>
          <div class="mt-4 grid grid-cols-3 gap-4">
            {cards.map((card) => (
              <button
                key={card.title}
                class={`rounded-full border-2 px-4 py-2 transition-colors duration-300 ${
                  state.selectedCard === card.title
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-300 bg-white text-black hover:bg-blue-100'
                }`}
                onClick$={() => handleSelection(card)}
                onKeyDown$={(event) => handleKeyPress(event, card)}
                aria-pressed={state.selectedCard === card.title}
                aria-label="Option"
                role="button"
              >
                {card.title}
              </button>
            ))}
          </div>
          <AnnualSpend annualSpend={annualSpend}/>
        </>
      )}
    </div>
  );
});
