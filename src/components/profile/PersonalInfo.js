import { Paper, Typography, Divider, Grid } from "@mui/material";

function PersonalInfo() {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Personal Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography color="text.secondary">Full Name</Typography>

          <Typography fontWeight="bold">{user.fullName}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">Email</Typography>

          <Typography fontWeight="bold">{user.email}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">Phone</Typography>

          <Typography>{user.phone || "-"}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">University</Typography>

          <Typography>{user.university || "-"}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">Department</Typography>

          <Typography>{user.department || "-"}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">Semester</Typography>

          <Typography>{user.semester || "-"}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 4 }} />
    </Paper>
  );
}

export default PersonalInfo;
