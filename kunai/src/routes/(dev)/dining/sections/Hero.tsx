import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="relative flex h-screen items-center justify-center bg-app-hero-mobile bg-cover bg-center md:bg-app-hero-tablet lg:bg-app-hero-desktop">
      <div class="text-center">
        <h1 class="mb-4 text-6xl font-extrabold text-gray-800">
          Capital One Dining
        </h1>
        <p class="mb-6 text-2xl text-gray-700">
          Unforgettable dining experiences
        </p>
        <a href="https://dining.capitalone.com">
          <button class="rounded-lg bg-blue-500 px-8 py-3 text-lg font-bold text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600">
            Reserve a Table
          </button>
        </a>
      </div>
    </div>
  );
});
