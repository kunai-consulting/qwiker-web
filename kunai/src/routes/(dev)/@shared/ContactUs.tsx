import {component$, QRL, $} from "@builder.io/qwik";
import {
  Maybe,
  SubmitHandler,
  useForm,
  valiForm$
} from "@modular-forms/qwik";
import {ContactUsForm, ContactUsSchema, useFormLoader} from "~/routes/(dev)/layout";

interface ContactUsProps {
  title?: string;
  titleClass?: string;
}

export default component$<ContactUsProps>((props) => {
  const [loginForm, {Form, Field}] = useForm<ContactUsForm>({
    loader: useFormLoader(),
    validate: valiForm$(ContactUsSchema),
  });
  const handleSubmit: QRL<SubmitHandler<ContactUsForm>> = $((values, event) => {
    console.log(values);
  });

  const defaultField = (fieldValue: Maybe<string>, fieldError: string, type: string, placeholder: string, isInput = true) => {
    return (
      <div class='w-full relative'>
        {isInput ?
          <input
            class={`border ${fieldError ? 'border-[#FF4A4A]' : 'border-[#B5BB91]'} text-[#25282D] text-[14px] h-[50px] pl-5 pr-[14px] w-full`}
            type={type} value={fieldValue} placeholder={placeholder}
          />
          :
          <textarea
            class={`border ${fieldError ? 'border-[#FF4A4A]' : 'border-[#B5BB91]'} text-[#25282D] text-[14px] pt-[13px] pr-[3px] pb-[3px] pl-5 w-full h-[122px]`}
            value={fieldValue} placeholder={placeholder}
          />
        }
        {fieldError &&
          <>
            <span class='absolute -bottom-[20px] lg:-bottom-[22px] left-0 text-[#FF4A4A] text-sm leading-[1,43]'>{fieldError}</span>
            <span class='absolute top-1/2 right-[14px] text-lg text-[#FF4A4A] -translate-y-1/2'>⚠</span>
          </>
        }
      </div>
    )
  }

  return (
    <div class='max-w-[800px] !p-10 ml-auto mr-auto w-full'>
      <h2 class={props.titleClass}>{props.title}</h2>
      <Form onSubmit$={handleSubmit} class='flex flex-col gap-6 justify-center w-full'>
        <div class='flex gap-4 w-full'>
          <Field name="firstName">
            {(field) => (
              defaultField(field.value, field.error, 'text', 'First name*')
            )}
          </Field>
          <Field name="lastName">
            {(field) => (
              defaultField(field.value, field.error, 'text', 'Last name*')
            )}
          </Field>
        </div>
        <div class='flex gap-4 w-full'>
          <Field name="email">
            {(field) => (
              defaultField(field.value, field.error, 'email', 'Email*')
            )}
          </Field>
          <Field name="company">
            {(field) => (
              defaultField(field.value, field.error, 'text', 'Company*')
            )}
          </Field>
        </div>
        <Field name="description">
          {(field) => (
            defaultField(field.value, field.error, 'text', 'Tell us a bit about what you need*', false)
          )}
        </Field>
        <div class='!flex !justify-start'>
          <button type='submit' class='rounded-[6px] bg-[#25282D] px-6 py-3 text-xs uppercase font-semibold text-white'>
            Send
          </button>
        </div>
        <div class='text-sm leading-[1.43]'>
          By submitting, you consent to Kunai processing your information in accordance with our
          <a href='#' target='_blank'>Privacy Policy</a>. We take your privacy seriously.
        </div>
      </Form>
    </div>
  );
});
