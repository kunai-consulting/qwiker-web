import { component$, useSignal } from '@builder.io/qwik';
import IconCardList from '../../../@shared/List/IconCardList';

export default component$(() => {
  const selected = useSignal('View All');
  const services = [
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/2357f326b5ff6489eca0b868f2b74d84023eff3f-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Intuit',
      description:
        'To better support their customers, Intuit sought to launch smart features to help facilitate the 1099 filing process ...',
      category: [
        'Data Engineering & Business Intelligence',
        'Cloud Architecture & Deployment',
      ],
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/40355b8169c0360750c383a5f0ba95f9bdb8bda5-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Visa',
      description:
        'A cross-platform ecosystem on iOS, Android, and POYNT POS designed to consolidate siloed loyalty programs onto a paym...',
      category: [
        'Product Design & Development',
        'Cloud Architecture & Deployment',
      ],
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/22d54f535ec9ca8fc04c993a64ae5e53a9e3fabf-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Bain',
      description:
        'Client turned to Kunai to help migrate their powerful Value Calculator from spreadsheets to a dynamic, scalable platf...',
      category: [],
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/19b58fec880058dc45f171d6738b7c6c9c3e9546-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Discover',
      category: [
        'Cloud Architecture & Deployment',
        'Data Engineering & Business Intelligence',
        'Full-Stack Software Engineering',
      ],
      description:
        'Discover Card found that payments, invoices, and money movement were taking too long to process. This impeded both Di...',
    },
    {
      source: '',
      title: 'Major Credit Card Network',
      category: [
        'Cloud Architecture & Deployment',
        'Data Engineering & Business Intelligence',
        'Full-Stack Software Engineering',
      ],
      description:
        'One of the largest major credit card networks contracted with Kunai to build a best-in-class rewards program.',
    },
    {
      source: '',
      title: 'Ohana',
      category: [
        'Data Engineering & Business Intelligence',
        'Full-Stack Software Engineering',
        'Product Design & Development',
      ],
      description:
        'How could we make the current state of AI actionable for a financial institution? AI chatbots offered a scalable alte...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/9a5af19915d02c2ee8f08af63e9a2681d94200ed-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'FortifID',
      category: [
        'Data Engineering & Business Intelligence',
        'Product Design & Development',
      ],
      description:
        'FortifID created a model that would provide organizations data regarding consumers, income, and small business insigh...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/c3dd9b6b160b066ec3fce7b205c5096613f9c78e-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Stackwell',
      category: [
        'Full-Stack Software Engineering',
        'Mobile Engineering',
        'Product Design & Development',
      ],
      description:
        'An investment app focused on helping Black communities overcome the racial wealth gap and build lasting, generational...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/41164813fcfb43ece00b3798b8409d7b1b4a26e8-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Ernst & Young',
      category: [
        'Cloud Architecture & Deployment',
        'Data Engineering & Business Intelligence',
        'Product Design & Development',
      ],
      description:
        'EY contracted Kunai as a third party technology and cybersecurity auditor to identify weaknesses and reinvent EY’s da...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/17b49d3b280e4252e948c491d0bd8ff83a07b975-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Bloomberg',
      category: [],
      description:
        'Given the immense explosion of new communication channels, increased telecommunications governance became an increasi...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/ba143139e505ba8ac2979ce536270a08280a1b04-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Mastercard',
      category: [],
      description:
        'Kunai was tasked with visualizing a platform that merchants could easily adopt and integrate into their existing syst...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/5ab2574940aba3e60d447f189a75eeb7fc7292a8-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'WEX',
      category: [
        'Accessibility',
        'Cloud Architecture & Deployment',
        'Full-Stack Software Engineering',
      ],
      description:
        'Modernizing a legacy virtual card portal by future-proofing backend security and scalability while updating the front...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/70563c560b283ae36a87f9bd259b7295851ef837-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Oriental Bank',
      category: [],
      description:
        'Oriental Bank made plans to add a new product to their core offerings: Chello, a new digital bank subsidiary. Chello ...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/73587e48e43ed540fa00cf79b438630cdd354376-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Zazzle',
      category: ['Mobile Engineering'],
      description:
        'Zazzle came up with the idea for a new service that offered seamless real-time design services. To that end, Zazzle r...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/ef8155525a4fdd8641895aa886a67d72951e10ca-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Nubank',
      category: ['Mobile Engineering'],
      description:
        'Nubank sought to expand into the Mexican market to capitalize on a market where more than half the people did not hav...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/fc8a400a037ce5f848df6962eeedc19715c302e2-178x128.svg?w=178&amp;h=128&amp;auto=format',
      title: 'J.P. Morgan',
      category: [],
      description:
        'JPMC needed to reinvent the way they introduced their complex array of products and solutions to a global clientele. ...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/e04e0b03502f43d2085ea313043a681fa92107cf-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'The Players Company',
      category: ['Mobile Engineering'],
      description:
        'A financial management and investing app to increase financial literacy amongst athletes and help them first establis...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/b05601f2b3cafa7989e1cabd5343238e94b29a05-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Bankshift',
      category: [
        'Cloud Architecture & Deployment',
        'Full-Stack Software Engineering',
        'Mobile Engineering',
      ],
      description:
        'BankShift recognized that account holders needed a simple, consolidated view of their financial landscape to better m...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/9a4cc3d0ddb97ac923c981158d6bc9e7cee62dd2-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Relief',
      category: [
        'Full-Stack Software Engineering',
        'Mobile Engineering',
        'Product Design & Development',
      ],
      description:
        'Offering the ability to negotiate debt to using a variety of powerful tools.',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/7c8caa19b33bb1c38a18128a4a032239b655a09e-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'BuoyFi',
      category: [
        'Full-Stack Software Engineering',
        'Mobile Engineering',
        'Cloud Architecture & Deployment',
      ],
      description:
        'The world’s first mobile app tackling the $88b medical debt epidemic by helping users navigate, negotiate, and pay of...',
    },
    {
      source:
        'https://cdn.sanity.io/images/f9g2uuqu/production/8a277ce4e398e3514353216e970a51e09422b5c3-176x128.svg?w=176&amp;h=128&amp;auto=format',
      title: 'Allio',
      category: [
        'Cloud Architecture & Deployment',
        'Full-Stack Software Engineering',
        'Product Design & Development',
      ],
      description:
        'An all-in-one saving & investing app that allows users to automate their investments using expert-level strategies.',
    },
  ];
  const categories = [
    'View All',
    'Accessibility',
    'Cloud Architecture & Deployment',
    'Data Engineering & Business Intelligence',
    'Full-Stack Software Engineering',
    'Mobile Engineering',
    'Product Design & Development',
  ];
  const filteredServices =
    selected.value === 'View All'
      ? services
      : services.filter((service) => service.category.includes(selected.value));

  return (
    <div class=" bg-gray-100">
      <div class="container mx-auto my-10 max-w-7xl bg-gray-100 px-4 sm:px-6">
        <div class="p-4">
          <h2 class="mb-8 text-4xl font-medium">Work by Service Offering</h2>
          <div class="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick$={() => (selected.value = category)}
                class={`rounded-full px-4 py-2 ${
                  selected.value === category
                    ? 'bg-gray-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <IconCardList cards={filteredServices} />
        </div>
      </div>
    </div>
  );
});
