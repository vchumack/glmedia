import Head from "next/head";
import Image from "next/image";

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
