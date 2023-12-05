import { component$ } from '@builder.io/qwik';

export const TeamBuilding = component$(() => {
  return (
    <>
      <div class="container mx-auto mb-10 mt-10 px-6">
        <h2 class="mb-16 text-center text-3xl font-bold">
          Build your team 3x faster with on-demand flexibility
        </h2>

        {/* Section 1 */}
        <div class="flex flex-wrap items-center px-10 py-16">
          {/* Text content */}
          <div class="mb-8 w-full pr-10 md:mb-0 md:w-1/2">
            <p class="mb-4 font-semibold uppercase text-gray-500">
              Built-For-You Agency Development
            </p>
            <h2 class="mb-6 text-4xl font-bold">
              You Dream It, We'll Build It
            </h2>
            <p class="mb-4 text-gray-700">
              Our deep experience in leveraging industry-leading APIs and
              practices makes it easier than ever to launch your financial
              products. Have your next innovation workshopped, built. and
              launched within your timeline. We’ll keep you updated on
              milestones, deliverables, and project expectations based on years
              of working data. Work with a partner that can take you and your
              customers from concept to product, quickly and efficiently.
            </p>
            <a href="#" class="mt-4 inline-block text-blue-500 underline">
              SEE OUR WORK →
            </a>
          </div>

          {/* Image */}
          <div class="w-full md:w-1/2">
            <img
              width="720"
              height="560"
              src="https://cdn.sanity.io/images/f9g2uuqu/production/9bf21b269791e3517a5435f725605f328093be59-6704x4474.jpg?w=6704&amp;h=4474&amp;auto=format"
              alt="Lifestyle Image - Dining benefits"
              class="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div class="flex flex-wrap items-center px-10 py-16">
          {/* Image */}
          <div class="mb-8 w-full pr-10 md:mb-0 md:w-1/2">
            <img
              width="720"
              height="560"
              src="https://cdn.sanity.io/images/f9g2uuqu/production/972245707d70702615dce61a3c34e19479f62d26-6720x3780.jpg?w=6720&amp;h=3780&amp;auto=format"
              alt="Team Collaboration"
              class="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>

          {/* Text content */}
          <div class="w-full md:w-1/2">
            <p class="mb-4 font-semibold uppercase text-gray-500">
              Out-of-the-Box Dev Team Support
            </p>
            <h2 class="mb-6 text-4xl font-bold">
              Customize and Deploy Dev Teams, Globally or Locally
            </h2>
            <p class="text-gray-700">
              Sourcing a dev team with relevant experience is expensive, time
              consuming, and unreliable. Save time on vetting and onboarding by
              working with teams of market-tested engineers. These teams are
              ready to start whenever you are and integrate seamlessly into your
              existing systems and processes. Speak with a partner to launch a
              project-ready team from anywhere around the globe.
            </p>
            <a href="#" class="mt-4 inline-block text-blue-500 underline">
              SEE OUR WORK →
            </a>
          </div>
        </div>

        {/* Section 3 */}
        <div class="flex flex-wrap items-center px-10 py-16">
          {/* Text content */}
          <div class="mb-8 w-full pr-10 md:mb-0 md:w-1/2">
            <p class="mb-4 font-semibold uppercase text-gray-500">
              Custom Small-Scale Staffing
            </p>
            <h2 class="mb-6 text-4xl font-bold">
              The Best Developers in The World, At Your Fingertips
            </h2>
            <p class="mb-4 text-gray-700">
              Get started on your projects without spending so much time on red
              tape. Our exclusive hiring platform boasts a collection of vetted
              professionals that can be called on from anywhere around the
              world. With full legal compliance, customized sourcing strategies,
              and time zone optimizations - hiring specialist developers is a
              direct, no-nonsense process. We offer contractor and
              contract-to-hire options to optimize your needs. Speak with a
              partner to get started.
            </p>
            <a href="#" class="mt-4 inline-block text-blue-500 underline">
              SEE OUR WORK →
            </a>
          </div>

          {/* Image */}
          <div class="w-full md:w-1/2">
            <img
              width="720"
              height="560"
              src="https://cdn.sanity.io/images/f9g2uuqu/production/041fc9b2544db221cd25b0425829e14360e0547b-8192x5464.jpg?w=8192&amp;h=5464&amp;auto=format"
              alt="Lifestyle Image - Dining benefits"
              class="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
});
