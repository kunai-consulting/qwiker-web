import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="px-4 py-6 md:px-12 lg:px-24">
      <div class="mx-auto max-w-5xl">
        <div class="text-xs md:text-base">
          <p class="mb-4">
            Capital One does not guarantee any third-party product, service,
            information, or recommendation listed above. The third parties
            listed are not affiliated with Capital One and are solely
            responsible for their products and services. All trademarks and
            copyrighted images are the property of their respective owners.
          </p>

          <p class="mb-4">
            By clicking on the links above, you may be taken to a site
            maintained by a third party.
          </p>

          <p class="mb-4">
            For more information about Capital One Dining’s reservation policies
            and terms and conditions, please see
            <a
              href="https://www.capitalone.com/credit-cards/disclosures/dining-terms-of-service"
              class="text-blue-500 hover:underline"
            >
              https://www.capitalone.com/credit-cards/disclosures/dining-terms-of-service
            </a>
            .
          </p>

          <p>
            * Eligible cards include US-issued, Capital One branded,
            rewards-earning consumer and small business credit cards. Capital
            One debit cards, private label retail credit cards, and co-brand
            partner cards are not eligible for Capital One Dining at this time.
          </p>
        </div>
      </div>
    </section>
  );
});
