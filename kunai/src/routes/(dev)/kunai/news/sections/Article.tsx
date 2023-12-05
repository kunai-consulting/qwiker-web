import { component$ } from '@builder.io/qwik';
import ArticleCard from '../../../@shared/Card/ArticleCard';

interface ArticleProps {
  articles: {
    img: string;
    title: string;
    description: string;
  }[];
}

export default component$<ArticleProps>((props) => {
  return (
    <div class="container mx-auto mb-10 mt-10 max-w-7xl px-4">
      <div class="p-4">
        <h2 class="mb-4 text-xl font-bold">All articles</h2>
        <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {props.articles.map((article, index) => (
            <div class="col-span-1" key={index}>
              <ArticleCard
                title={article.title}
                description={article.description}
                img={article.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
