import { Box, Button, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Controller } from "react-hook-form";

function FormFile({
  name,
  control,
  errors,
  label,
  accept = ".pdf,.doc,.docx,.ppt,.pptx,.zip,.rar",
  disabled = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <Box mt={2}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>{label}</Typography>

          <Button
            variant="outlined"
            component="label"
            startIcon={<UploadFileIcon />}
            disabled={disabled}
          >
            Choose File
            <input
              hidden
              type="file"
              accept={accept}
              onChange={(e) => field.onChange(e.target.files)}
            />
          </Button>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {field.value?.[0]?.name || "No file selected"}
          </Typography>

          {errors[name] && (
            <Typography color="error" variant="body2">
              {errors[name].message}
            </Typography>
          )}
        </Box>
      )}
    />
  );
}

export default FormFile;
