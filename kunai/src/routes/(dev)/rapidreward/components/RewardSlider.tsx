import {component$, Signal} from "@builder.io/qwik";

export interface SliderProps {
  minValue: number;
  maxValue: number;
  inputAriaLabel: string;
  inputValue: Signal<number>
}

export default component$<SliderProps>((props) => {
  const { minValue, inputValue, maxValue, inputAriaLabel } = props;
  return (
    <input
      id="rangeInput"
      type="range"
      aria-label={inputAriaLabel}
      role="slider"
      class="slider w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      min={minValue}
      max={maxValue}
      value={inputValue.value}
      onInput$={(event) => {
        inputValue.value = Number(
          (event.target as any)?.value?.replace(/$ /g, ''),
        );
      }}
    />
  )
});