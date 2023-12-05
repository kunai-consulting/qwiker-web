import { component$ } from "@builder.io/qwik";
import CTA from "../../@shared/Button/CTA";

export default component$(() => {
  return (
    <div class="mx-auto mb-10 mt-10 px-6">
      <div class={`flex flex-col items-center justify-center py-20`}>
        <h2 class="mb-8 px-20 text-center text-4xl font-medium">
          Ready to launch your next fintech project with a team of world class
          developers?
        </h2>
        <CTA text="CONTACT US" buttonColor="bg-red" />
      </div>
    </div>
  );
});
