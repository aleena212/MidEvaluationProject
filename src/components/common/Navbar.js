import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const collapsedWidth = 70;

function Navbar({ open, setOpen }) {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor: "#8E44AD",
        width: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
        ml: `${open ? drawerWidth : collapsedWidth}px`,
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setOpen(!open)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          Project Showcase 💜
        </Typography>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            ml: 2,
          }}
        >
          <Typography>Aleena</Typography>

          <Avatar
            sx={{
              bgcolor: "#D291FF",
              fontWeight: "bold",
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;