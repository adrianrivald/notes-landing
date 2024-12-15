import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

interface BannerProps {
  onClickToDemo: () => void;
}

export function Banner({ onClickToDemo }: BannerProps) {
  return (
    // <div className="w-full h-[350px] bg-gradient-to-r from-[#3080E2] to-[#195EB3] mt-24 relative">
    <div className={twMerge("mt-32 p-4 lg:p-16  ", maxWidthContainer)}>
      <div className="flex p-8 lg:p-24 rounded-xl bg-gradient-to-r from-[#3080E2] to-[#195EB3]">
        <div className="lg:w-[60%] flex flex-col items-center lg:block">
          <h2 className="text-[24px] lg:text-[36px] text-center lg:text-left text-white mb-8 font-bold">
            Lihat langsung bagaimana sistem kami membantu pekerjaan Anda lebih
            efisien
          </h2>
          <Button
            title="Coba Demo Gratis"
            onClick={onClickToDemo}
            className="w-[220px]"
          />
        </div>
      </div>
    </div>
  );
}
