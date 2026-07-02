import { Stack } from "@mui/material";

import FormSelect from "../forms/FormSelect";
import FormMultiSelect from "../forms/FormMultiSelect";
import FormTextField from "../forms/FormTextField";
import FormDate from "../forms/FormDate";

const techStacks = {
  "Web Development": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "TypeScript",
  ],

  "Mobile App": [
    "React Native",
    "Flutter",
    "Firebase",
    "Expo",
    "Android",
    "iOS",
  ],

  "UI/UX Design": ["Figma", "Adobe XD", "Sketch", "ProtoPie", "Framer"],

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

function StepTwo({ control, errors, selectedCategory }) {
  return (
    <Stack spacing={3}>
      {/* Tech Stack */}

      {selectedCategory === "Other" ? (
        <FormTextField
          name="otherTech"
          label="Other Technologies"
          control={control}
          errors={errors}
        />
      ) : (
        <FormMultiSelect
          name="techStack"
          label="Tech Stack"
          control={control}
          errors={errors}
          options={techStacks[selectedCategory] || []}
        />
      )}

      {/* Status */}

      <FormSelect
        name="status"
        label="Project Status"
        control={control}
        errors={errors}
        options={[
          {
            value: "In Progress",
            label: "In Progress",
          },
          {
            value: "Completed",
            label: "Completed",
          },
          {
            value: "On Hold",
            label: "On Hold",
          },
        ]}
      />

      {/* Dates */}

      <FormDate
        name="startDate"
        label="Start Date"
        control={control}
        errors={errors}
      />

      <FormDate
        name="endDate"
        label="End Date"
        control={control}
        errors={errors}
      />

      {/* Repository */}

      <FormTextField
        name="repoLink"
        label="Repository / Demo Link (Optional)"
        control={control}
        errors={errors}
        placeholder="https://github.com/username/project"
      />
    </Stack>
  );
}

export default StepTwo;
