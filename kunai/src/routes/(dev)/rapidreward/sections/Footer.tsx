import { component$, Slot } from '@builder.io/qwik';
// import RewardsSummaryModal from '../modal/RewardsSummaryModal';

interface FooterProps {
  points: number
}

export default component$<FooterProps>((props) => {
  const points = new Intl.NumberFormat().format(props.points);

  return (
    <>
      <div class="fixed w-full bottom-0 flex items-center justify-between bg-blue-800 p-4">
        <div class="flex flex-col">
          <span class="text-xs font-medium text-white">
            Estimated <b>Rapid Rewards</b> points based on your inputs
          </span>
          <span class="text-3xl font-bold text-white">
            {points} <span class="text-lg font-medium">points</span>
          </span>
          <span class="text-xs font-medium text-white">
            Your points can be redeemed for rewards flights!
          </span>
        </div>
        <Slot />
      </div>
    </>
  );
});
