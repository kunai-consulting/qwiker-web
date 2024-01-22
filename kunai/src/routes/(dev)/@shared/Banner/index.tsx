import { component$ } from '@builder.io/qwik';

interface Props {
  variant: string;
  heading: string;
  description: Array<any>;
  image: string;
  overlay: boolean;
  button: any;
}

export const Banner = component$<Props>(
  ({
    variant = 'default',
    heading = '',
    description = [],
    image = '',
    overlay = false,
    button = undefined,
  }) => {
    console.log(variant);
    return (
      <section class="relative flex">
        <div
          class={`relative z-[100] w-full ${
            overlay && 'bg-black bg-opacity-50'
          }`}
        >
          <div
            role="banner"
            class={`mx-auto flex flex-col ${
              variant === 'default'
                ? 'mx-auto max-w-7xl gap-5 px-16 py-20 text-white'
                : 'max-w-7xl gap-5 px-12 py-28 text-white'
            }`}
          >
            <div
              class={`mb-2 text-2xl font-semibold leading-loose md:mb-4 md:w-[75%] md:text-4xl`}
            >
              {heading}
            </div>
            {description.map((item, index: number) => (
              <div
                class="w-full text-base font-normal leading-normal md:w-[60%] md:text-xl md:leading-relaxed"
                key={index}
              >
                {item}
              </div>
            ))}
            {button && <div> {button} </div>}
          </div>
        </div>
        <img
          src={image}
          class="absolute h-full w-full object-cover"
          width={1365}
          height={487}
        />
      </section>
    );
  },
);
