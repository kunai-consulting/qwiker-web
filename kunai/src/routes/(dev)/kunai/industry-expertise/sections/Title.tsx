import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <div class="container mx-auto my-10 max-w-7xl">
        <div class="flex flex-col bg-white px-4 py-6 sm:px-8 sm:py-12 md:flex-row">
          <div class="mb-8 flex flex-col justify-between md:mb-0 md:w-1/2">
            <div>
              <h4 class="mb-2 text-gray-500">Industry Expertise</h4>
              <h1 class="mb-6 text-4xl font-bold sm:text-5xl">
                Building financial software for Fortune 500s since the early
                2000s
              </h1>
            </div>
          </div>
          <div class="md:w-1/2">
            <p class="mb-4 text-xl text-gray-700 sm:text-lg">
              In 2015, after more than a decade working on trading terminals,
              small business payment solutions, and some of the world’s first
              mobile banking apps, we sold our last consulting company (Monsoon)
              to Capital One.
            </p>
            <p class="text-xl text-gray-700 sm:text-lg">
              In 2018, we realized that most consultancies were not equipped to
              service the needs of large financial institutions. So, we left to
              build a consultancy to do it ourselves.
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative min-h-1/2screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://cdn.sanity.io/images/f9g2uuqu/production/558ddd673faba99e59d750a3b1b18c00630be3b0-7012x4680.jpg?w=7012&amp;h=4680&amp;auto=format)',
        }}
      />
    </>
  );
});
