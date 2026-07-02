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
    const updatedProjects = projects.filter(
      (project) => project.id !== selectedProject.id,
    );

    // Update React State
    setProjects(updatedProjects);

    // Update Local Storage
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
      <DialogTitle color="error">Delete Project</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete{" "}
          <strong>{selectedProject?.title}</strong>?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>

        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
