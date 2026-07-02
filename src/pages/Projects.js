import { Box, Typography, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/common/Layout";
import ProjectsTable from "../components/project/ProjectsTable";
import DeleteDialog from "../components/project/DeleteDialog";

function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedProject, setSelectedProject] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  // Load projects whenever this page opens
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    setProjects(savedProjects);
  };

  return (
    <Layout>
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Projects
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/projects/new")}
        >
          Add Project
        </Button>
      </Box>

      {/* Search */}

      <TextField
        fullWidth
        placeholder="Search by project title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      {/* Table */}

      <ProjectsTable
        projects={projects}
        search={search}
        setSelectedProject={setSelectedProject}
        setDeleteOpen={setDeleteOpen}
      />

      {/* Delete */}

      <DeleteDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        projects={projects}
        setProjects={setProjects}
        selectedProject={selectedProject}
      />
    </Layout>
  );
}

export default Projects;
