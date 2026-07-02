import { Stack } from "@mui/material";

import FormSelect from "../forms/FormSelect";
import FormTextField from "../forms/FormTextField";

function StepOne({ control, errors }) {
  return (
    <Stack spacing={3}>
      {/* Category */}

      <FormSelect
        name="category"
        label="Category"
        control={control}
        errors={errors}
        options={[
          {
            value: "Web Development",
            label: "Web Development",
          },
          {
            value: "Mobile App",
            label: "Mobile App",
          },
          {
            value: "UI/UX Design",
            label: "UI/UX Design",
          },
          {
            value: "Data Science",
            label: "Data Science",
          },
          {
            value: "Other",
            label: "Other",
          },
        ]}
      />

      {/* Project Title */}

      <FormTextField
        name="title"
        label="Project Title"
        control={control}
        errors={errors}
      />

      {/* Short Description */}

      <FormTextField
        name="description"
        label="Short Description"
        control={control}
        errors={errors}
        multiline
        rows={4}
      />
    </Stack>
  );
}

export default StepOne;
