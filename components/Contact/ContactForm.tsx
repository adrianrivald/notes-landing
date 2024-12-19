import React from "react";
import { Button } from "../Ui";
import { TFunction } from "i18next";

interface ContactForm {
  t: TFunction<"common", undefined>;
}

export function ContactForm({ t }: ContactForm) {
  return (
    <form
      onSubmit={() => {} /* TODO: Handle Submit Contact */}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="name">
          {t("home.contactFieldName")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder={t("home.contactFieldNamePh")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="email">
          {t("home.contactFieldEmail")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder={t("home.contactFieldEmailPh")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[14px]" htmlFor="message">
          {t("home.contactFieldQuestion")}
        </label>
        <textarea
          id="message"
          name="message"
          className="rounded-md p-4 border border-neutral-100 focus:outline-none"
          placeholder={t("home.contactFieldQuestionPh")}
          rows={4}
        />
      </div>
      <Button
        isPrimary
        title={t("home.contactSubmit")}
        className="lg:w-[250px]"
      />
    </form>
  );
}
