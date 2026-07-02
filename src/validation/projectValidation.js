import * as yup from "yup";

const projectValidation = yup.object({
  name: yup
    .string()
    .required("Project Name is required")
    .min(3, "Project Name must be at least 3 characters"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  category: yup.string().required("Please select a category"),

  status: yup.string().required("Please select a status"),

  startDate: yup.string().required("Please select a start date"),

  projectFile: yup
    .mixed()
    .test(
      "required",
      "Please upload a project document",
      (value) => value && value.length > 0,
    )
    .test(
      "fileSize",
      "File size must be less than 5 MB",
      (value) =>
        !value || value.length === 0 || value[0].size <= 5 * 1024 * 1024,
    ),
});

export default projectValidation;
