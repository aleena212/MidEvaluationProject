import { Card, CardContent, Typography, Box } from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function CategoryChart() {
  const data = [
    {
      category: "Web",
      projects: 12,
    },
    {
      category: "AI",
      projects: 8,
    },
    {
      category: "Mobile",
      projects: 5,
    },
    {
      category: "Cyber",
      projects: 6,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 1050,
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Projects by Category
          </Typography>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="projects" fill="#8E44AD" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CategoryChart;
