import { component$ } from "@builder.io/qwik";
import Sublink from "../../../@shared/List/SublinkList";

export default component$(() => {
  const contents = {
    title: "No shortcuts, no cut corners. Your expectations, exceeded.",
    description:
      "We’ve structured all of our services with one goal in mind: To provide your most pressing business challenges with comprehensive and effective solutions. No matter what your goal is, we can help.",
    sections: [
      {
        link: "Accessibility →",
        text: "Minimize legal risks, increase ROI, expand your audience, and drive customer loyalty by optimizing usability and inclusivity standards across all your touchpoints.",
        icons: [
          "https://cdn.sanity.io/images/f9g2uuqu/production/7c8caa19b33bb1c38a18128a4a032239b655a09e-176x128.svg?w=176&amp;h=128&amp;auto=format",
        ],
      },
      {
        link: "Product Design & Development →",
        text: "Create new software or improve existing systems. Our range of services includes ideation, UX & UI design, software development, testing, and deployment.",
        icons: [
          "https://cdn.sanity.io/images/f9g2uuqu/production/8a277ce4e398e3514353216e970a51e09422b5c3-176x128.svg?w=176&amp;h=128&amp;auto=format",
          "https://cdn.sanity.io/images/f9g2uuqu/production/5ab2574940aba3e60d447f189a75eeb7fc7292a8-176x128.svg?w=176&amp;h=128&amp;auto=format",
        ],
      },
      {
        link: "Cloud Architecture & Deployment →",
        text: "Cloud expertise across AWS, Snowflake, Google Cloud, and more. Build, scale, or migrate using the platform best suited for you to maximize savings and efficiency.",
        icons: [
          "https://cdn.sanity.io/images/f9g2uuqu/production/7c8caa19b33bb1c38a18128a4a032239b655a09e-176x128.svg?w=176&amp;h=128&amp;auto=format",
          "https://cdn.sanity.io/images/f9g2uuqu/production/e04e0b03502f43d2085ea313043a681fa92107cf-176x128.svg?w=176&amp;h=128&amp;auto=format",
        ],
      },
      {
        link: "Full-Stack Software Engineering →",
        text: "Expert devs with a proven track record of delivering high-quality, scalable, and robust software from front-end development to back-end infrastructure.",
        icons: [
          "https://cdn.sanity.io/images/f9g2uuqu/production/7c8caa19b33bb1c38a18128a4a032239b655a09e-176x128.svg?w=176&amp;h=128&amp;auto=format",
          "https://cdn.sanity.io/images/f9g2uuqu/production/e04e0b03502f43d2085ea313043a681fa92107cf-176x128.svg?w=176&amp;h=128&amp;auto=format",
          "https://cdn.sanity.io/images/f9g2uuqu/production/5ab2574940aba3e60d447f189a75eeb7fc7292a8-176x128.svg?w=176&amp;h=128&amp;auto=format",
        ],
      },
      {
        link: "Data Engineering & Business Intelligence →",
        text: "Custom strategies that transform data into actionable insights with data pipelines and warehousing, prediction models, forecasting, and risk management and compliance.",
        icons: [
          "https://cdn.sanity.io/images/f9g2uuqu/production/7c8caa19b33bb1c38a18128a4a032239b655a09e-176x128.svg?w=176&amp;h=128&amp;auto=format",
        ],
      },
      {
        link: "Mobile Engineering →",
        text: "Expertise in a variety of platforms and tools including iOS, Android, and React Native. Design, develop, and deploy reliable mobile solutions that meet your specific needs.",
        icons: [
          "https://cdn.sanity.io/images/f9g2uuqu/production/5ab2574940aba3e60d447f189a75eeb7fc7292a8-176x128.svg?w=176&amp;h=128&amp;auto=format",
          "https://cdn.sanity.io/images/f9g2uuqu/production/8a277ce4e398e3514353216e970a51e09422b5c3-176x128.svg?w=176&amp;h=128&amp;auto=format",
        ],
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
