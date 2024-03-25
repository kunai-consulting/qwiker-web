import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from '~/components/router-head';

import './global.css';
import { activeTheme } from '~/@theme/dark';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="https://fonts.cdnfonts.com/css/work-sans"
          rel="stylesheet"
        />
        <RouterHead />
        <ServiceWorkerRegister />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MV7NBLG15Y"
        ></script>
        <script
          dangerouslySetInnerHTML={
            activeTheme.toString() + `\n${activeTheme.name}('light');`
          }
        ></script>
        <script
          dangerouslySetInnerHTML={
            /*javascript*/ `
            // remove index.html
            if (window.location.pathname.endsWith('/index.html')) {
                history.replaceState({}, document.title, window.location.pathname.slice(0,-10));
            }
            // googletagmanager
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // cSpell:ignore NBLG
            gtag('config', 'G-MV7NBLG15Y');
            // end googletagmanager

            // scroll restoration
            document.addEventListener("DOMContentLoaded", function (event) {
              var scrollpos = sessionStorage.getItem('scrollpos');
              if (scrollpos) {
                window.scrollTo(0, scrollpos);
                sessionStorage.removeItem('scrollpos');
              }
            });

            window.addEventListener("beforeunload", function (e) {
              sessionStorage.setItem('scrollpos', window.scrollY);
            });
          `
          }
        ></script>
      </head>
      <body lang="en" class="bg-[#0D0A0E]">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
