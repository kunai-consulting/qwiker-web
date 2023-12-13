import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CardItem from '~/components/CardItem';
import HeaderItem from '~/components/HeaderItem';
import SubHeaderItem from '~/components/SubHeaderItem';
import ReviewItem from '~/components/ReviewItem';
import FooterItem from '~/components/FooterItem';
import BackgroundImages from '~/components/BackgroundImages';
import ArrForward from '/public/arrow_forward.svg?jsx';
import ReviewFrame from '/public/review-frame.svg?jsx';

export const head: DocumentHead = {
  title: 'Kun.AI',
  meta: [
    {
      name: 'description',
      content: 'Future is coming',
    },
  ],
};

export default component$(() => {
  const year = new Date().getFullYear();
  return (
    <div class={'w-full bg-[#0D0A0E]'}>
      <div
        class={
          'relative mx-auto flex max-w-5xl flex-col px-8 sm:px-[5.25rem] py-8 sm:py-16'
        }
      >
        <HeaderItem />
        <BackgroundImages />
        <button
          class="mb-[4.5rem] mt-8 flex h-12 w-44 flex-row place-content-center items-center rounded border
          border-[#8F66FF] font-semibold uppercase text-[#D5D5D5] focus:ring-2 focus:ring-blue-800"
        >
          Let's try it
          <ArrForward class={'ml-3.5'} width={16} height={16} />
        </button>
        <SubHeaderItem text={'What is Kun.Ai?'} isShort={true} />
        <div class={'py-[45px] text-xl text-[#D5D5D5]'}>
          <p>
            Reduce operational costs, optimize core processes, and stay ahead of
            your
            <br />
            competitors.
          </p>
          <br />
          <p>
            Discover Kun.AI, our powerful platform combining localized
            LLmproveMs with an adaptable
            <br />
            logic engine, ready to automate and innovate your business
            processes.
          </p>
        </div>
        <div class={'flex w-full flex-col lg:flex-row sm:flex-col place-content-between pb-0 sm:pb-0 lg:pb-8'}>
          <CardItem
            title={'Enhanced Workflow Management'}
            description={
              'Improve overall workflow efficiency with intelligent task reminders and streamlined communication, ensuring tasks are promptly addressed'
            }
            styles={[
              {
                width: '294px',
                height: '294px',
                left: '120px',
                top: '240px',
                background:
                  'linear-gradient(46.58deg, #FFAF66 14.53%, #FD1717 89.14%)',
              },
            ]}
          >
            <div class={'h-56 w-full bg-white'} />
          </CardItem>
          <div class={'flex flex-col place-content-between'}>
            <CardItem
              title={'Optimized Human Resources'}
              description={
                'Enhance HR efficiency by automatically identifying and reminding team members of pending tasks, ensuring streamlined processes'
              }
              styles={[
                {
                  width: '245px',
                  height: '245px',
                  left: '195px',
                  top: '36px',
                  background:
                    'linear-gradient(46.58deg, #8F66FF 14.53%, #FF40B3 89.14%)',
                },
                {
                  width: '175px',
                  height: '175px',
                  left: '229px',
                  top: '-73px',
                  background:
                    'linear-gradient(46.58deg, #5773FF 14.53%, #5CF1DF 89.14%)',
                },
              ]}
            />
            <CardItem
              title={'Advanced Profile Matching'}
              description={
                'Automatically evaluate candidate profiles against job requirements, ensuring a seamless process for assessing compatibility'
              }
              styles={[
                {
                  width: '245px',
                  height: '245px',
                  left: '-82px',
                  top: '40px',
                  background:
                    'linear-gradient(46.58deg, #FF66F9 14.53%, #FD1717 89.14%);',
                },
              ]}
            />
          </div>
        </div>
        <CardItem
          title={'Efficient Automation'}
          description={
            'Streamline team management by automatically reminding members of pending tasks, seamlessly integrated with Rippling'
          }
          orientation={'horizontal'}
          styles={[
            {
              width: '326px',
              height: '326px',
              left: '316px',
              top: '70px',
              background:
                'linear-gradient(46.58deg, #FF66F9 14.53%, #FD1717 89.14%)',
            },
            {
              width: '332px',
              height: '358px',
              right: '-6px',
              top: '-6px',
              background:
                'linear-gradient(46.58deg, #FFF966 14.53%, #17FD2E 89.14%)',
            },
          ]}
        >
          <div class={'h-52 w-72 md:w-full lg:w-80 bg-white'} />
        </CardItem>
        <SubHeaderItem
          text={'Performance in perspective'}
          isShort={false}
          class={'pb-11 pt-10 lg:pt-24'}
        />
        <div class={'flex flex-col md:flex-col lg:flex-row place-content-between pb-0 xs:pb-0 lg:pb-8'}>
          <ReviewItem
            title={'Review 1'}
            short={'left'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #FFEB5C 4.15%, #74C7FF 82.67%)',
                transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              },
            ]}
          >
            <ReviewFrame class={'h-[233px] w-[285px] md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px] self-center'} />
          </ReviewItem>
          <ReviewItem
            title={'Review 2'}
            short={'right'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #5C93FF 4.15%, #74FF79 65.1%)',
              },
            ]}
          >
            <ReviewFrame class={'h-[233px] w-[285px] md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px] self-center'} />
          </ReviewItem>
        </div>
        <div class={'flex w-full flex-col sm:flex-col lg:flex-row place-content-between pb-8'}>
          <ReviewItem
            title={'Review 3'}
            short={'left'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #5FFEF1 4.15%, #8F66FF 82.67%)',
                transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              },
            ]}
          >
            <ReviewFrame class={'h-[233px] w-[285px] md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px] self-center'} />
          </ReviewItem>
          <ReviewItem
            title={'Review 4'}
            short={'right'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #F70E70 4.15%, #FFB800 65.1%)',
              },
            ]}
          >
            <ReviewFrame class={'h-[233px] w-[285px] md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px] self-center'} />
          </ReviewItem>
        </div>
        <FooterItem />
        <div class={'mt-9 text-xs text-[#D5D5D5]'}>Kuna.AI {year} ©</div>
      </div>
    </div>
  );
});
