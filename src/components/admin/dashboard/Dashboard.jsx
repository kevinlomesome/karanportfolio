import { Outlet } from "react-router-dom";

import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">

      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-700">
        <Sidebar />
      </aside>

      {/* Right Side */}
      <div className="flex flex-1 flex-col overflow-hidden">

        <Topbar />

        <main className="flex-1 overflow-y-auto bg-slate-900 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default Dashboard;