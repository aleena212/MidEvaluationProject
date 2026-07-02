import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import AddProject from "../pages/AddProject";
import EditProject from "../pages/EditProject";
import ProjectDetails from "../pages/ProjectDetails";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Add Project */}
        <Route path="/projects/new" element={<AddProject />} />

        {/* Edit Project */}
        <Route path="/projects/edit/:id" element={<EditProject />} />

        {/* Project Details */}
        <Route path="/project-details/:id" element={<ProjectDetails />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
