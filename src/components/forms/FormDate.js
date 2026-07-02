import { Box, Typography, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormDate({ name, label, control, errors, disabled = false }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Box mt={1}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 500,
            }}
          >
            {label}
          </Typography>

          <TextField
            {...field}
            type="date"
            fullWidth
            disabled={disabled}
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        </Box>
      )}
    />
  );
}

export default FormDate;
