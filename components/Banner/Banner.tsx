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
      <div className="flex p-8 lg:p-24 rounded-xl bg-gradient-to-r from-[#3080E2] to-[#195EB3] relative min-h-[400px]">
        <div className="lg:w-[60%] flex flex-col items-center lg:block">
          <h2 className="text-[24px] lg:text-[36px] text-center lg:text-left text-white mb-8 font-bold">
            {t("home.bannerHeading")}
          </h2>
          <Link href="/demo">
            <Button title={t("home.tryDemo")} className="w-[220px]" />
          </Link>
          <img
            alt="demo-illustration-1"
            src="/assets/images/demo/1.png"
            className="hidden lg:block absolute right-96 top-24"
          />
          <img
            alt="demo-illustration-2"
            src="/assets/images/demo/2.png"
            className="hidden lg:block absolute right-60 top-16"
          />
          <img
            alt="demo-illustration-3"
            src="/assets/images/demo/3.png"
            className="hidden lg:block absolute right-44 top-24"
          />
          <img
            alt="demo-illustration-4"
            src="/assets/images/demo/4.png"
            className="hidden lg:block absolute right-[26rem] top-56"
          />
          <img
            alt="demo-illustration-5"
            src="/assets/images/demo/5.png"
            className="hidden lg:block absolute right-44 top-36"
          />
        </div>
      </div>
    </div>
  );
}
