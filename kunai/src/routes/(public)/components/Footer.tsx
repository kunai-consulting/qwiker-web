import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="w-full bg-black py-4 text-white">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center p-6 md:justify-between">
        <div class="mb-4 flex flex-wrap justify-center gap-4 md:mb-0 md:gap-8">
          <a
            href="https://www.capitalone.com/privacy/"
            class="text-xs hover:underline md:text-sm"
          >
            Privacy
          </a>
          <a
            href="https://www.capitalone.com/digital/identity-protection/"
            class="text-xs hover:underline md:text-sm"
          >
            Security
          </a>
          <a
            href="https://www.capitalone.com/digital/terms-conditions/"
            class="text-xs hover:underline md:text-sm"
          >
            Terms and Conditions
          </a>
          <a
            href="https://ecm.capitalone.com/WCM/digital/pdfs/2023-patriot-act-cert-9.22.23.pdf"
            class="text-xs hover:underline md:text-sm"
          >
            Patriot Act
          </a>
          <a
            href="https://www.capitalone.com/military/"
            class="text-xs hover:underline md:text-sm"
          >
            Service members Civil Relief Act (SCRA)
          </a>
        </div>
        <span class="text-xs md:text-sm">© 2023 AirKey®</span>
      </div>
    </footer>
  );
});
