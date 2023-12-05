import type { Signal} from '@builder.io/qwik';
import {component$} from '@builder.io/qwik';
import RewardInput from "~/routes/(dev)/rapidreward/components/RewardInput";
import RewardSlider from "~/routes/(dev)/rapidreward/components/RewardSlider";

interface AnnualSpendProps {
  annualSpend: Signal<number>;
}

export default component$<AnnualSpendProps>((props) => {
  const { annualSpend } = props;
  const minValue = 0;
  const maxValue = 1000000;

  return (
    <div class="my-4 flex flex-col pt-4">
      <label for="rangeInput" class="mb-2">
        Estimated annual spend on your Rapid Rewards Credit Card
      </label>
      <div class="flex items-center">
        <RewardInput minValue={minValue} maxValue={maxValue} inputAriaLabel='Annual spend' withPrefix={true} inputValue={annualSpend}/>
        <RewardSlider minValue={minValue} maxValue={maxValue} inputAriaLabel='Annual spend' inputValue={annualSpend}/>
      </div>
    </div>
  );
});
