import { component$ } from "@builder.io/qwik";

interface ContactProps {
  text?: string;
  buttonColor?: string;
}

export default component$<ContactProps>((props) => {
  return (
    <div>
      <button
        class={`rounded-xl ${props.buttonColor}-500 px-8 py-3 text-sm uppercase font-semibold text-white shadow-md hover:${props.buttonColor}-600`}
      >
        {props.text}
      </button>
    </div>
  );
});
