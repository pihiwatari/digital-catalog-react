import { Container, Grid } from "@mui/material";
import React from "react";

export default function Gallery() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Sample
        </Grid>
        <Grid item xs={4}>
          Sample
        </Grid>
      </Grid>
    </Container>
  );
}
