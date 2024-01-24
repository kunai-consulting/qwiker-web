import {component$} from "@builder.io/qwik";
import PastEvents from "~/routes/(dev)/kunai/events/sections/PastEvents";
import PastEvent from "~/routes/(dev)/kunai/events/sections/PastEvent";
import Aws from '~/routes/(public)/img/events/past/aws.jpg?jsx'

export default component$(() => {
  return (
    <>
      <PastEvent
        eventProperties={{
          date: 'Nov 27 - Dec 1',
          title: 'AWS re:Invent 2023',
          location: 'Marianne\'s • Las Vegas, Nevada'
        }}>
        <Aws class='h-full w-full object-cover' q:slot='topImage'/>
        <div q:slot='fullDescription'>Kunai is thrilled to announce its participation in AWS re:Invent 2023, a premier
          cloud computing conference hosted by Amazon Web Services (AWS). While Kunai works flexibly across technology
          stacks, AWS has become an essential part of many client solutions.
        </div>
        <div q:slot='fullDescription'>Attending re:Invent gives the Kunai team direct access to AWS experts and the
          latest cloud innovations. This empowers Kunai to stay at the forefront of cloud computing so it can continue
          delivering cutting-edge solutions to clients.
        </div>
        <div q:slot='fullDescription'>If you are also attending AWS re:Invent 2023 and would like to connect with Kunai
          to explore potential collaborations, please reach out.
        </div>
        <Aws class='h-full w-full object-cover' q:slot='bottomImage'/>
      </PastEvent>
      <PastEvents/>
    </>
  )
});