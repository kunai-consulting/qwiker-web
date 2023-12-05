import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="relative h-64 md:h-96 lg:h-screen">
      <img
        width="4678"
        height="3648"
        src="https://cdn.sanity.io/images/f9g2uuqu/production/8ea2d1bf419b3781a608fcaee2abb04c61172cf8-4678x3648.jpg?w=4678&amp;h=3648&amp;auto=format"
        alt="Child with Rocket"
        class="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div class="absolute left-0 top-0 h-full w-full bg-red-500 opacity-80 md:w-1/2">
        <div class="absolute right-0 top-0 flex h-full w-2/3 flex-col items-start justify-center p-4">
          <h1 class="mb-8 text-7xl text-white">
            Kunai Takes You From Ideation To Creation, Faster
          </h1>
          <p class="mb-8 text-3xl text-white">
            Launch digital products, build systems, and optimize processes with
            custom solutions from the top 3% global developers.
          </p>
          <button class="rounded-full bg-blue-900 px-6 py-2 text-xl font-semibold uppercase text-white shadow-md hover:shadow-lg md:px-10 md:py-3">
            Speak With A Partner
          </button>
        </div>
      </div>
    </div>
  );
});
