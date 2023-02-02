import { Raleway, Fira_Sans_Extra_Condensed } from "@next/font/google";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HiOutlineHeart } from "react-icons/hi";
import { Oval } from "react-loader-spinner";
import s from "@/styles/ContactForm.module.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--fontFamilySecondary",
});

const fira = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  variable: "--fontFamilyBase",
  weight: ["400", "700"],
});

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // console.log(data);
      await axios.post(
        "https://sheet.best/api/sheets/8e3a48aa-d794-45df-b76c-96f5c9cb843e",
        data
      );
      await axios.post(
        "https://api.telegram.org/bot5826218439:AAFcxuVEYJ9gOaOjEYy7qLre1vkGDseB15o/sendMessage",
        {
          chat_id: "-1001762357803",
          parse_mode: "html",
          text: JSON.stringify(data),
        }
      );

      setIsSubmit(true);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className={s.section}>
        <div className="wrapper">
          <div className={s.loader}>
            <Oval
              height={80}
              width={80}
              color="#00B6B0"
              secondaryColor="#BEA698"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${s.section} ${raleway.variable} ${fira.variable}`}>
      <div className="wrapper">
        <div className={s.wrapper}>
          {!isSubmit ? (
            <>
              <h2 className={s.title}>
                Отримати консультацію та пропозицію за вашим запитом
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.userBox}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    {...register("name", {
                      required: "Поле обов'язкове для заповнення",
                      minLength: {
                        value: 3,
                        message: "Введіть мінімум 3 символи",
                      },
                    })}
                  />
                  <label htmlFor="name" className={s.label}>
                    Ваше ім'я
                  </label>
                  <div className={s.error}>
                    {errors?.name && (
                      <p>
                        {errors?.name?.message ||
                          "Щось раптом пішло не так, повторіть спробу"}
                      </p>
                    )}
                  </div>
                </div>
                <div className={s.userBox}>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder=" "
                    {...register("email", {
                      required: "Поле обов'язкове для заповнення",
                      pattern: {
                        value:
                          /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                        message: "Введіть існуючу адресу пошти",
                      },
                    })}
                  />
                  <label htmlFor="email" className={s.label}>
                    Ваша пошта
                  </label>
                  <div className={s.error}>
                    {errors?.email && (
                      <p>
                        {errors?.email?.message ||
                          "Щось раптом пішло не так, повторіть спробу"}
                      </p>
                    )}
                  </div>
                </div>
                <div className={s.userBox}>
                  <input
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder=" "
                    {...register("tel", {
                      required: "Поле обов'язкове для заповнення",
                    })}
                  />
                  <label htmlFor="tel" className={s.label}>
                    Ваш номер телефону
                  </label>
                  <div className={s.error}>
                    {errors?.tel && (
                      <p>
                        {errors?.tel?.message ||
                          "Щось раптом пішло не так, повторіть спробу"}
                      </p>
                    )}
                  </div>
                </div>

                <div className={s.btnForm}>
                  <button
                    id="submit"
                    type="submit"
                    disabled={!isValid}
                    className={s.submit}
                  >
                    Відправити
                  </button>
                  <div className={s.confident}>
                    Відправляючи дані, ви погоджуєтеся з{" "}
                    <a href="/privacyPolicy" target="_blanc">
                      політикою конфіденційності
                    </a>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <p className={s.successSubmit}>
                Дякуємо за заповнення форми, вашу заявку успішно прийнято. Ми
                зв'яжемося з вами найближчим часом!
              </p>
              <HiOutlineHeart size={50} className={s.icons} />
              <p className={s.successSubmit}>
                Повернутися на <a href="/">головну</a>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
