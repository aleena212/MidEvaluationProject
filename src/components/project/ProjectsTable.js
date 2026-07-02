import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Chip } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";

function ProjectsTable({
  projects,
  search,
  setSelectedProject,
  setDeleteOpen,
}) {
  const navigate = useNavigate();

  // Search by Project Title
  const filteredProjects = projects.filter((project) =>
    project.title?.toLowerCase().includes(search.toLowerCase().trim()),
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Project Title",
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
              : params.value === "On Hold"
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
            onClick={() => navigate(`/project-details/${params.row.id}`)}
          >
            <VisibilityIcon />
          </IconButton>

          {/* Edit */}

          <IconButton
            color="success"
            onClick={() => navigate(`/projects/edit/${params.row.id}`)}
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
        height: 520,
        width: "100%",
      }}
    >
      <DataGrid
        rows={filteredProjects}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 5,
            },
          },
        }}
        localeText={{
          noRowsLabel: "No Projects Found",
        }}
      />
    </div>
  );
}

export default ProjectsTable;
