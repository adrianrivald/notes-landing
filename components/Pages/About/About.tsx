import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../../constants/class";
import { QuoteIcon } from "../../Icons";
import { TFunction } from "i18next";

interface AboutContentProps {
  t: TFunction<"common", undefined>;
}

export function AboutContent({ t }: AboutContentProps) {
  const router = useRouter();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div id="about">
      <div className={twMerge("p-4 lg:p-16", maxWidthContainer)}>
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-end">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full">
            {t("about.aboutHeading")}
          </h2>
          <p className="text-center lg:text-left m-0 text-[20px] w-full">
            {t("about.aboutSubHeading")}
          </p>
        </div>
      </div>
      <div className={twMerge("lg:mt-4 px-4 lg:p-16", maxWidthContainer)}>
        <Image
          src="/assets/images/about.png"
          width={1392}
          height={500}
          alt="about-us"
          className="w-full object-contain rounded-[16px]"
        />
      </div>

      <div className={twMerge("mt-4 p-4 lg:p-16", maxWidthContainer)}>
        <p className="mt-4 text-[20px]">{t("about.aboutPar1")}</p>
        <p className="mt-4 text-[20px]">{t("about.aboutPar2")}</p>
        <p className="mt-4 text-[20px]">{t("about.aboutPar3")}</p>
      </div>
      <div className={twMerge("p-4 lg:p-16", maxWidthContainer)}>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Founded */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 w-full lg:w-1/2">
            <div className="flex gap-2">
              <div className="bg-primary-500 w-3 h-3 mt-[5px] rounded-full"></div>
              <div>
                <p className="font-bold w-full m-0">{t("about.foundedIn")}</p>
                <p className="font-bold text-[24px] mt-2 w-full m-0">2024</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-primary-500 w-3 h-3 mt-[5px] rounded-full"></div>
              <div>
                <p className="font-bold w-full m-0">{t("about.location")}</p>
                <p className="font-bold text-[24px] mt-2 w-full m-0">
                  Sleman, Yogyakarta
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision Mission */}
          <div className="w-full lg:w-1/2">
            <div id="vision">
              <h3 className="text-primary-500 text-[24px] font-bold">
                {t("about.vision")}
              </h3>
              <p className="mt-4 text-[20px]">{t("about.visionContent")}</p>
            </div>
            <div id="mission" className="mt-8">
              <h3 className="text-primary-500 text-[24px] font-bold">
                {t("about.mission")}
              </h3>{" "}
              <p className="mt-4 text-[20px]">{t("about.missionContent1")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
