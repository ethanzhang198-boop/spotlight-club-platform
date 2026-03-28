import { AsyncPageState } from "../components/AsyncPageState";
import { PageBanner } from "../components/PageBanner";
import { MessageCard } from "../components/MessageCard";
import { useAppStore } from "../store/useAppStore";

export function MessagesPage() {
  const applications = useAppStore((state) => state.applications);
  const messages = useAppStore((state) => state.messages);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);
  const primaryApplication = applications[0];

  return (
    <AsyncPageState loading={loading} error={error}>
      <main className="app-page">
        <PageBanner
          eyebrow="Student App / Messages"
          title="进度与消息"
          description="把所有投递状态、面试邀约和站内信收束到一个地方，减少焦虑感与信息遗漏。"
        />

        <section className="messages-layout">
          <article className="progress-card glass">
            <div className="section-mini-head">
              <h2>我的投递进度</h2>
              <span className="status-pill">2 个社团处理中</span>
            </div>
            <div className="progress-steps">
              {(primaryApplication?.timeline ?? []).map((step, index) => (
                <div
                  key={step}
                  className={`step ${index < primaryApplication.activeStep ? "done" : ""} ${
                    index === primaryApplication.activeStep ? "active" : ""
                  }`}
                >
                  <strong>{step}</strong>
                  <span>{index === primaryApplication.activeStep ? "当前进行中" : "流程节点"}</span>
                </div>
              ))}
            </div>
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
