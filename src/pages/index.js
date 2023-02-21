import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "@/components/hero";
import Why from "@/components/why";
import Services from "@/components/services";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>SMM Студія | Розвиток брендів у соціальних мережах</title>
        <meta
          name="description"
          content="Просування в соціальних мережах, створення контенту, розкрутка блогів, маркетинг, SMM"
        />
      </Head>
      <Hero />
      <Why />
      <Services />
      <ContactForm />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "hero",
        "why",
        "services",
        "contactForm",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
