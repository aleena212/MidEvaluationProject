import { Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink, useLocation } from "react-router-dom";

function BreadcrumbsComponent() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{
        mb: 3,
        fontSize: 16,
      }}
    >
      <Link
        component={RouterLink}
        to="/dashboard"
        underline="hover"
        color="inherit"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <HomeIcon fontSize="small" />
        Dashboard
      </Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        const last = index === pathnames.length - 1;

        const pageName = value.charAt(0).toUpperCase() + value.slice(1);

        return last ? (
          <Typography key={to} color="primary" fontWeight="bold">
            {pageName}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            to={to}
            underline="hover"
            color="inherit"
          >
            {pageName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;
