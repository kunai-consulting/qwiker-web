import { component$ } from '@builder.io/qwik';
import Hero from './sections/Hero';
import LoyaltyRewards from './sections/LoyaltyRewards';
import LoyaltyPoints from './sections/LoyaltyPoints';
import LoyaltyLevels from './sections/LoyaltyLevels';
import AAdvantageProgram from './sections/AAdvantageProgram';
import EarnPoint from './sections/EarnPoint';

export default component$(() => {
  return (
    <>
      <Hero />
      <LoyaltyRewards />
      <LoyaltyPoints />
      <LoyaltyLevels />
      <AAdvantageProgram />
      <EarnPoint />
    </>
  );
});
