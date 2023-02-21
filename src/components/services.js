import { useTranslation } from "next-i18next";
import { Raleway, Fira_Sans_Extra_Condensed } from "@next/font/google";

import s from "@/styles/Services.module.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const fira = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  variable: "--fontFamilyBase",
  weight: ["400", "700"],
});

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section id="services" className={s.section}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${fira.variable}`}
      >
        <h2>{t("title")}</h2>
        <ul className={s.box}>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              <h3 className={s.title}>{t("titleService1")}</h3>
            </div>
            <p className={s.price}>{t("price1")}</p>
            <ul className={s.list}>
              <li>
                {t("service1.1")}{" "}
                <span className={s.insidePrice}>{t("service1.1price")}</span>
              </li>
              <li>
                {t("service1.2")}{" "}
                <span className={s.insidePrice}>{t("service1.2price")}</span>
              </li>
            </ul>
            <p className={s.description}>{t("description")}</p>
          </li>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              {" "}
              <h3 className={s.title}>{t("titleService2")}</h3>
            </div>
            <p className={s.price}>{t("price2")}</p>
            <ul className={s.list}>
              <li>{t("service2.1")}</li>
              <li>{t("service2.2")}</li>
              <li>{t("service2.3")}</li>
              <li>{t("service2.4")}</li>
              <li>{t("service2.5")}</li>
              <li>{t("service2.6")}</li>
            </ul>
          </li>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              <h3 className={s.title}>{t("titleService3")}</h3>
            </div>
            <p className={s.price}>{t("price3")}</p>
            <p className={s.description}>{t("service3.1")}</p>
            <ul className={s.list}>
              <li>{t("service3.2")}</li>
              <li>{t("service3.3")}</li>
              <li>
                {t("service3.4")}
                <span className={s.insidePrice}>{t("price3.4")}</span>
              </li>
            </ul>
          </li>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              <h3 className={s.title}>{t("titleService4")}</h3>
            </div>
            <p className={s.price}>{t("price4")}</p>
            <ul className={s.list}>
              <li>{t("service4.1")}</li>

              <li>{t("service4.2")}</li>
              <li>{t("service4.3")}</li>
            </ul>
          </li>
        </ul>
        <p className={s.description}>{t("descriptionSection")}</p>
      </div>
    </section>
  );
};

export default Services;
