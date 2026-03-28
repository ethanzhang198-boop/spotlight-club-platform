export function AsyncPageState({ loading, error, children }) {
  if (loading) {
    return (
      <main className="app-page">
        <section className="state-card glass">
          <span className="eyebrow">Loading</span>
          <h2>正在加载页面数据</h2>
          <p>我们正在从 mock API 读取社团、候选人、申请记录和消息数据。</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="app-page">
        <section className="state-card glass">
          <span className="eyebrow">Load Error</span>
          <h2>页面数据加载失败</h2>
          <p>{error}</p>
        </section>
      </main>
    );
  }

  return children;
}
