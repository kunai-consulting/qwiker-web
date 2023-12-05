import { component$ } from '@builder.io/qwik';

const RightArrowSVG = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    enable-background="new 0 0 50 50"
    xml:space="preserve"
    class="h-7 w-7"
  >
    <polygon points="49,25.101 25.109,1.211 20.867,5.454 37.52,22.106 1,22.106 1,28.105 37.519,28.105 20.867,44.758 25.11,49 49,25.109 48.995,25.105 "></polygon>
  </svg>
);

export default component$(() => {
  return (
    <div class="container mx-auto my-10 px-4 sm:px-6">
      <div class="bg-white px-16 py-10 text-center text-gray-900">
        <h2 class=" mb-6 font-semibold leading-none text-blue-900">
          EARNING MILES? YOU'RE EARNING LOYALTY POINTS TOWARD REWARDS AND STATUS
          TOO
        </h2>
        <h1 class=" mb-6 text-6xl leading-none text-blue-900">
          Get rewarded with the AAdvantage® program
        </h1>
        <p class="mb-8 text-base">
          Earn miles and Loyalty Points when you fly, use an AAdvantage® credit
          card for purchases, or engage with AAdvantage® partners. You can
          redeem AAdvantage® miles for your next trip or other great offers.
          Plus, your Loyalty Points count toward earning status, and additional
          benefits when you travel.
        </p>
      </div>
      <div class="flex items-center justify-center space-x-8 px-8 py-12">
        <div class="flex items-center justify-center">
          <div class="flex h-48 w-48 items-center justify-center rounded-full border-4 border-blue-900 bg-white">
            <div class="text-center">
              <div class="text-6xl font-semibold text-blue-900">1</div>
              <div class="text-lg text-blue-900">Eligible</div>
              <div class="text-lg text-blue-900">AAdvantage®</div>
              <div class="text-lg text-blue-900">mile</div>
            </div>
          </div>
        </div>
        <RightArrowSVG />
        <div class="flex items-center justify-center">
          <div class="flex h-48 w-48 items-center justify-center rounded-full border-4 border-blue-900 bg-white">
            <div class="text-center">
              <div class="text-6xl font-semibold text-blue-900">1</div>
              <div class="text-lg text-blue-900">Loyalty</div>
              <div class="text-lg text-blue-900">Point</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
