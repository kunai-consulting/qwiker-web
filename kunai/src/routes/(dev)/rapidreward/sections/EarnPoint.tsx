import {component$} from '@builder.io/qwik';
import type {QuestionProps} from "~/routes/(dev)/rapidreward/interfaces/QuestionProps";
import OptionsButton from "~/routes/(dev)/rapidreward/components/OptionsButton";

export default component$<QuestionProps>((props) => {

  const options = [
    {title: 'Reward flights', factor: 0},
    {title: 'Tiers', factor: 1},
    {title: 'Companion Pass', factor: 2}
  ];

  return (
    <OptionsButton
      options={options}
      title='I want to earn points for...'
      subtitle='(Optional)'
      isAnswered={props.isAnswered}
    />
  );
});
