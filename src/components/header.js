import Link from "next/link";
import { Raleway, Red_Hat_Text } from "@next/font/google";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
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
        <div className={s.box}>
          <nav className={s.nav}>
            <ul>
              {navList.map(({ title, path }, idx) => (
                <li key={idx}>
                  <Link className={s.link} href={path} scroll={false}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a className={s.lang}>UA</a>
            <span> | </span>
            <a className={s.lang}>EN</a>
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
    </header>
  );
};

export default Header;
