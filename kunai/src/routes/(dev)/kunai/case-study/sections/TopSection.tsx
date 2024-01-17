import {component$} from "@builder.io/qwik";

interface TopSectionProps {
  title: string,
  subtitle: string,
  slide: any
}

export default component$<TopSectionProps>((props) => {
  return (
    <>
      <div class='h-[380px] absolute w-full md:hidden'
           style={{background: 'linear-gradient(134deg, #142742 39.16%, #21426d 76.07%)'}}/>
      <div class='bg-none flex-col m-0 flex max-h-[430px] max-w-7xl md:my-0 xl:mx-auto md:mx-10'
           style={{background: 'linear-gradient(134deg, #142742 39.16%, #21426d 76.07%)'}}>
        <div class='py-6 px-10 w-full z-[1] text-white flex flex-col md:w-3/5 md:py-[50px] md:px-20 md:z-0'>
          <h3 class='text-[#fa6060] font-bold text-xl mb-2 -tracking-[.5x]'>
            {props.title}
          </h3>
          <h3
            class='text-white font-normal text-xl mb-2 -tracking-[.5px] md:text-[#f2f4f8] md:text-[28px] md:font-[500] md:-tracking-[.168px] md:leading-10'>
            {props.subtitle}
          </h3>
        </div>
      </div>
      <div class='my-[25px] mx-auto p-0 relative w-3/5 md:flex md:py-0 md:px-5 md:absolute md:top-[80px] md:w-full'>
        <div class='w-full ml-auto md:w-2/5'>
          <div class='w-[90%] my-0 mx-auto relative overflow-hidden !rounded-[6px] md:w-[70%] lg:w-[55%]'>
            {props.slide}
          </div>
        </div>
      </div>
    </>
  )
})