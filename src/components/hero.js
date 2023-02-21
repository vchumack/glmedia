import { useTranslation } from "next-i18next";
import { Raleway, Fira_Sans_Extra_Condensed } from "@next/font/google";

import s from "@/styles/Hero.module.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const fira = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  variable: "--fontFamilyBase",
  weight: ["400", "700"],
});

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section className={s.section}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${fira.variable}`}
      >
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </section>
  );
};

export default Hero;
