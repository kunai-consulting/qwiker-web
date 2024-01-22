import {component$} from "@builder.io/qwik";
import TopSection from "~/routes/(dev)/kunai/case-study/sections/TopSection";
import CoreBanking1 from '~/routes/(public)/img/use-cases-details/core-banking-system/Nearshoring1.jpg?jsx'
import CoreBanking2 from '~/routes/(public)/img/use-cases-details/core-banking-system/Nearshoring2.jpg?jsx'
import CoreBanking3 from '~/routes/(public)/img/use-cases-details/core-banking-system/Nearshoring3.jpg?jsx'
import CoreBanking4 from '~/routes/(public)/img/use-cases-details/core-banking-system/Nearshoring4.jpg?jsx'
import Case from "~/routes/(dev)/kunai/case-study/sections/Case";
import RedBanner from "~/routes/(dev)/kunai/case-study/sections/RedBanner";

export default component$(() => {
  const ArticleOne = () => {
    return (
      <>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Rapid hiring of top-tier senior developers with niche expertise.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Address the need to avoid long-term dependency on Kunai or another partner.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Provide project managers, full team-in-a-box solutions, and overall strategic support.
          </li>
        </ul>
      </>
    )
  }
  const ArticleTwo = () => {
    return (
      <>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Elite Talent: Kunai uses a combined approach of a deep bench and strong talent network to find and onboard
            talent quickly.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Contract-To-Hire: By converting key leaders and high performers, Kunai reduces long-term dependency and
            enables internal ownership of technology.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Joint Management: Kunai is involved every step of the way, ensuring that morale is high, that resource
            changes are handled smoothly, and that outcomes are always front of mind.
          </li>
        </ul>
      </>
    )
  }
  return (
    <div class='my-0 mx-auto max-w-7xl relative lg:mb-12'>
      <TopSection title={'Core Banking System'}
                  subtitle={'Kunai Enables Launch of Core Banking System through Unique Staff Augmentation Approach'}
                  slide={<CoreBanking1/>}/>
      <Case
        firstArticleTitle={'Background'}
        firstArticle={`A top five US bank was approaching the launch of a new home-grown core banking system. In order
         to meet deadlines, they needed several surge teams of senior developers with niche software expertise. Kunai 
         staffed the teams in record time and enabled rapid conversion of its best consultants into full-time employees, 
         in order to enable the bank to manage the system independently in the long run.`}
        secondArticleTitle={'Challenge'}
        secondArticleImg={<CoreBanking2/>}
      >
        <ArticleOne/>
      </Case>
      <RedBanner>
        <div class='py-[30px] px-[50px]'>
          <div class='italic leading-5 font-normal text-[16px] !text-center'>
            <span>"Kunai did something our internal recruiting team told us was impossible... and in half the time we originally planned."</span>
          </div>
          <div class='font-semibold leading-5 text-[16px] !text-center'>- Executive Project Sponsor</div>
        </div>
      </RedBanner>
      <Case
        firstArticleTitle={'Approach'}
        firstArticle={`Kunai leveraged its deep talent network to bring on thirty engineers within a few months, leading 
        to successful delivery of the core banking system to key business groups. Resources and outcomes were managed by 
        both Kunai and the client, leading to tight feedback loops on performance and velocity.`}
        additionalContent={`Our leaders have been on both sides of the table: as financial industry executives and 
        consulting partners. Through this experience, we set out to avoid the adversarial relationship that inevitably 
        develops through the dependency that develops through the course of a client/consultant relationship. One of 
        the ways we accomplish this is by converting high performers and leaders to full-time associates. This way, 
        our clients are able to get the support they need in the short term without remaining dependent on Kunai for 
        years to come`}
        firstArticleImg={<CoreBanking3/>}
        secondArticleTitle={'Nearshoring with Kunai'}
        secondArticleImg={<CoreBanking4/>}
      >
        <ArticleTwo/>
      </Case>
    </div>
  )
})