import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const customSections = [
    {
      img: 'https://cdn.sanity.io/images/f9g2uuqu/production/599029a849dea3dc99bc1d2c12bf3a5a61e6800f-6521x4696.jpg?w=6521&amp;h=4696&amp;auto=format',
      title: 'Payments',
      description: 'Major Card Issuer',
      link: 'https://kunaico.com/our-work/major-card-issuer/',
    },
    {
      img: 'https://cdn.sanity.io/images/f9g2uuqu/production/8410c7374b0a9fc1199c61b71582a29b2c29ee5b-5472x3648.jpg?w=5472&amp;h=3648&amp;auto=format',
      title: 'Core Banking',
      description: 'Nubank',
      link: 'https://kunaico.com/our-work/nubank-d5d17ea5/',
    },
    {
      img: 'https://cdn.sanity.io/images/f9g2uuqu/production/d44797f09872c72eff5c6e1456ebbbadd84ee36c-8256x5504.jpg?w=8256&amp;h=5504&amp;auto=format',
      title: 'Wealth Management',
      description: 'Stackwell',
      link: 'https://kunaico.com/our-work/stackwell/',
    },
    {
      img: 'https://cdn.sanity.io/images/f9g2uuqu/production/24c53b3815ee696b16d62e54298a43905effcd9d-6720x4480.jpg?w=6720&amp;h=4480&amp;auto=format',
      title: 'Personal Financial Management',
      description: 'Allo',
      link: 'https://kunaico.com/our-work/allio/',
    },
  ];
  return (
    <div class="container mx-auto mb-10 mt-10 px-4 sm:px-6">
      <h1 class="mb-4 text-center text-4xl font-bold">
        Custom Teams, Custom Builds - Customized For Your Vision
      </h1>
      <p class="mb-10 text-center text-xl">
        Here are some custom tailored products we've developed with our clients.
      </p>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        {customSections.map((item, index) => (
          <div key={index} class="relative flex justify-center overflow-hidden">
            <a key={index} href={item.link}>
              <img
                src={item.img}
                alt={item.description}
                width="320"
                height="176"
                class=" h-full w-full rounded shadow-md transition-transform duration-300 hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 w-full rounded-b-md bg-black bg-opacity-50 px-4 py-3 sm:px-5 sm:py-5">
                <p class="mb-2 text-xl text-white sm:text-2xl">{item.title}</p>
                <p class="text-lg font-semibold text-white sm:text-xl">
                  {item.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});
