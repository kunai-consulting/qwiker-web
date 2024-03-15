import {
  component$,
  useOnDocument,
  useSignal,
  $,
  sync$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CardItem from '~/components/CardItem';
import HeaderItem from '~/components/HeaderItem';
import SubHeaderItem from '~/components/SubHeaderItem';
import ReviewItem from '~/components/ReviewItem';
import FooterItem from '~/components/FooterItem';
import BackgroundImages from '~/components/BackgroundImages';
import ArrForward from '~/media/arrow_forward.svg?jsx';
//import ReviewFrame from '~/media/review-frame.svg?jsx';

import NaturalLanguageImg from '~/media/natural_language.png';
import ContinuallyImg from '~/media/continually.png';
import KunaiLogo from '~/media/green-favicon-32x32.png';

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
  const year = useSignal(new Date().getFullYear());
  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      year.value = new Date().getFullYear();
    }),
  );
  const emailLoading$ = sync$((event: Event, target: HTMLAnchorElement) => {
    target.textContent = 'emailing...';
    setTimeout(() => {
      target.textContent = "Let's try it";
    }, 2000);
  });
  return (
    <div class={'w-full bg-[#0D0A0E] pt-6'}>
      <a href="https://kunaico.com/">
        <div class="fixed left-0 top-0 z-50 flex items-center rounded-br-xl bg-[#171919] p-2 text-white">
          <img src={KunaiLogo} width="32" height="32" class="mr-2 h-8 w-8" />
          <span class="pr-2">Kunai</span>
        </div>
      </a>

      <div
        class={
          'relative mx-auto flex max-w-5xl flex-col px-8 py-8 sm:px-[5.25rem] sm:py-16'
        }
      >
        <HeaderItem />
        <BackgroundImages />
        <a
          href="mailto:ss@kun.ai"
          onClick$={emailLoading$}
          class="hover:text-shadow-md mb-[4.5rem] mt-8 flex h-12 w-44 flex-row place-content-center items-center rounded border
          border-[#8F66FF] font-semibold uppercase text-[#D5D5D5] transition-colors duration-200 hover:bg-[#8F66FF] focus:ring-2 focus:ring-blue-800"
        >
          Let's try it
          <ArrForward class={'ml-3.5'} width={16} height={16} />
        </a>
        <SubHeaderItem text={'What is Kun.Ai?'} isShort={true} />
        <div class={'py-[45px] text-xl text-[#D5D5D5]'}>
          <p>Our AI isn’t here to chat — it’s here to get work done.</p>
          <br />
          <p>
            Kun.AI is a complete business process automation platform that’s
            capable of interacting with the tools, spreadsheets, and documents
            that your business runs on. We’re powered by the industry’s first
            Large Business Process Language Model (LBPLM).
          </p>
          <br />
          <p>
            Kun.AI performs tasks autonomously, without being asked, cajoled, or
            prompted. You define what needs to be done, and how it should be
            done, and it gets done. It isn’t an employee. It’s not a robot
            overlord. It’s intelligent automation done right.
          </p>
        </div>
        <div class="flex flex-col">
          <div
            class={
              'flex w-full flex-col gap-8 pb-0 md:grid md:grid-cols-2 lg:flex-row lg:pb-8'
            }
          >
            <CardItem
              title={'natural language instruction'}
              description={
                'In the Business Process Editor, write step-by-step instructions and guidelines as easily as you would write instructions for a new employee.'
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
              <img
                src={NaturalLanguageImg}
                width="80"
                height="72"
                class={'h-56 w-full bg-white'}
              />
            </CardItem>
            <div class={'flex flex-col place-content-between'}>
              <CardItem
                title={'No code, no obstacles'}
                description={
                  'Enable the whole team to take control of  automations previously gatekept by software engineering teams and Zapier wizards. If there are tasks that can be explained, the tasks can be automated.'
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
                title={'risk aware intelligence'}
                description={
                  'Our system proactively notifies operators of ambiguities, contradictions, and difficulties in business process instructions before automations operate on your business data.'
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
            title={'continually improving'}
            description={
              'Kun.AI adapts to your business with our per-tenant continual learning engine. Provide supervision and instruction to the system just as you would a new hire, and it learns and improves.'
            }
            orientation={'horizontal'}
            // workaround hiding green on small size to read text
            hide={true}
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
            <img
              src={ContinuallyImg}
              width="80"
              height="72"
              class={'h-52 w-72 bg-white md:w-full lg:w-80'}
            />
          </CardItem>
        </div>

        <SubHeaderItem
          text={'real world use cases'}
          isShort={false}
          class={'pb-11 pt-10 lg:pt-24'}
        />
        <div
          class={
            'xs:pb-0 flex flex-col gap-8 pb-0 md:flex-col lg:flex-row lg:pb-8'
          }
        >
          <ReviewItem
            title={'project management'}
            short={'left'}
            description={
              'Kun.AI is keeping tickets up-to-date by automating many of the routine tasks surrounding stale tickets and project updates.'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #FFEB5C 4.15%, #74C7FF 82.67%)',
                transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              },
            ]}
          >
            {/* <ReviewFrame
              class={
                'h-[235px] w-[258px] self-center md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px]'
              }
            /> */}
          </ReviewItem>
          <ReviewItem
            title={'document understanding'}
            short={'right'}
            description={
              'Kun.AI is used to maintain multiple business-critical spreadsheets, requiring reading of both PDFs and email items.'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #5C93FF 4.15%, #74FF79 65.1%)',
              },
            ]}
          >
            {/* <ReviewFrame
              class={
                'h-[235px] w-[258px] self-center md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px]'
              }
            /> */}
          </ReviewItem>
        </div>
        <div class={'flex w-full flex-col gap-8 pb-8 sm:flex-col lg:flex-row'}>
          <ReviewItem
            title={'Research and reporting'}
            short={'left'}
            description={
              'Kun.AI can cut down time to delivery for competitive analysis from one month to one day.'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #5FFEF1 4.15%, #8F66FF 82.67%)',
                transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              },
            ]}
          >
            {/* <ReviewFrame
              class={
                'h-[235px] w-[258px] self-center md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px]'
              }
            /> */}
          </ReviewItem>
          <ReviewItem
            title={'rule enforcement'}
            short={'right'}
            description={
              'Kun.AI enforces policy and practices by reviewing and flagging emails according to legal policy.'
            }
            styles={[
              {
                background:
                  'linear-gradient(281.2deg, #F70E70 4.15%, #FFB800 65.1%)',
              },
            ]}
          >
            {/* <ReviewFrame
              class={
                'h-[235px] w-[258px] self-center md:h-[441px] md:w-[530px] lg:h-[285px] lg:w-[348px]'
              }
            /> */}
          </ReviewItem>
        </div>
        <FooterItem>
          <a
            href="mailto:ss@kun.ai"
            onClick$={emailLoading$}
            class="hover:text-shadow-md mb-2 flex h-12 w-44 flex-row place-content-center items-center rounded border border-[#8F66FF] font-semibold uppercase text-[#D5D5D5] transition-colors duration-200 hover:bg-[#8F66FF] focus:ring-2 focus:ring-blue-800 lg:mb-12"
          >
            Let's try it
            <ArrForward class={'ml-3.5'} width={16} height={16} />
          </a>
        </FooterItem>
        <div class={'mt-9 text-xs text-[#D5D5D5]'}>© {year.value} Kun.AI</div>
      </div>
    </div>
  );
});
