import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  EnglishRoundedIcon,
  GlobeIcon,
  IndonesiaRoundedIcon,
} from "../Icons";

interface DropdownProps {
  title: string;
}

export function Dropdown({ title }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-md px-4 py-2 bg-neutral-200 flex items-center gap-6 min-h-12 focus:outline-none">
          {({ open }) => (
            <>
              <GlobeIcon />

              <span className="hidden xl:block">{title}</span>
              <ArrowDownIcon
                className={`transition-all ${open ? "rotate-180" : "rotate-0"}`}
              />
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`w-full rounded-md px-4 py-2 bg-neutral-200 flex items-center gap-6 min-h-12 focus:outline-none`}
                >
                  <EnglishRoundedIcon />
                  ENG
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
