import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
  const navLinks = [
    {
      title: 'About',
      href: '#'
    },
    {
      title: 'Work',
      href: '#'
    },
    {
      title: 'Events',
      href: '#'
    },
    {
      title: 'Thoughts',
      href: '#'
    },
    {
      title: 'Careers',
      href: '#'
    },
    {
      title: 'Contact',
      href: '#'
    },
  ]

  return (
    <div class='!bg-[#F2F4F8] w-full !flex !flex-col md:w-1/2'>
      <div class='max-w-none md:max-w-[64opx] min-h-[auto] flex flex-col h-full justify-between mr-auto w-full'>
        <nav class='py-5 px-10 md:pt-24 md:px-[60px] md:pb-0 flex flex-col gap-6'>
          {navLinks && navLinks.map((link) => (
            <Link
              href={link.href}
              class='border-transparent hover:text-red-500 text-[#2D3654] no-underline block'
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div class='border-t border-[#bcc1cb] py-4 px-[60px] !text-center'>
          Copyright © 2023 Kunai Co. All rights reserved.
        </div>
      </div>
    </div>
  );
})