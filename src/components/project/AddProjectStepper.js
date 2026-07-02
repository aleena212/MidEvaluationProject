import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import projectValidation from "../../validation/projectValidation";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import ReviewStep from "./ReviewStep";

const steps = ["Project Details", "Project Information", "Review"];

function AddProjectStepper() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectValidation),
    defaultValues: {
      category: "",
      title: "",
      description: "",
      techStack: [],
      otherTech: "",
      status: "",
      startDate: "",
      endDate: "",
      repoLink: "",
    },
  });

  const selectedCategory = watch("category");
  const formData = watch();

  // Next
  const handleNext = async () => {
    let valid = true;

    if (activeStep === 0) {
      valid = await trigger(["category", "title", "description"]);
    }

    if (activeStep === 1) {
      const fields = ["status", "startDate", "endDate"];

      if (selectedCategory === "Other") {
        fields.push("otherTech");
      } else {
        fields.push("techStack");
      }

      valid = await trigger(fields);
    }

    if (valid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  // Back
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  // Submit
  const onSubmit = (data) => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push({
      id: Date.now(),
      ...data,
    });

    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Project Added Successfully!");

    navigate("/projects");
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Add New Project
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step Content */}

      {activeStep === 0 && <StepOne control={control} errors={errors} />}

      {activeStep === 1 && (
        <StepTwo
          control={control}
          errors={errors}
          selectedCategory={selectedCategory}
        />
      )}

      {activeStep === 2 && <ReviewStep data={formData} />}

      {/* Buttons */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>

        {activeStep === 2 ? (
          <Button variant="contained" onClick={handleSubmit(onSubmit, onError)}>
            Submit Project
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Paper>
  );
}

export default AddProjectStepper;
