import { component$, useStore, $, useTask$, useSignal } from '@builder.io/qwik';
import Title from './sections/Title';
import RewardMember from './sections/RewardMember';
import EarnPoint from './sections/EarnPoint';
import FlightSpend from './sections/FlightSpend';
import Fare from './sections/Fare';
import TierStatus from './sections/TierStatus';
import ExpectedTrips from './sections/ExpectedTrips';
import CreditCard from './sections/CreditCard';
import PointEarned from './sections/PointEarned';
import Footer from './sections/Footer';
import RewardsSummaryModal from './modal/RewardsSummaryModal';
import {DocumentHead} from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: 'Estimate Your Points',
  meta: [
    {
      name: 'description',
      content: 'Estimate Your Points',
    },
  ],
};

export default component$(() => {
  const showModal = useSignal(false);
  const selectedCardId = useSignal(0);
  const annualSpend = useSignal(0);

  const state = useStore({
    shouldShowFooter: false,
    questionsAnswered: {
      isRewardMember: 0,
      earnPointsFor: 0,
      fareAnsweredFactor: 0,
      flightSpendAnswered: 0,
      expectedTripsAnswered: 0,
      tierStatusAnswered: 0,
      rewardsCreditCard: 0,
      pointsEarned: 0
    },
    companionPointsEstimate: 0,
    tierPointsEstimate: 0,
    requiredPoints: 0,
    points: 0
  });

  // const maths = {
  //   member(val) {
  //     return val * 2;
  //   },
  // };

  // function points(sections) {
  //   return sections.reduce(() => {
  //     return maths[section.type](section.value);
  //   }, 0);
  // }

  // Usage of the update function
  useTask$(({ track }) => {
    track(() => state.questionsAnswered.flightSpendAnswered);
    track(() => state.questionsAnswered.expectedTripsAnswered);
    track(() => state.questionsAnswered.fareAnsweredFactor);
    track(() => state.questionsAnswered.tierStatusAnswered);
    track(() => state.questionsAnswered.rewardsCreditCard);
    track(() => state.questionsAnswered.pointsEarned);
    state.shouldShowFooter = Boolean(
        state.questionsAnswered.flightSpendAnswered
      && state.questionsAnswered.expectedTripsAnswered
      && state.questionsAnswered.fareAnsweredFactor
      && state.questionsAnswered.tierStatusAnswered
    );
    state.requiredPoints = Math.round(state.questionsAnswered.flightSpendAnswered
      * state.questionsAnswered.expectedTripsAnswered
      * state.questionsAnswered.fareAnsweredFactor);
    state.points = Number(
      state.requiredPoints * state.questionsAnswered.tierStatusAnswered
      + state.questionsAnswered.rewardsCreditCard
      + state.questionsAnswered.pointsEarned
    );
    state.companionPointsEstimate = Number(state.requiredPoints + state.questionsAnswered.pointsEarned)
    if (state.questionsAnswered.rewardsCreditCard) {
      state.companionPointsEstimate += state.questionsAnswered.rewardsCreditCard + 10000;
    }
    state.tierPointsEstimate = state.requiredPoints;
    if (state.questionsAnswered.rewardsCreditCard) {
      if (selectedCardId.value !== 1 && selectedCardId.value !== 4 && annualSpend.value !== 0) {
        state.tierPointsEstimate += Math.floor(annualSpend.value / 10000) * 1500;
      }
    }
  });
  // Streamlined check for footer display

  useTask$(({ track }) => {
    track(showModal);
    console.log('on change', showModal.value);
  });

  return (
    <>
      <div class="flex h-full w-screen items-center justify-center bg-blue-950 p-4">
        <div
          style={{
            background:
              "url('https://rapidrewardscalculator.netlify.app/hawaii.jpeg') center center / cover no-repeat fixed",
          }}
          class="flex h-full w-full rounded-xl shadow-lg"
        >
          <div class="w-1/2 bg-white pb-10">
            <Title />
            <RewardMember
              isAnswered={$(
                (value = 0) =>
                  (state.questionsAnswered.isRewardMember = value),
              )}
            />
            <EarnPoint
              isAnswered={$(
                (value = 0) =>
                  (state.questionsAnswered.earnPointsFor = value),
              )}
            />
            <FlightSpend
              isAnswered={$(
                (value = 0) =>
                  (state.questionsAnswered.flightSpendAnswered = value),
              )}
            />
            <ExpectedTrips
              isAnswered={$(
                (value = 0) =>
                (state.questionsAnswered.expectedTripsAnswered = value),
              )}
            />
            <Fare
              isAnswered={$(
                (value = 0) =>
                (state.questionsAnswered.fareAnsweredFactor = value),
              )}/>
            <TierStatus
              isAnswered={$(
              (value = 0) =>
                (state.questionsAnswered.tierStatusAnswered = value),
              )}
            />
            <CreditCard
              isAnswered={$(
              (value = 0) =>
                (state.questionsAnswered.rewardsCreditCard = value),
              )}
              selectedCardId={selectedCardId}
              annualSpend={annualSpend}
            />
            <PointEarned
              isAnswered={$(
              (value = 0) =>
                (state.questionsAnswered.pointsEarned = value),
              )}
            />
            {state.shouldShowFooter && (
              <div class="flex flex-col p-7 bg-white"></div>
            )}
          </div>
          <div></div>
        </div>
      </div>
      {state.shouldShowFooter && (
        <Footer points={state.points}>
          <button
            onClick$={() => (showModal.value = !showModal.value)}
            aria-haspopup="dialog"
            class="rounded bg-yellow-400 px-4 py-2 font-bold text-blue-800 transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >
            Calculate Estimate
          </button>
        </Footer>
      )}
      <RewardsSummaryModal
        showModal={showModal}
        id="rewards-summary-modal"
        pointsEstimate={state.points}
        companionPointsEstimate={state.companionPointsEstimate}
        tierPointsEstimate={state.tierPointsEstimate}
        expectedTrips={state.questionsAnswered.expectedTripsAnswered}
        isRewardMember={state.questionsAnswered.isRewardMember > 0}
        earnPointsFor={state.questionsAnswered.earnPointsFor}
        isCCEnabled={state.questionsAnswered.rewardsCreditCard > 0}
      />
    </>
  );
});
