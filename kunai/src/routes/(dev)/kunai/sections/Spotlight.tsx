import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const activeContent = useSignal(0);
  const contents = [
    {
      text: 'Kunai collaborated closely with our engineers from start to finish, making the process smooth from inception through handoff. With their help, our development project exceeded an ambitious set of expectations.',
      author: 'Julio Santos',
      position: 'Director of Engineering',
      src: 'https://cdn.sanity.io/images/f9g2uuqu/production/ef8155525a4fdd8641895aa886a67d72951e10ca-176x128.svg?w=176&amp;h=128&amp;auto=format',
    },
    {
      text: 'The Kunai team has helped us bring our application to life. We appreciate our business partnership with Kunai and look forward to working with them as we continue to execute on our mission.',
      author: 'Steven Wright',
      position: 'CEO',
      src: 'https://cdn.sanity.io/images/f9g2uuqu/production/7c8caa19b33bb1c38a18128a4a032239b655a09e-176x128.svg?w=176&amp;h=128&amp;auto=format',
    },
    {
      text: 'Kunai has a keen attention to detail, and it shows in their work. Working with the Kunai team was an amazing experience for our company.',
      author: 'Joseph Gradante',
      position: 'CEO',
      src: 'https://cdn.sanity.io/images/f9g2uuqu/production/8a277ce4e398e3514353216e970a51e09422b5c3-176x128.svg?w=176&amp;h=128&amp;auto=format',
    },
  ];

  return (
    <div class="mt-10 flex flex-col items-center justify-center">
      <div class="mb-4 hidden space-x-4 md:flex">
        {contents.map((content, index) => (
          <img
            key={index}
            width="147"
            height="100"
            src={content.src}
            class={`cursor-pointer ${
              activeContent.value !== index ? 'opacity-50' : 'opacity-100'
            }`}
            onClick$={() => (activeContent.value = index)}
          />
        ))}
      </div>

      <div class="relative flex w-full flex-col items-center md:hidden">
        <div class="relative flex items-center">
          <button
            class="absolute left-0 z-10 justify-center p-2"
            onClick$={() =>
              activeContent.value > 0
                ? activeContent.value--
                : (activeContent.value = contents.length - 1)
            }
          >
            &lt;
          </button>
          <div class="relative w-96 rounded-xl bg-white p-6 shadow-md">
            <blockquote class="mb-4 italic">
              “{contents[activeContent.value].text}”
            </blockquote>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div class="h-1 w-10 bg-red-500"></div>
                <div>
                  <p class="font-bold">
                    {contents[activeContent.value].author}
                  </p>
                  <p class="text-sm uppercase text-gray-500">
                    {contents[activeContent.value].position}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="absolute right-0 z-10 justify-center p-2"
            onClick$={() =>
              activeContent.value < contents.length - 1
                ? activeContent.value++
                : (activeContent.value = 0)
            }
          >
            &gt;
          </button>
        </div>
        <img
          width="147"
          height="100"
          src={contents[activeContent.value].src}
          class={`cursor-pointer `}
        />
      </div>

      <div class="relative hidden w-96 rounded-xl bg-white p-6 shadow-md md:block">
        <div class="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
        <blockquote class="mb-4 italic">
          “{contents[activeContent.value].text}”
        </blockquote>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="h-1 w-10 bg-red-500"></div>
            <div>
              <p class="font-bold">{contents[activeContent.value].author}</p>
              <p class="text-sm uppercase text-gray-500">
                {contents[activeContent.value].position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
