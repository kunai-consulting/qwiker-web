import {component$} from "@builder.io/qwik";
import Circle from '~/routes/(public)/img/circle.svg?jsx'
import DownArrow from '~/routes/(public)/img/down_arrow.svg?jsx'
import About2003 from '~/routes/(public)/img/about-us/about-2003.jpg?jsx'
import About2013 from '~/routes/(public)/img/about-us/about-2013.jpg?jsx'
import About2015 from '~/routes/(public)/img/about-us/about-2015.jpg?jsx'
import About2018 from '~/routes/(public)/img/about-us/about-2018.jpg?jsx'
import About2023 from '~/routes/(public)/img/about-us/about-2023.jpg?jsx'
import BgAbout from '~/routes/(public)/img/about-us/background-about-page.jpg?jsx'

export default component$(() => {
  const stories = [
    {
      first: true,
      left: true,
      year: '2003',
      description: `Sandeep founds digital consultancy Monsoon, supporting financial institutions like Wells Fargo, Bloomberg, and Citi.
      The boutique firm, based in Oakland, CA, is headquartered in the historic Oakland Bank of Savings building.`,
      src: <About2003/>
    },
    {
      extended: true,
      year: '2005',
      quote: `“Capital One understands that banking is ripe for transformation and we are deeply excited to be working 
      with them to deliver bold transformations that will help people connect with their finances in new ways.”`,
      author: `- Sandeep Kumar Sood (CEO)`,
      description: `Monsoon begins working with Capital One, helping the company become the first major US bank to move to the public cloud.`,
      src: <About2013/>
    },
    {
      extended: true,
      left: true,
      year: '2015',
      quote: `“You can’t just…dream it up. You have to really attract the right talent. The acquisition of Monsoon 
      shows Capital One’s commitment to the most modern programming frameworks and technologies.”`,
      author: `- Former Capital One MVP of Engineering, Skip Potter`,
      description: `Capital One acquires Monsoon and the core team spends three years there, building real-time data 
      pipelines, continuing the cloud migration journey, and enhancing core mobile applications.`,
      src: <About2015/>
    },
    {
      extended: true,
      year: '2018',
      quote: `“The nature of money is undergoing a fundamental transformation. Our goal is to help our clients evolve 
      in ways that will help them embrace that future rather than fear it.”`,
      author: `- Ruan Pethiyagoda, Head of Strategy`,
      description: `Sandeep and the team start Kunai. Within a few years, the boutique consultancy earns the trust of all 
      four major payment networks, three of the top ten US banks, and unicorn FinTech startups like Plaid & Nubank.`,
      src: <About2018/>
    },
    {
      left: true,
      last: true,
      year: '2023',
      description: `Kunai doubles revenue for three years in a row and the boutique company begins to challenge legacy consultancies for critical project work. 
      Kunai builds an AI platform and opens its Mexico City office.`,
      src: <About2023/>
    },
  ];

  return (
    <div class='relative'>
      <div class='flex flex-col relative z-[2] gap-10 md:gap-[70px] py-10 px-0 md:py-20 md:px-[50px]'>
        <div class='items-start md:items-center md:self-stretch py-0 px-10 md:p-0 text-start md:text-center text-white
                    gap-[30px] justify-center my-0 mx-auto max-w-7xl flex flex-col'>
          <h2 class='text-[24px] md:text-[40px] leading-[34px] md:leading-[44px]'>Our Story</h2>
          <div class='text-lg w-full md:text-2xl leading-7 md:leading-10 md:w-3/5'>
            “Client trust is a consultancy’s only real asset, and the only way we scale is by scaling that trust.”
          </div>
          <div class='text-sm italic md:text-lg'>
            - Sandeep Kumar Sood (CEO)
          </div>
        </div>
        <div class='m-0 gap-10 flex flex-col md:gap-[70px] md:mx-auto md:my-0 max-w-7xl'>
          {stories.map((story) => (
            <div class='flex pr-10 relative w-full'>
              <div class='md:hidden flex justify-center static w-[10%]'>
                <div
                  class={`border-l-[3px] absolute top-4 ${story.last ? 'h-[calc(100%-70px-16px)]' : 'h-[calc(100%+40px)]'}`}/>
                {story.last &&
                  <div class='bottom-[calc(70px-7px)] absolute'>
                    <DownArrow class='w-[27px] h-[17px] align-middle'/>
                  </div>
                }
                <div class='flex justify-center relative top-4 w-full'>
                  <Circle class='w-4 h-4 align-middle'/>
                </div>
              </div>
              <div
                class='gap-[30px] md:gap-0 pb-[30px] md:pb-0 w-[90%] md:w-auto justify-between !flex !flex-col md:!flex-row-reverse'>
                <div class='w-full gap-[15px] md:w-[42%] !text-left !justify-center !flex-col !flex'>
                  <div
                    class='md:hidden bg-[#F2F5FE] rounded-none text-[#2D3654] text-xl font-bold justify-center py-[7px] px-[10px] relative top-0 w-fit'>
                    {story.year}
                  </div>
                  {story.left ?
                    <>
                      {story.extended &&
                        <>
                          <div class='text-[#F2F5FE] font-bold leading-[26px]'>{story.quote}</div>
                          <div class='text-[#fff] italic leading-normal text-lg font-normal'>{story.author}</div>
                        </>
                      }
                      <div class='text-[#F2F5FE] leading-[26px] !text-left'>
                        {story.description}
                      </div>
                    </>
                    :
                    story.src
                  }
                </div>
                <div class='hidden md:inline-block relative w-[10%]'>
                  <div
                    class={`${story.first ? 'top-1/2 h-[calc(50%+70px)]' : 'h-[calc(100%+70px)]'}
                    ${story.last ? 'h-[calc(100%+45px)] top-0 ' : ''}
                    border-l-[3px] border-white absolute right-1/2 translate-x-1/2`}/>
                  {story.last &&
                    <div class='-bottom-[24px] left-1/2 absolute -translate-x-2/4 translate-y-[50px]'>
                      <DownArrow class='h-[17px] w-[27px] align-middle'/>
                    </div>
                  }
                  <div
                    class='bg-[#F2F5FE] rounded-[35px] text-[#203654] flex text-lg font-[700] justify-center py-[6px] px-[20px] relative w-full top-[45%]'>
                    {story.year}
                  </div>
                </div>
                <div class='w-full md:w-[42%]'>
                  <div class='!flex !items-center !justify-center !h-full'>
                    <div class='relative overflow-hidden !rounded-md !w-full flex flex-col gap-[15px]'>
                      {story.left ?
                        story.src
                        :
                        <>
                          {story.extended &&
                            <>
                              <div
                                class='text-[#F2F5FE] font-bold leading-[26px] !text-left md:!text-right'>{story.quote}</div>
                              <div
                                class='text-[#fff] italic leading-normal text-lg font-normal !text-left md:!text-right'>{story.author}</div>
                            </>
                          }
                          <div class='text-[#F2F5FE] leading-[26px] !text-left md:!text-right'>
                            {story.description}
                          </div>
                        </>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BgAbout class='!absolute top-0 bottom-0 w-full overflow-hidden h-full'/>
    </div>
  );
})