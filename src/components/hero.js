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
  return (
    <section className={s.section}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${fira.variable}`}
      >
        <h1>Успішна SMM-стратегія для вашого бізнесу</h1>
        <p>від діджитал студії GL Media</p>
      </div>
    </section>
  );
};

export default Hero;
