export function PageBanner({ eyebrow, title, description, actions }) {
  return (
    <section className="page-banner glass">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actions ? <div className="page-banner-actions">{actions}</div> : <div />}
    </section>
  );
}
