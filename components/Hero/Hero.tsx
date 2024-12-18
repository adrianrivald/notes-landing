import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { Button } from "../Ui";
import { TFunction } from "i18next";

interface HeroProps {
  onClickToDemo: () => void;
  t: TFunction<"common", undefined>;
}

export function Hero({ onClickToDemo, t }: HeroProps) {
  return (
    <div
      id="hero"
      className={twMerge(
        "flex flex-col lg:flex-row flex-col-reverse justify-between items-center min-h-[400px] gap-4 lg:gap-16 p-4 lg:p-0",
        maxWidthContainer
      )}
    >
      {/* Our Words */}
      <div id="our-words" className="lg:px-16 lg:max-w-[40rem]">
        <h1 className="text-[32px] font-bold text-center lg:text-left">
          {t("home.heroHeadline")}
        </h1>
        <p className="mt-4 text-base text-center lg:text-left">
          {t("home.heroSubHeadline")}
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
          <Button
            title={t("home.tryDemo")}
            isPrimary
            className="w-full lg:w-auto"
            onClick={onClickToDemo}
          />
          <Button
            title={t("home.consultYourNeeds")}
            isPrimary={false}
            className="w-full lg:w-auto"
          />
        </div>
      </div>

      {/* Hero image */}
      <Image
        src="/assets/images/hero.png"
        width={591}
        height={620}
        alt="doctor"
        className="w-full lg:w-1/2"
      />
    </div>
  );
}
