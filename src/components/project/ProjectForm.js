import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import projectValidation from "../../validation/projectValidation";

import ProjectFields from "./ProjectFields";

function ProjectForm({
  open,
  setOpen,
  projects,
  setProjects,
  selectedProject,
  editMode,
  viewMode,
}) {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectValidation),

    defaultValues: {
      name: "",
      description: "",
      category: "",
      status: "",
      techStack: [],
      otherTech: "",
      startDate: "",
      projectFile: null,
    },
  });

  // Watch selected category
  const selectedCategory = watch("category");

  // Load data while editing/viewing
  useEffect(() => {
    if (selectedProject) {
      reset(selectedProject);
    } else {
      reset({
        name: "",
        description: "",
        category: "",
        status: "",
        techStack: [],
        otherTech: "",
        startDate: "",
        projectFile: null,
      });
    }
  }, [selectedProject, reset]);

  const onSubmit = (data) => {
    const project = {
      id: editMode ? selectedProject.id : Date.now(),
      ...data,
    };

    if (editMode) {
      setProjects(
        projects.map((item) =>
          item.id === selectedProject.id ? project : item,
        ),
      );
    } else {
      setProjects([...projects, project]);
    }

    reset();

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        reset();
      }}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          bgcolor: "#F3E5F5",
          color: "#8E44AD",
          fontWeight: "bold",
          fontSize: 28,
          py: 2,
        }}
      >
        {viewMode
          ? "👁 View Project"
          : editMode
            ? "✏ Edit Project"
            : "📁 Add New Project"}
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ p: 4 }}>
          <ProjectFields
            control={control}
            errors={errors}
            disabled={viewMode}
            selectedCategory={selectedCategory}
          />
        </DialogContent>

        <DialogActions
          sx={{
            px: 4,
            pb: 3,
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpen(false);
              reset();
            }}
            sx={{ borderRadius: 2 }}
          >
            Cancel
          </Button>

          {!viewMode && (
            <Button
              type="submit"
              variant="contained"
              sx={{
                px: 4,
                borderRadius: 2,
                backgroundColor: "#8E44AD",
                "&:hover": {
                  backgroundColor: "#6A1B9A",
                },
              }}
            >
              {editMode ? "Update" : "Save"}
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ProjectForm;
