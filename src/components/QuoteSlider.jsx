import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function QuoteSlider({ count, setCount }) {
  return (
    <Box sx={{ width: 300, margin: "1rem auto", textAlign: "center" }}>
      <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
        Number of Quotes: {count}
      </Typography>
      <Slider
        aria-label="Quotes Count"
        defaultValue={count}
        value={count}
        onChange={(e, val) => setCount(val)}
        step={1}
        marks
        min={1}
        max={4}
        valueLabelDisplay="auto"
        sx={{
          color: "#a17cf0",
        }}
      />
    </Box>
  );
}
