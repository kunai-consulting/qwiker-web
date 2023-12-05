import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { clear, dark, light, isDark } from '~/@theme/dark';

export default component$(() => {
  const input = useSignal<HTMLInputElement>();
  useVisibleTask$(() => {
    if (input.value) {
      input.value.checked = isDark();
    }
  });
  return (
    <main class="h-auto p-4 pt-20 md:ml-64">
      <h1 class="light:text-black p-3 pl-0 text-xl font-bold dark:text-white">
        Debug Page
      </h1>
      <hr />
      <div class="mt-3">
        Toggle Dark Theme
        <hr />
        <label class="swap swap-flip text-9xl">
          <input
            type="checkbox"
            ref={input}
            onInput$={() => {
              input.value?.checked ? dark() : light();
            }}
          />
          <div class="swap-on">😈</div>
          <div class="swap-off">😇</div>
        </label>
        <hr />
        <button
          class="btn btn-primary"
          onClick$={() => {
            clear();
            if (input.value) {
              input.value.checked = false;
            }
          }}
        >
          Remove theme
        </button>
        <hr />
        <Link href={`/${import.meta.env.VITE_BASE_URL || ''}`}>
          <button class="btn">go /</button>
        </Link>
        <hr />
      </div>
    </main>
  );
});
