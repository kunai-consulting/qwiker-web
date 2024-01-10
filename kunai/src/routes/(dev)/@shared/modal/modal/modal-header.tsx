import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export const ModalHeader = component$(
  (props: QwikIntrinsicElements['header']) => {
    return (
      <header {...props}>
        <Slot />
      </header>
    );
  },
);
