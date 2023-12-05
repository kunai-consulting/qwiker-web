import { component$ } from '@builder.io/qwik';

interface FeatureCardProps {
  key: string;
  icon: string;
  img: string;
  title: string;
  text: string;
}

export default component$<FeatureCardProps>((props) => {
  return (
    <div
      class="flex min-h-screen flex-col items-center justify-center px-0 py-8 lg:flex-row lg:px-10 lg:py-16"
      style={{
        background: `
           radial-gradient(circle at 71.68% 46.44%, #a7bbe2, transparent 26%),
           radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%)
        `,
      }}
    >
      <div class="container mx-auto max-w-7xl">
        {/* Content */}
        <div class="flex flex-col-reverse items-center lg:flex-row lg:items-start">
          {/* Text content */}
          <div class="w-full px-6 lg:w-1/2 lg:px-4 xl:px-12">
            <img
              loading="lazy"
              src={props.icon}
              alt="Feature Icon"
              class="mb-4 h-20 w-20 rounded-3xl shadow-2xl shadow-teal-300/50"
              width={80}
              height={80}
            />
            <h2 class="mb-4 text-2xl font-bold leading-tight lg:text-4xl">
              {props.title}
            </h2>
            <p class="text-base leading-relaxed text-gray-700 lg:text-lg">
              {props.text}
            </p>
          </div>
          {/* Image Container */}
          <div class="mb-6 flex h-full w-full items-center justify-center lg:mb-0 lg:w-1/2">
            {/* Image */}
            <img
              loading="lazy"
              src={props.img}
              alt="Feature Photo"
              class="max-w-xs rounded-3xl object-cover shadow-md md:max-w-md xl:max-w-lg"
              width={720}
              height={560}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
