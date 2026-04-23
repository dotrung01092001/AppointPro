import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import TopBar from "./topbar";
import { appConfig } from "../../app/config/app-config";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div
        className="grid"
        style={{ gridTemplateColumns: `${appConfig.sidebarWidth}px 1fr` }}
      >
        <Sidebar />
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}