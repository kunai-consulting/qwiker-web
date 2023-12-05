import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="flex flex-col-reverse items-center justify-center bg-gray-100 px-10 py-24 md:flex-row lg:py-40">
      <div class="mb-4 w-full max-w-2xl text-left md:mb-0 md:w-1/2 lg:px-16 lg:py-8">
        <h2 class="mb-4 text-5xl font-thin text-gray-800">
          Not a cardholder yet?
        </h2>
        <p class="mb-4 text-lg text-gray-700">
          All eligible rewards cardholders* have access to Capital One Dining.
          If you love travel and great food, check out{' '}
          <a
            href="#"
            class="text-blue-500 underline transition duration-300 ease-in-out hover:text-blue-600"
          >
            Venture X
          </a>{' '}
          for premium travel rewards and{' '}
          <a
            href="#"
            class="text-blue-500 underline transition duration-300 ease-in-out hover:text-blue-600"
          >
            Savor
          </a>{' '}
          to get rewarded for ordering in and dining out.
        </p>
        <a
          href="#"
          class="text-blue-500 underline transition duration-300 ease-in-out hover:text-blue-600"
        >
          Compare Other Rewards Cards
        </a>
      </div>

      <div class="flex w-full max-w-2xl items-center justify-center md:w-1/2">
        <img
          width="312"
          height="255"
          src="https://ecm.capitalone.com/WCM/card/products/desktop-e4h-cardart.png"
          alt="Card Images"
          class="my-8 h-auto max-w-full shadow-lg md:my-0"
        />
      </div>
    </section>
  );
});
