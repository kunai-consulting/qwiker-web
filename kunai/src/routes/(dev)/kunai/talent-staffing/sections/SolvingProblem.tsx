import { component$ } from "@builder.io/qwik";
import IconList from "../../../@shared/List/IconList";

export default component$(() => {
  const benefits = [
    {
      title: "Hire faster",
      description: "Build your team 3x faster with our platform",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/f93eaf6df454d6baf33e73abe511eb656358cfe9-51x51.svg?w=51&amp;h=51&amp;auto=format",
    },
    {
      title: "Save time",
      description:
        "Fully vetted talent. Concise, simple submissions and reports",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/7640ce33379300aaa0f71cf5b318245d7ed00156-51x51.svg?w=51&amp;h=51&amp;auto=format",
    },
    {
      title: "Scientific approach",
      description: "Clear timelines and expectations, based on years of data",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/a856434b043384732e4108b1e86f8df0ce6e7758-48x51.svg?w=48&amp;h=51&amp;auto=format",
    },
    {
      title: "Customize your team",
      description:
        "Choose from contractor, contract-to-hire, or fully managed dev teams",
      icon: "https://cdn.sanity.io/images/f9g2uuqu/production/609f86a7147dfa962c14a25fc2f672ddf780857c-50x51.svg?w=50&amp;h=51&amp;auto=format",
    },
  ];
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="lg:grid lg:grid-cols-2 lg:gap-2">
          <div class="lg:col-span-1">
            <h2 class="text-3xl font-extrabold text-gray-900">
              Solving a Mutual Problem
            </h2>
          </div>
          <div class="lg:col-span-1">
            <p class="text-lg text-gray-500">
              Hiring reliable developers is a struggle we understand. That’s why
              we want to share the master key to hiring the best developer
              talent.
            </p>
          </div>
          <div class=" lg:col-span-2 lg:mt-0">
            <div class="flex flex-col space-y-8">
              <IconList list={benefits} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
