import { component$, useSignal } from '@builder.io/qwik';

interface City {
  name: string;
  places: Place[];
}
interface Place {
  img: string;
  name: string;
  location?: string;
}

export const getCities = () => {
  return [
    {
      name: 'New York City',
      places: [
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/aifiori01_nyc_desktop_640x352.png',
          name: 'Ai Fiori',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/zaytinya03_nyc_desktop_640x352.png',
          name: 'Zaytinya',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/related-stories/nyc/iris_nyc_desktop_640x352.jpg',
          name: 'Iris',
        },
      ],
    },
    {
      name: 'San Francisco',
      places: [
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/ateliercrenn03_sf_desktop_640x352.png',
          name: 'Atelier Crenn',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/cotogna01_sf_desktop_640x352.png',
          name: 'Cotogna',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/related-stories/sf/benu_sf_desktop_640x352.jpg',
          name: 'Benu',
        },
      ],
    },
    {
      name: 'Washington, DC',
      places: [
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/related-stories/dc/minibar_dc_desktop_640x352.jpg',
          name: 'minibar by José Andrés',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/related-stories/dc/anju_dc_desktop_640x352.jpg',
          name: 'Anju',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/oysteroyster01_dc_desktop_640x352.png',
          name: 'Oyster Oyster',
        },
      ],
    },
    {
      name: 'Chicago',
      places: [
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/allavita01_chi_desktop_640x352.png',
          name: 'Alla Vita',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/related-stories/chicago/haisous_chicago_desktop_640x352.jpg',
          name: 'HaiSous',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/bazaarmeat04_chi_desktop_640x352.png',
          name: 'Bazaar Meat by José Andrés',
        },
      ],
    },
    {
      name: 'And More',
      places: [
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/uchimiami01_mia_desktop_640x352.png',
          name: 'Uchi',
          location: 'Miami',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/anajakthai01_la_desktop_640x352.png',
          name: 'Anajak Thai',
          location: 'Miami',
        },
        {
          img: 'https://ecm.capitalone.com/WCM/card/background-images/foxtheknife02_bos_desktop_640x352.png',
          name: 'Fox & The Knife',
          location: 'Miami',
        },
      ],
    },
  ];
};

export default component$(() => {
  const cities = getCities();
  const active = useSignal(0);
  return (
    <section class="mx-auto grid max-w-[1216px] grid-cols-1 bg-white p-8 md:grid-cols-3">
      <div class="col-span-3 mb-4">
        <h2 class="mb-2 text-center font-bold uppercase">
          RESTAURANT SPOTLIGHT
        </h2>
        <h1 class="mb-4 text-center text-3xl font-semibold">
          Explore a few dining favorites in this growing collection
        </h1>

        <div class="tabs mt-4 flex justify-center space-x-4 overflow-x-auto whitespace-nowrap">
          {cities.map((city: City, index) => {
            return (
              <button
                key={index}
                onClick$={() => (active.value = index)}
                class={[
                  'tab',
                  'tab-bordered',
                  index === active.value && 'tab-active',
                  'text-sm',
                ]}
              >
                {city.name}
              </button>
            );
          })}
        </div>
      </div>
      <div class="col-span-3 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cities[active.value].places.map((place: Place, index) => {
          return (
            <div key={index} class="mb-4 flex justify-center">
              <div class="text-center">
                <img
                  src={place.img}
                  alt="A meal in a fine dining restaurant"
                  width="320"
                  height="176"
                  class="rounded shadow-md"
                />
                <p class="mt-4 text-xl">{place.name}</p>
                {place.location && <p class="mt-2">{place.location}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});
