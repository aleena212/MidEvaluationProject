import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FormTextField({
  name,
  label,
  control,
  errors,
  type = "text",
  disabled = false,
  multiline = false,
  rows = 1,
  placeholder = "",
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          placeholder={placeholder}
          fullWidth
          margin="normal"
          variant="outlined"
          disabled={disabled}
          multiline={multiline}
          rows={rows}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default FormTextField;
