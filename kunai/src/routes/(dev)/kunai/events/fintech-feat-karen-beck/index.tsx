import {component$} from "@builder.io/qwik";
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";
import PastEvent from "~/routes/(dev)/kunai/events/sections/PastEvent";
import Dallas from '~/routes/(public)/img/events/past/dallas-hero-image.jpeg?jsx'
import Dallas1 from '~/routes/(public)/img/events/past/dallas1.jpeg?jsx'

export default component$(() => {
  return (
    <>
      <PastEvent
        eventProperties={{
          date: 'Aug 2023',
          title: 'Fintech Fireside feat. Karen Beck Stroup and Balaji Kumar',
          location: 'The Adolphus • Dallas, Texas'
        }}>
        <Dallas class='h-full w-full object-cover' q:slot='topImage'/>
        <div q:slot='fullDescription'>Kunai hosted its sixth FinTech Fireside dinner event of the year in August at The
          Adolphus hotel in downtown Dallas. Kunai CEO Sandeep Sood led a wide-ranging chat between Balaji Kumar, CTO at
          Citi, and Karen Beck Stroup, CTO at WEX.
        </div>
        <div q:slot='fullDescription'>The executives discussed the unique digital transformation challenges they face at
          their respective organizations. They provided insights into building high-performing teams, achieving
          consensus, and driving innovation throughout their careers.
        </div>
        <div q:slot='fullDescription'>Despite the Dallas heat, attendees enjoyed the thought-provoking dialogue and
          networking. Kunai will return to Dallas for another dinner in the fall.
        </div>
        <Dallas class='h-full w-full object-cover' q:slot='bottomImage'/>
        <Dallas1 class='h-full w-full object-cover' q:slot='bottomImage1'/>
      </PastEvent>
      <PastEvents/>
    </>
  )
});