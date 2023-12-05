import { component$ } from '@builder.io/qwik';
import IconList from '../../../@shared/List/IconList';

export default component$(() => {
  const offerings = [
    {
      title: 'Contracts',
    },
    {
      title: 'Contract-to-hire',
    },
    {
      title: 'Direct Hire (Full-time)',
    },
    {
      title: 'Team-In-A-Box (Managed Services)',
    },
  ];
  return (
    <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
      <h2 class="mb-8 text-4xl font-medium">
        Kunai provides a range of staffing options to ensure you can build the
        exact team you need.
      </h2>
      <IconList list={offerings} />
    </div>
  );
});
