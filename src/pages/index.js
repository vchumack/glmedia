import Head from "next/head";
import Image from "next/image";
// import {
//   Raleway,
//   Fira_Sans_Extra_Condensed,
//   Red_Hat_Text,
// } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/hero";
import Why from "@/components/why";
import Services from "@/components/services";
import ContactForm from "@/components/contactForm";

// const raleway = Raleway({
//   subsets: ["latin"],
//   variable: "$fontFamilySecondary",
// });

// const fira = Fira_Sans_Extra_Condensed({
//   subsets: ["latin"],
//   variable: "--fontFamilyBase",
//   weight: ["400", "700"],
// });

// const redHat = Red_Hat_Text({
//   subsets: ["latin"],
//   variable: "--fontFamilyThird",
// });

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
