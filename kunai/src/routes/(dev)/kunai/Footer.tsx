import { component$ } from '@builder.io/qwik';
import CTA from '../@shared/Button/CTA';
import Divider from '../@shared/Divider';
import KunaiIcon from '../@shared/Icon/kunai-icon';

export default component$(() => {
  const catergories = [
    {
      category: 'Service',
      types: [
        'Accessibility',
        'Product Design & Development',
        'Cloud Architecture & Deployment',
        'Full-Stack Software Engineering',
        'Data Engineering & Business Intelligence',
        'Mobile Engineering',
      ],
    },
    {
      category: 'Industry Expertise',
      types: [
        'Payments',
        'Personal Financial Management',
        'Security & Compliance',
        'Core Banking',
        'Wealth Management',
        'Healthcare',
        'Process Automation',
        'Debt Relief',
        'Crypto Wallets',
        'Artificial Intelligence',
        'Rewards & Loyalty',
      ],
    },
    {
      category: 'Our Work',
      types: [
        'Intuit',
        'Visa',
        'Bain',
        'Discover',
        'Major Credit Card Network',
        'Ohana',
        'FortifID',
        'Stackwell',
        'Ernst & Young',
        'Bloomberg',
        'Mastercard',
      ],
    },
    {
      category: 'Platform',
      types: [
        'Alpaca',
        'Snowflake',
        'Unit',
        'Salesforce',
        'BillGo',
        'Marqeta',
        'Amazon Web Services',
        'Stripe',
        'Apex',
        'Plaid',
        'Google Cloud',
      ],
    },
  ];
  return (
    <div class="bg-black">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class=" mb-20 grid grid-cols-1 gap-2 lg:grid-cols-6">
          <div class="lg:col-span-5">
            <h2 class="text-3xl font-bold text-white">
              Let’s build the future together.
            </h2>
          </div>
          <div class="lg:col-span-1">
            <CTA text="CONTACT US" buttonColor="bg-red" />
          </div>
        </div>
        <div class=" grid grid-cols-1 gap-2 lg:grid-cols-5 ">
          <div class="col-span-1 w-1/2">
            <h2 class="text-3xl font-bold text-white">News</h2>
            <h2 class="text-3xl font-bold text-white">Insights</h2>
            <h2 class="text-3xl font-bold text-white">Careers</h2>
            <h2 class="text-3xl font-bold text-white">About Us</h2>
            <h2 class="text-3xl font-bold text-white">Contact</h2>
          </div>
          {catergories.map((category, index) => (
            <div key={index} class="col-span-1">
              <h2 class="mb-2 mt-10 text-3xl font-bold text-white lg:mt-0">
                {category.category}
              </h2>
              {category.types.map((type, index) => (
                <p key={index} class="mb-2 text-white">
                  {type}
                </p>
              ))}
            </div>
          ))}
        </div>
        <Divider color="white" />
        <div class=" mb-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <div class="lg:col-span-1">
            <KunaiIcon width={140} height={60} />
          </div>
          <div class="text-right lg:col-span-1">
            <p class="mb-2 text-white">Copyright 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
});
