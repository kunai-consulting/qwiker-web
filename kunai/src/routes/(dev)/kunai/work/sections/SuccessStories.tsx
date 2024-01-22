import {component$, $, type QRL} from "@builder.io/qwik";
import Relationships from '~/routes/(public)/img/work/relationships.jpg?jsx'
import Cloud from '~/routes/(public)/img/work/cloud_pioner.jpg?jsx'
import CaseJumping from '~/routes/(public)/img/work/case_jumping.jpg?jsx'
import Recruitment from '~/routes/(public)/img/work/recruitment.jpg?jsx'
import NearshoreTeam from '~/routes/(public)/img/work/nearshore_team.jpg?jsx'
import NearshoreTeamLarge from '~/routes/(public)/img/work/nearshore_team_large.png?jsx'
import Arrow from '~/routes/(public)/img/arrow.svg?jsx'
import BlackArrow from '~/routes/(public)/img/black_arrow.svg?jsx'
import {useNavigate} from "@builder.io/qwik-city";


export default component$(() => {
  const nav = useNavigate();
  const onclickAbout = $(() =>
    nav('/kunai/about')
  );

  const onclickCloud = $(() =>
    nav('/kunai/case-study/cloud-migration')
  );

  const onclickDining = $(() =>
    nav('/kunai/case-study/dining')
  );

  const onclickCoreBanking = $(() =>
    nav('/kunai/case-study/core-banking-system')
  );

  const onclickNearshoring = $(() =>
    nav('/kunai/case-study/nearshoring')
  );

  const Button = ({title = 'See the case study', isOutline = false, onClick}: {
    title?: string,
    isOutline?: boolean,
    onClick: QRL<() => void>
  }) => {
    return (
      <button
        class={`${isOutline ? 'border-none text-black' : 'text-white border-2 border-white px-5 py-3 '} rounded-md items-center flex transition-[all .3s ease-in-out] text-xs font-semibold uppercase`}
        onClick$={onClick}
      >
        {title}
        {isOutline
          ? <BlackArrow class='ml-[7px] w-4 h-4'/>
          : <Arrow class='ml-[7px] w-4 h-4'/>
        }
      </button>
    )
  }

  const TallStories = () => {
    return (
      <div class='!pt-4'>
        <div class='flex flex-col gap-[15px]'>
          <div class='flex justify-between !flex-col-reverse md:!flex-row lg:max-h-[364px]'>
            <div class='w-full md:w-[56%] overflow-hidden'>
              <div class='h-full relative overflow-hidden flex lg:items-center justify-center'>
                <Relationships class='max-w-none h-auto w-full'/>
              </div>
            </div>
            <div class='w-full md:w-[44%]'
                 style={{background: 'linear-gradient(150deg, #142742 34.14%, #21426d 78.37%)'}}
            >
              <div
                class='items-start m-0 max-w-none text-white flex flex-col gap-4 h-full justify-center p-10 md:mr-auto md:max-w-[563px]'>
                <div class='flex flex-col gap-[15px]'>
                  <div
                    class='text-[20px] -tracking-[.12px] md:text-2xl md:-tracking-[.144px] font-bold leading-7'>
                    Relationships Built to Last
                  </div>
                  <div
                    class='text-sm leading-6 -tracking-[.084px] md:text-[17px] md:-tracking-[.102px]'>
                    Kunai has been working with the world's leading financial institutions for over a decade.
                  </div>
                </div>
                <Button title={'Read about Kunai\'s history'} onClick={onclickAbout}/>
              </div>
            </div>
          </div>
        </div>
        <div
          class='text-[28px] md:text-[40px] -tracking-[.168px] md:-tracking-[.24px] pt-[75px] pr-0 pb-[30px] pl-10 text-[#25282d] font-bold leading-[45px] my-0 mx-auto max-w-7xl'>
          <p class='border-b-[5px] border-[#fa6060] pb-2.5 pr-5 inline-block mb-4'>Success stories</p>
        </div>
        <div class='flex flex-col gap-[15px]'>
          <div class='flex justify-between !flex-col md:!flex-row-reverse lg:max-h-[364px]'>
            <div class='w-full md:w-[56%] overflow-hidden'>
              <div class='h-full relative overflow-hidden flex lg:items-center justify-center'>
                <Cloud class='max-w-none h-auto w-full'/>
              </div>
            </div>
            <div class='w-full md:w-[44%] bg-[#ca1c1c]'>
              <div
                class='items-start m-0 max-w-none text-white flex flex-col gap-4 h-full justify-center p-10 md:items-end md:ml-auto md:max-w-[563px]'>
                <div class='flex flex-col gap-[15px]'>
                  <div
                    class='text-[20px] -tracking-[.12px] md:text-2xl md:-tracking-[.144px] font-bold leading-7'>
                    Helping a Major US Card Issuer Become a Cloud Pioneer
                  </div>
                  <div
                    class='text-sm leading-6 -tracking-[.084px] md:text-[17px] md:-tracking-[.102px] italic'>
                    "This is the project that created what is now Kunai. We built our reputation for digital
                    transformation by helping (unnamed bank) become an industry pioneer."
                  </div>
                </div>
                <Button onClick={onclickCloud}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ShortStories = () => {
    return (
      <div class='!flex !flex-col !pt-4 !pb-12 !gap-4'>
        <div class='gap-[15px] flex-col flex'>
          <div class='!flex-col justify-between flex md:!flex-row lg:max-h-[270px]'>
            <div class='w-full md:w-[48%] overflow-hidden'>
              <div class='h-full relative overflow-hidden flex lg:items-center justify-center'>
                <CaseJumping class='max-w-none h-auto w-full'/>
              </div>
            </div>
            <div class='bg-white w-full md:w-[52%]'  style={{boxShadow: '0px 0px 20px 0px rgba(12, 17, 34, 0.1'}}>
              <div
                class='items-start m-0 max-w-none text-white flex flex-col gap-4 h-full justify-center p-10 md:mr-auto md:max-w-[563px]'>
                <div class='flex flex-col gap-4 text-black'>
                  <div class='leading-7 font-bold text-[#ff4a4a] -tracking-[.12px] md:-tracking-[.144px] text-2xl'>
                    Napkin Sketch to Launch in Six Months
                  </div>
                  <div class='font-normal italic leading-6 md:leading-[1.43] -tracking-[.084px] text-sm md:text-[17px] md:-tracking-[.1024px]'>
                    “They designed, built, launched, and hosted an elite rewards platform in half the time we originally planned.”
                  </div>
                </div>
                <Button onClick={onclickDining} isOutline={true}/>
              </div>
            </div>
          </div>
        </div>

        <div class='gap-[15px] flex-col flex'>
          <div class='!flex-col justify-between flex md:!flex-row-reverse lg:max-h-[270px]'>
            <div class='w-full md:w-[48%] overflow-hidden'>
              <div class='h-full relative overflow-hidden flex lg:items-center justify-center'>
                <Recruitment class='max-w-none h-auto w-full'/>
              </div>
            </div>
            <div class='bg-[#dfe4ea] w-full md:w-[52%]'  style={{boxShadow: '0px 0px 20px 0px rgba(12, 17, 34, 0.1'}}>
              <div
                class='items-start m-0 max-w-none text-white flex flex-col gap-4 h-full justify-center p-10 md:ml-auto md:items-end md:max-w-[563px]'>
                <div class='flex flex-col gap-4 text-black'>
                  <div class='leading-7 font-bold text-[#ff4a4a] -tracking-[.12px] md:-tracking-[.144px] text-2xl'>
                    Kunai Enables Launch of Core Banking System
                  </div>
                  <div class='font-normal italic leading-6 md:leading-[1.43] -tracking-[.084px] text-sm md:text-[17px] md:-tracking-[.1024px]'>
                    "Kunai found us thirty niche developers in record time, making it possible for us to hit a critical milestone for our new core banking system."
                  </div>
                </div>
                <Button onClick={onclickCoreBanking} isOutline={true}/>
              </div>
            </div>
          </div>
        </div>

        <div class='gap-[15px] flex-col flex'>
          <div class='!flex-col justify-between flex md:!flex-row lg:max-h-[270px]'>
            <div class='w-full md:w-[48%] overflow-hidden'>
              <div class='h-full relative overflow-hidden flex lg:items-center justify-center'>
                <NearshoreTeam class='md:hidden block max-w-none h-auto w-full'/>
                <NearshoreTeamLarge class='md:block hidden max-w-none xl:h-auto xl:w-full h-full w-auto'/>
              </div>
            </div>
            <div class='bg-white w-full md:w-[52%]'  style={{boxShadow: '0px 0px 20px 0px rgba(12, 17, 34, 0.1'}}>
              <div
                class='items-start m-0 max-w-none text-white flex flex-col gap-4 h-full justify-center p-10 md:mr-auto md:max-w-[563px]'>
                <div class='flex flex-col gap-4 text-black'>
                  <div class='leading-7 font-bold text-[#ff4a4a] -tracking-[.12px] md:-tracking-[.144px] text-2xl'>
                    A Different Approach to Nearshoring
                  </div>
                  <div class='font-normal italic leading-6 md:leading-[1.43] -tracking-[.084px] text-sm md:text-[17px] md:-tracking-[.1024px]'>
                    “We don't need yet another offshore IT back office; the goal is to build teams of senior and mid-level engineers that we trust to execute at the same level as our US teams.”
                  </div>
                </div>
                <Button onClick={onclickNearshoring} isOutline={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <TallStories/>
      <ShortStories/>
    </>
  )
});