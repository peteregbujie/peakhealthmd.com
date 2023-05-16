"use client";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
 Bars3Icon,
 ChevronDownIcon,
 PhoneIcon,
 PlayCircleIcon,
 XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Button from "../Button";
import { Aesthetics, Integrative_Medicine, Therapy, Wellness } from "./Links";

const callsToAction = [
 { name: "Find A Specialist", href: "/telehealth", icon: PlayCircleIcon },
 { name: "Contact Us", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes) {
 return classes.filter(Boolean).join(" ");
}

export default function Example() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
  <header className="bg-blue-50 font-[open_Sans]">
   <nav
    className="flex items-center justify-between p-4 mx-auto max-w-8xl lg:px-4"
    aria-label="Global"
   >
    <div className="flex lg:flex-1">
     <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Vegas Clinic</span>
      <Image
       className="w-auto h-8"
       src="/images/logo.webp"
       alt="logo"
       width="236"
       height="186"
       quality={100}
      />
     </Link>
    </div>
    <div className="flex lg:hidden">
     <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(true)}
     >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="w-6 h-6" aria-hidden="true" />
     </button>
    </div>
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Integrative Medicine
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Integrative_Medicine.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>

     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Therapy
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Therapy.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>

     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Aesthetics
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Aesthetics.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>
     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Wellness
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Wellness.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>

     <Link
      href="/telehealth"
      className="text-sm font-semibold leading-6 text-gray-900"
     >
      Find A Specialist
     </Link>
     <Link
      href="/telehealth"
      className="text-sm font-semibold leading-6 text-gray-900"
     >
      TeleHealth
     </Link>
     <Link
      href="/about-the-vegas-clinic"
      className="text-sm font-semibold leading-6 text-gray-900"
     >
      About
     </Link>
     <Link
      href="/blog"
      className="text-sm font-semibold leading-6 text-gray-900"
     >
      Blog
     </Link>
    </Popover.Group>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
     <Button />
    </div>
   </nav>
   <Dialog
    as="div"
    className="lg:hidden"
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
   >
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
     <div className="flex items-center justify-between">
      <Link href="#" className="-m-1.5 p-1.5">
       <span className="sr-only"></span>
       <Image
        className="w-auto h-8"
        src="/images/logo.webp"
        alt="logo"
        width="236"
        height="186"
        quality={100}
       />
      </Link>
      <button
       type="button"
       className="-m-2.5 rounded-md p-2.5 text-gray-700"
       onClick={() => setMobileMenuOpen(false)}
      >
       <span className="sr-only">Close menu</span>
       <XMarkIcon className="w-6 h-6" aria-hidden="true" />
      </button>
     </div>
     <div className="flow-root mt-6">
      <div className="-my-6 divide-y divide-gray-500/10">
       <div className="py-6 space-y-2">
        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className=" outline-none flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Integrative Medicine
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Integrative_Medicine, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>
        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Therapy
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Therapy, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>
        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Aesthetics
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Aesthetics, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>
        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Wellness
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Wellness, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>

        <Link
         href="/telehealth"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Find A Specialist
        </Link>
        <Link
         href="/telehealth"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         TeleHealth
        </Link>
        <Link
         href="/about-the-vegas-clinic"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         About
        </Link>
        <Link
         href="/blog"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Blog
        </Link>
       </div>
       <div className="py-6">
        <Button />
       </div>
      </div>
     </div>
    </Dialog.Panel>
   </Dialog>
  </header>
 );
}
