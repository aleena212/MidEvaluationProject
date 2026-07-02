import { Paper, Avatar, Typography, Box } from "@mui/material";

function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        p: 4,
        textAlign: "center",
      }}
    >
      <Avatar
        sx={{
          width: 120,
          height: 120,
          mx: "auto",
          bgcolor: "#8E44AD",
          fontSize: 45,
          mb: 2,
        }}
      >
        {user.fullName?.charAt(0).toUpperCase() || "A"}
      </Avatar>

      <Typography variant="h4" fontWeight="bold">
        {user.fullName || "User"}
      </Typography>

      <Typography color="text.secondary">{user.email}</Typography>
    </Paper>
  );
}

export default ProfileCard;
