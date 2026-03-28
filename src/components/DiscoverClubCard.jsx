import { Link } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

export function DiscoverClubCard({ club, featured = false }) {
  const selectClub = useAppStore((state) => state.selectClub);

  if (featured) {
    return (
      <Link className="bento-card large-card visual-dance" to="/club-detail" onClick={() => selectClub(club.id)}>
        <div className="overlay-copy">
          <span className="pill">热门推荐</span>
          <h3>{club.name}</h3>
          <p>{club.preview}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link className={`bento-card ${club.feedTone}`} to="/club-detail" onClick={() => selectClub(club.id)}>
      <span className="pill">{club.matchScore}%</span>
      <h3>{club.name}</h3>
      <p>{club.preview}</p>
    </Link>
  );
}
