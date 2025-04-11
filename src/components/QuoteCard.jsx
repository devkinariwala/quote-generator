import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const QuoteCard = ({ quote, author }) => {
  return (
    <Card
      sx={{
        background: "rgba(0, 0, 0, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderRadius: "10px",
        padding: 4,
        color: "#fff",
        maxWidth: 600,
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          “{quote}”
        </Typography>
        <Typography variant="subtitle1">— {author}</Typography>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
