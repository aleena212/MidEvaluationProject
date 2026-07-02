import * as yup from "yup";

const signupValidation = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Minimum 3 characters")
    .max(30, "Maximum 30 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      "Must contain uppercase, lowercase and a number",
    ),

  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default signupValidation;
