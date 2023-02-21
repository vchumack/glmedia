import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Raleway } from "@next/font/google";

import s from "@/styles/PrivacyPolicy.module.scss";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const privacyPolicy = () => {
  const { t } = useTranslation("privacyPolicy");
  const { locale } = useRouter();

  return (
    <section className={s.section}>
      <div className={` wrapper ${raleway.variable}`}>
        <h2>{t("titlePolicy")}</h2>
        <p>
          {t("p1")}{" "}
          <Link href="/" target="_blank" locale={locale}>
            GL Media
          </Link>{" "}
          {t("p2")}
        </p>
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
        <p>{t("p5")}</p>
        <p>{t("p6")}</p>
        <p>{t("p7")}</p>
        <p>{t("p8")}</p>
        <p>{t("p9")}</p>
        <p>{t("p10")}</p>
        <p>{t("p11")}</p>
        <p>{t("p12")}</p>
        <p>{t("p13")}</p>
        <p>{t("p14")}</p>
        <p>{t("p15")}</p>
        <ul>
          <li>{t("p16")}</li>
          <li>{t("p17")}</li>
          <li>{t("p18")}</li>
          <li>{t("p19")}</li>
          <li>{t("p20")}</li>
        </ul>
        <p>{t("p21")}</p>

        <p>{t("p22")}</p>
        <p>{t("p23")}</p>
        <p>{t("p24")}</p>
        <p>
          {t("p25")}{" "}
          <a href="https://ces.org.ua/" target="_blank">
            https://ces.org.ua/
          </a>
        </p>
        <p>{t("p26")}</p>
        <p>{t("p27")}</p>
        <p>{t("p28")}</p>
        <p>{t("p29")}</p>
        <p>{t("p30")}</p>
        <p>{t("p31")}</p>
        <p>{t("p32")}</p>
        <p>{t("p33")}</p>
      </div>
    </section>
  );
};

export default privacyPolicy;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "privacyPolicy",
        "header",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
