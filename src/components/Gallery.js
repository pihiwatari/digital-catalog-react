import React from "react";
import { Container, Grid } from "@mui/material";
import ModelCard from "./ModelCard";

export default function Gallery() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 4, md: 12 }}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <ModelCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ModelCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ModelCard />
        </Grid>
      </Grid>
    </Container>
  );
}
