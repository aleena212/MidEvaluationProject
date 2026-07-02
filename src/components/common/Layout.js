import { Box } from "@mui/material";
import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BreadcrumbsComponent from "./Breadcrumbs";

const drawerWidth = 240;
const collapsedWidth = 70;

function Layout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar open={open} setOpen={setOpen} />

      <Sidebar open={open} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: "64px",
          ml: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
          p: 4,
          minHeight: "100vh",
          backgroundColor: "#F8F5FF",
          transition: "all 0.3s ease",
        }}
      >
        {/* Breadcrumb Navigation */}
        <BreadcrumbsComponent />

        {/* Page Content */}
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
