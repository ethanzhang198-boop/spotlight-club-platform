export const clubs = [
  {
    id: "astro-photo",
    name: "星空摄影社",
    tagline: "把校园夜色、晚风和青春都拍进作品里",
    description:
      "零基础友好，适合喜欢摄影、剪辑、内容表达的新生。社内提供外拍带队、器材借用、后期工作坊，也支持转入新媒体内容岗位。",
    vibeTags: ["📸 零基础友好", "🌌 夜景爱好者", "☕ i 人舒适区", "🎬 新媒体友好"],
    matchScore: 96,
    category: "内容创作",
    recommendedRoles: ["拍摄组", "新媒体内容组"],
    activities: [
      "每周一次主题外拍",
      "每月一次作品复盘",
      "新生成长工作坊"
    ],
    timeline: [
      { date: "3 月 27 日", title: "草坪作品展 + 路演咨询" },
      { date: "3 月 29 日", title: "报名截止" },
      { date: "3 月 30 日", title: "线下面试与自由外拍体验" }
    ],
    reviews: [
      {
        title: "部长人怎么样？",
        content: "特别愿意带新人，不会一上来要求设备和基础，反馈也很细。"
      },
      {
        title: "活动会不会太多？",
        content: "旺季会忙一点，但成长特别快，很容易出第一套作品。"
      }
    ],
    matchReasons: [
      "你的摄影与剪辑标签与社团岗位高度重合。",
      "偏 i 人但耐心稳定，适合长期创作型团队。",
      "社团支持作品沉淀，对成长感需求匹配度高。"
    ],
    feedTone: "soft-blue",
    preview:
      "夜景摄影、外拍带队、后期入门，适合想把兴趣沉淀成作品的新生。"
  },
  {
    id: "film-club",
    name: "观影社",
    tagline: "每周一次主题放映，慢热的人也能找到舒服的交流方式",
    description: "偏轻社交、低压力交流，适合喜欢影视和安静表达的同学。",
    vibeTags: ["☕ i 人舒适区", "🎞 观影讨论", "🛋 低压力社交"],
    matchScore: 88,
    category: "兴趣社交",
    recommendedRoles: ["策展组", "活动协助"],
    activities: ["主题放映", "片后闲聊", "电影节特别场"],
    timeline: [],
    reviews: [],
    matchReasons: ["适合慢热交流。"],
    feedTone: "soft-cream",
    preview: "每周主题放映，适合慢热型交流。"
  },
  {
    id: "media-center",
    name: "新媒体中心",
    tagline: "招募剪辑、写作、设计和运营，把校园故事做成内容",
    description: "内容制作 + 校园运营，作品导向非常明显。",
    vibeTags: ["🎬 内容创作", "📝 文案运营", "🎨 视觉设计"],
    matchScore: 91,
    category: "内容创作",
    recommendedRoles: ["剪辑组", "文案组", "运营组"],
    activities: ["选题共创", "推文制作", "大型活动宣传"],
    timeline: [],
    reviews: [],
    matchReasons: ["摄影与剪辑标签适配度高。"],
    feedTone: "dark-panel",
    preview: "招剪辑、写作、海报设计和运营。"
  }
];

export const candidates = [
  {
    id: "candidate-linxiaoman",
    name: "林小满",
    college: "计算机学院",
    major: "软件工程",
    grade: "2026级",
    mbti: "INFP",
    tags: ["摄影", "视频剪辑", "靠谱执行", "内容耐力"],
    quote: "想找一个有作品、有伙伴、有成长感的社团。",
    strengths: {
      creativity: 76,
      communication: 64,
      execution: 90,
      collaboration: 58
    },
    targetClubIds: ["astro-photo", "media-center"]
  },
  {
    id: "candidate-chenyuze",
    name: "陈宇泽",
    college: "新闻学院",
    major: "传播学",
    grade: "2026级",
    mbti: "ENFJ",
    tags: ["文案", "活动执行"],
    quote: "希望加入一个输出很强的团队。",
    strengths: {
      creativity: 70,
      communication: 88,
      execution: 72,
      collaboration: 84
    },
    targetClubIds: ["media-center"]
  },
  {
    id: "candidate-zhaoyinuo",
    name: "赵一诺",
    college: "播音主持学院",
    major: "主持艺术",
    grade: "2025级",
    mbti: "ENFP",
    tags: ["主持", "沟通", "镜头感强"],
    quote: "希望在舞台和活动中获得更多锻炼。",
    strengths: {
      creativity: 74,
      communication: 92,
      execution: 66,
      collaboration: 78
    },
    targetClubIds: ["astro-photo"]
  }
];

export const applications = [
  {
    id: "application-astro-photo-lin",
    clubId: "astro-photo",
    candidateId: "candidate-linxiaoman",
    status: "interview",
    timeline: ["已投递", "评估中", "邀请面试", "录取"],
    activeStep: 2,
    scheduledAt: "周六 14:00",
    location: "图书馆南草坪"
  },
  {
    id: "application-media-center-lin",
    clubId: "media-center",
    candidateId: "candidate-linxiaoman",
    status: "reviewing",
    timeline: ["已投递", "评估中", "邀请面试", "录取"],
    activeStep: 1,
    scheduledAt: null,
    location: null
  }
];

export const messages = [
  {
    id: "message-astro-interview",
    applicationId: "application-astro-photo-lin",
    type: "interview",
    title: "星空摄影社",
    kicker: "Interview Invitation",
    body: "我们想邀请你参加周六 14:00 的外拍面试，地点在图书馆南草坪，记得带上你最近喜欢的一张照片。",
    highlight: true
  },
  {
    id: "message-media-review",
    applicationId: "application-media-center-lin",
    type: "system",
    title: "新媒体中心",
    kicker: "System Update",
    body: "你的作品集已进入初筛，预计 24 小时内会给出下一步反馈。",
    highlight: false
  },
  {
    id: "message-reminder-debate",
    applicationId: null,
    type: "reminder",
    title: "本周待办",
    kicker: "Reminder",
    body: "辩论队报名将在周五 24:00 截止，如果你也感兴趣，建议今天完成 AI 建档后再投递。",
    highlight: false
  }
];

export const aiScript = {
  identity: {
    user: "我是计算机学院软件工程专业的大一新生。",
    ai: "收到！已经帮你锁定基础身份标签。那你课余更偏向拍照、逛展、运动，还是游戏追番？",
    progress: 48,
    meta: "计算机学院 · 软件工程 · 2026级",
    tags: ["计算机", "软件工程", "大一新生"],
    quote: "正在根据你的校园身份，寻找合适的兴趣入口。",
    hint: "Step 2 / 4：继续挖掘兴趣偏好。"
  },
  interest: {
    user: "我喜欢摄影和探店，也会一点视频剪辑，想做有作品感的事情。",
    ai: "哇，摄影和剪辑的组合很亮眼。最后再告诉我一下你的性格和团队风格，我就能更精准推荐啦。",
    progress: 68,
    tags: ["计算机", "摄影", "探店", "视频剪辑"],
    quote: "想找一个能把兴趣做成作品的表达型社团。",
    hint: "Step 3 / 4：补充性格与技能画像。"
  },
  personality: {
    user: "我偏 i 人，但熟悉以后挺能聊，做事耐心，也愿意熬夜赶内容。",
    ai: "明白了，你属于温和但稳定输出型选手。现在我已经能为你生成完整数字名片了。",
    progress: 88,
    tags: ["INFP", "摄影", "视频剪辑", "靠谱执行", "内容耐力"],
    quote: "想找一个有作品、有伙伴、有成长感的社团。",
    hint: "Step 4 / 4：可以生成名片并查看最终推荐。"
  },
  finalize: {
    user: "生成我的数字名片和推荐结果。",
    ai: "完成啦。你的数字名片已经整理好了，现在可以直接进入社团详情页一键报名。",
    progress: 100,
    tags: ["INFP", "摄影", "视频剪辑", "靠谱执行", "内容耐力"],
    quote: "想找一个有作品、有伙伴、有成长感的社团。",
    hint: "名片已生成：现在可以查看社团详情并投递。"
  }
};

export const navigation = [
  { to: "/", label: "总览" },
  { to: "/discover", label: "发现" },
  { to: "/ai-profile", label: "AI 助手" },
  { to: "/club-detail", label: "社团详情" },
  { to: "/messages", label: "进度消息" },
  { to: "/recruiter-dashboard", label: "招新后台" }
];

export const landingModules = [
  {
    title: "🤖 AI 迎新助手",
    description: "4 步对话式建档，从身份、兴趣到性格、技能，生成可投递的数字名片。"
  },
  {
    title: "🏫 社团全景广场",
    description: "内容社区式逛社团体验，让新生先感受氛围，再做选择。"
  },
  {
    title: "⚡ 极简报名中心",
    description: "一键投递替代重复表单，进度和消息同步回流到个人中心。"
  },
  {
    title: "💼 招新指挥中心",
    description: "拖拽式候选人看板、可视化排期、AI 排序与日报一屏整合。"
  }
];
