import { component$ } from "@builder.io/qwik";

interface DividerProps {
  color?: string;
}

export default component$<DividerProps>((props) => {
  return (
    <hr class={`my-4 border-t border-${props.color ? props.color : "black"}`} />
  );
});
