import { Link } from "react-router-dom";
import { AsyncPageState } from "../components/AsyncPageState";
import { PageBanner } from "../components/PageBanner";
import { ChatThread } from "../components/ChatThread";
import { ProfileCard } from "../components/ProfileCard";
import { useAppStore } from "../store/useAppStore";

export function AiProfilePage() {
  const aiThread = useAppStore((state) => state.aiThread);
  const aiHint = useAppStore((state) => state.aiHint);
  const profileDraft = useAppStore((state) => state.profileDraft);
  const aiUsedSteps = useAppStore((state) => state.aiUsedSteps);
  const applyAiStep = useAppStore((state) => state.applyAiStep);
  const currentCandidate = useAppStore((state) => state.getCurrentCandidate());
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);

  return (
    <AsyncPageState loading={loading} error={error}>
      <main className="app-page">
        <PageBanner
          eyebrow="Student App / AI & Profile"
          title="AI 助手与我的名片"
          description="把枯燥填表改造成对话式建档，在聊天中完成兴趣、性格和技能提取。"
          actions={
            <>
              <Link className="button button-secondary" to="/discover">
                返回发现页
              </Link>
              <Link className="button button-primary" to="/club-detail">
                查看匹配社团
              </Link>
            </>
          }
        />

        <section className="dual-panel">
          <article className="chat-panel glass">
            <div className="section-mini-head">
              <div>
                <span className="eyebrow">AI Companion</span>
                <h2>和小聚聊天</h2>
              </div>
              <span className="status-dot">建档中</span>
            </div>
            <ChatThread items={aiThread} />
            <div className="step-tip">{aiHint}</div>
            <div className="option-grid">
              <button className="choice-button" type="button" onClick={() => applyAiStep("identity")} disabled={aiUsedSteps.includes("identity")}>
                我是计算机学院软件工程大一新生
              </button>
              <button className="choice-button" type="button" onClick={() => applyAiStep("interest")} disabled={aiUsedSteps.includes("interest")}>
                我喜欢摄影、探店，也会简单剪视频
              </button>
              <button className="choice-button" type="button" onClick={() => applyAiStep("personality")} disabled={aiUsedSteps.includes("personality")}>
                我偏 i 人，但熟悉之后很能聊，做事耐心
              </button>
              <button className="choice-button" type="button" onClick={() => applyAiStep("finalize")} disabled={aiUsedSteps.includes("finalize")}>
                生成我的数字名片和推荐结果
              </button>
            </div>
          </article>

          <aside className="profile-panel glass">
            <div className="section-mini-head">
              <div>
                <span className="eyebrow">Digital Card</span>
                <h2>我的社团通行名片</h2>
              </div>
              <span>完成度 {profileDraft.progress}%</span>
            </div>
            {currentCandidate ? <ProfileCard candidate={currentCandidate} draft={profileDraft} progress={profileDraft.progress} /> : null}
            <div className="match-panel">
              <div className="section-mini-head">
                <h3>推荐社团</h3>
                <Link to="/club-detail">查看更多</Link>
              </div>
              {(profileDraft.matches ?? [{ name: "等待生成推荐", score: "--" }]).map((item) => (
                <div key={item.name} className="match-row">
                  <strong>{item.name}</strong>
                  <span>{item.score}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </AsyncPageState>
  );
}
