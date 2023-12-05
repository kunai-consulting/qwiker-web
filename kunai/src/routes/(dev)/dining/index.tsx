import { component$ } from '@builder.io/qwik';
import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Partner from './sections/Partner';
import Event from './sections/Event';
import FrequentQuestion from './sections/FrequentQuestion';
import Term from './sections/Term';
import Card from './sections/Card';
import Spotlight from './sections/Spotlight';

export default component$(() => {
  return (
    <>
      <div class="bg-app-alternate-background mx-auto">
        <Hero />
        <Showcase />
        <Spotlight />
        <Partner />
        <Event />
        <Card />
        <FrequentQuestion />
        <Term />
      </div>
    </>
  );
});
