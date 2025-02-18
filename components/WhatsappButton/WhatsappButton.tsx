import React from "react";
import { WhatsappIcon } from "../Icons";
import Image from "next/image";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.link/obvy26"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed right-8 bottom-8">
        <button className="px-4 md:px-8 py-4 bg-[#00A884] rounded-full text-white flex items-center gap-2 focus:outline-none">
          <Image
            src="/assets/icons/whatsapp.png"
            width={28}
            height={28}
            alt="whatsapp-icon"
          />
          <span className="hidden md:block">Hubungi via Whatsapp</span>
        </button>
      </div>
    </Link>
  );
}
