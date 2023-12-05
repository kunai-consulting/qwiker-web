import { component$ } from "@builder.io/qwik";
import Sublink from "../../../@shared/List/SublinkList";

export default component$(() => {
  const contents = {
    title: "Fast-forward to 2022.",
    description:
      "Kunai has grown to over two hundred designers, engineers, data scientists, and cloud architects… and we are as excited as we’ve ever been about the future of financial technology.",
    sections: [
      {
        link: "Payments →",
        text: "Generate new revenue streams with a relevant payment solution that improves customer satisfaction and provides a seamless payment experience for your customers.",
      },
      {
        link: "Personal Financial Management →",
        text: "Expand your offerings with a smart platform that provides customers with personalized investment portfolios, finance management helpers, bill payment features, and investment management tools.",
      },
      {
        link: "Security & Compliance →",
        text: "Exceed the growing customer expectation for cybersecurity with best-in-class software best practice. Leverage proactive security and compliance procedures to drive revenue, customer satisfaction, and brand loyalty. Leverage the trust built from proactive security and compliance procedures to drive revenue, customer satisfaction, and brand loyalty.",
      },
      {
        link: "Core Banking →",
        text: "With some of the largest global banks under our belt, you can leverage our expertise to modernize legacy systems or build new platforms to digitize your core offerings on highly secure, scalable architecture. Create and oversee your entire banking ecosystem with a centralized, real-time dashboard, keeping your customers happy with simplified processes to take them from “New Users” to “Lifelong Fans.”",
      },
      {
        link: "Wealth Management →",
        text: "Leverage our expertise to supplement your core services with personalized tools to help your customers achieve their financial goals and set the foundation to build meaningful wealth. Stand out from the crowd by customizing wealth management tools tailored to your customers’ needs and preferences.",
      },
      {
        link: "Healthcare →",
        text: "HIPAA Compliance, made easy. We’ll help you navigate compliance from the start in order to design effective risk-averse integration solutions before we write a single line of code.",
      },
      {
        link: "Process Automation →",
        text: "Increase productivity, improve accuracy, enable rapid expansion, and decrease operational costs. We work with you to automate the parts of your business that are prone to errors and liable for low-level",
      },
      {
        link: "Debt Relief →",
        text: "Take advantage of an exploding area of the FinTech arena and scale your business. Keep your clients in good financial health to maintain and expand market share and profitability.",
      },
      {
        link: "Crypto Wallets →",
        text: "Securely open a new world of cutting-edge investment opportunities that are high in demand for you and your clients in this exciting world of ever-changing technologies and strategies.",
      },
      {
        link: "Artificial Intelligence →",
        text: "Streamline operations, increase agility, drive efficiency, and garner more meaningful data without any specialized investments in infrastructure.",
      },
      {
        link: "Rewards & Loyalty →",
        text: "Build and operate a successful platform that drives value for your cardholders, creating a loyal customer base you can monetize for an evergreen revenue stream.",
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
