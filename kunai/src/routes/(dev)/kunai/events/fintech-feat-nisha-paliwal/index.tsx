import {component$} from "@builder.io/qwik";
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";
import PastEvent from "~/routes/(dev)/kunai/events/sections/PastEvent";
import TysonsCorner from '~/routes/(public)/img/events/past/tysons-corner-hero-image.jpg?jsx'
import TysonsCorner1 from '~/routes/(public)/img/events/past/tysons-corner1.jpg?jsx'

export default component$(() => {
  return (
    <>
      <PastEvent
        eventProperties={{
          date: 'Sep 2023',
          title: 'Fintech Fireside Dinner feat. Nisha Paliwal',
          location: 'Washington DC, USA'
        }}>
        <TysonsCorner class='h-full w-full object-cover' q:slot='topImage'/>
        <div q:slot='fullDescription'>At this FinTech Fireside chat, held last September, Kunai CEO Sandeep Sood got
          into a compelling discussion with Nisha Paliwal, Capital One's head of product management and data
          engineering. They covered topics including properly rewarding data engineers, configuring large teams to
          balance current and future data needs, and AI's impact on unstructured data analysis.
        </div>
        <div q:slot='fullDescription'>Paliwal also discussed insights from her forthcoming book "Secrets of AI Value
          Generation," which provides an executive guide to implementing AI. She and Nagpal inspired attendees with
          their passion for leadership and innovation.
        </div>
        <TysonsCorner class='h-full w-full object-cover' q:slot='bottomImage'/>
        <TysonsCorner1 class='h-full w-full object-cover' q:slot='bottomImage1'/>
      </PastEvent>
      <PastEvents/>
    </>
  )
});