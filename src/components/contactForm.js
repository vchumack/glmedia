import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Raleway, Fira_Sans_Extra_Condensed } from "@next/font/google";
import { HiOutlineHeart } from "react-icons/hi";
import { Oval } from "react-loader-spinner";

import s from "@/styles/ContactForm.module.scss";
import Link from "next/link";

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
  const { t } = useTranslation("contactForm");
  const { locale } = useRouter();

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
    let message = `<i>Application from the website</i>\n`;
    message += `<i>Sender's name:</i> <b>${data.name}</b>\n`;
    message += `<i>Sender's email:</i> <b>${data.email}</b>\n`;
    message += `<i>Sender's tel:</i> <b>${data.tel}</b>`;

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
          text: message,
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
              <h2 className={s.title}>{t("title")}</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.userBox}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    {...register("name", {
                      required: `${t("required")}`,
                      minLength: {
                        value: 3,
                        message: `${t("message")}`,
                      },
                    })}
                  />
                  <label htmlFor="name" className={s.label}>
                    {t("name")}
                  </label>
                  <div className={s.error}>
                    {errors?.name && (
                      <p>{errors?.name?.message || `${t("error")}`}</p>
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
                      required: `${t("required")}`,
                      pattern: {
                        value:
                          /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                        message: `${t("errorEmail")}`,
                      },
                    })}
                  />
                  <label htmlFor="email" className={s.label}>
                    {t("email")}
                  </label>
                  <div className={s.error}>
                    {errors?.email && (
                      <p>{errors?.email?.message || `${t("error")}`}</p>
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
                      required: `${t("required")}`,
                    })}
                  />
                  <label htmlFor="tel" className={s.label}>
                    {t("tel")}
                  </label>
                  <div className={s.error}>
                    {errors?.tel && (
                      <p>{errors?.tel?.message || `${t("error")}`}</p>
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
                    {t("submit")}
                  </button>
                  <div className={s.confident}>
                    {t("confident")}{" "}
                    <Link href="/privacyPolicy" locale={locale}>
                      {t("confidentLink")}
                    </Link>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <p className={s.successSubmit}>{t("successSubmit")}</p>
              <HiOutlineHeart size={50} className={s.icons} />
              <p className={s.successSubmit}>
                {t("successReturn")} <a href="/">{t("successReturnLink")}</a>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
