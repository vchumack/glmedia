import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

import { Raleway, Red_Hat_Text } from "@next/font/google";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navList } from "@/data/navList";

import s from "@/styles/Header.module.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const redHat = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--fontFamilyThird",
});

const Header = () => {
  const { t } = useTranslation("header");
  const { locales, locale } = useRouter();

  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);

  useEffect(() => {
    if (isOpenMobMenu) {
      document.body.classList.add("isOpenMenu");
    } else {
      document.body.classList.remove("isOpenMenu");
    }
  }, [isOpenMobMenu]);

  const handleMobMenuClick = () => {
    setIsOpenMobMenu(!isOpenMobMenu);
  };

  return (
    <header className={s.container}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${redHat.variable}`}
      >
        <Link href="/">
          <Image
            src="/images/logoBeige.png"
            alt="logo"
            width={50}
            height={50}
            className={s.logo}
          />
        </Link>

        <div
          className={
            isOpenMobMenu ? [s.box, s.activeMobMenu].join(" ") : [s.box]
          }
        >
          <div className={s.boxLangMob}>
            <Link href="/" locale={locales[0]} className={s.lang}>
              UA
            </Link>
            <span> | </span>
            <Link href="/" locale={locales[1]} className={s.lang}>
              EN
            </Link>
          </div>

          <nav className={s.nav}>
            <ul>
              {navList.map(({ title, path }, idx) => (
                <li key={idx}>
                  <Link
                    className={s.link}
                    href={path}
                    scroll={false}
                    onClick={() => setIsOpenMobMenu(false)}
                    locale={locale}
                  >
                    {t(title)}
                  </Link>
                </li>
              ))}
              {/* <li>{t("menu")}</li> */}
            </ul>
          </nav>
          <Link
            className={s.iconMob}
            href="https://www.instagram.com/gl.media/"
            target="_blank"
          >
            <BsInstagram />
          </Link>
          <div className={s.boxLang}>
            <Link href="/" className={s.lang} locale={locales[0]}>
              UA
            </Link>
            <span> | </span>
            <Link href="/" className={s.lang} locale={locales[1]}>
              EN
            </Link>
          </div>
          <ul className={s.contactsList}>
            <li>
              <a
                className={`${s.contactLink} ${s.tel}`}
                href="tel:+380 93 560 44 06"
              >
                +380 93 560 44 06
              </a>
            </li>
            <li>
              <a className={s.contactLink} href="mailto:group@glmedia.org">
                group@glmedia.org
              </a>
            </li>
          </ul>
        </div>

        <Link
          className={s.icon}
          href="https://www.instagram.com/gl.media/"
          target="_blank"
        >
          <BsInstagram />
        </Link>
      </div>
      <div onClick={handleMobMenuClick} className={s.mobileBtn}>
        {isOpenMobMenu ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
      </div>
    </header>
  );
};

export default Header;
