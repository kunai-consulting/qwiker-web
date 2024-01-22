import {component$} from "@builder.io/qwik";
import TopSection from "~/routes/(dev)/kunai/case-study/sections/TopSection";
import Dining1 from '~/routes/(public)/img/use-cases-details/dining/DiningExperiencie1.jpg?jsx'
import Dining2 from '~/routes/(public)/img/use-cases-details/dining/DiningExperiencie2.jpg?jsx'
import Dining3 from '~/routes/(public)/img/use-cases-details/dining/DiningExperiencie3.jpg?jsx'
import Dining4 from '~/routes/(public)/img/use-cases-details/dining/DiningExperiencie4.jpg?jsx'
import Case from "~/routes/(dev)/kunai/case-study/sections/Case";
import RedBanner from "~/routes/(dev)/kunai/case-study/sections/RedBanner";

export default component$(() => {
  return (
    <div class='my-0 mx-auto max-w-7xl relative lg:mb-12'>
      <TopSection title={'Create Experiencies'} subtitle={'Kunai Crafts an Elite Dining Experience for Cardholders'}
                  slide={<Dining1/>}/>
      <Case
        firstArticleTitle={'Background'}
        firstArticle={`One of America's top banks sought to redefine loyalty, moving beyond the typical points and cashback. 
        Their ambitious vision? Offer their cardholders exclusive access to elite dining experiences, from hard-to-book 
        restaurants to exclusive culinary events.`}
        secondArticleTitle={'Challenge'}
        secondArticleImg={<Dining2/>}>
        <div>Sandeep Sood, Kunai's CEO, encapsulated the sentiment: "We want to say ‘you've been loyal to us; how about
          that coveted table in New York tonight?’"
        </div>
      </Case>
      <RedBanner>
        <div class='p-5'>
          <div class='text-xl -tracking-[1px] leading-[1.42] font-normal'>Features</div>
          <div class='font-normal text-[16px] -tracking-[.5px] leading-[1.5]'>
            <ul class='!h-auto md:h-[unset] !flex !flex-col !gap-4 pl-0 mt-2'>
              <li class="!w-full pl-5 relative before:content-['•'] before:left-0 before:absolute">
                <span class='font-semibold tracking-[.75px]'>Exclusive Reservations: </span>
                An elite curation of dining spots, allowing cardholders to book through an intuitive online platform.
              </li>
              <li class="!w-full pl-5 relative before:content-['•'] before:left-0 before:absolute">
                <span class='font-semibold tracking-[.75px]'>Cardholder Events: </span>
                Access to exclusive culinary events, from Michelin-starred chefs' creations to interactive experiences
                with top culinary talents.
              </li>
              <li class="!w-full pl-5 relative before:content-['•'] before:left-0 before:absolute">
                <span class='font-semibold tracking-[.75px]'>Dine & Dash: </span>
                A smooth, pre-paid dining experience, removing the need for a bill, powered by integrations like Stripe.
              </li>
            </ul>
          </div>
        </div>
      </RedBanner>
      <Case
        firstArticleTitle={'Solution'}
        firstArticle={`Teaming up with Kunai, the bank leveraged the firm's expertise in payment & booking API 
        integrations, AWS mastery, and robust cloud systems. They designed and executed a cloud-based MVP dining rewards 
        platform, balancing benefits for the bank, customers, and elite restaurant partners. Partnership incentives 
        included the allure of recognition by renowned culinary entities like Chef José Andrés, the MICHELIN Guide, 
        and the James Beard Foundation, and the opportunity to host exclusive cardholder events.`}
        firstArticleImg={<Dining3/>}
        secondArticleTitle={'Outcome'}
        secondArticleImg={<Dining4/>}
      >
        <div>Launched in 2022, the Dining platform quickly racked up 1M+ users, spanning 10+ US cities and featuring
          over 350+ restaurants. It boasts unmatched reliability, SOC2 compliance, and ADA approval, offering users not
          just meals, but unforgettable experiences. The platform's continuous evolution, under Kunai's maintenance,
          looks to deepen customer engagement, expanding payment options and partnerships.
        </div>
        <div>
          Kunai transformed a bank's loyalty vision into a tangible, delightful dining reality for cardholders, setting
          a new benchmark in rewards innovation.
        </div>
      </Case>
    </div>
  )
})