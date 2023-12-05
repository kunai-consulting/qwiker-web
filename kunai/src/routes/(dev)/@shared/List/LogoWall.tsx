import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const partners = [
    'https://cdn.sanity.io/images/f9g2uuqu/production/177aaaf4070148b513c4b1d49ab1859d0e612e6d-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/ae8af3de51859490c2ce43a652f37ff82279e82e-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/ae8af3de51859490c2ce43a652f37ff82279e82e-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/bf1dd57edf101a4674c8f1973f2ff7c6799f5392-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/8f52a8721dc8e1a203d5b4ef7515ab695781ae71-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/54e06575db0c5676d79e143e2d8ef0a118d0702c-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/96550e2db57d05a46d51ddaf8cef0b1afd7f3b32-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/c4d3486d7c8a6bbab4370935d6aa88337ab7b12d-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/cb57a7a2f948c781f664b4262ebdad9c819ede9d-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/8cdfd01691a8ad47f5dbbd59fd420d45f6e44bfc-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/33fdda1f810c6008212d0a39966c3ad9984522ba-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/c6474bf6b3dc6fcec1bcd808e8f3738ab4e13f22-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/7c19f1632517b34d9d775a63316264f59ec21f81-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/2fe7d89a15967e9c431d3e91ca5e368bc5c289ea-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/848ef9b21aaa5df6b0cfcc882d8699eb38bc54f4-100x100.svg?w=100&amp;h=100&amp;auto=format',
    'https://cdn.sanity.io/images/f9g2uuqu/production/ff1674c64e888e822ec753e07e4306c29c75ffe8-100x100.svg?w=100&amp;h=100&amp;auto=format',
  ];

  return (
    <div class=" bg-gray-100">
      <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
        <h2 class="mb-8 flex pt-8 text-4xl font-medium">
          Our Platform Partners
        </h2>
        <div class="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              class="flex h-24 w-full items-center justify-center text-center"
            >
              <img
                width="100"
                height="100"
                src={partner}
                alt={`Partner logo ${index + 1}`}
                class="mx-auto h-full max-h-full max-w-full"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
        <div class="flex justify-center p-8 text-center">
          <button class="rounded-full bg-black px-6 py-2 text-sm text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
});
