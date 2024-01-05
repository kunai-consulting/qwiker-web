import { component$, Slot, useVisibleTask$, useSignal } from '@builder.io/qwik';
import {type RequestHandler, routeLoader$, useNavigate} from '@builder.io/qwik-city';
import {InitialValues} from "@modular-forms/qwik";
import {email, Input, minLength, object, string} from "valibot";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    // staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    // maxAge: 1,

    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });
};

export const ContactUsSchema = object({
  firstName: string([
    minLength(1, 'First name required')
  ]),
  lastName: string([
    minLength(1, 'Last name required')
  ]),
  email: string([
    minLength(1, 'Email required.'),
    email('Invalid email format.'),
  ]),
  company: string([
    minLength(1, 'Company required')
  ]),
  description: string([
    minLength(1, 'Description required'),
  ]),
});
export type ContactUsForm = Input<typeof ContactUsSchema>;
export const useFormLoader = routeLoader$<InitialValues<ContactUsForm>>(() => ({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  description: ''
}));

export default component$(() => {
  const visible = useSignal(false);
  const nav = useNavigate();
  useVisibleTask$(
    () => {
      const pass = prompt('Password?');
      if (pass !== 'kunai-dev') {
        nav('/');
      } else {
        visible.value = true;
      }
    },
    {
      strategy: 'document-ready',
    },
  );
  return visible.value ? (
    <>
      <main id="main-view">
        <Slot />
      </main>
    </>
  ) : (
    <div>Loading...</div>
  );
});
