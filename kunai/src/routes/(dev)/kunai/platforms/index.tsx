import { component$ } from "@builder.io/qwik";
import Title from "../../@shared/Title";
import Signup from "../../@shared/Signup";
import Platforms from "./sections/Platforms";
import Contact from "./sections/Contact";

export default component$(() => {
  return (
    <>
      <Title
        editorial="Platforms and Integrations"
        title="Plan, build, and integrate with widely used, best-in-class platforms"
        description="Broader capabilities. Flexible integrations. Faster development."
      />
      <div
        class="relative min-h-1/2screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://cdn.sanity.io/images/f9g2uuqu/production/a17e4dac9bd47ad0d189b1812661b0f618c85396-5979x2140.jpg?w=5979&amp;h=2140&amp;auto=format)',
        }}
      />
      <Platforms />
      <Contact />
      <Signup />
    </>
  );
});
