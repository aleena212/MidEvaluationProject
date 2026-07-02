import { Box, Button, Paper, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import projectValidation from "../../validation/projectValidation";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function EditProjectForm({ project }) {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectValidation),

    defaultValues: {
      category: "",
      title: "",
      description: "",
      techStack: [],
      otherTech: "",
      status: "",
      startDate: "",
      endDate: "",
      repoLink: "",
    },
  });

  const selectedCategory = watch("category");

  useEffect(() => {
    if (project) {
      reset({
        category: project.category || "",
        title: project.title || "",
        description: project.description || "",
        techStack: project.techStack || [],
        otherTech: project.otherTech || "",
        status: project.status || "",
        startDate: project.startDate || "",
        endDate: project.endDate || "",
        repoLink: project.repoLink || "",
      });
    }
  }, [project, reset]);

  const onSubmit = (data) => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    const updatedProjects = projects.map((item) =>
      item.id === project.id
        ? {
            ...item,
            ...data,
          }
        : item,
    );

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    alert("Project Updated Successfully!");

    navigate("/projects");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <StepOne control={control} errors={errors} />

          <StepTwo
            control={control}
            errors={errors}
            selectedCategory={selectedCategory}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button variant="outlined" onClick={() => navigate("/projects")}>
              Cancel
            </Button>

            <Button type="submit" variant="contained">
              Update Project
            </Button>
          </Box>
        </Stack>
      </form>
    </Paper>
  );
}

export default EditProjectForm;
