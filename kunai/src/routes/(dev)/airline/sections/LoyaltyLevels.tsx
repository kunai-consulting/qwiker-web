import { component$ } from '@builder.io/qwik';
// import ImageCard from '../../@shared/Card/ImageCard';

export default component$(() => {
  return (
    <div class="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-md">
      <div class="p-4 text-center">
        <h2 class="text-lg font-semibold">ENJOY MORE REWARDS MORE OFTEN</h2>
        <h1 class="my-2 text-2xl font-bold">Explore Loyalty Point Rewards</h1>
      </div>

      <div class="my-4 flex justify-center space-x-4">
        {/* This will be repeated for each point category */}
        <div class="flex flex-col items-center">
          <button class="mb-2 rounded-full bg-blue-500 px-4 py-1 text-white">
            100,000
          </button>
          <span class="text-sm">New reward level</span>
        </div>
        {/* ...repeat for other point categories */}
      </div>

      <div class="mt-4">
        <h3 class="mb-4 text-center font-semibold">
          Great job earning. Enjoy your new benefits:
        </h3>
        <div class="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <div class="rounded-lg bg-gray-100 p-4">
            <img
              src="path-to-your-image.jpg"
              alt="Benefit"
              width="0"
              height="0"
              class="mb-2 h-40 w-full rounded-lg object-cover"
            />
            <div class="text-center">
              <p class="text-sm font-semibold">Avis President's Club' status</p>
            </div>
          </div>
          {/* <ImageCard /> */}
          {/* ...repeat for other cards */}
        </div>
      </div>
    </div>
  );
});
