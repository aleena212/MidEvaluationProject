import { Stack, Box } from "@mui/material";

import FormTextField from "../forms/FormTextField";
import FormSelect from "../forms/FormSelect";
import FormMultiSelect from "../forms/FormMultiSelect";
import FormDate from "../forms/FormDate";
import FormFile from "../forms/FormFile";

function ProjectFields({
  control,
  errors,
  disabled = false,
  selectedCategory,
}) {
  const techStackOptions = {
    Web: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],

    Mobile: ["React Native", "Flutter", "Firebase", "Expo", "Android", "iOS"],

    "UI/UX": ["Figma", "Adobe XD", "Sketch", "ProtoPie", "Framer"],

    "Data Science": [
      "Python",
      "R",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Jupyter",
    ],
  };

  return (
    <Stack spacing={3} sx={{ mt: 1 }}>
      <FormTextField
        name="name"
        label="Project Name"
        control={control}
        errors={errors}
        disabled={disabled}
      />

      <FormTextField
        name="description"
        label="Description"
        control={control}
        errors={errors}
        multiline
        rows={4}
        disabled={disabled}
      />

      <Box display="flex" gap={2}>
        <Box flex={1}>
          <FormSelect
            name="category"
            label="Category"
            control={control}
            errors={errors}
            disabled={disabled}
            options={[
              { value: "Web", label: "Web Development" },
              { value: "Mobile", label: "Mobile App" },
              { value: "UI/UX", label: "UI/UX Design" },
              { value: "Data Science", label: "Data Science" },
              { value: "Other", label: "Other" },
            ]}
          />
        </Box>

        <Box flex={1}>
          <FormSelect
            name="status"
            label="Status"
            control={control}
            errors={errors}
            disabled={disabled}
            options={[
              { value: "Completed", label: "Completed" },
              { value: "In Progress", label: "In Progress" },
              { value: "Pending", label: "Pending" },
            ]}
          />
        </Box>
      </Box>

      {selectedCategory !== "Other" ? (
        <FormMultiSelect
          name="techStack"
          label="Tech Stack"
          control={control}
          errors={errors}
          disabled={disabled}
          options={techStackOptions[selectedCategory] || []}
        />
      ) : (
        <FormTextField
          name="otherTech"
          label="Other Technologies"
          control={control}
          errors={errors}
          disabled={disabled}
        />
      )}

      <FormDate
        name="startDate"
        label="Start Date"
        control={control}
        errors={errors}
        disabled={disabled}
      />

      <FormFile
        name="projectFile"
        label="Upload Project Document"
        control={control}
        errors={errors}
        disabled={disabled}
        accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.rar"
      />
    </Stack>
  );
}

export default ProjectFields;
