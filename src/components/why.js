import s from "@/styles/Why.module.scss";

const Why = () => {
  return (
    <section className={s.section}>
      <div className={`${s.wrapper} wrapper`}>
        <h2>Чому ми?</h2>

        <div className={s.box}>
          <div className={s.photo}>
            <img src="./images/7395.jpg" alt="marketers work in the office" />
          </div>

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
          <div className={s.secondReasons}>
            <ul className={s.list}>
              <li>
                Ми розуміємо, що соціальні мережі – це потужний інструмент для
                залучення клієнтів та підвищення лояльності бренду. Тому ми
                створюємо індивідуальні стратегії для кожного клієнта,
                враховуючи його бізнес-мети та особливості цільової аудиторії.
              </li>
              <li>
                Наша студія гарантує ретельне та професійне підходи до кожного
                проекту, а також своєчасну звітність та відкритість для
                спілкування з клієнтом. Ми завжди раді допомогти вашому бізнесу
                досягти успіху у соціальних мережах.
              </li>
              <li>
                З нами ваш бренд буде в безпеці та отримає максимум можливостей
                соціальних мереж для зростання та розвитку. Не соромтеся
                зв'язатися з нами для отримання більш детальної інформації та
                консультації.детальної інформації та консультації.
              </li>
            </ul>
          </div>

          <div className={s.secondPhoto}>
            <img src="./images/7643.jpg" alt="marketers work in the office" />
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
