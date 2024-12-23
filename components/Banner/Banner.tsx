import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";

interface BannerProps {
  t: TFunction<"common", undefined>;
}

export function Banner({ t }: BannerProps) {
  return (
    // <div className="w-full h-[350px] bg-gradient-to-r from-[#3080E2] to-[#195EB3] mt-24 relative">
    <div className={twMerge("mt-32 p-4 lg:p-16  ", maxWidthContainer)}>
      <div className="flex p-8 lg:p-24 rounded-xl bg-gradient-to-r from-[#3080E2] to-[#195EB3]">
        <div className="lg:w-[60%] flex flex-col items-center lg:block">
          <h2 className="text-[24px] lg:text-[36px] text-center lg:text-left text-white mb-8 font-bold">
            {t("home.bannerHeading")}
          </h2>
          <Link href="https://memos-landing.vercel.app/demo" target="_blank">
            <Button title={t("home.tryDemo")} className="w-[220px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
