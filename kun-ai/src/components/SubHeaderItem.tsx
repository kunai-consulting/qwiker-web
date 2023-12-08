import {component$} from '@builder.io/qwik';
// import Short from '/public/short-subtract.svg?jsx';
// import Long from '/public/long-subtract.svg?jsx';

interface SubheaderPropertied {
  text: string;
  isShort: boolean;
  class?: string;
}

export default component$<SubheaderPropertied>((props) => {
  return (
    <div class={`text-[32px] font-bold w-full text-[#D5D5D5] uppercase ${props.class ? props.class : ''}`}>
      <h2>{props.text}</h2>
      {props.isShort ? (
        // <Short height={24} width={300}/>
        <img
          height={24}
          width={300}
          alt={'subheader'}
          src='/short-subtract.svg'
        />
      ) : (
        // <Long height={24} width={560}/>
        <img
          height={24}
          width={560}
          alt={'subheader'}
          src='/long-subtract.svg'
        />
      )}
    </div>
  )
})