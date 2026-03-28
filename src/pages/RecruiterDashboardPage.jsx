import { AsyncPageState } from "../components/AsyncPageState";
import { PageBanner } from "../components/PageBanner";
import { CandidateCard } from "../components/CandidateCard";
import { useAppStore } from "../store/useAppStore";

export function RecruiterDashboardPage() {
  const candidates = useAppStore((state) => state.candidates);
  const applications = useAppStore((state) => state.applications);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);

  const newApplicants = candidates.filter((candidate) => candidate.id !== "candidate-zhaoyinuo");
  const approvedApplicants = candidates.filter((candidate) => candidate.id === "candidate-zhaoyinuo");

  return (
    <AsyncPageState loading={loading} error={error}>
      <main className="dashboard-page">
        <PageBanner
          eyebrow="Recruiter Console / Dashboard"
          title="招新指挥中心"
          description="从流量漏斗到候选人卡牌，从 AI 日报到面试日历，把社团负责人的招新流程集中到一块屏幕里。"
        />

        <section className="stats-grid">
          {[
            { label: "主页浏览量", value: "1,284", note: "较昨日 +18%", accent: true },
            { label: "点击报名数", value: "326", note: "转化率 25.3%" },
            { label: "初筛通过数", value: "84", note: "通过率 25.7%" },
            { label: "AI 高匹配候选人", value: "12", note: "建议优先联系 3 人" }
          ].map((item) => (
            <article key={item.label} className={`stats-card glass ${item.accent ? "accent-panel" : ""}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <section className="dashboard-grid">
          <article className="wide-card glass">
            <div className="section-mini-head">
              <h2>招新漏斗</h2>
              <span className="status-pill">实时更新</span>
            </div>
            <div className="funnel-bars">
              <div className="funnel-bar full">主页浏览量</div>
              <div className="funnel-bar medium">点击报名数</div>
              <div className="funnel-bar mid-small">初筛通过数</div>
              <div className="funnel-bar small">最终录取数</div>
            </div>
          </article>

          <article className="small-card glass">
            <div className="section-mini-head">
              <h2>新生画像词云</h2>
            </div>
            <div className="word-cloud">
              <b>摄影</b>
              <b>剪辑</b>
              <b>文案</b>
              <span>社牛</span>
              <span>策划</span>
              <span>运营</span>
              <span>设计</span>
            </div>
          </article>
        </section>

        <section className="kanban-grid">
          <article className="kanban-card glass">
            <div className="section-mini-head">
              <h3>新投递</h3>
              <span>{newApplicants.length}</span>
            </div>
            {newApplicants.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} showRadar />
            ))}
          </article>

          <article className="kanban-card glass">
            <div className="section-mini-head">
              <h3>初筛通过</h3>
              <span>{approvedApplicants.length}</span>
            </div>
            {approvedApplicants.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} approved />
            ))}
          </article>

          <article className="kanban-card glass">
            <div className="section-mini-head">
              <h3>面试排期</h3>
              <span>{applications.length}</span>
            </div>
            <div className="schedule-list">
              {applications.map((application) => (
                <div key={application.id} className="schedule-item">
                  <span>{application.scheduledAt ?? "待定"}</span>
                  <strong>{application.location ?? "等待安排"}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </AsyncPageState>
  );
}
