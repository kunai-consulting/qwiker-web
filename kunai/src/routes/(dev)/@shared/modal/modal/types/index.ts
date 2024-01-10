import { type Signal, type QRL } from '@builder.io/qwik';

export type ModalApi = {
  isOpen: Signal<boolean>;
  open$: QRL<() => void>;
  close$: QRL<() => void>;
};
