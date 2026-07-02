import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Chip } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ProjectsTable({
  projects,
  search,
  setOpen,
  setSelectedProject,
  setEditMode,
  setViewMode,
  setDeleteOpen,
}) {
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "name",
      headerName: "Project Name",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Completed"
              ? "success"
              : params.value === "Pending"
                ? "warning"
                : "primary"
          }
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      sortable: false,
      renderCell: (params) => (
        <>
          {/* View */}
          <IconButton
            color="primary"
            onClick={() => {
              setSelectedProject(params.row);
              setViewMode(true);
              setEditMode(false);
              setOpen(true);
            }}
          >
            <VisibilityIcon />
          </IconButton>

          {/* Edit */}
          <IconButton
            color="success"
            onClick={() => {
              setSelectedProject(params.row);
              setEditMode(true);
              setViewMode(false);
              setOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>

          {/* Delete */}
          <IconButton
            color="error"
            onClick={() => {
              setSelectedProject(params.row);
              setDeleteOpen(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        height: 500,
        width: "100%",
      }}
    >
      <DataGrid
        rows={filteredProjects}
        columns={columns}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default ProjectsTable;
