import { component$ } from '@builder.io/qwik';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import OptionsButton from "~/routes/(dev)/rapidreward/components/OptionsButton";

export default component$<QuestionProps>((props) => {

  const options = [
    { title: 'Business Select®', factor: 12 },
    { title: 'Anytime', factor: 10 },
    { title: 'Wanna Get Away Plus®', factor: 8 },
    { title: 'Wanna Get Away®', factor: 6 },
  ];

  return (
    <OptionsButton
      options={options}
      title='Which fare will you normally fly?'
      subtitle='(Required)'
      tooltipContent='Select one from the four Southwest fare types you normally fly.'
      isAnswered={props.isAnswered}
    />
  );
});
