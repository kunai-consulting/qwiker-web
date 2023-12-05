// HamburgerButton.jsx
import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  toggleMenu: QRL<() => void>;
}

export const HamburgerButton = component$<ButtonProps>((props) => {
  return (
    <button onClick$={props.toggleMenu} class="p-2 lg:hidden">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12.149H24.47M14.086 17.851h10.383"
          stroke="#25282D"
          stroke-width="1.8"
          stroke-linecap="square"
        />
      </svg>
    </button>
  );
});
