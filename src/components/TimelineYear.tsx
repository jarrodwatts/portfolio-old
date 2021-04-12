import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import TimelineEntry from "../components/TimelineEntry";

const TimelineYear = ({ year }: { year: string }): JSX.Element => {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h5">{year}</Typography>
      </Grid>
      <Grid item>
        <TimelineEntry title={"Jeff"} description={"joe"} />
      </Grid>

      <Divider style={{ width: "100%", marginTop: "32px", marginBottom: "32px" }} />
    </Grid>
  );
};

export default TimelineYear;
