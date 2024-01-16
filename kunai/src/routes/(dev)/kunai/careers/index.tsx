import { component$, useSignal, $ } from '@builder.io/qwik';
import { Banner } from '../../@shared/Banner';
import CTA from '../../@shared/Button/CTA';
import BannerImg from '../images/careers/staircase-friends-bg.png';
import { twMerge } from 'tailwind-merge';

import IconDna from '../../@shared/Icon/icon-dna.svg';
import IconWellness from '../../@shared/Icon/icon-wellness.svg';
import IconTopTier from '../../@shared/Icon/icon-top-tier.svg';
import IconAnywhere from '../../@shared/Icon/icon-anywhere.svg';

import Youhee from '../../kunai/images/careers/youhee.png';
import Dustin from '../../kunai/images/careers/dustin.png';
import Jay from '../../kunai/images/careers/jay.png';
import Andrii from '../../kunai/images/careers/andrii.png';
import Natasa from '../../kunai/images/careers/natasa.png';
import Saya from '../../kunai/images/careers/sayamon.png';
import Sravani from '../../kunai/images/careers/sravani.png';
import Steve from '../../kunai/images/careers/steve.png';
import Tarin from '../../kunai/images/careers/tarin.png';
import Winnie from '../../kunai/images/careers/winnie.png';

export const Container = (props: { children: any; class: string }) => {
  return (
    <div
      class={twMerge(
        'container flex w-full max-w-[1280px] flex-col px-3',
        props.class,
      )}
    >
      {props.children}
    </div>
  );
};

export default component$(() => {
  const testimonials = [
    {
      text: '“Kunai is amazing. The leadership fosters and promotes personal and professional growth. We work on a lot of different things, so no day is ever the same. The remote environment allows you to do what you love outside of work and get to know people from all around the world.”',
      name: 'Youhee Choi',
      position: 'Account Director',
      img: Youhee,
    },
    {
      text: "“I work with great people at Kunai. I've been learning and getting inspired by them for over 4 years (and counting). The leadership is on a mission of helping people grow beyond the typical IT path.”",
      name: 'Andrii Gorishni',
      position: 'Fullstack Software Developer',
      img: Andrii,
    },
    {
      text: '“Working at Kunai is great because you get to work on a lot of projects that are varied in scope, requirement, and functionality. I get to work across functions with product developers, managers, and clients to deliver a product that is cool.”',
      name: 'Sayamon Riddang',
      position: 'Product Designer',
      img: Saya,
    },
    {
      text: '“I’m a technical product manager with fifteen years experience and I’ve worked with Kunai for three years. I think the benefits, culture and flexibility offered to employees at Kunai is unparalleled. The Leadership team here is very accessible and are genuinely nice people. I also love the cutting edge technology and big name clients we have the benefit of working with. It’s a really great place to work.”',
      name: 'Steve Van De Steene',
      position: 'Technical Product Manager',
      img: Steve,
    },
    {
      image: '../images/careers/tarin.png',
      text: '“I have been at Kunai for a year now. I get to work on an array of interesting projects ranging from UI visualizations to AWS Lambda APIs. While I work on projects for a large company, I love the startup vibe of Kunai where I feel like I get great support from my colleagues and leadership.”',
      name: 'Tarin McAdoo Comer',
      position: 'Software Engineer',
      img: Tarin,
    },
    {
      image: '../images/careers/sravani.png',
      text: "“I’m a software Engineer with 8 years of experience and I’ve been working with kunai for 8 months. Kunai is the best mix of everything – a supportive team, work life balance, diverse clients, timely response, and a strong commitment to employee growth. Joining Kunai is, without a doubt, the best decision I've made!”",
      name: 'Sravani Appani',
      position: 'Software Engineer',
      img: Sravani,
    },
    {
      text: '“As a product designer with 4 years of experience, my professional journey at Kunai has been nothing short of exhilarating. The opportunity to contribute my skills to major financial clients has not only refined my design expertise but also allowed me to play a pivotal role in shaping impactful user experiences. What sets Kunai apart is its unwavering confidence that we are always delivering the best service in our careers. Supported by visionary leaders and collaborative coworkers, I work in an environment that is always open to exploration and new ideas. The forward-thinking culture makes my time at Kunai a very enriching experience.”',
      name: 'Winnie Wong',
      position: 'UI & UX Designer',
      img: Winnie,
    },
    {
      text: "“What I like best about working at Kunai is the emphasis on professional growth. I'm not limited by my job title and I'm instead encouraged to learn new tools and skills—though I'm officially a QA Engineer, I get to stretch into the spheres of product management, ADA compliance, and front end development as well.”",
      name: 'Dustin Cogswell',
      position: 'QA Engineer',
      img: Dustin,
    },
    {
      text: "“I've worked for a variety of companies and industries over the last 20+ years and working at Kunai is a breath of fresh air. The culture is inviting and filled with a sense of community and opportunity. If you like what you do, you actually get a chance to do it here.”",
      name: 'Jay Brass',
      position: 'Software Engineer',
      img: Jay,
    },
    {
      text: "“Working at Kunai has been a transformative experience for me as an Account Director with over 8 years of industry expertise. Kunai's commitment to fostering a culture of continuous learning and innovation has allowed me to seamlessly integrate my business and product development skills. The company's emphasis on collaboration and forward-thinking has not only elevated my professional journey but has also positioned Kunai as an ideal workplace for those passionate about staying on the cutting edge of industry trends and driving meaningful impact in the world of business and technology.”",
      name: 'Natasa Trajkovic',
      position: 'Account Director',
      img: Natasa,
    },
  ];

  const currentIndex = useSignal(0);

  const handlePrevClick = $(() => {
    currentIndex.value =
      (currentIndex.value - 1 + testimonials.length) % testimonials.length;
  });

  const handleNextClick = $(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  });

  const cardsToDisplay = Array.from(
    { length: 3 },
    (_, i) => (currentIndex.value + i) % testimonials.length,
  );

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <>
      <Banner
        variant="career"
        heading="Discover careers at Kunai"
        description={[
          `Join us to work on meaningful projects for the world's
          leading financial institutions. For our clients' success,
          we seek talented individuals who share our vision.`,
        ]}
        overlay={true}
        image={BannerImg}
        button={<CTA text="Explore current openings" buttonColor="bg-red" />}
      />
      <section class="flex w-full flex-col justify-center self-center md:flex-row">
        <div class="w-full bg-[#f2f5fe] md:w-2/3 lg:w-1/2">
          <div class="max-w-2xl p-12 text-lg leading-6 md:ml-auto">
            We are a purpose-driven, people-first digital agency. Our culture
            pushes our teams to think outside the box so we can solve problems
            that haven&apos;t been solved yet. We are looking night and day for
            the world&apos;s top candidates who are ready to interrupt software
            as we know it and discover what is possible. As a team, we can be a
            part of something bigger than ourselves and unleash the potential to
            achieve without limits.
          </div>
        </div>
        <div class="flex w-full items-center bg-[#25282d] md:w-1/3 lg:w-1/2">
          <div class="max-w-lg pb-10 pl-8 pr-12 pt-10 italic text-white md:mr-auto md:max-w-2xl">
            <ul class="mb-0 list-disc">
              <li>
                If you consider yourself an evangelist for software best
                practices, then we want to talk to you.
              </li>

              <li>
                If you live, eat, and breathe the newest technology, then we
                want to hear from you.
              </li>
              <li>
                If you are dedicated to excellence and passionate about your
                craft, then we want you on our team.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="flex w-full justify-center self-center py-10">
        <Container class="flex-col gap-8">
          <div
            class={`flex w-auto justify-center text-3xl font-bold leading-10 max-md:mt-10 max-md:max-w-full md:justify-normal`}
          >
            Our Core Values:
          </div>
          <div class="grid md:grid-cols-2" style={{ gap: '2%' }}>
            <div class="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <img
                src={IconDna}
                width="128"
                height="129"
                class="min-w-[129px]"
              />
              <div class="flex flex-col items-center md:items-start">
                <h2 class="pb-2 text-lg font-semibold">Diversity is our DNA</h2>
                <p class="text-gray-600">
                  Join a digital melting pot that brings together brilliant
                  minds from all across the globe. From the Americas to the far
                  reaches of Asia, what matters most is your passion for your
                  craft. We want the best talent, no matter what their timezone
                  is.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <img
                src={IconWellness}
                width="128"
                height="129"
                class="min-w-[129px]"
              />
              <div class="flex flex-col items-center md:items-start">
                <h2 class="pb-2 text-lg font-semibold">Wellness First</h2>
                <p class="text-gray-600">
                  Take care of yourself to be your best self. Kunai provides
                  unlimited time off, paid medical benefits, generous parental
                  leave, company-sponsored gym memberships, and mental health
                  counseling. We take care of our employees, so that our
                  employees are at their best everyday.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <img
                src={IconTopTier}
                width="128"
                height="129"
                class="min-w-[129px]"
              />
              <div class="flex flex-col items-center md:items-start">
                <h2 class="pb-2 text-lg font-semibold">Top-Tier Clients</h2>
                <p class="text-gray-600">
                  Collaborate with exciting companies as you work on
                  mission-critical systems that shape the world economy. Expand
                  your skill set, push the boundaries of your knowledge, and
                  explore new ideas waiting to become reality. We work with the
                  worlds fastest growing fintech companies on projects you will
                  find enticing and career defining.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <img
                src={IconAnywhere}
                width="128"
                height="129"
                class="min-w-[129px]"
              />
              <div class="flex flex-col items-center md:items-start">
                <h2 class="pb-2 text-lg font-semibold">Work from Anywhere</h2>
                <p class="text-gray-600">
                  We encourage you to work from wherever makes you most
                  comfortable — whether that be from your local cafe or a
                  lakeside retreat. At Kunai, your laptop is your office. We
                  feel that if you are comfortable, then you are doing your best
                  work.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section class="flex w-full justify-center self-center py-10">
        <Container class="flex-col gap-8">
          <div
            class={`flex w-auto justify-center text-3xl font-bold leading-10 max-md:mt-10 max-md:max-w-full md:justify-normal`}
          >
            Seems too good to be true?
          </div>

          <div class="relative flex flex-col items-center">
            <div class="flex w-full justify-center gap-10 overflow-hidden">
              {shuffleArray(cardsToDisplay).map((cardIndex) => {
                const card = testimonials[cardIndex];
                return <></>;
              })}
            </div>

            <div class="mt-4 flex w-auto items-center justify-center">
              <button
                onClick$={handlePrevClick}
                class="mr-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-400 hover:bg-gray-100 focus:outline-none"
              >
                {'<'}
              </button>

              <div class="align-center flex">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    class={[
                      'mx-1 h-2 w-8 rounded-full',
                      index === currentIndex.value
                        ? 'bg-red-500'
                        : 'bg-gray-300',
                    ]}
                  ></div>
                ))}
              </div>

              <button
                onClick$={handleNextClick}
                class="ml-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white text-gray-400 hover:bg-gray-100 focus:outline-none"
              >
                {'>'}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
});
