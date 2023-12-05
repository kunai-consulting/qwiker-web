import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="container mx-auto my-10 max-w-7xl bg-gray-100 px-4 sm:px-6">
      <div class="flex flex-col rounded-lg p-8 sm:flex-row">
        <div class="mb-6 flex-grow ">
          <h2 class="mb-2 text-2xl font-bold">Sign up for our newsletter</h2>
          <p class="w-1/2 text-gray-600">
            Check out stories about our process, get strategic insights about
            FinTech, and connect with us around the world.
          </p>
        </div>

        <div class="w-full sm:w-auto">
          <div class="mb-4 flex flex-col items-center sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              class="mb-2 flex-grow rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:mb-0 sm:mr-4"
            />
            <button class="w-full rounded-md bg-black p-2 px-6 text-white hover:bg-gray-800 sm:w-auto">
              SUBSCRIBE
            </button>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            By signing up, you agree to our{' '}
            <a href="#" class="text-blue-500 hover:underline">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" class="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
});
