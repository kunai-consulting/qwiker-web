import { component$ } from "@builder.io/qwik";

interface Section {
  title?: string;
  description?: string;
  icon?: string;
}

interface ListProps {
  list?: Section[];
}

export default component$<ListProps>((props) => {
  return (
    <div class="container mx-auto mb-10 mt-10 px-4">
      <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {props.list?.map((section, index) => (
          <div key={index} class="flex w-96 items-start rounded-lg p-6">
            <div class="flex-shrink-0">
              <img
                width="51"
                height="51"
                src={
                  section.icon
                    ? section.icon
                    : "https://cdn.sanity.io/images/f9g2uuqu/production/17fa045dfd4bd551b540b0915b8db1205e397f13-51x51.svg?w=51&amp;h=51&amp;auto=format"
                }
                alt="Check Icon"
                class="h-12 w-12"
              />
            </div>
            <div class="ml-4">
              <h2 class="mb-2 text-lg font-semibold">{section.title}</h2>
              <p class="text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
