import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { navList } from "@/data/navList";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className="wrapper">
        <Link href="/">
          <Image
            src="/images/logoBeige.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>

        <nav>
          <ul>
            {navList.map(({ title, path }, idx) => (
              <li key={idx}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button>UA</button>
          <span> | </span>
          <button>EN</button>
        </div>

        <ul>
          <li>
            <a href="tel:+380 93 560 44 06">+380 93 560 44 06</a>
          </li>
          <li>
            <a href="mailto:group@glmedia.org">group@glmedia.org</a>
          </li>
        </ul>

        <Link href="https://www.instagram.com/gl.media/" target="_blank">
          <BsInstagram />
        </Link>
      </div>
    </header>
  );
};

export default Header;
