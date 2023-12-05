import { component$ } from '@builder.io/qwik';
import Testimonial from '../img/testimonial_img.png';

export default component$(() => {
  return (
    <div class="-mt-[25vh] flex min-h-screen w-full items-center justify-center">
      <div class="w-full text-center">
        <img
          loading="lazy"
          src={Testimonial}
          width="96"
          height="96"
          alt={`Testimonial by`}
          class="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
        />
        <p class="mb-2 text-xl font-semibold">CUSTOMER TESTIMONIAL</p>
        <blockquote class="text-lg italic">
          “I activated my card with AirKey. I don’t think it could be any easier
          than that.”
        </blockquote>
      </div>
    </div>
  );
});
