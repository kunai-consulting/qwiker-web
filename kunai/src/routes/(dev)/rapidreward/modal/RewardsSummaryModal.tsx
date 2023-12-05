import {component$, type Signal} from '@builder.io/qwik';
import {Modal, ModalContent, ModalHeader} from '../../@shared/modal';

interface CardProps {
  title: string;
  points: number;
  progress?: number;
  total?: number;
  totalDisplayValue?: number;
  flights?: number;
  flightsTotal?: number;
  isPrimary?: boolean; // To identify the first card without progress bar
  bottomDescription?: string;
  defaultCard?: boolean;
}

interface ModalProps {
  showModal: Signal<boolean>;
  id: string;
  pointsEstimate: number;
  expectedTrips: number;
  companionPointsEstimate: number;
  tierPointsEstimate: number;
  isRewardMember: boolean;
  earnPointsFor: number;
  isCCEnabled: boolean;
}

const Card = component$((props: CardProps) => {
  //TODO: Need to clarify how to calculate the progress depending on the flights.
  const progressWidth =
    props.progress && props.total ? (props.progress / props.total) * 100 : 0;
  // const flightsProgress =
  //   props.flights && props.flightsTotal
  //     ? (props.flights / props.flightsTotal) * 100
  //     : 0;

  return (
    <div
      class={`rounded-lg p-4 ${
        props.isPrimary ? 'bg-blue-800 text-white' : 'bg-white shadow-md'
      }`}
    >
      <h2 class="text-lg font-semibold">{props.title}</h2>
      <div class='flex flex-row items-center'>
        <div
          class={`my-2 flex flex-col w-full ${
            props.isPrimary ? 'text-white' : 'text-blue-600'
          }`}
        >
          <span class='text-3xl font-bold '>{props.points.toLocaleString()} {props.defaultCard ? 'points' : ''}</span>
          {props.total != null && (
            <span class='text-sm'>
              points of {props.totalDisplayValue ? props.totalDisplayValue.toLocaleString() : props.total.toLocaleString()}
            </span>
          )}
        </div>
        {!props.isPrimary && props.flights != null && props.flightsTotal != null && (
          <>
            <div class='text-center w-full'> | <br/> or <br/> |</div>
            <div class='text-end w-full text-blue-600'>
              <span class='text-3xl font-bold'>{props.flights}</span>
              <div class='text-sm'>flights of {props.flightsTotal}</div>
            </div>
          </>
        )}
      </div>
      {props.progress != null && props.total != null && (
        <>
          <div class="mb-2 h-2 w-full rounded-full bg-gray-200 flex flex-row justify-start items-center">
            <div
              class="h-full bg-blue-600 rounded-full"
              style={{width: `${progressWidth}%`}}
            />
            <img
              src="https://rapidrewardscalculator.netlify.app/assets/progressbar-thumb-d3eb762b.svg"
              class='-ms-2'
              alt="Progress"
              aria-label="Progress point"
              width={16}
              height={16}
            />
          </div>
        </>
      )}
      {props.bottomDescription && (
        <div class='text-end'>{props.bottomDescription}</div>
      )}
    </div>
  );
});

export const RewardsSummaryModal = component$((props: ModalProps) => {

  const pointsCard = <Card
    title="Your earned Rapid Rewards points estimate"
    points={props.pointsEstimate}
    defaultCard={true}
  />;
  const tierCard = <Card
    title="Estimated progress towards Tier Status"
    points={props.tierPointsEstimate}
    progress={props.tierPointsEstimate}
    total={70000}
    totalDisplayValue={props.tierPointsEstimate < 35001 ? 35000 : 70000}
    flights={props.expectedTrips}
    flightsTotal={props.expectedTrips < 26 ? 25 : 50}
    bottomDescription='A-List Preffered'
  />;
  const companionCard = <Card
    title="Companion Pass qualifying points estimate"
    points={props.companionPointsEstimate}
    progress={props.companionPointsEstimate}
    total={135000}
    flights={props.expectedTrips}
    flightsTotal={100}
    bottomDescription='Companion Pass'
  />;

  let cards = [pointsCard, tierCard, companionCard];
  switch (props.earnPointsFor) {
    case 0: {
      pointsCard.props.isPrimary = true;
      tierCard.props.isPrimary = false;
      companionCard.props.isPrimary = false;
      cards = [pointsCard, tierCard, companionCard];
      break;
    }
    case 1: {
      pointsCard.props.isPrimary = false;
      tierCard.props.isPrimary = true;
      companionCard.props.isPrimary = false;
      cards = [tierCard, companionCard, pointsCard];
      break;
    }
    case 2: {
      pointsCard.props.isPrimary = false;
      tierCard.props.isPrimary = false;
      companionCard.props.isPrimary = true;
      cards = [companionCard, tierCard, pointsCard];
      break;
    }
  }
  return (
    <Modal
      bind:show={props.showModal}
      class="mx- 0 mt-0 h-[1365px] w-full rounded-b-lg bg-white p-[20px] backdrop:backdrop-brightness-50 "
    >
      <ModalHeader>
        <div class="flex items-center justify-between">
          <button
            onClick$={() => (props.showModal.value = false)}
            class="absolute right-6 top-[26px] underline"
          >
            Calculate again
          </button>
        </div>
      </ModalHeader>
      <ModalContent class="flex flex-col space-y-4 overflow-y-auto pt-10">
        <div class="bg-gray-100 p-4">
          <h1 class="mb-6 text-2xl font-bold">
            Here is your Rapid Rewards points estimate:
          </h1>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cards.map((card) => (card))}
          </div>
          <div class="mt-4 flex justify-center">
            <button class="rounded bg-yellow-400 px-4 py-2 font-bold text-black transition-colors hover:bg-yellow-500">
              Don't miss out on these points! Enroll Now
            </button>
          </div>

          {/* Additional content */}
          <div class="mt-8">
            {props.isCCEnabled && (
              <>
                <h2 class="text-xl font-bold">Don’t miss out on points</h2>
                <div class="my-2 text-4xl font-bold">Earn 10,000 points</div>
                <div class="mb-4">by earning with our partners.</div>
              </>
            )}
            {!props.isCCEnabled && !props.isRewardMember && (
              <>
                <h2 class="text-xl font-bold">You could be earning</h2>
                <div class="my-2 text-4xl font-bold">{props.pointsEstimate.toLocaleString()} points</div>
                <div class="mb-4 italic">based on your current spend.</div>
              </>
            )}
            {!props.isCCEnabled && props.isRewardMember && (
              <>
                <table class="table-auto w-full">
                  <thead>
                  <tr class='text-black'>
                    <th class='border'>
                      <div class="font-bold">
                        <p class="text-lg">Wanna rake in a trip this fall?</p>
                        <p class="text-4xl">Earn 50,000 points.</p>
                      </div>
                    </th>
                    <th class='border'>
                      <img src="https://rapidrewardscalculator.netlify.app/card_swa_regular.png"
                           alt="Card"
                           aria-label="Card regular"
                      />
                      <p>Plus Credit Card</p>
                    </th>
                    <th class='border'>
                      <img src="https://rapidrewardscalculator.netlify.app/card_swa_priority.png"
                           alt="Card"
                           aria-label="Card priority"
                      />
                      <p>Priority Credit Card</p>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class='font-bold text-base'>
                    <td class='border'>
                      <span>Annual fee</span>
                    </td>
                    <td class='border'>
                      <span>$69</span>
                    </td>
                    <td class='border'>
                      <span>$149</span>
                    </td>
                  </tr>
                  <tr class='font-bold text-base'>
                    <td class='border'>
                      <span>Anniversary points after your Cardmember anniversary each year</span>
                    </td>
                    <td class='border'>
                      <span>3,000</span>
                    </td>
                    <td class='border'>
                      <span>7,500</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </>
            )}
            {!props.isCCEnabled && !props.isRewardMember && (
              <>
                <h3 class="mb-2 text-lg font-semibold">And it's Free!</h3>
                <div class="mb-4">You have options to enroll in Rapid Rewards</div>
                <div class="mb-4">
                  Whether you're earning points or redeeming for a flight, nothing
                  should come between you and your favorite destination.
                </div>

                <div class="grid grid-cols-1 gap-4 text-gray-800 md:grid-cols-2">
                  <div>
                    <div class="mb-4 flex items-start">
                      <img
                        class="mr-2"
                        src="https://rapidrewardscalculator.netlify.app/right-airplane.svg"
                        alt="Unlimited reward seats"
                        width={30}
                        height={30}
                        aria-label="Airplane"
                        role="presentation"
                      />
                      <div>
                        <h4 class="font-semibold">Unlimited reward seats.</h4>
                        <p>
                          Say Yes to reward seats on days ending in "y". That's
                          Transfarency®
                        </p>
                      </div>
                    </div>
                    <div class="mb-4 flex items-start">
                      <img
                        class="mr-2"
                        src="https://rapidrewardscalculator.netlify.app/no-blackout.svg"
                        alt="No blackout dates"
                        width={30}
                        height={30}
                        aria-label="Calender"
                        role="presentation"
                      />
                      <div>
                        <h4 class="font-semibold">No blackout dates.</h4>
                        <p>
                          No blackout dates means your choices and possibilities for
                          travel are wide open.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <img
                        class="mr-2"
                        src="https://rapidrewardscalculator.netlify.app/points-dont-expire.svg"
                        alt="Points don't expire"
                        width={30}
                        height={30}
                        aria-label="Clock"
                        role="presentation"
                      />
                      <div>
                        <h4 class="font-semibold">Your points don't expire.</h4>
                        <p>You don't have to worry, they just don't expire.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="mb-4 flex items-start">
                      <img
                        class="mr-2"
                        src="https://rapidrewardscalculator.netlify.app/heart.svg"
                        alt="Earning points is easy"
                        width={30}
                        height={30}
                        aria-label="Heart"
                        role="presentation"
                      />
                      <div>
                        <h4 class="font-semibold">Earning points is easy.</h4>
                        <p>
                          Rapid Rewards® makes it easy to earn points you can use
                          for reward flights to go anywhere we fly. Not only will
                          you earn points on flights, you can also earn points on
                          everyday purchases with our partners.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <img
                        class="mx-2 mt-2"
                        src="https://rapidrewardscalculator.netlify.app/redeem-flight.svg"
                        alt="Redeem for flights and more"
                        width={30}
                        height={30}
                        aria-label="Card"
                        role="presentation"
                      />
                      <div>
                        <h4 class="font-semibold">Redeem for flights and more.</h4>
                        <p>
                          With the More Rewards program, Rapid Rewards® Credit
                          Cardmembers can use their points for gift cards,
                          merchandise, international flights on global carriers,
                          hotel stays, rental cars, and exclusive Cardmember
                          experiences
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div class="mt-4 flex justify-center">
              <button
                class="rounded bg-yellow-400 px-4 py-2 font-bold text-black transition-colors hover:bg-yellow-500">
                Not a Rapid Rewards Member? Enroll Now
              </button>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
});

export default RewardsSummaryModal;
