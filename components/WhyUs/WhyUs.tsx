import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { maxWidthContainer } from "../../constants/class";
import { LayananIcon, SolusiIcon, UspIcon } from "../Icons";

export function WhyUs() {
  return (
    <div
      id="why-us"
      className={twMerge("p-4 lg:p-16 mt-8 lg:mt-32", maxWidthContainer)}
    >
      <div className="mt-12">
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-8 items-end">
          <h2 className="m-0 text-[30px] lg:text-[32px] lg:text-[40px] font-bold w-full lg:w-1/2">
            Mempercepat layanan kesehatan dengan akses data pasien yang
            terintegrasi
          </h2>
          <p className="m-0 text-[20px] w-full lg:w-1/2">
            Akses data pasien secara real-time untuk memberikan pelayanan
            kesehatan yang lebih terkoordinasi dan efisien.
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
            Mentransformasi layanan kesehatan melalui rekam medis elektronik
          </h2>
          <p className="m-0 text-[20px] w-full lg:w-1/2">
            Mengoptimalkan layanan kesehatan melalui rekam medis elektronik,
            yang dapat mempermudah pengelolaan data pasien.
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
            Menghubungkan sistem kesehatan yang efisien dan terstandarisasi
          </h2>
          <p className="mt-4 lg:mt-0 m-0 text-[20px] w-full ">
            Memastikan integrasi yang lebih baik antar layanan, serta
            meningkatkan kualitas dan kecepatan perawatan pasien.
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
