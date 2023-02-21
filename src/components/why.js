import { useTranslation } from "next-i18next";
import { Raleway, Fira_Sans_Extra_Condensed } from "@next/font/google";
import Image from "next/image";
import teamOneSrc from "../../public/images/7395.webp";
// import teamTwoSrc from "../../public/images/7643.jpg";
import teamTwoSrc from "../../public/images/7643.webp";

import s from "@/styles/Why.module.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const fira = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  variable: "--fontFamilyBase",
  weight: ["400", "700"],
});

const Why = () => {
  const { t } = useTranslation("why");

  return (
    <section id="why" className={s.section}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${fira.variable}`}
      >
        <h2>{t("title")}</h2>

        <div className={s.box}>
          <div className={s.photo}>
            <Image
              src={teamOneSrc}
              width={650}
              height={433}
              alt="marketers work in the office"
            />
          </div>

          <div className={s.reasons}>
            <h3>{t("titleReasons")}</h3>
            <ul className={s.list}>
              <li>{t("reason1")}</li>
              <li>
                {t("reason2")}{" "}
                <span className={s.accentText}>{t("reason2span")}</span>;
              </li>
              <li>
                {t("reason3")}{" "}
                <span className={s.accentText}>{t("reason3span")}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.secondBox}>
          <div className={s.secondReasons}>
            <ul className={s.list}>
              <li>{t("reason4")}</li>
              <li>{t("reason5")}</li>
              <li>{t("reason6")}</li>
            </ul>
          </div>

          <div className={s.secondPhoto}>
            <Image
              src={teamTwoSrc}
              width={420}
              height={660}
              alt="marketers work in the office"
            />
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Why;
