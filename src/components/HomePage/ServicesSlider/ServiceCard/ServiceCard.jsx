"use client";

import { forwardRef } from "react";

import { useT } from "@/context/LanguageContext";

const ServiceCard = forwardRef(function ServiceCard({ item, isActive, onClick }, ref) {
  const t = useT();

  return (
    <div
      className={`serviceCard${isActive ? " serviceCard--active" : ""}`}
      ref={ref}
      style={{ "--card-color": item.color }}
      onClick={onClick}
    >
      <div className="serviceCard__bg-img" style={{ backgroundImage: `url(${item.image})` }} />

      <div className="serviceCard__top">
        <span className="serviceCard__id">{item.id}</span>
        <span className="serviceCard__tag">{item.tag}</span>
      </div>

      <div className="serviceCard__bg-num">{item.id}</div>
      <div className="serviceCard__line" />

      <div className="serviceCard__content">
        <h3 className="serviceCard__title">
          {item.title.split("\n").map((line, li) => (
            <span key={li} style={{ display: "block" }}>{line}</span>
          ))}
        </h3>
        {/* tag и title намеренно остаются английскими — это витринная
            латинская типографика чёрной секции. Переводим описание. */}
        <p className="serviceCard__desc">
          {t(`services.desc.${item.id}`, item.desc)}
        </p>
      </div>

      <div className="serviceCard__cta">
        <span>{t("common.viewWork", "View work")}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
});

export default ServiceCard;