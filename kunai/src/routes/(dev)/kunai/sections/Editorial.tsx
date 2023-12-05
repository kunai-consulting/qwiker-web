import { component$ } from '@builder.io/qwik';

export const Editorial = component$(() => {
  return (
    <>
      <section class="mx-auto mb-10 mt-10 bg-red-100 px-6">
        <div class="mx-auto max-w-[1216px] p-4">
          <div class="mb-10">
            <h2 class="text-3xl font-bold">Who is Kunai</h2>
          </div>
          <div class="grid gap-10 md:grid-cols-3">
            <div class="flex flex-col items-center px-10">
              <img
                width="58"
                height="51"
                src="https://cdn.sanity.io/images/f9g2uuqu/production/13ce942cbffd6215ac026cfdb22b7c2a7840c9e1-58x51.svg?w=58&amp;h=51&amp;auto=format"
                alt="icon1"
                class="mb-4 h-12 w-12"
              />
              <h3 class="mb-4 text-center text-xl font-semibold">
                Built-For-You Agency Development
              </h3>
              <p class="text-center">
                From the back of a napkin to the app store. If you dream it,
                we'll build it.
              </p>
            </div>

            <div class="flex flex-col items-center px-10">
              <img
                width="74"
                height="74"
                src="https://cdn.sanity.io/images/f9g2uuqu/production/45181f0cb9c2fb812a3adda71fc4fafe593af418-74x74.svg?w=74&amp;h=74&amp;auto=format"
                alt="icon2"
                class="mb-4 h-12 w-12"
              />
              <h3 class="mb-4 text-center text-xl font-semibold">
                Out-Of-The-Box Dev Team Support
              </h3>
              <p class="text-center">
                Teams of elite developers ready to work from all over the world.
                Works out of the box!
              </p>
            </div>

            <div class="flex flex-col items-center px-10">
              <img
                width="51"
                height="51"
                src="https://cdn.sanity.io/images/f9g2uuqu/production/dc115003484808358d2a08fe5440ddedb47615b2-51x51.svg?w=51&amp;h=51&amp;auto=format"
                alt="icon3"
                class="mb-4 h-12 w-12"
              />
              <h3 class="mb-4 text-center text-xl font-semibold">
                Custom Small-Scale Staffing
              </h3>
              <p class="text-center">
                Specialist and all-rounder developers where you need them, when
                you need them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
