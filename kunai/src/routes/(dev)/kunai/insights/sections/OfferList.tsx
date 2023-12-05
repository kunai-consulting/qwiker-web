import { component$ } from '@builder.io/qwik';
import IconList from '../../../@shared/List/IconList';

export default component$(() => {
  const offerings = [
    {
      title: 'Speech Recognition',
      description:
        'We have helped clients implement speech recognition AI tools to transcribe spoken words to text. Speech recognition has seen massive adoption across various markets to facilitate communications and operational efficiency in virtual assistants, hands-free dictation software, and call center automations.',
    },
    {
      title: 'Natural Language Processing',
      description:
        'Our team of engineers helps organizations to integrate AI algorithms that can not only recognize and understand text and voice, but also respond to it in a human way. This has helped clients drive customer satisfaction and retention through advanced chatbots and robust customer preference analysis.',
    },
    {
      title: 'Predictive Analytics & Machine Learning',
      description:
        'We help clients curate and develop a suite of tools and models to train and deploy machine learning models at scale. We leverage cutting-edge AI technologies to help you better analyze customer behavior, predict demand, identify fraudulent transactions, and create more effective targeted marketing campaigns.',
    },
    {
      title: 'Chatbots & Virtual Assistants',
      description:
        'By utilizing a variety of AI technologies, we enable organizations to improve efficiency and reduce operational costs by automating manual operational tasks and relocating vital human support agents to high-demand traffic areas.',
    },
    {
      title: 'Image Recognition',
      description:
        'Image recognition allows organizations to automatically identify objects within images and videos with incredible efficacy. We have helped clients integrate IR tools into their ID verifications systems, facial recognition software, sophisticated image search tools, and image data scraping algorithms.',
    },
    {
      title: 'Customer Behavior Analysis',
      description:
        'This is the process of using data and analytics to predict, categorize, and segment your customers’ actions and behaviors. We help apply this technology to your existing stack, thereby driving improved customer experiences, increased sales and revenue, and automated cross-selling procedures for complementary products.',
    },
    {
      title: 'API Integrations',
      description:
        'Kunai’s expertise in both white-box and sandbox APIs has equipped us with a deep expertise of some of the top AI platforms and technologies. Whatever objectives our clients have, we have the most optimal combination of technologies to build their vision.',
    },
    {
      title: 'Regulations & Compliance',
      description:
        'AI and machine learning have entered a sort of Renaissance and are advancing at breakneck speeds. As such, our teams have their finger on the pulse, staying up-to-date on the latest trends and most recent developments in regulation and compliance. We ensure that your solutions are always on top of data privacy, internal controls, and transparency.',
    },
    {
      title: 'Internal Buy-In',
      description:
        'Though investments into highly specialized skills or infrastructure may be unnecessary, you may need your existing teams to get comfortable with new AI integrations. We help you and your teams understand the strategic roles AI can play in your systems, develop AI roadmaps for business goals, and upskill your teams to maximize ease of use.',
    },
    {
      title: 'AI Consultation & Strategy',
      description:
        'We work closely with our clients to curate the most ideal AI tools for their business needs. Part of that process includes analyzing usability,onboarding and adopting new tools, validation of new systems, and long-term strategies for scaling. By doing so, we ensure that you and your teams can maximize your investments.',
    },
    {
      title: 'Smart Automation',
      description:
        'Our AI consultants help clients identify bottlenecks in operations workflows. These bottlenecks are then studied to build a smart platform to automate the workflow. Doing so enables clients to better manage personnel, free up much needed resources, and eliminate room for human-error.',
    },
  ];
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto my-10 max-w-7xl px-4 sm:px-6">
        <h2 class="mb-8 flex pt-8 text-4xl font-medium">List of Offerings</h2>
        <IconList list={offerings} />
      </div>
    </div>
  );
});
