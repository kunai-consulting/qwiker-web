import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import CardItem from "~/components/CardItem";
import HeaderItem from "~/components/HeaderItem";
import SubHeaderItem from "~/components/SubHeaderItem";
import ReviewItem from "~/components/ReviewItem";
import FooterItem from "~/components/FooterItem";
import BackgroundImages from "~/components/BackgroundImages";
import ArrForward from '/public/arrow_forward.svg?jsx';
import ReviewFrame from '/public/review-frame.svg?jsx';

export const head: DocumentHead = {
  title: "Kun.AI",
  meta: [
    {
      name: "description",
      content: "Future is coming",
    },
  ],
};

export default component$(() => {
  return (
    <div class={'bg-[#0D0A0E] w-full'}>
      <div class={'max-w-5xl mx-auto flex flex-col px-[5.25rem] py-16 bg-green relative'}>
        <HeaderItem/>
        <BackgroundImages/>
        <button
          class="rounded uppercase w-44 h-12 font-semibold text-[#D5D5D5] flex flex-row items-center place-content-center
          border border-[#8F66FF] focus:ring-2 focus:ring-blue-800 mt-8 mb-[4.5rem]"
        >
          Let's try it
          <ArrForward class={'ml-3.5'} width={16} height={16}/>
        </button>
        <SubHeaderItem text={'What is Kun.Ai?'} isShort={true}/>
        <div class={'py-[45px] text-xl text-[#D5D5D5]'}>
          <p>Reduce operational costs, optimize core processes, and stay ahead of your<br/>competitors.</p><br/>
          <p>Discover Kun.AI, our powerful platform combining localized LLMs with an adaptable<br/>logic engine, ready
            to automate and innovate your business processes.</p>
        </div>
        <div class={'flex flex-row w-full place-content-between pb-8'}>
          <CardItem
            title={'Enhanced Workflow Management'}
            description={'mprove overall workflow efficiency with intelligent task reminders and streamlined communication, ensuring tasks are promptly addressed'}
            styles={[{
              width: "294px",
              height: "294px",
              left: "120px",
              top: "240px",
              background: "linear-gradient(46.58deg, #FFAF66 14.53%, #FD1717 89.14%)",
            }]}
          >
            <div class={'w-full bg-white h-56'}/>
          </CardItem>
          <div class={'flex flex-col place-content-between'}>
            <CardItem
              title={'Optimized Human Resources'}
              description={'Enhance HR efficiency by automatically identifying and reminding team members of pending tasks, ensuring streamlined processes'}
              styles={[{
                width: "245px",
                height: "245px",
                left: "195px",
                top: "36px",
                background: "linear-gradient(46.58deg, #8F66FF 14.53%, #FF40B3 89.14%)",
              },
                {
                  width: "175px",
                  height: "175px",
                  left: "229px",
                  top: "-73px",
                  background: "linear-gradient(46.58deg, #5773FF 14.53%, #5CF1DF 89.14%)"
                }
              ]}
            />
            <CardItem
              title={'Advanced Profile Matching'}
              description={'Automatically evaluate candidate profiles against job requirements, ensuring a seamless process for assessing compatibility'}
              styles={[{
                width: "245px",
                height: "245px",
                left: "-82px",
                top: "40px",
                background: "linear-gradient(46.58deg, #FF66F9 14.53%, #FD1717 89.14%);"
              }]}
            />
          </div>
        </div>
        <CardItem
          title={'Efficient Automation'}
          description={'Streamline team management by automatically reminding members of pending tasks, seamlessly integrated with Rippling'}
          orientation={'horizontal'}
          styles={[{
            width: "326px",
            height: "326px",
            left: "316px",
            top: "70px",
            background: "linear-gradient(46.58deg, #FF66F9 14.53%, #FD1717 89.14%)"
          }, {
            width: "332px",
            height: "358px",
            right: "-6px",
            top: "-6px",
            background: "linear-gradient(46.58deg, #FFF966 14.53%, #17FD2E 89.14%)"
          }]}
        >
          <div class={'bg-white h-52 w-80'}/>
        </CardItem>
        <SubHeaderItem text={'Performance in perspective'} isShort={false} class={'pt-24 pb-11'}/>
        <div class={'flex flex-row w-full place-content-between pb-8'}>
          <ReviewItem title={'Review 1'}
                      short={'left'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                      styles={[{
                        background: "linear-gradient(281.2deg, #FFEB5C 4.15%, #74C7FF 82.67%)",
                        transform: "matrix(-1, 0, 0, 1, 0, 0)",
                      }]}>
            <ReviewFrame height={285} width={348}/>
          </ReviewItem>
          <ReviewItem title={'Review 2'}
                      short={'right'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                      styles={[{
                        background: "linear-gradient(281.2deg, #5C93FF 4.15%, #74FF79 65.1%)",
                      }]}>
            <ReviewFrame height={285} width={348}/>
          </ReviewItem>
        </div>
        <div class={'flex flex-row w-full place-content-between pb-8'}>
          <ReviewItem title={'Review 3'}
                      short={'left'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                      styles={[{
                        background: "linear-gradient(281.2deg, #5FFEF1 4.15%, #8F66FF 82.67%)",
                        transform: "matrix(-1, 0, 0, 1, 0, 0)",
                      }]}>
            <ReviewFrame height={285} width={348}/>
          </ReviewItem>
          <ReviewItem title={'Review 4'}
                      short={'right'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                      styles={[{
                        background: "linear-gradient(281.2deg, #F70E70 4.15%, #FFB800 65.1%)"
                      }]}>
            <ReviewFrame height={285} width={348}/>
          </ReviewItem>
        </div>
        <FooterItem/>
        <div class={'mt-9 text-[#D5D5D5] text-xs'}>
          Kuna.AI 2023 ©
        </div>
      </div>
    </div>
  );
});
