import {component$} from '@builder.io/qwik';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import OptionsButton from "~/routes/(dev)/rapidreward/components/OptionsButton";

export default component$<QuestionProps>((props) => {

  const options = [
    {title: 'Yes', factor: 1},
    {title: 'No', factor: 0}
  ];

  return (
    <OptionsButton
      options={options}
      title='Are you a Rapid Rewards Member?'
      subtitle='(Optional)'
      isAnswered={props.isAnswered}
    />
  );
});
