import s from "@/styles/ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section className={s.section}>
      <div className="wrapper">
        <div className={s.wrapper}>
          <h2>Отримати консультацію та пропозицію за вашим запитом</h2>
          <form>
            <div className={s.userBox}>
              <input type="text" name="name" id="name" required />
              <label for="name">Ваше ім'я</label>
            </div>
            <div className={s.userBox}>
              <input type="text" name="email" id="email" required />
              <label for="email">Ваша пошта</label>
            </div>
            <div className={s.userBox}>
              <input
                type="text"
                name="tel"
                id="tel"
                // pattern="/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/"
                required
              />
              <label for="tel">Ваш номер телефону</label>
            </div>

            <div className={s.btnForm}>
              <button id="submit" type="submit" className={s.submit}>
                Відправити
              </button>
              <div className={s.confident}>
                Відправляючи дані, ви погоджуєтеся з{" "}
                <a href="#">політикою конфіденційності</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
