import { Box, Paper, Typography, Button, Link, Alert } from "@mui/material";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import FormTextField from "../components/forms/FormTextField";
import loginValidation from "../validation/loginValidation";

function Login() {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setLoginError("No account found. Please create an account first.");
      return;
    }

    if (
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {
      setLoginError("");

      // Save logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

      reset();

      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password.");
    }
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
          Welcome Back 💜
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            mt: 1,
            mb: 3,
          }}
        >
          Login to continue
        </Typography>

        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
            }}
          >
            Login
          </Button>
        </form>

        <Typography
          align="center"
          sx={{
            mt: 3,
          }}
        >
          Don't have an account?{" "}
          <Link
            component={RouterLink}
            to="/signup"
            underline="hover"
            color="primary"
            fontWeight={600}
          >
            Create Account
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;
