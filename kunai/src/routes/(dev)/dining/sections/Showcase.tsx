import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="bg-gray-100">
      <div class="mx-auto max-w-[1216px] p-9">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Award-winning restaurants section */}
          <div class="text-center">
            <h3 class="mb-4 text-4xl">Award-winning restaurants</h3>
            <p>
              Explore a list of restaurants curated by experts, like{' '}
              <span class="font-bold">Chef José Andrés</span>, the{' '}
              <span class="font-bold">Michelin Guide</span> and the{' '}
              <span class="font-bold">James Beard Foundation</span>.
            </p>
          </div>

          {/* Exclusive reservations section */}
          <div class="text-center">
            <h3 class="mb-4 text-4xl">Exclusive reservations</h3>
            <p>
              Book hard-to-get restaurant reservations in major cities across
              the country, set aside just for rewards cardholders.
            </p>
          </div>

          {/* Culinary experiences section */}
          <div class="text-center">
            <h3 class="mb-4 text-4xl">Culinary experiences</h3>
            <p>
              Enjoy access to special events, like chef collaborations and
              unforgettable dinners curated by world-renowned chefs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
