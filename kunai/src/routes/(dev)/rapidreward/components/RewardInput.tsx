import {component$, $, useStylesScoped$, Signal} from '@builder.io/qwik';
import styles from './rewardInput.css?inline';
import type { QwikIntrinsicElements } from '@builder.io/qwik'

function PlusIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill='white'><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
  )
}
function MinusIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill='white'><path d="M0 10h24v4h-24z"/></svg>
  )
}

export interface InputProps {
  inputValue: Signal<number>;
  withPrefix?:  boolean;
  minValue: number;
  maxValue: number;
  inputAriaLabel: string;
}

export default component$<InputProps>((props) => {
  const decrementValue = $(() => {
    if (props.inputValue.value > props.minValue) {
      props.inputValue.value -= 1;
    }
  });
  const incrementValue = $(() => {
    if (props.inputValue.value < props.maxValue) {
      props.inputValue.value += 1;
    }
  });

  const checkAndSetValue = $((value: number) => {
    if (value > props.maxValue) {
      props.inputValue.value = props.maxValue;
    } else {
      props.inputValue.value = value;
    }
  });

  const prefClass = props.withPrefix ? 'pref' : '';

  useStylesScoped$(styles);
  return (
    <div class="custom-number-input flex flex-row mr-2">
      <button aria-label='Minus Icon' onClick$={decrementValue} class="bg-blue-500 text-white hover:bg-blue-700 w-6 rounded-l cursor-pointer flex flex-col items-center justify-center">
        <MinusIcon/>
      </button>
      <div class={`prefix ${prefClass}`}>
        <input type="number" class="w-28 border-x-0 border-2 border-gray-300 text-center flex items-center"
               onInput$={(event) => props.inputValue.value = +(event.target as any)?.value}
               onBlur$={(event) => checkAndSetValue(+(event.target as any)?.value)}
               aria-label={props.inputAriaLabel}
               value={props.inputValue.value}/>
      </div>
      <button aria-label='Plus Icon' onClick$={incrementValue} class="bg-blue-500 text-white hover:bg-blue-700 w-6 rounded-r cursor-pointer flex flex-col items-center justify-center">
        <PlusIcon/>
      </button>
    </div>
  )
})