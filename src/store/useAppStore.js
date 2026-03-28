import { create } from "zustand";
import { fetchAiScript, fetchBootstrapData } from "../api/mockApi";

const initialThread = [
  {
    role: "ai",
    text: "哈喽！欢迎来到校园社团元宇宙，我是小聚。先告诉我你的学院、专业和年级吧。"
  }
];

export const useAppStore = create((set, get) => ({
  clubs: [],
  candidates: [],
  applications: [],
  messages: [],
  navigation: [],
  landingModules: [],
  loading: true,
  initialized: false,
  error: null,
  selectedClubId: "astro-photo",
  applyModalOpen: false,
  aiUsedSteps: [],
  aiHint: "Step 1 / 4：建立身份标签。",
  aiThread: initialThread,
  currentCandidateId: "candidate-linxiaoman",
  profileDraft: {
    progress: 28,
    meta: "待完善学院 / 专业 / 年级信息",
    tags: ["等待生成"],
    quote: "先和 AI 聊几句，我会把你的闪光点慢慢拼出来。",
    matches: [{ name: "等待生成推荐", score: "--" }]
  },
  aiScriptMap: {},
  initializeApp: async () => {
    const { initialized } = get();
    if (initialized) return;

    set({ loading: true, error: null });

    try {
      const [bootstrap, scriptMap] = await Promise.all([fetchBootstrapData(), fetchAiScript()]);

      set({
        ...bootstrap,
        aiScriptMap: scriptMap,
        selectedClubId: bootstrap.clubs[0]?.id ?? null,
        currentCandidateId: bootstrap.candidates[0]?.id ?? null,
        loading: false,
        initialized: true
      });
    } catch (error) {
      set({
        loading: false,
        error: error instanceof Error ? error.message : "加载数据失败"
      });
    }
  },
  openApplyModal: () => set({ applyModalOpen: true }),
  closeApplyModal: () => set({ applyModalOpen: false }),
  selectClub: (clubId) => set({ selectedClubId: clubId }),
  applyAiStep: (stepKey) => {
    const { aiUsedSteps, clubs: storeClubs, aiScriptMap } = get();
    if (aiUsedSteps.includes(stepKey)) return;

    const next = aiScriptMap[stepKey];
    if (!next) return;

    const topMatches =
      stepKey === "identity"
        ? [{ name: "等待生成推荐", score: "--" }]
        : storeClubs
            .slice()
            .sort((a, b) => b.matchScore - a.matchScore)
            .slice(0, stepKey === "interest" ? 2 : 3)
            .map((club) => ({ name: club.name, score: `${club.matchScore}%` }));

    set((state) => ({
      aiUsedSteps: [...state.aiUsedSteps, stepKey],
      aiHint: next.hint,
      aiThread: [...state.aiThread, { role: "user", text: next.user }, { role: "ai", text: next.ai }],
      profileDraft: {
        ...state.profileDraft,
        progress: next.progress,
        meta: next.meta ?? state.profileDraft.meta,
        tags: next.tags,
        quote: next.quote,
        matches: topMatches
      }
    }));
  },
  getSelectedClub: () => {
    const { clubs: storeClubs, selectedClubId } = get();
    return storeClubs.find((club) => club.id === selectedClubId) ?? storeClubs[0] ?? null;
  },
  getCurrentCandidate: () => {
    const { candidates: storeCandidates, currentCandidateId } = get();
    return storeCandidates.find((candidate) => candidate.id === currentCandidateId) ?? storeCandidates[0] ?? null;
  }
}));
