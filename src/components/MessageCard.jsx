import { Link } from "react-router-dom";

export function MessageCard({ message }) {
  return (
    <article className={`message-card glass ${message.highlight ? "highlight-card" : ""}`}>
      <span className="eyebrow">{message.kicker}</span>
      <h3>{message.title}</h3>
      <p>{message.body}</p>
      {message.highlight ? (
        <div className="message-actions">
          <Link className="button button-primary" to="/club-detail">
            查看社团主页
          </Link>
          <Link className="button button-secondary" to="/discover">
            继续逛社团
          </Link>
        </div>
      ) : null}
    </article>
  );
}
