"use client";

import ServiceCard from "../ServiceCard/ServiceCard";

export default function ServicesTrack({ trackRef, services, activeIndex, cardRefs, onCardClick }) {
  return (
    <div className="services__track-outer">
      <div className="services__track" ref={trackRef}>
        {services.map((item, index) => (
          <ServiceCard
            key={item.id}
            item={item}
            isActive={activeIndex === index}
            ref={(el) => { cardRefs.current[index] = el; }}
            onClick={() => onCardClick(item, cardRefs.current[index])}
          />
        ))}
      </div>
    </div>
  );
}