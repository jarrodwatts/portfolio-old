import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "1rem",
      marginTop: "1rem",
      minHeight: "104px",
      position: "sticky",
      backdropFilter: "saturate(180%) blur(20px);",
      top: 0,
      zIndex: 100, // Header goes above everything
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = (): any => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      spacing={1}
    >
      <Grid item>
        <Typography variant="h6">👋 Jarrod Watts</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item>
            <Button>Home</Button>
          </Grid>
          <Grid item>
            <Button>Stats</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
