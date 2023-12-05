import { component$ } from "@builder.io/qwik";
import IconCard from "../Card/IconCard";

interface CardProps {
  source: string;
  title: string;
  description: string;
}

interface IconCardProps {
  cards: CardProps[];
}

export default component$<IconCardProps>((props) => {
  return (
    <div class="container mx-auto mb-10 mt-10 px-4">
      <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {props.cards.map((card, index) => (
          <IconCard
            key={index}
            title={card.title}
            description={card.description}
            source={card.source}
          />
        ))}
      </div>
    </div>
  );
});
