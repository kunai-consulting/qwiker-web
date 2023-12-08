import {component$} from "@builder.io/qwik";
import Hor from '/public/hor-lines.svg?jsx';
import Vert from '/public/vert-lines.svg?jsx';

export default component$(() => {
  return (
    <>
      <Hor class={'absolute top-1.5 right-0'}/>
      <Vert class={'absolute top-[88rem] left-0'}/>
      <Vert class={'absolute top-[113rem] right-0 rotate-180'}/>
    </>
  )
})