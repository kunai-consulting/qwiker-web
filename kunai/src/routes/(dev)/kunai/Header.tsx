import {
  component$,
  useSignal,
  type QwikIntrinsicElements,
  $,
} from '@builder.io/qwik';
import KunaiIcon from '../@shared/Icon/kunai-icon';
import { HamburgerButton } from '../@shared/Button/HamburgerButton';
import { ModalHeader, Modal, ModalContent } from '../@shared/modal';
import { Link } from '@builder.io/qwik-city';

export function CloseIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="020617"
        d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

export default component$(() => {
  const showSig = useSignal(false);
  const onClick = $(() => {
    showSig.value = true;
    console.log('clicked');
  });
  const baseUrl = import.meta.env.VITE_BASE_URL
    ? import.meta.env.VITE_BASE_URL + '/'
    : '';
  return (
    <div class="container mx-auto max-w-7xl px-4">
      <header class="flex flex-col py-4">
        <nav class="hidden justify-end space-x-4 py-2 lg:flex">
          <a href="#" class="text-red-500 hover:underline">
            Careers
          </a>
          <a href="#" class="text-red-500 hover:underline">
            About Us
          </a>
          <a href="#" class="text-red-500 hover:underline">
            Contact
          </a>
        </nav>
        <div class="flex items-center justify-between">
          <a href={'kunai'}>
            <KunaiIcon height={60} width={140} dark={true} />
          </a>
          <nav class="hidden space-x-4 lg:flex">
            <Link
              href={'/' + baseUrl + 'kunai/services'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              Services
            </Link>
            <Link
              href={'/' + baseUrl + 'kunai/industry-expertise'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              Industry Expertise
            </Link>
            <Link
              href={'/' + baseUrl + 'kunai/our-work'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              Our Work
            </Link>
            <Link
              href={'/' + baseUrl + 'kunai/talent-staffing'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              Talent Staffing
            </Link>
            <Link
              href={'/' + baseUrl + 'kunai/platforms'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              Platforms
            </Link>
            <Link
              href={'/' + baseUrl + 'kunai/news'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              News
            </Link>
            <Link
              href={'/' + baseUrl + 'kunai/insights'}
              class="border-b-2 border-transparent hover:border-current hover:text-red-500"
            >
              Insights
            </Link>
          </nav>
          <HamburgerButton toggleMenu={onClick} />

          <Modal
            bind:show={showSig}
            class="mx- 0 mt-0 h-[1365px] w-full rounded-b-lg bg-white p-[20px] backdrop:backdrop-brightness-50 "
          >
            <ModalHeader>
              <div class="flex items-center justify-between">
                <KunaiIcon height={60} width={140} dark={true} />
                <button
                  onClick$={() => (showSig.value = false)}
                  class="absolute right-6 top-[26px]"
                >
                  <CloseIcon class="h-8 w-8" />
                </button>
              </div>
            </ModalHeader>
            <ModalContent class="flex flex-col space-y-4 overflow-y-auto pt-10">
              <h2 class="text-xl font-bold text-black">Services</h2>
              <h2 class="text-xl font-bold text-black">Industry Expertise</h2>
              <h2 class="text-xl font-bold text-black">Our Work</h2>
              <h2 class="text-xl font-bold text-black">Talent Staffing</h2>
              <h2 class="text-xl font-bold text-black">Platforms</h2>
              <h2 class="text-xl font-bold text-black">News</h2>
              <h2 class="text-xl font-bold text-black">Insights</h2>
              <div class="flex flex-col space-y-4 overflow-y-auto pt-10">
                <h2 class="text-xl  text-black">Careers</h2>
                <h2 class="text-xl  text-black">About Us</h2>
                <h2 class="text-xl  text-black">Contact</h2>
              </div>
            </ModalContent>
          </Modal>
        </div>
      </header>
    </div>
  );
});
