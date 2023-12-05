import { component$ } from "@builder.io/qwik";
import CTA from "../../../@shared/Button/CTA";

export default component$(() => {
  return (
    <div class="mx-auto mb-10 mt-10 bg-gray-100 px-6">
      <div class={`flex flex-col items-center justify-center py-20`}>
        <h2 class="mb-8 px-20 text-center text-4xl font-medium">
          Build and Launch Your Next Project With Kunai
        </h2>
        <p class="mb-10 text-center text-xl">
          Share your vision with a member of our team to get started.
        </p>
        <CTA text="CONTACT US" buttonColor="bg-red" />
      </div>
    </div>
  );
});
