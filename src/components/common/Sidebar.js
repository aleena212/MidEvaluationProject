import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 70;

function Sidebar({ open }) {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      text: "Projects",
      icon: <FolderIcon />,
      path: "/projects",
    },
    {
      text: "Profile",
      icon: <PersonIcon />,
      path: "/profile",
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      path: "/",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: "0.3s",
          overflowX: "hidden",
          boxSizing: "border-box",
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
        },
      }}
    >
      <Toolbar />

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <Tooltip
            key={item.text}
            title={!open ? item.text : ""}
            placement="right"
          >
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                mx: 1,
                my: 1,
                borderRadius: 2,

                justifyContent: open ? "initial" : "center",

                "&.Mui-selected": {
                  backgroundColor: "#EDE7F6",
                  color: "#8E44AD",
                },

                "&:hover": {
                  backgroundColor: "#F5F0FF",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 0,
                  justifyContent: "center",
                  color: location.pathname === item.path ? "#8E44AD" : "#666",
                }}
              >
                {item.icon}
              </ListItemIcon>

              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
