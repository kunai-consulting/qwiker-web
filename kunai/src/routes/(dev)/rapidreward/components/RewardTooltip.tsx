import { component$, Slot, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { Side } from '@floating-ui/dom';

import styles from './rewardTooltip.css?inline';

export interface TooltipProps {
  title: string;
  placement?: Side;
}

export default component$<TooltipProps>((props) => {
  useStylesScoped$(styles);
  const triggerEl = useSignal<HTMLElement>();
  const floatingEl = useSignal<HTMLElement>();
  const isOpen = useSignal(false);
  const placement = props.placement || 'top';

    return (
      <div
        class='relative'
        tabIndex={0}
        onFocus$={() => {(isOpen.value = true)}}
        onBlur$={() => (isOpen.value = false)}
        >
        <span
          ref={triggerEl}
          onMouseOver$={() => (isOpen.value = true)}
          onMouseOut$={() => (isOpen.value = false)}
        >
          <Slot />
        </span>
          <div
            aria-label='Popup'
            ref={floatingEl}
            class={['floating', `${placement}`, { open: isOpen.value }, { closed: !isOpen.value }]}>
              {props.title}
          </div>
      </div>
    );
});
