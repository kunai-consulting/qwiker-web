import { component$ } from '@builder.io/qwik';
import Short from '/short-subtract.svg';
import Long from '/long-subtract.svg';

interface SubheaderPropertied {
  text: string;
  isShort: boolean;
  class?: string;
}

export default component$<SubheaderPropertied>((props) => {
  return (
    <div
      class={`w-full text-[32px] font-bold uppercase text-[#D5D5D5] ${
        props.class ? props.class : ''
      }`}
    >
      <h2>{props.text}</h2>
      {props.isShort ? (
        // <Short height={24} width={300}/>
        <img height={24} width={300} alt={'subheader'} src={Short} />
      ) : (
        // <Long height={24} width={560}/>
        <img height={24} width={560} alt={'subheader'} src={Long} />
      )}
    </div>
  );
});
