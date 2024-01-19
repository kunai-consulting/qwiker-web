import {$, component$, type QRL, Slot} from "@builder.io/qwik";
import RedArrow from '~/routes/(public)/img/red_arrow.svg?jsx'

interface EventCardProps {
  cardProperties: { date: string, title: string, location: string, buttonTitle?: string }
}

export default component$<EventCardProps>((props) => {
  const onclick = $(() =>
    console.log('click')
  );

  const Button = ({title = 'See details', onClick}: {
    title?: string,
    onClick: QRL<() => void>
  }) => {
    return (
      <button
        class={`border-none text-[#ff4a4a] items-center flex !pl-0 gap-[7px] p-5 text-[16px] font-semibold uppercase absolute bottom-[2%]`}
        onClick$={onClick}
      >
        {title}
        <RedArrow class='ml-[7px] w-5 h-2.5'/>
      </button>
    )
  }

  return (
    <div
      class='flex flex-col bg-white break-words border-none rounded-[20px] relative cursor-pointer w-full max-w-full'>
      <div class='overflow-hidden rounded-t-[20px] rounded-b-none'>
        <div class='overflow-hidden relative w-full h-[11rem] md:h-[175px]'>
          <Slot/>
        </div>
      </div>
      <div class='flex-auto !p-6'>
        <div class='!pb-6'>
          <h6
            class='mt-0 mb-2 !text-[#F53535] leading-5 -tracking-[.096px] font-semibold text-[16px]'>{props.cardProperties.date}</h6>
          <h5
            class='mt-0 mb-2 leading-[30px] -tracking-[.12px] font-semibold text-xl text-[#25282d]'>{props.cardProperties.title}</h5>
          <h6
            class='mt-0 mb-2 leading-[30px] -tracking-[.12px] font-normal text-xl text-[#25282d]'>{props.cardProperties.location}</h6>
        </div>
        <Button onClick={onclick} title={props.cardProperties.buttonTitle}/>
      </div>
    </div>
  )
})