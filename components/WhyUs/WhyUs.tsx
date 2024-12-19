import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { LayananIcon, SolusiIcon, UspIcon } from "../Icons";

interface WhyUsProps {
  t: TFunction<"common", undefined>;
}

export function WhyUs({ t }: WhyUsProps) {
  return (
    <div
      id="why-us"
      className={twMerge("p-4 lg:p-16 mt-8 lg:mt-32", maxWidthContainer)}
    >
      <div className="mt-12">
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-8 items-end">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full lg:w-1/2">
            {t("home.whyUsHeading1")}
          </h2>
          <p className="m-0 text-[20px] w-full lg:w-1/2">
            {t("home.whyUsSubheading1")}
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-12">
          <Image
            src="/assets/images/notes-1.png"
            width={1176}
            height={480}
            alt="notes-1"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-48">
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-8  items-end">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full lg:w-1/2">
            {t("home.whyUsHeading2")}
          </h2>
          <p className="m-0 text-[20px] w-full lg:w-1/2">
            {t("home.whyUsSubheading2")}
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-12">
          <Image
            src="/assets/images/notes-2.png"
            width={1176}
            height={480}
            alt="notes-1"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-48 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 items-start lg:w-1/2">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full">
            {t("home.whyUsHeading3")}
          </h2>
          <p className="mt-4 lg:mt-0 m-0 text-[20px] w-full ">
            {t("home.whyUsSubheading3")}
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-end">
          <Image
            src="/assets/images/notes-3.png"
            width={560}
            height={464}
            alt="notes-1"
            className="lg:w-3/4"
          />
        </div>
      </div>
    </div>
  );
}
