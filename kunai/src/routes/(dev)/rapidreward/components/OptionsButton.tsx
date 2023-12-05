import type { QwikKeyboardEvent} from '@builder.io/qwik';
import {component$, useSignal, $} from '@builder.io/qwik';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import type {CardOptions} from "~/routes/(dev)/rapidreward/types/CardOptions";
import RewardTooltip from "~/routes/(dev)/rapidreward/components/RewardTooltip";

interface OptionsButtonQuestionProps extends QuestionProps {
  options: CardOptions[],
  title: string,
  subtitle: string,
  tooltipContent?: string
}

export default component$<OptionsButtonQuestionProps>((props) => {
  const selected = useSignal('');
  const options = props.options;

  const handleSelection = $((option: CardOptions) => {
    selected.value = option.title;
    props.isAnswered(option.factor);
  });

  const handleKeyPress = $((event: QwikKeyboardEvent, option: CardOptions) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelection(option);
    }
  });

  return (
    <div class="flex flex-col p-4">
      <div class="flex items-center">
        <h2 class="mr-2 text-lg font-semibold">
          {props.title}{' '}
          <span class="mr-2 font-normal">{props.subtitle}</span>
        </h2>
        {props.tooltipContent && (<RewardTooltip title={props.tooltipContent} placement="top">
          <img
            src="https://rapidrewardscalculator.netlify.app/info-circle-fill.svg"
            alt="Info"
            aria-label="More information"
            role="button"
            tabIndex={0}
            width={16}
            height={16}
          />
        </RewardTooltip>)}
        {/*<Popover placement="top">*/}
        {/*  <PopoverTrigger>*/}
        {/*    <img*/}
        {/*      src="https://rapidrewardscalculator.netlify.app/info-circle-fill.svg"*/}
        {/*      alt="Info"*/}
        {/*      aria-label="More information"*/}
        {/*      role="button"*/}
        {/*      tabIndex={0}*/}
        {/*      width={16}*/}
        {/*      height={16}*/}
        {/*    />*/}
        {/*  </PopoverTrigger>*/}
        {/*  <PopoverContent>*/}
        {/*    <div class="bg-black p-4 text-white">*/}
        {/*      {props.tooltipContent}*/}
        {/*    </div>*/}
        {/*  </PopoverContent>*/}
        {/*</Popover>*/}
      </div>
      <div class="flex gap-2">
        {options.map((option) => (
          <button
            key={option.title}
            class={`rounded-full border-2 px-4 py-2 transition-colors duration-300 ${
            selected.value === option.title 
              ? 'border-blue-600 bg-blue-600 text-white' 
              : 'border-gray-300 bg-white text-black hover:bg-blue-100'
            }`}
            onClick$={() => handleSelection(option)}
            onKeyDown$={(event) => handleKeyPress(event, option)}
            aria-pressed={selected.value === option.title}
            aria-label="Option"
            role="button"
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  );
});
