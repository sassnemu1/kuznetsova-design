"use client";

export default function ServicesProgress({ progressRef, hintRef }) {
  return (
    <div className="services__progress-wrap">
      <div className="services__progress-track">
        <div className="services__progress-fill" ref={progressRef} />
      </div>
      {/* <span className="services__scroll-hint" ref={hintRef}>Scroll</span> */}
    </div>
  );
}