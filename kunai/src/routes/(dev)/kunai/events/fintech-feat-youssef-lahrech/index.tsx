import {component$} from "@builder.io/qwik";
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";
import PastEvent from "~/routes/(dev)/kunai/events/sections/PastEvent";
import DcFire from '~/routes/(public)/img/events/past/dc-firehero.jpeg?jsx'
import DcFire1 from '~/routes/(public)/img/events/past/dc-fire1.jpeg?jsx'

export default component$(() => {
  return (
    <>
      <PastEvent
        eventProperties={{
          date: 'Feb 2023',
          title: 'Fintech Fireside Dinner feat. Youssef Lahrech',
          location: 'Del Mar • Washington DC, USA'
        }}>
        <DcFire class='h-full w-full object-cover' q:slot='topImage'/>
        <div q:slot='fullDescription'>Kunai hosted its second FinTech Fireside event in February at Del Mar restaurant
          in Washington D.C. Kunai CEO Sandeep Sood spoke with Youssef Lahrech, President & COO of Nubank.
        </div>
        <div q:slot='fullDescription'>They explored topics including the disruptive growth phases at NuBank versus
          Capital One, NuBank's decentralized authority culture, blending incumbent and disruptive leadership, the
          benefits of long company tenures, synergies between Latin American countries, building global versus local
          product teams, serving the unbanked population, and operating as technology companies rather than banks.
        </div>
        <div q:slot='fullDescription'>The event, overlooking the marina, provided attendees with unique perspectives on
          leadership, innovation, company culture, and financial inclusion in high-growth environments.
        </div>
        <DcFire class='h-full w-full object-cover' q:slot='bottomImage'/>
        <DcFire1 class='h-full w-full object-cover' q:slot='bottomImage1'/>
      </PastEvent>
      <PastEvents/>
    </>
  )
});