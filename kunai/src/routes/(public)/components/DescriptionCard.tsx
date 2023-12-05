import { component$ } from '@builder.io/qwik';
import DescriptionImg from '../img/description_img.png';

export default component$(() => {
  return (
    // The outer container with a full viewport height and the custom background
    <div
      class="flex min-h-screen flex-col items-center justify-center px-0 py-16 lg:flex-row lg:px-10"
      style={{
        background: `
          radial-gradient(circle at 85.32% 43.08%, #b9f9d6, transparent 16%),
          radial-gradient(circle at 59.02% 54.62%, #a7bbe2, transparent 46%),
          radial-gradient(circle at 54.97% 44.42%, #a7bbe2, transparent 39%),
          radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%)
        `,
      }}
    >
      {/* Max-width container */}
      <div class="container mx-auto max-w-7xl px-4 lg:px-0">
        <div class="flex flex-col items-center lg:flex-row">
          {/* Image with max-width of 500px */}
          <div class="mb-8 flex w-full items-center justify-center lg:mb-0 lg:mr-10 lg:max-w-[500px] lg:flex-shrink-0">
            <img
              loading="lazy"
              src={DescriptionImg}
              class="max-w-xs object-cover md:max-w-md xl:max-w-lg"
              style="max-width: full; height: auto;"
              alt="Description Photo"
              width={720}
              height={560}
            />
          </div>
          {/* Text content */}
          <div class="max-w-3xl rounded-3xl bg-white bg-opacity-20 p-8 shadow-2xl shadow-teal-100/50 outline outline-1 outline-white lg:p-20">
            <h2 class="mb-4 text-2xl font-bold leading-tight lg:text-4xl">
              World-class Security in a Tap
            </h2>
            <p class="text-base leading-relaxed text-gray-700 lg:text-lg">
              AirKey's proprietary technology uses cryptography and near-field
              communication (NFC) to enable a credit or debit card to securely
              communicate with a smartphone.
            </p>
            <br />
            <p class="text-base leading-relaxed text-gray-700 lg:text-lg">
              When the card is tapped against a customer's phone, AirKey
              validates that the user actually possesses the card and builds
              device trust.
            </p>
            <br />
            <p class="text-base leading-relaxed text-gray-700 lg:text-lg">
              AirKey's technology is protected by a robust global patent
              portfolio, including over 150 granted patents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
