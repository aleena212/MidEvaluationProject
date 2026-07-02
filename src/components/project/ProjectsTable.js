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
  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.name?.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
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
          size="small"
          color={
            params.value === "Completed"
              ? "success"
              : params.value === "Pending"
                ? "warning"
                : "primary"
          }
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      sortable: false,
      filterable: false,
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
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={filteredProjects}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        localeText={{
          noRowsLabel: "No projects found",
        }}
      />
    </div>
  );
}

export default ProjectsTable;
