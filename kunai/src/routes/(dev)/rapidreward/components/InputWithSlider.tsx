import {component$, useSignal, useTask$} from '@builder.io/qwik';
import type { QuestionProps } from '~/routes/(dev)/rapidreward/interfaces/QuestionProps';
import RewardTooltip from "~/routes/(dev)/rapidreward/components/RewardTooltip";
import RewardInput from "~/routes/(dev)/rapidreward/components/RewardInput";
import RewardSlider from "~/routes/(dev)/rapidreward/components/RewardSlider";

interface InputWithSliderQuestionProps extends QuestionProps {
  minValue: number;
  maxValue: number;
  title: string;
  subtitle: string;
  tooltipContent: string;
  withPrefix?: boolean;
  inputAriaLabel: string;
}

export default component$<InputWithSliderQuestionProps>((props) => {
  const inputValue = useSignal(0);

  useTask$(({ track }) => {
    track(inputValue);
    props.isAnswered(inputValue.value);
  });

  return (
    <div class="my-4 flex flex-col p-4">
      <div class="flex items-center">
        <h2 class="mr-2 text-lg font-semibold">
          {props.title} <span class="mr-2 font-normal">{props.subtitle}</span>
        </h2>
        <RewardTooltip title={props.tooltipContent} placement="top">
          <img
            src="https://rapidrewardscalculator.netlify.app/info-circle-fill.svg"
            alt="Info"
            aria-label="More information"
            role="button"
            tabIndex={0}
            width={16}
            height={16}
          />
        </RewardTooltip>
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

      <div class="flex items-center">
        <RewardInput minValue={props.minValue} maxValue={props.maxValue} inputAriaLabel={props.inputAriaLabel} withPrefix={props.withPrefix} inputValue={inputValue}/>
        <RewardSlider minValue={props.minValue} maxValue={props.maxValue} inputAriaLabel={props.inputAriaLabel} inputValue={inputValue}/>
      </div>
    </div>
  );
});
