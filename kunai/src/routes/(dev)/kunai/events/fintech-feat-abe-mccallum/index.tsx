import {component$} from "@builder.io/qwik";
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";
import PastEvent from "~/routes/(dev)/kunai/events/sections/PastEvent";
import AbeFireSide from '~/routes/(public)/img/events/past/abe-fireside.jpeg?jsx'

export default component$(() => {
  return (
    <>
      <PastEvent
        eventProperties={{
          date: 'Dec 2022',
          title: 'Fintech Fireside Dinner feat. Abe McCallum',
          location: 'San Francisco, California'
        }}>
        <AbeFireSide class='h-full w-full object-cover' q:slot='topImage'/>
        <div q:slot='fullDescription'>In December of last year, Kunai hosted its fifth FinTech Fireside dinner of the
          year at Marianne's in San
          Francisco. Kunai CEO Sandeep Sood held a thought-provoking conversation with Karandeep Anand, Chief Product
          Officer at Brex.
        </div>
        <div q:slot='fullDescription'>Topics covered included Anand's early career at Microsoft, lessons learned from
          developing virtual
          reality at Facebook, challenges companies face when scaling offerings, Brex's approach to FDIC coverage
          during a crisis, and the company's AI research and development strategy.
        </div>
        <div q:slot='fullDescription'>The lively dialogue provided attendees with unique insights into the FinTech
          industry.
        </div>
        <AbeFireSide class='h-full w-full object-cover' q:slot='bottomImage'/>
      </PastEvent>
      <PastEvents/>
    </>
  )
});