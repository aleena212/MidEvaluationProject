import { Box, Typography, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import Layout from "../components/common/Layout";
import ProjectsTable from "../components/project/ProjectsTable";
import ProjectForm from "../components/project/ProjectForm";
import DeleteDialog from "../components/project/DeleteDialog";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const [viewMode, setViewMode] = useState(false);

  // We'll use this later
  const [deleteOpen, setDeleteOpen] = useState(false);

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
          onClick={() => {
            setSelectedProject(null);
            setEditMode(false);
            setViewMode(false);
            setOpen(true);
          }}
        >
          Add Project
        </Button>
      </Box>

      {/* Search */}
      <TextField
        fullWidth
        label="Search Project"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      {/* Table */}
      <ProjectsTable
        projects={projects}
        search={search}
        setOpen={setOpen}
        setSelectedProject={setSelectedProject}
        setEditMode={setEditMode}
        setViewMode={setViewMode}
        setDeleteOpen={setDeleteOpen}
      />

      {/* Form */}
      <ProjectForm
        open={open}
        setOpen={setOpen}
        projects={projects}
        setProjects={setProjects}
        selectedProject={selectedProject}
        editMode={editMode}
        viewMode={viewMode}
      />

      {
        <DeleteDialog
          open={deleteOpen}
          setOpen={setDeleteOpen}
          projects={projects}
          setProjects={setProjects}
          selectedProject={selectedProject}
        />
      }
    </Layout>
  );
}

export default Projects;
