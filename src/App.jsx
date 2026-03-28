import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./pages/HomePage";
import { DiscoverPage } from "./pages/DiscoverPage";
import { AiProfilePage } from "./pages/AiProfilePage";
import { ClubDetailPage } from "./pages/ClubDetailPage";
import { MessagesPage } from "./pages/MessagesPage";
import { RecruiterDashboardPage } from "./pages/RecruiterDashboardPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/ai-profile" element={<AiProfilePage />} />
        <Route path="/club-detail" element={<ClubDetailPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
