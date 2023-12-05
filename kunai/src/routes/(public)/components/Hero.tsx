import { component$ } from '@builder.io/qwik';
import AirkeyImg from '../img/fast_card_activation-2.png';
import AirkeyLogo from '../img/airkey_logo.png';

export default component$(() => {
  return (
    <div
      class="mx-auto flex items-center justify-center px-10 py-16"
      style={{
        background: `
          radial-gradient(circle at 40.75% 95.38%, rgb(255, 255, 255), transparent 42%),
          radial-gradient(circle at 96.01% 3.94%, rgb(185, 249, 214), transparent 34%),
          radial-gradient(circle at 46.88% 0.96%, rgb(92, 173, 255), transparent 81%),
          radial-gradient(circle at 50% 50%, rgb(255, 255, 255), rgb(255, 255, 255) 100%)
        `,
      }}
    >
      {/* Container */}
      <div class="container mx-auto max-w-7xl px-4 lg:px-0">
        {/* Logo */}
        <div class="flex flex-col items-center justify-center lg:items-start">
          <img
            src={AirkeyLogo}
            alt="AirKey Logo"
            width={100}
            height={100}
            class="-ml-[30px] mb-4 w-fit"
          />
        </div>
        {/* Main */}
        <div class="flex flex-col items-center justify-center lg:flex-row">
          {/* Text content */}
          <div class="text-center lg:w-1/2 lg:text-left">
            <h1 class="mb-4 text-4xl font-bold lg:mb-16 lg:text-6xl">
              Your Card is
              <br />
              Now a Key
            </h1>
            <p class="mr-8 text-xl lg:text-2xl">
              AirKey offers the security of a hardware token with the
              convenience of a credit or debit card. All customers need to do is
              tap their card to their phone.
            </p>
          </div>
          {/* Image Container */}
          <div class="relative mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
            {/* This is the container for the image and the gradient overlay */}
            <div class="relative h-auto w-auto max-w-[500px]">
              {/* Image with width and height attributes */}
              <img
                src={AirkeyImg}
                alt="Card Interaction"
                width="500" // Max width of the image
                height="500" // Height will be set automatically to maintain the aspect ratio
                class="object-cover shadow-md"
                style={{
                  borderRadius: '100px 10px 100px 10px',
                }}
              />
              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background:
                    'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.6))',
                  borderRadius: '100px 10px 100px 10px',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
