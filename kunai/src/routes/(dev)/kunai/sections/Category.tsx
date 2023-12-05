import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="  mb-10 mt-10 px-6">
      <div
        class="relative min-h-1/2screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://kunaico.com/static/8614c2e9f1ce1593ac8a5ccad29b06b2/45232/people-doing-a-hand-stack-at-a-meeting.jpg)',
        }}
      >
        <div class="absolute inset-0 grid grid-cols-1 gap-10 bg-black opacity-50 md:grid-cols-4"></div>

        <div class="absolute left-0 top-0 grid h-full w-full grid-cols-1 gap-10 p-20 md:grid-cols-4">
          <div class="flex flex-col">
            <h2 class="mb-4 mt-auto text-3xl font-bold text-white">Services</h2>
            <p class="mb-6 text-white">
              Our experience covers everything from detailed product design and
              development to advanced BI dashboards.
            </p>
            <a href="#" class="text-white">
              DISCOVER →
            </a>
          </div>

          <div class="flex flex-col">
            <h2 class="mb-4 mt-auto text-3xl font-bold text-white">
              Industry Expertise
            </h2>
            <p class="mb-6 text-white">
              Ensure success for your solution with our experience in a variety
              of industries ranging from core banking to cryptocurrency.
            </p>
            <a href="#" class="text-white">
              DISCOVER →
            </a>
          </div>

          <div class="flex flex-col">
            <h2 class="mb-4 mt-auto text-3xl font-bold text-white">Our Work</h2>
            <p class="mb-6 text-white">
              Review detailed case studies of our past client work and read how
              our consulting transformed their businesses.
            </p>
            <a href="#" class="text-white">
              DISCOVER →
            </a>
          </div>

          <div class="flex flex-col">
            <h2 class="mb-4 mt-auto text-3xl font-bold text-white">
              Platforms
            </h2>
            <p class="mb-6 text-white">
              Read about our technology tools and strategic partners that we use
              to deliver custom solutions.
            </p>
            <a href="#" class="text-white">
              DISCOVER →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
