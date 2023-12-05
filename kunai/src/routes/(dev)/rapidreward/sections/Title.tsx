import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class=" bg-gray-300 p-4">
      <h1 class="text-2xl font-semibold text-blue-800">Estimate Your Points</h1>
      <p class="text-sm text-blue-900">
        The amount you spend on your flight, the type of fare, your tier status,
        and the payment method you choose will all determine how many points you
        can earn in a calendar year.
      </p>
    </div>
  );
});
