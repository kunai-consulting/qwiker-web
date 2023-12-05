import { component$ } from '@builder.io/qwik';
import type { QuestionProps } from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import InputWithSlider from "~/routes/(dev)/rapidreward/components/InputWithSlider";

export default component$<QuestionProps>((props) => {

  return (
    <InputWithSlider
      minValue={0}
      maxValue={5000}
      title='How much do you expect to spend per flight?'
      subtitle='(Required)'
      tooltipContent='Please enter the average dollar amount of your future Southwest flight/flights per flight.'
      isAnswered={props.isAnswered}
      withPrefix={true}
      inputAriaLabel='Amount spent'
    />
  );
});
