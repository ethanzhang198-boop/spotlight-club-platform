export function CandidateCard({ candidate, approved = false, showRadar = false }) {
  return (
    <div className={`candidate-panel ${approved ? "approved" : ""}`}>
      <strong>{candidate.name}</strong>
      <p>{candidate.tags.join(" / ")}</p>
      {showRadar ? (
        <div className="mini-bars">
          <span style={{ height: `${candidate.strengths.creativity}%` }} />
          <span style={{ height: `${candidate.strengths.communication}%` }} />
          <span style={{ height: `${candidate.strengths.execution}%` }} />
          <span style={{ height: `${candidate.strengths.collaboration}%` }} />
        </div>
      ) : null}
    </div>
  );
}
