import s from "@/styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.section}>
      <div className={`${s.wrapper} wrapper`}>
        <h1>Успішна SMM-стратегія для вашого бізнесу</h1>
        <p>від діджитал студії GL Media</p>
      </div>
    </section>
  );
};

export default Hero;
