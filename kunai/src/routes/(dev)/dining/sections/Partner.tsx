import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col-reverse items-center bg-gray-100 px-10 py-16 md:flex-row">
      {/* Text content */}
      <div class="w-full pl-6 pr-20 md:w-1/2 md:pl-40">
        <p class="mb-2 font-medium uppercase tracking-wider text-gray-500">
          Extraordinary Partners
        </p>
        <h2 class="mb-4 text-4xl font-bold leading-tight">
          Let experts lead the way
        </h2>
        <p class="mb-4 text-lg leading-relaxed text-gray-700">
          Indulge in acclaimed dining while being one of the first to discover
          up-and-coming destinations and beloved favorites thanks to
          recommendations from culinary legends, like Chef José Andrés.
        </p>
      </div>
      {/* Image */}
      <div class="mb-8 w-full md:mb-0 md:w-1/2">
        <img
          width="720"
          height="560"
          src="https://ecm.capitalone.com/WCM/card/background-images/dining-and-entertainment/joseandres_ourlocalcommons_nowine_original.jpg"
          alt="Lifestyle Image - Dining benefits"
          class="h-full w-full rounded-lg object-cover shadow-md"
        />
      </div>
    </div>
  );
});
