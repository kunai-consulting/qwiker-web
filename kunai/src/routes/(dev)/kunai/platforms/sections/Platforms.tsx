import { component$ } from "@builder.io/qwik";
import Sublink from "../../../@shared/List/SublinkList";

export default component$(() => {
  const contents = {
    title: "Expertise on the world’s top platforms and APIs, at your service",
    description:
      "Kunai has deep partnerships with the world’s top tech platforms. These partnerships enable us to develop robust and scalable software for our clients in the tightest possible iterations.",
    sections: [
      {
        link: "Alpaca →",
        text: "Leveraging an all-in-one API for stock and crypto investing to build, launch, and scale your next trading platform.",
      },
      {
        link: "Snowflake →",
        text: "All-in-one data warehousing and cloud computing customized for your enterprise needs by highly skilled experts.",
      },
      {
        link: "Unit →",
        text: "An innovative Banking-as-a-Service platform for businesses of all sizes with one of its direct development partners.",
      },
      {
        link: "Salesforce →",
        text: "The world’s most powerful CRM partnered with an expert team pushing the boundaries of its capabilities.",
      },
      {
        link: "Billgo →",
        text: "One of the world’s most extensive biller networks masterfully shaped by a team of payment services veterans.",
      },
      {
        link: "Marqeta →",
        text: "Customize fully functional payment solutions out of the box with an expert team of fintech and banking veterans.",
      },
      {
        link: "Amazon Web Services →",
        text: "The world's most flexible and reliable cloud platform partnered with an expert team navigating at the edge of its mastery.",
      },
      {
        link: "Stripe →",
        text: "The most comprehensive, easy-to-integrate payment processing platform molded to the needs of your organization.",
      },
      {
        link: "Apex →",
        text: "The most robust fintech-building platforms tailored to your needs and built to market faster than ever by fintech veterans.",
      },
      {
        link: "Plaid →",
        text: "A powerful financial data API platform partnered with one of its foremost expert integration partners.",
      },
      {
        link: "Google Cloud →",
        text: "One of the world’s most comprehensive cloud platforms expertly tailored and optimized to meet your needs.",
      },
    ],
  };
  return (
    <Sublink
      title={contents.title}
      description={contents.description}
      sections={contents.sections}
    />
  );
});
