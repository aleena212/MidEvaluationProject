import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8E44AD", // Purple
    },

    secondary: {
      main: "#D291FF", // Light Purple
    },

    background: {
      default: "#F8F5FF", // Light Lavender
      paper: "#FFFFFF",
    },

    text: {
      primary: "#2C2C2C",
      secondary: "#6B6B6B",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
