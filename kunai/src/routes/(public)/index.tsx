import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import FeatureCard from './components/FeatureCard';
import CustomerTestimonial from './components/CustomerTestimonial';
import UseCaseHeader from './components/UseCaseHeader';
import ContactUs from './components/ContactUs';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import DescriptionCard from './components/DescriptionCard';

// Assets: Images
import FastCardIcon from './img/fast_card_icon.png';
import FastCardImg from './img/fast_card_activation.png';
import EnhancedIcon from './img/enhanced_icon.png';
import EnhancedImg from './img/enhanced_img.png';
import StreamedLinedIcon from './img/streamlined_icon.png';
import StreamLinedImg from './img/streamlined_img.png';
import HardwareIcon from './img/hardware_icon.png';
import HardwareImg from './img/hardware_img.png';
import RiskIcon from './img/risk_icon.png';
import RiskImg from './img/risk_img.png';

export const head: DocumentHead = {
  title: 'Airkey',
  meta: [
    {
      name: 'description',
      content: 'Airkey',
    },
  ],
};

export default component$(() => {
  const featureSections = [
    {
      icon: FastCardIcon,
      img: FastCardImg,
      title: 'Fast Card Activation',
      text: "Whether onboarding a new customer or re-issuing a card to an existing customer, fast card activation is critical. Get your customers' cards activated seamlessly with AirKey. One simple tap of their AirKey-enabled card and customers can activate their card more securely, all while avoiding the friction of activating over the phone.",
    },
    {
      icon: EnhancedIcon,
      img: EnhancedImg,
      title: 'Enhanced Mobile Enrollment',
      text: 'Increase your mobile app usage and engagement through enhanced mobile enrollment and sign in. Customers can streamline the enrollment process by simply tapping their AirKey-enabled card to their phone, saving them from having to manually re-enter al their personal information.',
    },
    {
      icon: StreamedLinedIcon,
      img: StreamLinedImg,
      title: 'Streamlined Customer Service',
      text: 'Save time and reduce the strain on service agents by avoiding the traditional over-the- phone authentication methods. AirKey allows for a safer and more convenient authentication process, allowing customers to quickly and easily self-service with just a tap.',
    },
    {
      icon: HardwareIcon,
      img: HardwareImg,
      title: 'Hardware Token Replacement',
      text: 'Replace traditional, costly hardware tokens for high-net-worth and commercial clients with the ease and simplicity of AirKey. AirKey comes in a user-friendly and familiar form of a payment card, making it easy to use for your customers without sacrificing security.',
    },
    {
      icon: RiskIcon,
      img: RiskImg,
      title: 'High Risk Transactions',
      text: 'Authenticate the legitimacy of transactions and help to prevent fraud through the use of AirKey-enabled cards. With a tap of their card, customers can instantly and securely confirm high-risk transactions such as large wire transfers or purchases.',
    },
  ];
  return (
    <div class="mx-auto">
      <Hero />
      <DescriptionCard />
      <UseCaseHeader />
      {featureSections.map((section) => (
        <FeatureCard
          key={section.title}
          text={section.text}
          title={section.title}
          img={section.img}
          icon={section.icon}
        />
      ))}
      <CustomerTestimonial />
      <ContactUs />
      <Footer />
    </div>
  );
});
