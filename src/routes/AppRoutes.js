import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import AddProject from "../pages/AddProject";
import ProjectDetails from "../pages/ProjectDetails";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/add-project" element={<AddProject />} />

        <Route path="/project-details" element={<ProjectDetails />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
