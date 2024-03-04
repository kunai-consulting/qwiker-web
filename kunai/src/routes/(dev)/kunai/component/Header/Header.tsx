import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import KunaiIcon from '../../../@shared/Icon/kunai-icon';
import { HamburgerButton } from '../../../@shared/Button/HamburgerButton';
import { Modal, ModalContent, ModalHeader } from '../../../@shared/modal/modal';
import { useLocation } from '@builder.io/qwik-city';
import './style.css';

export const CloseIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.38999 8.40707C8.63978 8.15711 8.97851 8.01668 9.33171 8.01668C9.68491 8.01668 10.0236 8.15711 10.2734 8.40707L15.9917 14.1311L21.7099 8.40707C21.8328 8.27972 21.9798 8.17814 22.1423 8.10826C22.3048 8.03839 22.4796 8.0016 22.6564 8.00007C22.8333 7.99853 23.0087 8.03226 23.1724 8.0993C23.3361 8.16634 23.4848 8.26535 23.6099 8.39054C23.7349 8.51573 23.8338 8.6646 23.9008 8.82846C23.9678 8.99232 24.0015 9.1679 23.9999 9.34493C23.9984 9.52197 23.9617 9.69693 23.8919 9.85961C23.8221 10.0223 23.7206 10.1694 23.5934 10.2924L17.8751 16.0164L23.5934 21.7404C23.836 21.9919 23.9702 22.3287 23.9672 22.6783C23.9642 23.0279 23.8241 23.3623 23.5771 23.6095C23.3302 23.8567 22.9961 23.9969 22.6468 24C22.2976 24.003 21.9611 23.8686 21.7099 23.6257L15.9917 17.9017L10.2734 23.6257C10.0222 23.8686 9.68575 24.003 9.3365 24C8.98726 23.9969 8.65318 23.8567 8.40622 23.6095C8.15925 23.3623 8.01917 23.0279 8.01613 22.6783C8.0131 22.3287 8.14736 21.9919 8.38999 21.7404L14.1082 16.0164L8.38999 10.2924C8.14028 10.0424 8 9.70329 8 9.34973C8 8.99618 8.14028 8.6571 8.38999 8.40707Z"
        fill="#374151"
      />
    </svg>
  );
};

export default component$(() => {
  const showSig = useSignal(false);
  const showIcon = useSignal(false);
  // const showAnimation = useSignal(false);
  const location = useLocation();
  const isHomepage =
    location.url.pathname === '/' || location.url.pathname === '/kunai/';

  const NAVIGATION_LINKS = [
    { title: 'About', url: '/about' },
    { title: 'Work', url: '/work' },
    // { title: "Kun.AI", url: "/kun-ai" },
    { title: 'Events', url: '/events' },
    { title: 'Thoughts', url: '/thoughts' },
    { title: 'Careers', url: '/careers' },
    { title: 'Contact', url: '/contact' },
  ];

  useVisibleTask$(() => {
    if (isHomepage) {
      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateIconVisibility = () => {
        showIcon.value = lastScrollY > 1;
      };

      const onScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateIconVisibility();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll);

      // Cleanup
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      showIcon.value = true;
    }
  });

  return (
    <>
      <header class="sticky top-0 z-50 flex h-[76px] w-full items-center justify-between bg-white py-2 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <a
          class={`absolute left-0 transition-all duration-1000 ${
            !showIcon.value && 'left-1/2 -translate-x-1/2 transform'
          } flex cursor-pointer items-center gap-2`}
          style={
            showIcon.value ? '' : { willChange: 'transform', width: 'auto' }
          }
          href=""
          // onClick$={() => nav('/')}
        >
          <KunaiIcon dark={true} width={140} height={60} />
        </a>
        <div class="flex flex-1 items-center justify-end px-3">
          {showIcon.value && (
            <div class="flex items-stretch justify-end gap-10">
              <button
                onClick$={(e) => {
                  e.preventDefault();
                  showSig.value = true;
                  //showAnimation.value = true;
                }}
                class="px-3 py-1"
              >
                <HamburgerButton />
              </button>
            </div>
          )}
        </div>
      </header>
      <Modal
        bind:show={showSig}
        /* TODO: Need to figure how to add fade in animation */
        // class={`${
        //   showAnimation.value && 'fade-in-right'
        // } left-auto m-0 h-full bg-white p-4 text-slate-950 backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100`}
        class={`left-auto m-0 min-h-screen bg-white p-4 text-slate-950 backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100`}
      >
        <ModalHeader>
          <div class="flex w-full flex-1 items-center justify-between">
            <KunaiIcon dark={true} width={140} height={60} />
            <div class="flex items-stretch ">
              <button
                onClick$={() => {
                  showSig.value = false;
                  //showAnimation.value = false;
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </ModalHeader>
        <ModalContent>
          <div class="flex w-[400px] flex-grow overflow-y-auto p-4">
            <div class="flex flex-grow flex-col justify-end">
              {NAVIGATION_LINKS.map((value, index) => (
                <a
                  key={index}
                  href={'/kunai' + value.url}
                  class="pb-4 text-black"
                >
                  {value.title}
                </a>
              ))}
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
});
