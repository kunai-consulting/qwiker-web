import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col items-center px-10 py-16 md:flex-row">
      {/* Image */}
      <div class="mb-8 w-full md:mb-0 md:w-1/2">
        <img
          width="720"
          height="560"
          src="https://ecm.capitalone.com/WCM/card/background-images/jose-met.jpg"
          alt="Lifestyle Image - Culinary experiences"
          class="h-full w-full rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Text content */}
      <div class="w-full pl-6 pr-20 md:w-1/2 md:pl-40">
        <p class="mb-2 font-medium uppercase tracking-wider text-gray-500">
          Unforgettable Events
        </p>
        <h2 class="mb-4 text-4xl font-bold leading-tight">
          Enjoy exclusive access to culinary experiences
        </h2>
        <p class="mb-4 text-lg leading-relaxed text-gray-700">
          Go beyond reservations with one-of-a-kind dining events and chef
          collabs hosted with partners like the Michelin Guide, the James Beard
          Foundation, chef partners like José Andrés and more.
        </p>
      </div>
    </div>
  );
});
