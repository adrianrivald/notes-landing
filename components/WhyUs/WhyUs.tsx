import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
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
          <Fade direction="left" triggerOnce className="w-full lg:w-1/2">
            <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold ">
              {t("home.whyUsHeading1")}
            </h2>
          </Fade>
          <Fade direction="right" triggerOnce className="w-full lg:w-1/2">
            <p className="m-0 text-[20px]">{t("home.whyUsSubheading1")}</p>
          </Fade>
        </div>
        <div className="w-full mt-4 lg:mt-12">
          <Fade direction="up" triggerOnce>
            <Image
              src="/assets/images/notes-1.png"
              width={1176}
              height={480}
              alt="notes-1"
              className="w-full"
            />
          </Fade>
        </div>
      </div>

      <div className="mt-24 lg:mt-48">
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-8  items-end">
          <Fade direction="left" triggerOnce className="w-full lg:w-1/2">
            <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold">
              {t("home.whyUsHeading2")}
            </h2>
          </Fade>
          <Fade direction="right" triggerOnce className="w-full lg:w-1/2">
            <p className="m-0 text-[20px]">{t("home.whyUsSubheading2")}</p>
          </Fade>
        </div>
        <div className="w-full mt-4 lg:mt-12">
          <Fade direction="up" triggerOnce>
            <Image
              src="/assets/images/notes-2.png"
              width={1176}
              height={480}
              alt="notes-1"
              className="w-full"
            />
          </Fade>
        </div>
      </div>

      <div className="mt-24 lg:mt-48 flex flex-col lg:flex-row justify-between items-center">
        <Fade direction="left" triggerOnce className="w-full lg:w-1/2">
          <div className="flex flex-col gap-2 items-start2">
            <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full">
              {t("home.whyUsHeading3")}
            </h2>
            <p className="mt-4 lg:mt-0 m-0 text-[20px] w-full ">
              {t("home.whyUsSubheading3")}
            </p>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce className="lg:w-1/2">
          <div className="mt-12 lg:mt-0 flex justify-end">
            <Image
              src="/assets/images/notes-3.png"
              width={560}
              height={464}
              alt="notes-1"
              className="lg:w-3/4"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
