import { Link } from "react-router-dom";
import { AsyncPageState } from "../components/AsyncPageState";
import { PageBanner } from "../components/PageBanner";
import { DiscoverClubCard } from "../components/DiscoverClubCard";
import { useAppStore } from "../store/useAppStore";

export function DiscoverPage() {
  const clubs = useAppStore((state) => state.clubs);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);

  const featuredClub = clubs[0];
  const secondaryClubs = clubs.slice(1);

  return (
    <AsyncPageState loading={loading} error={error}>
      <main className="app-page">
        <PageBanner
          eyebrow="Student App / Home"
          title="发现页"
          description="像逛内容社区一样逛社团，先被氛围吸引，再进入详情和报名。"
          actions={
            <>
              <Link className="button button-primary" to="/ai-profile">
                和 AI 聊聊
              </Link>
              <Link className="button button-secondary" to="/club-detail">
                进入社团详情
              </Link>
            </>
          }
        />

        <section className="mobile-shell">
          <div className="phone-stage">
            <div className="mobile-page">
              <div className="mobile-topbar">
                <div>
                  <span className="eyebrow">SEPT CLUB WEEK</span>
                  <h2>发现</h2>
                </div>
                <div className="avatar-badge">LM</div>
              </div>

              <Link className="hero-banner-card" to="/ai-profile">
                <div>
                  <span className="pill">AI 智能匹配</span>
                  <h3>和小聚聊聊，找到最搭的社团</h3>
                  <p>3 分钟生成专属社团名片，跳过重复填表。</p>
                </div>
                <span className="banner-arrow">→</span>
              </Link>

              <div className="timeline-strip">
                <div className="event-pill">
                  <span>今晚 19:00</span>
                  <strong>吉他社草坪路演</strong>
                </div>
                <div className="event-pill warning">
                  <span>周五 24:00</span>
                  <strong>辩论队报名截止</strong>
                </div>
              </div>

              <div className="tag-row">
                <span>🎨 脑洞大开</span>
                <span>☕ i 人舒适区</span>
                <span>🔥 卷王聚集地</span>
                <span>💪 零基础友好</span>
              </div>

              <section className="bento-layout">
                {featuredClub ? <DiscoverClubCard club={featuredClub} featured /> : null}
                {secondaryClubs.map((club) => (
                  <DiscoverClubCard key={club.id} club={club} />
                ))}
              </section>
            </div>
          </div>

          <aside className="side-panel glass">
            <h3>页面亮点</h3>
            <ul className="clean-list">
              <li>Bento UI 混排，强化视觉优先的探索体验。</li>
              <li>把“分类”升级成“氛围标签”，降低理解门槛。</li>
              <li>顶部 AI 入口承接推荐链路，缩短转化路径。</li>
            </ul>
          </aside>
        </section>
      </main>
    </AsyncPageState>
  );
}
