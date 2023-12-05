import { component$ } from '@builder.io/qwik';
import Divider from '../Divider';

interface Section {
  link?: string;
  text?: string;
  icons?: string[];
}

interface SublinkProps {
  title?: string;
  description?: string;
  sections?: Section[];
}

export default component$<SublinkProps>((prop) => {
  return (
    <div class="container mx-auto mb-10 mt-10 max-w-7xl px-4">
      <div class="flex w-2/3 flex-col items-start justify-between">
        <h2 class="mb-6 text-xl leading-tight sm:text-4xl">{prop.title}</h2>
        <p class="mb-10 text-xl">{prop.description}</p>
      </div>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
        {prop.sections?.map((section, index) => (
          <div key={index}>
            <Divider color="black" />
            <a
              href="#"
              class="mb-4 mt-4 inline-block font-semibold uppercase text-red-500"
            >
              {section.link}
            </a>
            <p>{section.text}</p>
            {section.icons && (
              <div class={`grid w-1/2 grid-cols-${section.icons.length}`}>
                {section.icons.map((icon, index) => (
                  <img key={index} width="77" height="56" src={icon} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
