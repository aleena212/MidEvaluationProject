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
          width: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
          mt: "64px",
          ml: 0,

          pl: 1,
          pr: 2,
          py: 2,
          minHeight: "100vh",
          backgroundColor: "#F8F5FF",

          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Breadcrumb */}
        <BreadcrumbsComponent />

        {/* Page Content */}
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
