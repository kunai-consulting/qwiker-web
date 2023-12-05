import {component$, useStore, useTask$, useSignal} from '@builder.io/qwik';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import RewardInput from "~/routes/(dev)/rapidreward/components/RewardInput";
import RewardSlider from "~/routes/(dev)/rapidreward/components/RewardSlider";

export default component$<QuestionProps>((props) => {
  const state = useStore({ showSlider: false });
  const inputValue = useSignal(0);
  const minValue = 0;
  const maxValue = 500000;

  useTask$(({ track }) => {
    track(() => state.showSlider);
    track(() => inputValue.value);
    if (!state.showSlider) {
      inputValue.value = 0;
    }
    props.isAnswered(inputValue.value)
  });

  return (
    <div class="flex flex-col p-4 bg-white">
      <div class="mb-4 flex w-full justify-between">
        <h2 class="text-lg font-semibold">
          Will you have points earned with Rapid Rewards partners?{' '}
          <span class="font-normal">(Optional)</span>
        </h2>
        <div
          class={`flex h-8 w-14 cursor-pointer items-center rounded-full bg-gray-300 p-1 ${
            state.showSlider ? 'bg-green-400' : ''
          } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
          onClick$={() => (state.showSlider = !state.showSlider)}
          onKeyDown$={(event) => {
            // Toggle on enter or space key press
            if (event.key === 'Enter' || event.key === ' ') {
              state.showSlider = !state.showSlider;
            }
          }}
          aria-label="Show option"
          aria-checked
          role="switch"
          tabIndex={0}
        >
          <div
            class={`h-6 w-6 transform rounded-full bg-white shadow-md ${
              state.showSlider ? 'translate-x-6' : ''
            }`}
          ></div>
        </div>
      </div>

      {state.showSlider && (
        <div class="flex items-center">
          <RewardInput minValue={minValue} maxValue={maxValue} inputAriaLabel='Points earned' withPrefix={true} inputValue={inputValue}/>
          <RewardSlider minValue={minValue} maxValue={maxValue} inputAriaLabel='Points earned' inputValue={inputValue}/>
        </div>
      )}
    </div>
  );
});
