import * as yup from "yup";

const projectValidation = yup.object({
  // Step 1
  category: yup.string().required("Please select a category"),

  title: yup
    .string()
    .required("Project Title is required")
    .min(3, "Project Title must be at least 3 characters"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  // Step 2
  techStack: yup.array().when("category", {
    is: (category) => category && category !== "Other",
    then: (schema) =>
      schema
        .min(1, "Please select at least one technology")
        .required("Please select at least one technology"),
    otherwise: (schema) => schema.notRequired(),
  }),

  otherTech: yup.string().when("category", {
    is: (category) => category === "Other",
    then: (schema) => schema.required("Please enter technologies"),
    otherwise: (schema) => schema.notRequired(),
  }),

  status: yup.string().required("Please select project status"),

  startDate: yup.string().required("Please select start date"),

  endDate: yup
    .string()
    .required("Please select end date")
    .test(
      "end-after-start",
      "End Date must be after Start Date",
      function (value) {
        const { startDate } = this.parent;

        if (!startDate || !value) {
          return true;
        }

        return new Date(value) >= new Date(startDate);
      },
    ),

  repoLink: yup
    .string()
    .trim()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .test("valid-url", "Enter a valid URL", (value) => {
      if (!value) return true;

      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    }),
});

export default projectValidation;
