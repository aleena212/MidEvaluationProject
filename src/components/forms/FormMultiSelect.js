import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  FormHelperText,
} from "@mui/material";

import { Controller } from "react-hook-form";

function FormMultiSelect({
  name,
  label,
  control,
  errors,
  options,
  disabled = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <FormControl fullWidth margin="normal" error={!!errors[name]}>
          <InputLabel>{label}</InputLabel>

          <Select
            {...field}
            multiple
            label={label}
            disabled={disabled}
            renderValue={(selected) => selected.join(", ")}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={field.value.includes(option)} />

                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default FormMultiSelect;
