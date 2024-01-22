import {component$} from "@builder.io/qwik";
import TopSection from "~/routes/(dev)/kunai/case-study/sections/TopSection";
import Cloud1 from '~/routes/(public)/img/use-cases-details/cloud-migration/Cloud1.jpg?jsx'
import Cloud2 from '~/routes/(public)/img/use-cases-details/cloud-migration/Cloud2.jpg?jsx'
import Cloud3 from '~/routes/(public)/img/use-cases-details/cloud-migration/Cloud3.jpg?jsx'
import Cloud4 from '~/routes/(public)/img/use-cases-details/cloud-migration/Cloud4.jpg?jsx'
import Case from "~/routes/(dev)/kunai/case-study/sections/Case";
import RedBanner from "~/routes/(dev)/kunai/case-study/sections/RedBanner";

export default component$(() => {
  const ArticleOne = () => {
    return (
      <>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Provide strategic leadership and training to an organization with limited internal experience on the cloud.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Build engineering and DevOps teams that would lead the cloud migration.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Create a third-party cloud environment that matched the bank’s intended infrastructure, to serve as a
            testing ground.
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
            Cloud Expertise: Kunai has been helping large organizations migrate to the cloud for over ten years.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Technology Expertise: Our teams work side-by-side with internal teams to build, migrate, and train.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Cloud Support: Kunai is the only consultancy at multiple financial institutions entrusted with hosting and
            operating customer-facing software.
          </li>
        </ul>
        In Essence: Kunai helped a major financial institution become a cloud pioneer, sending shockwaves through the
        financial industry.
      </>
    )
  }
  return (
    <div class='my-0 mx-auto max-w-7xl relative lg:mb-12'>
      <TopSection title={'Cloud Migration'} subtitle={'Kunai Helps a Top US Bank Become A Pioneer in the Public Cloud'}
                  slide={<Cloud1/>}/>
      <Case
        firstArticleTitle={'Background'}
        firstArticle={`In 2013, Kunai\'s founders met with a bank executive with a bold vision: to become one of the 
        first large companies in the world to move to the public cloud. The team partnered with the bank to provide 
        strategic leadership, engineering, and DevOps support. The bank became a pioneer in its industry.`}
        secondArticleTitle={'Challenge'}
        secondArticleImg={<Cloud2/>}
      >
        <ArticleOne/>
      </Case>
      <RedBanner>
        <div class='py-[30px] px-[50px]'>
          <div class='italic leading-5 font-normal text-[16px] !text-center'>
            <span>"This is the project that created what is now Kunai. We built our reputation for digital transformation by helping </span>
            <span class='bg-white inline-block h-[0.8rem] !w-20'></span>
            <span>* become an industry pioneer."</span>
          </div>
          <div class='font-semibold leading-5 text-[16px] !text-center'>- Sandeep Sood (CEO, Kunai)</div>
          <div class='text-[11px] leading-5 text-right'>*Top USA Bank</div>
        </div>
      </RedBanner>
      <Case
        firstArticleTitle={'Solution'}
        firstArticle={`Moving to the public cloud is an obvious decision in 2023, but it was a revolutionary idea in 2013. 
        We worked with a true industry pioneer, an executive who was not afraid of the initial laughter that he got in response 
        to his idea of moving to the public cloud. By providing teams with talent not available internally, Kunai was able 
        to jump-start the process — and when internal teams were moving slowly, Kunai stood up an environment that matched the 
        intended configuration component-by-component, in order to provide a testing environment that would become a critical sandbox for the effort.`}
        firstArticleImg={<Cloud3/>}
        secondArticleTitle={'Cloud with Kunai'}
        secondArticleImg={<Cloud4/>}
      >
        <ArticleTwo/>
      </Case>
    </div>
  )
})