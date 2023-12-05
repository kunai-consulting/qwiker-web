import { component$ } from '@builder.io/qwik';
import ImageCard from '../../../@shared/Card/ImageCard';

export default component$(() => {
  return (
    <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
      <h2 class="mb-8 text-4xl font-medium">Relevant Case Studies</h2>

      <div class="mb-12 flex flex-col items-center">
        <ImageCard
          source="https://cdn.sanity.io/images/f9g2uuqu/production/117b3452076d1d1ac03421ddaf2dd898d91e1e29-8192x5464.jpg?rect=0,2,8192,5461&amp;w=8192&amp;h=5461&amp;auto=format"
          title="Relief"
          text="Offering the ability to negotiate debt to using a variety of powerful tools."
          width={301}
          height={258}
          textHeight={58}
        />
      </div>

      <div class="flex w-2/3 flex-col items-start justify-between bg-white py-12">
        <h2 class="mb-8 text-4xl font-medium">
          Empowering All Businesses With Easy-to-Adopt Artificial Intelligence
          Technologies
        </h2>
        <p class="mb-4">
          AI has long since evolved beyond a passing trend, and is now a
          powerhouse tool that many executives consider a business advantage.
          Remarkably, adopting AI for business use has never been easier.
        </p>
        <p class="mb-4">
          Specifically, products under the “AI as a Service” category present
          accessible, white-box solutions that bypass the technical challenges
          of developing AI solutions. These solutions allow organizations to
          focus on their core business, rapidly prototype to market, and
          innovate faster. Kunai has enabled clients to strategize and execute
          on AI adoption and expansion across various markets and industries.
        </p>
        <p>
          Whether it’s first-time adoption or scaling an AI-driven ecosystem,
          partner with Kunai to scale up or down cost-effective AI solutions to
          meet changing business needs.
        </p>
      </div>
    </div>
  );
});
