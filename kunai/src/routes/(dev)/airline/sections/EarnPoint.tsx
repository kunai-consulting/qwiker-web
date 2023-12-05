import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="container mx-auto my-10 rounded-b-3xl px-4 sm:px-6">
      <div class="relative overflow-hidden rounded-3xl bg-blue-600 p-10 text-white">
        <div class="mx-auto max-w-4xl">
          <div class="grid grid-cols-2 gap-4">
            <div class="cols-span-1 left-0 top-0 flex h-full w-1/2 items-center justify-end">
              <div class=" h-3/4 w-3/4 overflow-hidden rounded-full">
                <img
                  width="165"
                  height="202"
                  src="https://www.aa.com/content/images/aadvantage-program/loyalty-points/resources/images/2022/11/608166787-scaled.jpg"
                  alt="Person"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
            <div class="col-span-1 mb-6 text-center">
              <h2 class="text-lg uppercase">How to earn loyalty points</h2>
              <h1 class="my-2 text-4xl font-bold">
                Earn when you fly and when you buy
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="space-y-2">
              <div class="flex items-center rounded-full bg-blue-400 px-6 py-2">
                <div class="text-6xl font-bold text-blue-300">01</div>
                <h3 class="ml-3 text-lg text-white">
                  Travel on eligible airlines
                </h3>
              </div>
              <p>
                Fly on American Airlines, American Eagle®, any oneworld®
                airline and other partner airlines.
              </p>
              <a href="#" class="text-blue-200 underline">
                Explore more
              </a>
            </div>
            <div class="space-y-2">
              <div class="flex items-center rounded-full bg-blue-400 px-6 py-2">
                <div class="text-6xl font-bold text-blue-300">02</div>
                <h3 class="ml-3 text-lg text-white">
                  AAdvantage® credit card purchases
                </h3>
              </div>
              <p>
                American Airlines AAdvantage® credit card members will earn one
                Loyalty Point for every one eligible AAdvantage® mile earned
                from purchases using their U.S. or internationally-issued
                AAdvantage® credit card.
              </p>
              <a href="#" class="text-blue-200 underline">
                Explore more
              </a>
            </div>
            <div class="space-y-2">
              <div class="flex items-center rounded-full bg-blue-400 px-6 py-2">
                <div class="text-6xl font-bold text-blue-300">03</div>
                <h3 class="ml-3 text-lg text-white">AAdvantage® shopping</h3>
              </div>
              <p>
                Shop, dine, travel and more with our partners and watch your
                miles and Loyalty Points add up faster.
              </p>
              <a href="#" class="text-blue-200 underline">
                Explore more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
