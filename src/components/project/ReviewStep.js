import { Paper, Typography, Divider, Stack } from "@mui/material";

function ReviewStep({ data }) {
  console.log("ReviewStep Rendered");
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Review Project
      </Typography>

      <Stack spacing={2}>
        <Typography>
          <strong>Category:</strong> {data.category}
        </Typography>

        <Divider />

        <Typography>
          <strong>Project Title:</strong> {data.title}
        </Typography>

        <Divider />

        <Typography>
          <strong>Description:</strong> {data.description}
        </Typography>

        <Divider />

        <Typography>
          <strong>Tech Stack:</strong>{" "}
          {data.category === "Other"
            ? data.otherTech
            : data.techStack?.join(", ")}
        </Typography>

        <Divider />

        <Typography>
          <strong>Status:</strong> {data.status}
        </Typography>

        <Divider />

        <Typography>
          <strong>Start Date:</strong> {data.startDate}
        </Typography>

        <Divider />

        <Typography>
          <strong>End Date:</strong> {data.endDate}
        </Typography>

        <Divider />

        <Typography>
          <strong>Repository:</strong> {data.repoLink || "Not Provided"}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default ReviewStep;
