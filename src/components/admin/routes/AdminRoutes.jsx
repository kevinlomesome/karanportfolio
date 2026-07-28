import { Route } from "react-router-dom";

import AdminLogin from "../AdminLogin";
import Dashboard from "../dashboard/Dashboard";
import DashboardHome from "../dashboard/DashboardHome";

import ProjectsAdmin from "../pages/ProjectsAdmin";
import SkillsAdmin from "../pages/SkillsAdmin";
import ExperienceAdmin from "../pages/ExperienceAdmin";
import MessageAdmin from "../pages/MessageAdmin";
import SettingsAdmin from "../pages/SettingsAdmin";

const AdminRoutes = (
  <>
    <Route path="/admin" element={<AdminLogin />} />

    <Route path="/admin/dashboard" element={<Dashboard />}>
      <Route index element={<DashboardHome />} />
      <Route path="projects" element={<ProjectsAdmin />} />
      <Route path="skills" element={<SkillsAdmin />} />
      <Route path="experience" element={<ExperienceAdmin />} />
      <Route path="messages" element={<MessageAdmin />} />
      <Route path="settings" element={<SettingsAdmin />} />
    </Route>
  </>
);

export default AdminRoutes;