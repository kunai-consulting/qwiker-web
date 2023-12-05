import { component$ } from '@builder.io/qwik';
import Title from '../../@shared/Title';
import CaseStudies from './sections/CaseStudies';
import OfferList from './sections/OfferList';
import Contact from './sections/Contact';
import LogoWall from '../../@shared/List/LogoWall';
import CTA from '../../@shared/Button/CTA';
import Signup from '../../@shared/Signup';

export default component$(() => {
  return (
    <>
      <Title
        editorial="Artificial Intelligence"
        title="What is Productive AI?"
        description="Kunai is innovating business process automation to manage risk, reduce overhead, and more. Reach out today to learn more about what Kunai and our MLOps team can do for you."
      />
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTA text="Contact us" buttonColor="bg-red" />
      </div>
      <CaseStudies />
      <OfferList />
      <Contact />
      <LogoWall />
      <Signup />
    </>
  );
});
