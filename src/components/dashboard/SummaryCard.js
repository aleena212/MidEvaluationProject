import { Card, CardContent, Typography, Box } from "@mui/material";

function SummaryCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: color,
              width: 55,
              height: 55,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;