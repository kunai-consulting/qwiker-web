import { component$ } from "@builder.io/qwik";
import IconList from "../../../@shared/List/IconList";

export default component$(() => {
  const flexible = [
    {
      title: "Local and Global Developer Pools",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/fe73235bf957a12523c9874824c7bc0f0641b378-51x51.svg?w=51&amp;h=51&amp;auto=format",
    },
    {
      title: "Customized Direct Sourcing Strategies",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/645aea6d29fad41fe36cb718defafd37c0ca04b0-58x51.svg?w=58&amp;h=51&amp;auto=format",
    },
    {
      title: "Full Legal Compliance Anywhere in the World",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/f410b0c13e25ed81a4ea154e96f05786d2f00e61-44x51.svg?w=44&amp;h=51&amp;auto=format",
    },
    {
      title: "Time Zone Optimization",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/7640ce33379300aaa0f71cf5b318245d7ed00156-51x51.svg?w=51&amp;h=51&amp;auto=format",
    },
  ];
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="lg:grid lg:grid-cols-2 lg:gap-2">
          <div class="lg:col-span-1">
            <h2 class="text-3xl font-extrabold text-gray-900">
              The Era of Flexible Work is Here
            </h2>
          </div>
          <div class="lg:col-span-1">
            <p class="text-lg text-gray-500">
              Balance the benefits of remote developer talent with the need for
              in-footprint representation.
            </p>
          </div>
          <div class=" lg:col-span-2 lg:mt-0">
            <div class="flex flex-col space-y-8">
              <IconList list={flexible} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
