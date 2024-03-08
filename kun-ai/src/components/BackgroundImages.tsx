import { component$ } from '@builder.io/qwik';
import Hor from '~/media/hor-lines.svg?jsx';
import Vert from '~/media/vert-lines.svg?jsx';

export default component$(() => {
  return (
    <>
      <Hor class={'absolute right-0 top-1.5'} />
      <Vert class={'absolute right-0 top-[62rem] md:left-0'} />
      <Vert class={'absolute right-0 top-[60rem] rotate-180'} />
    </>
  );
});
