import { Link } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";

export function ApplyModal({ open, onClose, club, candidate, draft }) {
  return (
    <div className={`modal-backdrop ${open ? "is-open" : ""}`} onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div>
            <span className="eyebrow">ONE CLICK APPLY</span>
            <h3>确认投递至星空摄影社</h3>
          </div>
          <button className="icon-button" type="button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-grid">
          <div className="apply-box">
            <h4>将发送这张数字名片</h4>
            <ProfileCard candidate={candidate} draft={draft} compact />
          </div>
          <div className="apply-box">
            <h4>岗位匹配说明</h4>
            <div className="schedule-list">
              <div className="schedule-item">
                <span>岗位偏好</span>
                <strong>{club.recommendedRoles.join(" / ")}</strong>
              </div>
              <div className="schedule-item">
                <span>AI 判断</span>
                <strong>{club.matchScore}% 高匹配，可优先筛选</strong>
              </div>
              <div className="schedule-item">
                <span>投递后动作</span>
                <strong>进入评估中并等待面试邀约</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-actions">
          <button className="button button-secondary" type="button" onClick={onClose}>
            再看看
          </button>
          <Link className="button button-primary" to="/messages" onClick={onClose}>
            确认一键报名
          </Link>
        </div>
      </div>
    </div>
  );
}
