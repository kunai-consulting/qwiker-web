import { component$ } from '@builder.io/qwik';
import type { QuestionProps } from '~/routes/(dev)/rapidreward/interfaces/QuestionProps';
import InputWithSlider from '~/routes/(dev)/rapidreward/components/InputWithSlider';

export default component$<QuestionProps>((props) => {
  return (
    <InputWithSlider
      minValue={0}
      maxValue={500}
      title="Number of expected trips this year?"
      subtitle="(Required)"
      tooltipContent="Please enter the number of future Southwest flights you expect to take in the next calendar year."
      isAnswered={props.isAnswered}
      inputAriaLabel="Expected trips"
    />
  );
});
