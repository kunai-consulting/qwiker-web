import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export const ModalFooter = component$(
  (props: QwikIntrinsicElements['footer']) => {
    return (
      <footer {...props}>
        <Slot />
      </footer>
    );
  },
);
