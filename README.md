# 聚光灯｜React 工程化骨架

项目已经从静态多页面原型升级为 `React + Vite + React Router + Zustand` 骨架。

## 当前结构

- `index.html`：Vite 入口 HTML
- `package.json`：依赖与脚本
- `vite.config.js`：Vite 配置
- `src/main.jsx`：应用入口
- `src/App.jsx`：路由注册
- `src/components/`：业务组件与布局组件
- `src/pages/`：页面级组件
- `src/data/domainData.js`：领域数据模型
- `src/store/useAppStore.js`：Zustand 状态层
- `src/styles.css`：共享样式

## 已完成的工程化升级

- 拆出领域组件
  - `DiscoverClubCard`
  - `ChatThread`
  - `ProfileCard`
  - `MessageCard`
  - `CandidateCard`
- 建立领域模型
  - `clubs`
  - `applications`
  - `candidates`
  - `messages`
- 接入 Zustand
  - AI 建档进度
  - 当前选中的社团
  - 报名弹层开关
  - 当前候选人与名片草稿

## 启动方式

当前环境里没有 `Node/npm`，所以我还没法替你实际安装依赖并启动。

等你本地装好 Node 后，进入项目目录执行：

```bash
npm install
npm run dev
```

## 建议下一步

- 把领域组件继续拆成更细粒度的 UI 组件
- 接入 React Query 管理异步请求
- 给 `domainData.js` 对应的模型增加接口类型约束
- 把 Zustand store 按学生端 / 社团端拆分成多个 slice
