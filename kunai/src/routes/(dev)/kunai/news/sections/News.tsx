import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
      <h2 class="mb-8 text-4xl font-medium">News</h2>
      <div class="grid grid-cols-3 gap-4 md:grid-cols-3">
        <div class="col-span-1">
          <div class="mb-4">
            <img
              src="https://kunaico.com/static/9c6e65a535ad9b342e678d6397986ebc/6172e/photo-1531535701800-03b2bec4fbfd.avif"
              alt="Large Article Image"
              width="360"
              height="300"
              style={{ width: '400px', height: '300px' }}
            />
            <h2 class="mt-2 text-xl font-bold">
              How Do You Talk With Your Kids About AI?
            </h2>
            <p class="text-sm">
              This post was originally shared on our CEO Sandeep Sood's LinkedIn
              profile.
            </p>
          </div>
        </div>

        <div class="col-span-2 space-y-4">
          <div class="grid-cols-2 gap-10 ">
            <div class="flex w-full">
              <div class="flex-shrink-0">
                <img
                  src="https://kunaico.com/static/ada90a2f71f52da8124ec64085db6c59/af9ec/lastcompinterfaceletter-1.avif"
                  alt="Small Article 1 Image"
                  width="120"
                  height="120"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold">
                  Embracing the Last Interface: How Apps Will Adapt to AI
                </h3>
                <p class="text-sm">
                  In 1979, technologist and writer Brian Roemmele predicted
                  that...
                </p>
              </div>
            </div>
          </div>

          {/* Small Article 2 */}
          <div class="grid-cols-2 gap-10 ">
            <div class="flex w-full">
              <div class="flex-shrink-0">
                <img
                  src="https://kunaico.com/static/b4a7a29dd8230af297c61524c10d43c3/67841/IMG_3921.avif"
                  alt="Small Article 2 Image"
                  width="120"
                  height="120"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold">
                  Sr. Product Manager Natasa Trajkovic Builds on an
                  Understanding of Client Business Initiatives
                </h3>
                <p class="text-sm">
                  Natasa Trajkovic is a Senior Product Manager at Kunai.
                </p>
              </div>
            </div>
          </div>
          {/* Small Article 3 */}

          <div class="grid-cols-2 gap-10 ">
            <div class="flex w-full">
              <div class="flex-shrink-0">
                <img
                  src="https://kunaico.com/static/597f227025cccf1b0609ad7facb4507b/b85bd/photo-1679958157946-a629332cb903.avif"
                  alt="Small Article 3 Image"
                  width="120"
                  height="120"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold">AI Innovation vs. Novelty</h3>
                <p class="text-sm">
                  This post was originally shared on our CEO Sandeep Sood's
                  LinkedIn profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
