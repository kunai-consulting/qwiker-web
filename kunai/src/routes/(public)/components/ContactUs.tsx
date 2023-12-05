import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div
      class="flex min-h-screen w-full items-center justify-center p-4"
      style="background: radial-gradient(ellipse at bottom right, #a7cefe, transparent), radial-gradient(ellipse at bottom left, #b6f9d8, transparent);"
    >
      <div class="w-full max-w-4xl rounded-3xl bg-white bg-opacity-20 p-16 text-center shadow-2xl shadow-teal-100/50 outline outline-1 outline-white">
        <h2 class="mb-6 text-2xl font-bold text-gray-700 lg:text-4xl">
          Contact Us
        </h2>
        <p class="mb-8 text-base text-gray-600 lg:text-lg">
          Request a demo and one of our sales team members will schedule a live
          walkthrough.
        </p>
        <button class="rounded-full bg-black px-8 py-4 text-base font-bold text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 lg:text-lg">
          Get in touch
        </button>
      </div>
    </div>
  );
});
