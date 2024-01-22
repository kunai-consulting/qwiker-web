import { component$ } from '@builder.io/qwik';

export const TestimonialCard = component$(
  (props: {
    name: string;
    position: string;
    img: string;
    testimonial: string;
  }) => {
    return (
      <div class="flex w-72 flex-col rounded-none">
        {props.img ? (
          <div class="mb-0 h-[300px] w-full md:mb-4 md:w-auto">
            <img
              src={props.img}
              alt={props.name}
              width="288"
              height="288"
              class="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div class="h-[295px] w-full bg-black"></div>
        )}
        <div class="flex flex-col gap-[6px] !px-2.5 !pb-2.5 ">
          <p class="mb-10 text-base sm:mb-5" style="letter-spacing: -1px;">
            {props.testimonial}
          </p>
          <p
            class="mb-0 p-0 text-lg font-semibold leading-normal md:text-2xl"
            style="letter-spacing: -1px;"
          >
            {props.name}
          </p>
          <p class="text-base font-semibold uppercase leading-normal tracking-wide sm:text-sm">
            {props.position}
          </p>
        </div>
      </div>
    );
  },
);
