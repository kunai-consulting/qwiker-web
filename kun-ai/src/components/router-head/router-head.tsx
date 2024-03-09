import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

import OgImage from "~/media/og_image.png"

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const base = import.meta.env.VITE_BASE_URL;
  const version = import.meta.env.VITE_BRANCH_VERSION;
  const baseUrl =
    base &&
    `${base.startsWith('/') ? '' : '/'}${base}${base.endsWith('/') ? '' : '/'}`;
  return (
    <>
      <title>{head.title}</title>

      {version ? <meta name="app-version" content={version} /> : null}

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon.svg" />
      {/* <link rel="manifest" href="site.webmanifest"> */}
      <link rel="mask-icon" href="safari-pinned-tab.svg" />
      <meta name="apple-mobile-web-app-title" content="Kun.Ai" />
      <meta name="application-name" content="Kun.Ai" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <base href={baseUrl || '/'} />

      {/* Primary Meta Tags */}
      <meta name="title" content="Kun.Ai" />
      <meta name="description" content="Automate Real Work with Kun.AI" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Kun.Ai" />
      <meta
        property="og:description"
        content="Automate Real Work with Kun.AI"
      />
      <meta property="og:image" content={OgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} content={m.content} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
