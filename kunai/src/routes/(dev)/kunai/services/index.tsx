import { component$ } from "@builder.io/qwik";
import Service from "./sections/Service";
import Contact from "./sections/Contact";
import Signup from "../../@shared/Signup";
import Title from "../../@shared/Title";

export default component$(() => {
  return (
    <>
      <Title
        title="Design, Engineering, Cloud Architecture, Data Science, Strategic
          Consulting, and more"
        editorial="Consultation and Execution Partner"
        description="Custom software. Tailored solutions. Unparalleled expertise."
      />
      <div
        class="relative min-h-1/2screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://cdn.sanity.io/images/f9g2uuqu/production/a84ea6af6fef69d65cb4b7c4fa422d8b55fd170f-4999x3336.jpg?w=4999&h=3336&auto=format)',
        }}
      />
      <Service />
      <Contact />
      <Signup />
    </>
  );
});
