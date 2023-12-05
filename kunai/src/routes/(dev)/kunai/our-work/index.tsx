import { component$ } from "@builder.io/qwik";
import Carousel from "./sections/Carousel";
import OfferService from "./sections/OfferService";
import Contact from "./sections/Contact";
import LogoWall from "../../@shared/List/LogoWall";
import Signup from "../../@shared/Signup";
import Title from "./sections/Title";

export default component$(() => {
  const partners = [
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/8410c7374b0a9fc1199c61b71582a29b2c29ee5b-5472x3648.jpg?w=5472&amp;h=3648&amp;auto=format",
      title: "Nubank",
      text: "Nubank sought to expand into the Mexican market to capitalize on a market where more than half the people did not have savings accounts. Nubank desired to rollout completely digital savings ac...",
    },
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/599029a849dea3dc99bc1d2c12bf3a5a61e6800f-6521x4696.jpg?w=6521&amp;h=4696&amp;auto=format",
      title: "Major Card Issuer",
      text: "Building a loyalty program cloud platform that has supported over a million customers and 350+ venues since launch.",
    },
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/d44797f09872c72eff5c6e1456ebbbadd84ee36c-8256x5504.jpg?w=8256&amp;h=5504&amp;auto=format",
      title: "Stackwell",
      text: "An investment app focused on helping Black communities overcome the racial wealth gap and build lasting, generational wealth",
    },
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/cfc540fbd86b3ef288e47ada1582d9dac3a02387-7890x5260.jpg?w=7890&amp;h=5260&amp;auto=format",
      title: "Mastercard",
      text: "Mastercard hoped to make payment processing easier for its merchants. The new technology would allow businesses to offer financing options and payment plans.",
    },
  ];
  const studies = [
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/24c53b3815ee696b16d62e54298a43905effcd9d-6720x4480.jpg?w=6720&amp;h=4480&amp;auto=format",
      title: "Allio",
      text: "An all-in-one saving & investing app that allows users to automate their investments using expert-level strategies.",
    },
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/115f1944fd243574dacace3605856ceab5118935-4288x2848.jpg?w=4288&amp;h=2848&amp;auto=format",
      title: "Major Credit Card Network",
      text: "Client wanted to reimagine their offers and reinvent the way they curated offerings to their customers. Personalized discounts and offerings would better serve the interests of all stakeholder...",
    },
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/588a457cecd371acd1038e879807a942c3c40495-6779x7374.jpg?w=6779&amp;h=7374&amp;auto=format",
      title: "Oriental Bank",
      text: "Oriental Bank made plans to add a new product to their core offerings: Chello, a new digital bank subsidiary. Chello would offer a unique suite of products and services to serve the small and ...",
    },
    {
      source:
        "https://cdn.sanity.io/images/f9g2uuqu/production/45f39c00703bf7acf15dfd0d5343a53890811c12-8192x5464.jpg?w=8192&amp;h=5464&amp;auto=format",
      title: "Major Credit Card Network",
      text: "One of the largest major credit card networks contracted with Kunai to build a best-in-class rewards program.",
    },
  ];
  return (
    <>
      <Title cards={partners} />
      <Carousel cards={studies} />
      <OfferService />
      <Contact />
      <LogoWall />
      <Signup />
    </>
  );
});
