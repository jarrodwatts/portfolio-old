import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function TimelineEntry({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Grid container direction="column" alignItems="flex-start" justify="center">
      <Grid item>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>
            <Typography>✔️</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{title}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="body1" component="p" style={{ marginLeft: "24px" }}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}
