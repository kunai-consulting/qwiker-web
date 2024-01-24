import {component$} from "@builder.io/qwik";
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";
import PastEvent from "~/routes/(dev)/kunai/events/sections/PastEvent";
import Money2020 from '~/routes/(public)/img/events/past/money2020.png?jsx'

export default component$(() => {
  return (
    <>
      <PastEvent
        eventProperties={{
          date: 'Oct 2023',
          title: 'Money 20/20 USA',
          location: 'Las Vegas, Nevada'
        }}>
        <Money2020 class='h-full w-full object-cover' q:slot='topImage'/>
        <div q:slot='fullDescription'>Kunai and Sardine hosted a lively penthouse party at Money20/20 on October 24th,
          capping off an insightful conference. The annual event enables the fintech community to connect face-to-face
          and absorb groundbreaking ideas before they go mainstream.
        </div>
        <div q:slot='fullDescription'>Although Kunai thrives remotely, its team values the in-person relationships built
          at Money20/20 each year. Attending exposes them to the latest industry developments, keeping Kunai and its
          clients ahead of the curve.
        </div>
        <div q:slot='fullDescription'>The well-attended penthouse event provided stimulating conversations and
          networking with spectacular city views.
        </div>
        <Money2020 class='h-full w-full object-cover' q:slot='bottomImage'/>
      </PastEvent>
      <PastEvents/>
    </>
  )
});