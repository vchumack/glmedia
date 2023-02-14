import Link from "next/link";
import { Raleway, Red_Hat_Text } from "@next/font/google";
import { BsInstagram, BsTelegram, BsLinkedin } from "react-icons/bs";

import s from "@/styles/Footer.module.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const redHat = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--fontFamilyThird",
});

const Footer = () => {
  return (
    <footer id="contacts" className={s.footer}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${redHat.variable}`}
      >
        <div className={s.row}>
          <div className={s.col}>
            <h3>Наші контакти</h3>
            <a
              className={`${s.contactLink} ${s.tel}`}
              href="tel:+380 93 560 44 06"
            >
              +380 93 560 44 06
            </a>
            <a
              className={`${s.contactLink} ${s.tel}`}
              href="tel:+380 98 866 22 13"
            >
              +380 98 866 22 13
            </a>
          </div>
          <div className={s.col}>
            <h3>Наші соціальні мережі</h3>
            <div className={s.iconBox}>
              <Link
                className={s.icon}
                href="https://t.me/givishenka"
                target="_blank"
              >
                <BsTelegram />
              </Link>
              <Link
                className={s.icon}
                href="https://www.instagram.com/gl.media/"
                target="_blank"
              >
                <BsInstagram />
              </Link>
              <Link
                className={s.icon}
                href="https://www.linkedin.com/in/gevorg-sarkisyan-23b072134"
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </div>
          </div>
          <div className={s.col}>
            <h3>Наша пошта</h3>
            <a className={s.contactLink} href="mailto:group@glmedia.org">
              group@glmedia.org
            </a>
          </div>
        </div>
        <p className={s.copywright}>Copyright © 2023. Розроблено MYD</p>
      </div>
    </footer>
  );
};

export default Footer;
