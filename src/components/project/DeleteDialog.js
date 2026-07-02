import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function DeleteDialog({
  open,
  setOpen,
  projects,
  setProjects,
  selectedProject,
}) {
  const handleDelete = () => {
    setProjects(
      projects.filter((project) => project.id !== selectedProject.id),
    );

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle color="error">Delete Project</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete{" "}
          <strong>{selectedProject?.name}</strong>?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>

        <Button color="error" variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
