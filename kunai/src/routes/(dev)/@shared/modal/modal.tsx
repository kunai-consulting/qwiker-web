import { Slot, component$ } from '@builder.io/qwik';
// TODO: this is temporary since modal is not exported from qwik-ui
import {
  Modal as QwikUiModal,
  ModalContent as QwikUiModalContent,
  ModalFooter as QwikUiModalFooter,
  ModalHeader as QwikUiModalHeader,
  type ModalProps as QwikUiModalProps,
} from './modal/index';

export type ModalProps = QwikUiModalProps;

export const ModalContent = component$(() => (
  <QwikUiModalContent>
    <Slot />
  </QwikUiModalContent>
));
export const ModalHeader = component$(() => (
  <QwikUiModalHeader>
    <Slot />
  </QwikUiModalHeader>
));

export const ModalFooter = component$(() => (
  <QwikUiModalFooter>
    <Slot />
  </QwikUiModalFooter>
));

export const Modal = component$<ModalProps>(
  ({ 'bind:show': show, ...props }) => {
    return (
      <>
        <QwikUiModal bind:show={show} {...props}>
          <Slot />
        </QwikUiModal>
      </>
    );
  },
);
