export function ProfileCard({ candidate, draft, progress, compact = false }) {
  const tags = draft.tags ?? candidate.tags;
  const meta = draft.meta ?? `${candidate.college} · ${candidate.major} · ${candidate.grade}`;
  const quote = draft.quote ?? candidate.quote;

  return (
    <div className={`profile-showcase ${compact ? "compact-card" : ""}`}>
      {typeof progress === "number" ? (
        <>
          <div className="progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>
        </>
      ) : null}
      <div className="identity-row">
        <div className="avatar-large">{candidate.name.slice(0, 1)}</div>
        <div>
          <h3>{candidate.name}</h3>
          <p>{meta}</p>
        </div>
      </div>
      <div className="tag-cloud">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <blockquote>{quote}</blockquote>
    </div>
  );
}
