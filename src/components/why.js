import s from "@/styles/Why.module.scss";

const Why = () => {
  return (
    <section className={s.section}>
      <div className={`${s.wrapper} wrapper`}>
        <h2>Чому ми?</h2>

        <div className={s.box}>
          <img
            className={s.photo}
            src="./images/7395.jpg"
            alt="marketers work in the office"
          />

          <div className={s.reasons}>
            <h3>Близько 10 років досвіду</h3>
            <ul className={s.list}>
              <li>
                з 2012 року ми продовжуємо активно розвивати бренди в соціальних
                мережах;
              </li>
              <li>
                за цей час ми успішно співпрацювали з більш ніж{" "}
                <span className={s.accentText}>100 брендів</span>;
              </li>
              <li>
                закрили більш ніж{" "}
                <span className={s.accentText}>500 проєктів</span> з позитивними
                відгуками клієнтів.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.secondBox}>
          <div className={s.reasons}>
            <h3>Близько 10 років досвіду</h3>
            <ul className={s.list}>
              <li>
                з 2012 року ми продовжуємо активно розвивати бренди в соціальних
                мережах;
              </li>
              <li>
                за цей час ми успішно співпрацювали з більш ніж{" "}
                <span className={s.accentText}>100 брендів</span>;
              </li>
              <li>
                закрили більш ніж{" "}
                <span className={s.accentText}>500 проєктів</span> з позитивними
                відгуками клієнтів.
              </li>
              <li>
                за цей час ми успішно співпрацювали з більш ніж{" "}
                <span className={s.accentText}>100 брендів</span>;
              </li>
              <li>
                закрили більш ніж{" "}
                <span className={s.accentText}>500 проєктів</span> з позитивними
                відгуками клієнтів.
              </li>
            </ul>
          </div>

          <img
            className={s.secondPhoto}
            src="./images/7643.jpg"
            alt="marketers work in the office"
          />
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
