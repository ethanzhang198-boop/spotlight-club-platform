import { Link } from "react-router-dom";
import { AsyncPageState } from "../components/AsyncPageState";
import { PageBanner } from "../components/PageBanner";
import { ApplyModal } from "../components/ApplyModal";
import { useAppStore } from "../store/useAppStore";

export function ClubDetailPage() {
  const open = useAppStore((state) => state.applyModalOpen);
  const openApplyModal = useAppStore((state) => state.openApplyModal);
  const closeApplyModal = useAppStore((state) => state.closeApplyModal);
  const club = useAppStore((state) => state.getSelectedClub());
  const candidate = useAppStore((state) => state.getCurrentCandidate());
  const profileDraft = useAppStore((state) => state.profileDraft);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);

  return (
    <AsyncPageState loading={loading} error={error}>
      {!club || !candidate ? null : (
        <main className="detail-page">
          <PageBanner
            eyebrow="Student App / Club Detail"
            title="社团详情页"
            description="把内容种草真正连到转化，让用户从社团主页直接完成一键报名。"
            actions={
              <>
                <button className="button button-primary" type="button" onClick={openApplyModal}>
                  一键报名
                </button>
                <Link className="button button-secondary" to="/messages">
                  查看投递进度
                </Link>
              </>
            }
          />

          <section className="club-hero">
            <div className="club-hero-copy glass dark-glass">
              <span className="pill">{club.name}</span>
              <h1>{club.tagline}</h1>
              <p>{club.description}</p>
              <div className="tag-row">
                {club.vibeTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="detail-grid">
            <article className="content-card glass">
              <h2>我们平时都在做什么</h2>
              <p>{club.description}</p>
              <div className="photo-wall">
                <div className="photo-card photo-one" />
                <div className="photo-card photo-two" />
                <div className="photo-card photo-three" />
              </div>
            </article>

            <article className="content-card glass">
              <h2>招新时间轴</h2>
              <div className="schedule-list">
                {club.timeline.map((item) => (
                  <div key={`${item.date}-${item.title}`} className="schedule-item">
                    <span>{item.date}</span>
                    <strong>{item.title}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="content-card glass">
              <h2>真实评价</h2>
              {club.reviews.map((review) => (
                <div key={review.title} className="review-card">
                  <strong>{review.title}</strong>
                  <p>{review.content}</p>
                </div>
              ))}
            </article>

            <aside className="sidebar-card glass">
              <h3>匹配理由</h3>
              <ul className="clean-list">
                {club.matchReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <button className="button button-primary full-width" type="button" onClick={openApplyModal}>
                确认投递
              </button>
            </aside>
          </section>

          <ApplyModal open={open} onClose={closeApplyModal} club={club} candidate={candidate} draft={profileDraft} />
        </main>
      )}
    </AsyncPageState>
  );
}
