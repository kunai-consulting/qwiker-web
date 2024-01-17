import {component$} from "@builder.io/qwik";
import TopSection from "~/routes/(dev)/kunai/case-study/sections/TopSection";
import Nearshoring1 from '~/routes/(public)/img/use-cases-details/nearshoring/NearshoringMexico1.jpg?jsx'
import Nearshoring2 from '~/routes/(public)/img/use-cases-details/nearshoring/NearshoringMexico4.jpg?jsx'
import Nearshoring3 from '~/routes/(public)/img/use-cases-details/nearshoring/NearshoringMexico2.jpg?jsx'
import Nearshoring4 from '~/routes/(public)/img/use-cases-details/nearshoring/NearshoringMexico3.jpg?jsx'
import Case from "~/routes/(dev)/kunai/case-study/sections/Case";
import RedBanner from "~/routes/(dev)/kunai/case-study/sections/RedBanner";

export default component$(() => {
  const ArticleOne = () => {
    return (
      <>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Hire top-quality engineering talent to collaborate on critical initiatives, rather than low-level work.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Work with risk executives to ensure stringent security controls and abide by regulatory compliance.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Build and launch quickly, getting 'fingers on keys' in a matter of months.
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
            Elite Talent: Kunai believes that offshore and nearshore talent has matured to the point that there should
            be virtually no distinction between US and offshore teams.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Technology Enablement: We work with IT and risk to establish an efficient process for technology enablement
            that ensures a productive workforce and compliant environment.
          </li>
        </ul>
        <ul class='text-[14px] leading-5 list-disc !h-auto md:h-[unset] md:text-lg mt-0 mb-4 pl-8'>
          <li>
            Cloud Support: Kunai is the only consultancy at multiple financial institutions entrusted with hosting and
            operating customer-facing software.
          </li>
        </ul>
        In Essence: Kunai provided a comprehensive solution for the setup, technology enablement, and long-term
        management of a nearshore team.
      </>
    )
  }
  return (
    <div class='my-0 mx-auto max-w-7xl relative lg:mb-12'>
      <TopSection title={'Nearshoring'}
                  subtitle={'Kunai Partners With Top Five Card Issuer to Extend Development Capacity to Mexico.'}
                  slide={<Nearshoring1/>}/>
      <Case
        firstArticleTitle={'Background'}
        firstArticle={`When a top US financial institution needed to extend its engineering footprint into Latin America, 
        they looked to Kunai to lead every aspect of the process. From innovative hiring strategies to careful, 
        efficient execution of a security and compliance strategy, Kunai led every aspect of the process - getting 
        fingers on keys in a matter of months.`}
        secondArticleTitle={'Challenge'}
        secondArticleImg={<Nearshoring2/>}
      >
        <ArticleOne/>
      </Case>
      <RedBanner>
        <div class='py-[30px] px-[50px]'>
          <div class='italic leading-5 font-normal text-[16px] !text-center'>
            <span>"We don't need yet another IT back office; the goal is to build teams of senior and mid-level engineers that we trust to execute at the same level as our US teams."</span>
          </div>
          <div class='font-semibold leading-5 text-[16px] !text-center'>- Executive Project Sponsor</div>
        </div>
      </RedBanner>
      <Case
        firstArticle={
          <>
            <div>
              Our CEO built his first Latin American engineering team in Argentina in 1999. For more than twenty years,
              he and the Kunai team have leveraged a deep talent network, a team of operational and legal experts, and
              decades of experience in digital transformation to mold teams that become true peers to their US
              counterparts.
            </div>
            <div>
              Within a few months, Kunai worked with a committee of executives to identify ideal projects, recruit elite
              engineering talent, and build a security plan with risk leadership. Teams were onboarded and began working
              on mission-critical initiatives in a matter of months, and a roadmap towards a team of over a thousand
              engineers is well on its way.
            </div>
          </>
        }
        firstArticleTitle={'Solution'}
        firstArticleImg={<Nearshoring3/>}
        secondArticleTitle={'Nearshoring with Kunai'}
        secondArticleImg={<Nearshoring4/>}
      >
        <ArticleTwo/>
      </Case>
    </div>
  )
})