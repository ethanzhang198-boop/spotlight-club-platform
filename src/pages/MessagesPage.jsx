import { AsyncPageState } from "../components/AsyncPageState";
import { PageBanner } from "../components/PageBanner";
import { MessageCard } from "../components/MessageCard";
import { useAppStore } from "../store/useAppStore";

export function MessagesPage() {
  const clubs = useAppStore((state) => state.clubs);
  const applications = useAppStore((state) => state.applications);
  const messages = useAppStore((state) => state.messages);
  const currentCandidate = useAppStore((state) => state.getCurrentCandidate());
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);

  const primaryApplication = applications[0];
  const primaryClub = clubs.find((club) => club.id === primaryApplication?.clubId);

  return (
    <AsyncPageState loading={loading} error={error}>
      <main className="app-page">
        <PageBanner
          eyebrow="Student App / Messages"
          title="进度与消息"
          description="把投递状态、面试提醒和站内消息收束到同一个视图里，让等待过程更清楚，也更安心。"
        />

        <section className="messages-layout">
          <article className="progress-card glass elevated-panel">
            <div className="progress-header">
              <div>
                <h2>我的投递进度</h2>
                <p className="progress-subtitle">
                  把当前申请、下一步动作和流程节点集中展示，减少等待期的信息分散和不确定感。
                </p>
              </div>
              <span className="status-pill">{applications.length} 个社团处理中</span>
            </div>

            {primaryApplication ? (
              <>
                <div className="progress-highlight">
                  <div className="progress-highlight-card current">
                    <span className="mini-kicker">Current Focus</span>
                    <h3>{primaryClub?.name ?? "当前投递社团"}</h3>
                    <p>{primaryClub?.tagline ?? "正在同步社团信息，请稍候。"}</p>
                    <div className="progress-meta">
                      <span>{currentCandidate?.name ?? "你的名片"}</span>
                      <span>匹配度 {primaryClub?.matchScore ?? "--"}%</span>
                    </div>
                  </div>

                  <div className="progress-highlight-card interview">
                    <span className="mini-kicker">Next Action</span>
                    <h3>{primaryApplication.scheduledAt ?? "待安排面试时间"}</h3>
                    <p>{primaryApplication.location ?? "等待面试地点确认"}</p>
                    <div className="status-inline active-status">当前处于邀请面试阶段</div>
                  </div>
                </div>

                <div className="progress-rail">
                  {primaryApplication.timeline.map((step, index) => {
                    const isDone = index < primaryApplication.activeStep;
                    const isActive = index === primaryApplication.activeStep;

                    return (
                      <div
                        key={step}
                        className={`progress-node ${isDone ? "done" : ""} ${
                          isActive ? "active" : "upcoming"
                        }`}
                      >
                        <div className="progress-node-top">
                          <span className="progress-index">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`progress-state ${isDone ? "done" : ""} ${
                              isActive ? "active" : "upcoming"
                            }`}
                          >
                            {isDone ? "已完成" : isActive ? "进行中" : "待触发"}
                          </span>
                        </div>
                        <strong>{step}</strong>
                        <p>
                          {isDone
                            ? "这一阶段已经完成，状态已沉淀到你的申请记录中。"
                            : isActive
                              ? "当前关键节点正在推进，留意消息中心的即时反馈。"
                              : "当上一阶段结束后，这里会自动点亮并给出下一步提醒。"}
                        </p>
                        {index < primaryApplication.timeline.length - 1 ? (
                          <span className="progress-connector" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </article>

          <aside className="message-column">
            {messages.map((message) => (
              <MessageCard key={message.id} message={message} />
            ))}
          </aside>
        </section>
      </main>
    </AsyncPageState>
  );
}
