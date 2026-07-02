import { Box, Paper, Typography, Chip, Stack, Button } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "../components/common/Layout";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    const selectedProject = projects.find((item) => item.id === Number(id));

    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <Typography variant="h5">Project Not Found</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={3}>
          {project.title}
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography fontWeight="bold">Category</Typography>

            <Typography>{project.category}</Typography>
          </Box>

          <Box>
            <Typography fontWeight="bold">Description</Typography>

            <Typography>{project.description}</Typography>
          </Box>

          <Box>
            <Typography fontWeight="bold">Status</Typography>

            <Chip
              label={project.status}
              color={
                project.status === "Completed"
                  ? "success"
                  : project.status === "On Hold"
                    ? "warning"
                    : "primary"
              }
            />
          </Box>

          <Box>
            <Typography fontWeight="bold">Tech Stack</Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.category === "Other" ? (
                <Chip label={project.otherTech} />
              ) : (
                project.techStack?.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))
              )}
            </Stack>
          </Box>

          <Box>
            <Typography fontWeight="bold">Start Date</Typography>

            <Typography>{project.startDate}</Typography>
          </Box>

          <Box>
            <Typography fontWeight="bold">End Date</Typography>

            <Typography>{project.endDate}</Typography>
          </Box>

          {project.repoLink && (
            <Box>
              <Typography fontWeight="bold">Repository / Demo</Typography>

              <Typography
                component="a"
                href={project.repoLink}
                target="_blank"
                sx={{
                  color: "primary.main",
                }}
              >
                {project.repoLink}
              </Typography>
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              width: 150,
            }}
            onClick={() => navigate("/projects")}
          >
            Back
          </Button>
        </Stack>
      </Paper>
    </Layout>
  );
}

export default ProjectDetails;
