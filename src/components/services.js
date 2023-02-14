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
  return (
    <section id="services" className={s.section}>
      <div
        className={`${s.wrapper} wrapper ${raleway.variable} ${fira.variable}`}
      >
        <h2>Наші послуги</h2>
        <ul className={s.box}>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              <h3 className={s.title}>Маркетинг впливу, таргет</h3>
            </div>
            <p className={s.price}>від 150$ </p>
            <ul className={s.list}>
              <li>
                Проведення рекламних кампаній у блогерів, у великих спільнотах і
                пабліках, телеграм-каналах -{" "}
                <span className={s.insidePrice}>від 100$;</span>
              </li>
              <li>
                Таргетована реклама в інстаграмі та фейсбуці -{" "}
                <span className={s.insidePrice}>від 150$.</span>
              </li>
            </ul>
            <p className={s.description}>
              *Ціни вказані за нашу роботу, бюджети на рекламну кампанію
              формуються окремо
            </p>
          </li>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              {" "}
              <h3 className={s.title}>Ведення акаунтів у соціальних мережах</h3>
            </div>
            <p className={s.price}>від 200$</p>
            <ul className={s.list}>
              <li>Створення контент-плану;</li>
              <li>Створення постів;</li>
              <li>Створення сторіз;</li>
              <li>Розміщення матеріалів за графіком;</li>
              <li>Коментарі від імені бренду, спілкування з користувачами;</li>
              <li>Оформлення профілю, дизайнерські послуги.</li>
            </ul>
          </li>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              <h3 className={s.title}>Курси з SMM і таргетованої реклами</h3>
            </div>
            <p className={s.price}>від 200$</p>
            <p className={s.description}>Онлайн і не за записами: </p>
            <ul className={s.list}>
              <li>Індивідуальне навчання;</li>
              <li>Навчання в групах;</li>
              <li>
                Консультації - <span className={s.insidePrice}>15$/год</span>;
              </li>
              <li>Менторинг - ціна формується в залежності від запиту.</li>
            </ul>
          </li>
          <li className={s.boxItem}>
            <div className={s.boxTitle}>
              <h3 className={s.title}>SERM, Партизанський маркетинг</h3>
            </div>
            <p className={s.price}>від 150$</p>
            <ul className={s.list}>
              <li>
                Підготовка відгуків на сайтах, соціальних мережах, форумах у
                вигляді дискусій за різними сценаріями;
              </li>
              <li>Підготовка акаунтів для розміщення цих відгуків;</li>
              <li>Аналітика та звітність.</li>
            </ul>
          </li>
        </ul>
        <p className={s.description}>
          *Ціни вказані орієнтовно. Точна вартість вашого проєкту стане відома
          після розрахунку обсягу роботи, який буде потрібен під ваш конкретний
          запит. Для консультації та розрахунку заповніть форму нижче:
        </p>
      </div>
    </section>
  );
};

export default Services;
