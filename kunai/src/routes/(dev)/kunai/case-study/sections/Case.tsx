import {component$, Slot} from "@builder.io/qwik";

interface TaskProps {
  firstArticleTitle: string;
  firstArticle: any;
  additionalContent?: string;
  secondArticleTitle: string;
  firstArticleImg?: any;
  secondArticleImg: any;
}

export default component$<TaskProps>((props) => {
  return (
    <div class='!flex !flex-col !mt-6 !gap-4 md:!gap-12'>
      <div class='flex flex-col gap-[15px]'>
        <div
          class='w-full justify-between flex items-center py-0 px-10 gap-[50px] !flex-col-reverse md:gap-8 md:px-[120px] md:!flex-row-reverse lg:min-h-[225px] xl:px-20'>
          <div class='hidden md:block md:w-[45%] lg:w-[35%]'>
            <div class='h-auto w-full rounded-[6px] relative overflow-hidden'>
              {props.firstArticleImg || null}
            </div>
          </div>
          <div class='pl-0 w-full md:p-[unset] md:w-[55%] lg:w-[60%]'>
            <div class='text-lg leading-5 -tracking-[.108px] text-[#fa6060] font-bold mx-0 mt-0 mb-5 md:text-[24px]'>
              {props.firstArticleTitle}
            </div>
            <div
              class='text-xs -tracking-[.072px] leading-5 text-[#2d3654] grid gap-2.5 font-normal md:text-[18px] md:leading-7'>
              {props.firstArticle}
            </div>
            {props.additionalContent && <div class='text-xs -tracking-[.072px] leading-5 p-0 text-[#2d3654] md:hidden'>
              {props.additionalContent}
            </div>}
          </div>
        </div>
        {props.additionalContent &&
          <div class='hidden py-0 text-[#2d3654] md:block text-lg -tracking-[.108px] px-[120px] lg:px-20'>
            {props.additionalContent}
          </div>}
      </div>
      <div class='flex flex-col gap-[15px]'>
        <div
          class='w-full justify-between flex items-center py-0 px-10 gap-[50px] !flex-col-reverse md:gap-8 md:px-[120px] md:!flex-row lg:min-h-[225px] xl:px-20'>
          <div class='w-[90%] md:w-[45%] lg:w-[35%]'>
            <div class='h-auto w-full rounded-[6px] relative overflow-hidden'>
              {props.secondArticleImg}
            </div>
          </div>
          <div class='pl-0 w-full md:p-[unset] md:w-[55%] lg:w-[60%]'>
            <div
              class='text-lg leading-5 -tracking-[.108px] text-[#fa6060] font-bold mx-0 mt-0 mb-5 md:text-[24px]'>
              {props.secondArticleTitle}
            </div>
            <div
              class='text-xs -tracking-[.072px] leading-5 text-[#2d3654] grid gap-2.5 font-normal md:text-[18px] md:leading-7'>
              <Slot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})