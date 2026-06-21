"use client";

export default function ServicesHeader({ titleRef, counterRef, currentRef, total }) {
  return (
    <div className="services__header">
      <div className="services__meta">
        <div className="services__title" ref={titleRef}>
          <h2>services</h2>
          <span className="services__title-sub">
            Будучи сплоченной командой экспертов, мы создаем запоминающиеся и
            <br /> вызывающие эмоции веб-сайты, цифровые решения и нативные приложения.
          </span>
        </div>
      </div>

      <div className="services__counter" ref={counterRef}>
        <span className="services__current" ref={currentRef}>01</span>
        <span className="services__total">/ {String(total).padStart(2, "0")}</span>
      </div>
    </div>
  );
}