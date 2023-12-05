import { component$ } from '@builder.io/qwik';
import Title from '../../@shared/Title';
import StaffingOption from './sections/StaffingOption';
import LogoWall from '../../@shared/List/LogoWall';
import Signup from '../../@shared/Signup';
import Team from './sections/Team';
import SolvingProblem from './sections/SolvingProblem';
import Flexible from './sections/Flexible';
import Divider from '../../@shared/Divider';
import CTA from '../../@shared/Button/CTA';

export default component$(() => {
  return (
    <div class="mx-auto">
      <Title
        editorial="Talent Staffing"
        title="Hire 3x faster with pre-screened engineering talent"
        description="Our exclusive suite of world-class developers have a proven track record of achieving excellent outcomes for our clients. So, whether you’re tasked with transforming your customer experiences, unlocking the power of data within your organization, or moving your company to the cloud, we’re here to deliver the results you need."
      />
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTA text="Hire now" buttonColor="bg-red" />
      </div>
      <Team />
      <StaffingOption />
      <LogoWall />
      <SolvingProblem />
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Divider />
      </div>
      <Flexible />
      <Signup />
    </div>
  );
});
