import { component$, useSignal, useStore } from '@builder.io/qwik';

// TODO: refactor to data and [show more] loads the rest of the data
export const getFAQ = () => {
  return [
    {
      title: 'Who can use Capital One Dining?',
      description: /*html*/ `
        <p>You can use Capital One Dining if:</p>
        <ul>
          <li>
            You're a Capital One cardholder with an eligible rewards
            credit card;
          </li>
          <li>Your account is in good standing; and</li>
          <li>
            You're a primary account holder, account manager or an
            authorized user for a consumer credit card or a small
            business credit card.
          </li>
        </ul>
        `,
    },
    {
      title: 'Where can I find more information on dining events?',
      description: /*html*/ `
        <p>To find out more about dining events—or to purchase tickets—please visit <a href="https://www.capitalone.com/access" data-initial-value="https://www.capitalone.com/access">https://www.capitalone.com/access</a>.</p>
        `,
    },
    {
      title: 'How do I book a reservation through Capital One Dining?',
      description: /*html*/ `
        <p>Eligible cardholders can access Capital One Dining through the Capital One mobile application, Capital One website, or by going directly to <a href="http://dining.capitalone.com" data-initial-value="dining.capitalone.com">dining.capitalone.com</a>. Before you can make a reservation, you’ll need an online account.</p>
  
        <p>Already have a Capital One online account? There’s nothing additional you need to do! Your existing username and password will work with Capital One Dining.</p>
  
        <p>Don’t have an online account? Please follow these steps to get started.&nbsp;</p>
  
        <ul>
        <li>Set up online access on Capital One’s website.</li>
        <li>Enter your personal information in the fields provided.</li>
        <li>Select a username and password for your account.</li>
        </ul>
  
  <p>Once you’re ready to book a reservation, you can seek out something specific or explore our curated list of award-winning restaurants. Simply sign in, search for and select a restaurant and reservation slot that fits your needs, and follow the guided steps to complete your booking.</p>
        `,
    },
    {
      title: 'How do I cancel or modify an existing reservation?',
      description: /*html*/ `
        <p>You can modify or cancel an existing reservation directly through Capital One Dining. To do so, go to My Reservations from the main navigation menu, select the reservation you wish to modify or cancel, and click Edit Reservation or Cancel Reservation. Please keep in mind that some restaurants may charge a cancellation fee. The information about any cancellation fees or change policies will be listed in the restaurant's <strong>Payment Policy</strong>.</p>
  
        <p>To modify an existing pre-paid reservation, you'll need to contact the restaurant directly.</p>
        `,
    },
    {
      title: 'Which cities can I book reservations in?',
      description: /*html*/ `
        <p>Right now, we offer restaurant reservations in the following major cities:&nbsp;</p>
  
        <ul>
          <li>Boston</li>
          <li>Chicago</li>
          <li>Dallas</li>
          <li>Denver</li>
          <li>Houston</li>
          <li>Las Vegas</li>
          <li>Los Angeles</li>
          <li>Miami</li>
          <li>Nashville</li>
          <li>New York City</li>
          <li>Philadelphia</li>
          <li>San Francisco</li>
          <li>Washington, DC</li>
          <li>Seattle</li>
          <li>Tampa</li>
          <li>Atlanta</li>
        </ul>
  
        <p>We’re continually looking to expand into new markets, so check back with Capital One Dining if you don’t see the city you’re interested in exploring.</p>
        `,
    },
    {
      title:
        'Who do I contact if I have questions about Capital One Dining or my restaurant reservation?',
      description: /*html*/ `
        <p>For general Capital One Dining issues or support, please contact Capital One at 1-877-383-4802 or visit <a href="https://www.capitalone.com/support-center/contact-us">https://www.capitalone.com/support-center/contact-us</a>.</p>
  
        <p>For questions or support specific to a restaurant or reservation—such as payment information, parking details, COVID-19 policies, or specific accommodations—please contact the restaurant directly.</p>
        `,
    },
    {
      title:
        'Can I personalize my reservation by adding specific preferences or requests?',
      description: /*html*/ `
        <p>Yes! Feel free to add specific preferences and requests—including dietary restrictions and allergies—to your reservation during the booking process. You can also set your default preferences in your dining profile and apply them to all your reservations.</p>
        `,
    },
    {
      title: 'Can I use my Capital One rewards to book a reservation?',
      description: /*html*/ `
        <p>
          No, you cannot use your Capital One rewards to book a reservation through Capital One Dining at this time.
        </p>
        `,
    },
    {
      title:
        'Are there penalties for canceling or not showing up for my reservation?',
      description: /*html*/ `
      <p>Restaurant cancellation and no-show policies are noted during the reservation booking process and can also be found in your reservation details and certain servicing emails. Please note that cancellation and no-show policies–including any fees or charges–are set and managed by each individual restaurant. If you have any questions, please contact the restaurant directly.</p>
      `,
    },
    {
      title:
        'Where can I find the COVID-19 policies associated with my reservation?',
      description: /*html*/ `
      <p>All restaurants booked through Capital One Dining are subject to any local COVID-19 regulations and restrictions. Restaurants may also have additional guidelines outlined in their individual booking policies. These policies are noted during the reservation booking process and can also be found in your reservation details and certain servicing emails. For more information, please consult the relevant local guidelines or contact the restaurant directly.</p>
      `,
    },
    {
      title: 'How many tables are set aside for Capital One Dining customers?',
      description: /*html*/ `
      <p>The number of seats set aside for cardholder-exclusive reservations varies by venue, capacity, and other circumstances. These reservations are limited and offered on a first-come, first-served basis.</p>
      `,
    },
    {
      title:
        'Why did Capital One Dining not display a reservation option that was available when I called the restaurant directly? ',
      description: /*html*/ `
      <p>Capital One Dining’s availability is based on real-time booking information provided by partners at the time of your search. Restaurants may make changes to their open bookings based on special events or table layouts, to accommodate walk-ins, or other special circumstances.</p>
      `,
    },
    {
      title: 'What is the service charge listed on my reservation? ',
      description: /*html*/ `
      <p> This is a fee set by the restaurant that may help cover administrative costs or other costs associated with reservation management. This charge will vary depending on the restaurant. To find out more about the service charge associated with your specific reservation, please contact the restaurant directly.</p>
      `,
    },
  ];
};

export default component$(() => {
  const sections = getFAQ();
  const showMoreState = useSignal(false);
  const activeSection = useStore(new Array(sections.length).fill(false));

  return (
    <section class="mx-auto max-w-[1216px] pb-9">
      <div class="mx-auto w-4/5 p-4 sm:max-w-full lg:ml-[8.33%] lg:max-w-[83.33%]">
        <div class="border-b text-center">
          <h2 class="mb-8 mt-20 text-center text-lg font-semibold uppercase leading-6 tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {sections.map((question, index) => {
          if (showMoreState.value === false && index > 3) return null;
          return (
            <div
              key={index}
              class={`cursor-pointer border-t border-gray-300`}
              onClick$={() => {
                activeSection[index] = !activeSection[index];
              }}
            >
              <div
                class={`flex items-center justify-between border-b px-3 py-4 transition-colors duration-200 hover:bg-gray-300`}
              >
                <p class="text-2xl">{question.title}</p>
                <span>{activeSection[index] ? '−' : '+'}</span>
              </div>
              {activeSection[index] && (
                <div
                  class="prose m-4"
                  dangerouslySetInnerHTML={question.description}
                />
              )}
            </div>
          );
        })}

        <div class="mt-9 flex justify-center">
          <button
            class="text-blue-500 hover:underline"
            onClick$={() => (showMoreState.value = !showMoreState.value)}
          >
            {showMoreState.value ? 'Show Less -' : 'Show More +'}
          </button>
        </div>
      </div>
    </section>
  );
});
