import {
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const cardContentCustomization = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
};

export default function ModelCard() {
  return (
    <Card sx={{ minWidth: 320, maxWidth: 400 }}>
      <CardMedia
        sx={{ bgcolor: grey[500] }}
        component="img"
        height="240"
        image=""
        alt=""
      />
      <CardContent sx={cardContentCustomization}>
        <Avatar sx={{ bgcolor: grey[500] }} variant="square" src="" alt="" />
        <Typography variant="body1" color="text.secondary">
          3D model display name
        </Typography>
        <Typography variant="h6">$0.00</Typography>
      </CardContent>
    </Card>
  );
}
