"use client";

export default function DetailHeader({ closeBtnRef, onClose, service }) {
  return (
    <div className="detail__portfolio-header">
      <div className="detail__header-top">
        <button className="detail__close" ref={closeBtnRef} onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {service && <span className="detail__portfolio-tag">{service.tag}</span>}
      </div>

      {service && (
        <div className="detail__portfolio-meta">
          <h3 className="detail__portfolio-title">{service.title.replace("\n", " ")}</h3>
          <p className="detail__portfolio-sub">{service.desc}</p>
          <div className="detail__portfolio-stats">
            <span className="detail__stat">
              <span className="detail__stat-num">{service.works?.length ?? 0}</span>
              <span className="detail__stat-label">Projects</span>
            </span>
            <span className="detail__stat-divider" />
            <span className="detail__stat">
              <span className="detail__stat-num">2023–24</span>
              <span className="detail__stat-label">Period</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}