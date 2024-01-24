import {component$, useSignal, $} from "@builder.io/qwik";
import Aws from '~/routes/(public)/img/events/past/aws.jpg?jsx'
import Money2020 from '~/routes/(public)/img/events/past/money2020.png?jsx'
import TysonsCorner from '~/routes/(public)/img/events/past/tysons-corner-hero-image.jpg?jsx'
import DcFire from '~/routes/(public)/img/events/past/dc-firehero.jpeg?jsx'
import AbeFireSide from '~/routes/(public)/img/events/past/abe-fireside.jpeg?jsx'
import Dallas from '~/routes/(public)/img/events/past/dallas-hero-image.jpeg?jsx'
import EventCard from "~/routes/(dev)/kunai/events/sections/EventCard";
import {useNavigate} from "@builder.io/qwik-city";

export default component$(() => {
  const loadMoreState = useSignal(false);
  const nav = useNavigate();

  return (
    <div class='bg-black flex justify-center'>
      <div class='max-w-7xl mx-0 my-auto justify-between flex flex-col py-[30px] px-10 text-white gap-5 md:gap-[30px]'>
        <h3 class='mb-2 leading-[1.5] font-semibold text-xl -tracking-[.5px]'>
          Past Events
        </h3>
        <div class='grid grid-cols-[100%] gap-5 md:grid-cols-[repeat(3,1fr)] md:gap-[30px]'>
          <EventCard
            cardProperties={{
              date: 'Nov 27 - Dec 1',
              title: 'AWS re:Invent 2023',
              location: 'Marianne\'s • Las Vegas, Nevada',
              buttonTitle: 'RSVP now'
            }}
            onCardClick={$(() =>
              nav('/kunai/events/aws-re:Invent-2023/')
            )}
          >
            <Aws class='h-full w-full object-cover'/>
          </EventCard>
          <EventCard
            cardProperties={{
              date: 'Oct 2023',
              title: 'Money 20/20 USA',
              location: 'Las Vegas, Nevada'
            }}
            onCardClick={$(() =>
              nav('/kunai/events/money2020-usa')
            )}
          >
            <Money2020 class='h-full w-full object-cover'/>
          </EventCard>
          <EventCard
            cardProperties={{
              date: 'Sep 2023',
              title: 'Fintech Fireside Dinner feat. Nisha Paliwal',
              location: 'Washington DC, USA'
            }}
            onCardClick={$(() =>
              nav('/kunai/events/fintech-feat-nisha-paliwal')
            )}
          >
            <TysonsCorner class='h-full w-full object-cover'/>
          </EventCard>
          {loadMoreState.value && (
            <>
              <EventCard
                cardProperties={{
                  date: 'Aug 2023',
                  title: 'Fintech Fireside feat. Karen Beck Stroup and Balaji Kumar',
                  location: 'The Adolphus • Dallas, Texas'
                }}
                onCardClick={$(() =>
                  nav('/kunai/events/fintech-feat-karen-beck')
                )}
              >
                <DcFire class='h-full w-full object-cover'/>
              </EventCard>
              <EventCard
                cardProperties={{
                  date: 'Feb 2022',
                  title: 'Fintech Fireside Dinner feat. Youssef Lahrech',
                  location: 'Del Mar • Washington DC, USA'
                }}
                onCardClick={$(() =>
                  nav('/kunai/events/fintech-feat-youssef-lahrech')
                )}
              >
                <AbeFireSide class='h-full w-full object-cover'/>
              </EventCard>
              <EventCard
                cardProperties={{
                  date: 'Dec 2022',
                  title: 'Fintech Fireside Dinner feat. Abe McCallum',
                  location: 'San Francisco, California '
                }}
                onCardClick={$(() =>
                  nav('/kunai/events/fintech-feat-abe-mccallum')
                )}
              >
                <Dallas class='h-full w-full object-cover'/>
              </EventCard>
            </>
          )}
        </div>
        <button
          class={`border-none text-white underline text-[16px] font-semibold uppercase bg-none -tracking-[.128px]`}
          onClick$={() => (loadMoreState.value = !loadMoreState.value)}
        >
          {loadMoreState.value ? 'Load less' : 'Load more'}
        </button>
      </div>
    </div>
  )
})