import { Box, Paper, Typography, Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import FormTextField from "../components/forms/FormTextField";
import signupValidation from "../validation/signupValidation";

function Signup() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidation),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    // Save user data in Local Storage
    const user = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    reset();

    // Redirect to Login page
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #F8F5FF, #EFE3FF)",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 420,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          Create Account 💜
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            mt: 1,
            mb: 3,
          }}
        >
          Welcome! Create your account
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            name="fullName"
            label="Full Name"
            control={control}
            errors={errors}
          />

          <FormTextField
            name="email"
            label="Email"
            type="email"
            control={control}
            errors={errors}
          />

          <FormTextField
            name="password"
            label="Password"
            type="password"
            control={control}
            errors={errors}
          />

          <FormTextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            control={control}
            errors={errors}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
            }}
          >
            Create Account
          </Button>
        </form>

        <Typography
          align="center"
          sx={{
            mt: 3,
          }}
        >
          Already have an account?{" "}
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            color="primary"
            fontWeight={600}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Signup;
