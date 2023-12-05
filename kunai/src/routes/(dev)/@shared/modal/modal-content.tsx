import type { QwikIntrinsicElements} from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';

export const ModalContent = component$(
  (props: QwikIntrinsicElements['div']) => {
    return (
      <div {...props}>
        <Slot />
      </div>
    );
  },
);
