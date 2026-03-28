import { Link } from "react-router-dom";
import { AsyncPageState } from "../components/AsyncPageState";
import { useAppStore } from "../store/useAppStore";

export function HomePage() {
  const navigation = useAppStore((state) => state.navigation);
  const landingModules = useAppStore((state) => state.landingModules);
  const loading = useAppStore((state) => state.loading);
  const error = useAppStore((state) => state.error);

  return (
    <AsyncPageState loading={loading} error={error}>
      <main className="landing-main">
        <section className="hero-block glass">
          <div className="hero-copy">
            <span className="eyebrow">AI 兴趣图谱 × 高校社团招新</span>
            <h1>聚光灯</h1>
            <p className="hero-text">
              把“百团大战”的混乱变成高质量匹配体验。新生像聊天一样找到适合自己的社团，社长用可视化后台高效完成筛选、排期和录取。
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/discover">
                进入学生端
              </Link>
              <Link className="button button-secondary" to="/recruiter-dashboard">
                查看 B 端后台
              </Link>
            </div>
          </div>
          <div className="hero-preview">
            <div className="metric-card soft-orange">
              <span>匹配成功率预估</span>
              <strong>92%</strong>
            </div>
            <div className="metric-card">
              <span>数字名片完整率</span>
              <strong>88%</strong>
            </div>
            <div className="metric-card soft-pink">
              <span>推荐社团</span>
              <strong>星空摄影社 / 新媒体中心 / 纪录片工作坊</strong>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <span className="section-index">01</span>
            <div>
              <h2>页面地图</h2>
              <p>这版已经升级成带状态层的 React 路由骨架，每个核心链路都能继续接真实接口。</p>
            </div>
          </div>
          <div className="portal-grid">
            {navigation
              .filter((item) => item.to !== "/")
              .map((card) => (
                <Link key={card.to} className="portal-card glass" to={card.to}>
                  <span className="portal-kicker">{card.to === "/recruiter-dashboard" ? "社团端" : "学生端"}</span>
                  <h3>{card.label}</h3>
                  <p>点击进入该业务页面，继续承接真实组件和数据流。</p>
                </Link>
              ))}
            <div className="portal-card glass accent-panel">
              <span className="portal-kicker">产品定位</span>
              <h3>一站式精准匹配平台</h3>
              <p>核心价值是帮助新生“秒懂适配社团”，帮助社长“减负高效招新”。</p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <span className="section-index">02</span>
            <div>
              <h2>核心模块总览</h2>
              <p>页面已经从静态原型迁移到领域组件、mock API 和异步状态流。</p>
            </div>
          </div>
          <div className="feature-grid">
            {landingModules.map((feature) => (
              <article key={feature.title} className="feature-card glass">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </AsyncPageState>
  );
}
