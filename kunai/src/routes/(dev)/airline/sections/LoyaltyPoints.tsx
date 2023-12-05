import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div
      class="relative flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://www.aa.com/content/images/aadvantage-program/loyalty-points/resources/images/2022/11/09_AA_Business_Portrait_01543_FINAL-scaled-e1669652331889.jpg')`,
        /* This will make the height take up the full viewport height */
        height: '50vh',
      }}
    >
      <div class="p-4 text-center md:p-8">
        <p class="text-sm uppercase">No more flight segment requirements</p>
        <h1 class="my-4 text-3xl font-bold md:text-5xl">
          Unlocking rewards is simpler than ever - just earn Loyalty Points
        </h1>
      </div>
    </div>
  );
});
