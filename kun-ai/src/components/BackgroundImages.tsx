import { component$ } from '@builder.io/qwik';
import Hor from '/public/hor-lines.svg?jsx';
import Vert from '/public/vert-lines.svg?jsx';

export default component$(() => {
  return (
    <>
      <Hor class={'absolute right-0 top-1.5'} />
      <Vert class={'absolute left-0 top-[88rem]'} />
      <Vert class={'absolute right-0 top-[113rem] rotate-180'} />
    </>
  );
});
