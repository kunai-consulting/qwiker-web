import { component$ } from '@builder.io/qwik';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import OptionsButton from "~/routes/(dev)/rapidreward/components/OptionsButton";

export default component$<QuestionProps>((props) => {
  const options =
    [
      { title: 'No status', factor: 1 },
      { title: 'A-List', factor: 1.25 },
      { title: 'A-List Preferred', factor: 2 }
    ];

  return (
    <OptionsButton
      options={options}
      title='Your expected tier status at the start of the year'
      subtitle='(select one) (Required)'
      tooltipContent='Select your Southwest tier status (if applicable).'
      isAnswered={props.isAnswered}
    />
  );
});
