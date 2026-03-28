import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navigation } from "../data/domainData";
import { useAppStore } from "../store/useAppStore";

export function AppLayout() {
  const initializeApp = useAppStore((state) => state.initializeApp);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  return (
    <div className="site-shell">
      <header className="top-nav glass">
        <NavLink className="brand" to="/">
          <span className="brand-mark">聚</span>
          <span>聚光灯 Spotlight</span>
        </NavLink>
        <nav className="nav-links">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
