import Head from "next/head";
import { Contact, Hero, Testimoni, WhyUs, Banner } from "../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";

export default function HomePage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Landing page of Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[5.5rem]">
        <Hero t={t} />
        <WhyUs t={t} />
        <Testimoni t={t} />
        <Contact t={t} />
        <Banner t={t} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? "id", ["common"])),
  },
});
