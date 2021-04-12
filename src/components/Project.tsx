import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Repository from "../types/Repository";
import ButtonBase from "@material-ui/core/ButtonBase";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles({
  root: {
    minWidth: 204,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  desc: {
    height: 80,
    overflowY: "hidden",
  },
});

const toDate = (date: string): string => {
  const x = new Date(date);
  return x.toLocaleDateString();
};

const upperFirst = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function Project({ repo }: { repo: Repository }) {
  const classes = useStyles();

  return (
    <ButtonBase target="_blank" href={repo.html_url} className={classes.root}>
      <Card>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {toDate(repo.created_at)}
          </Typography>
          <Typography variant="h5" component="h2">
            <b>{upperFirst(repo.name)}</b> <LaunchIcon />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {repo.language}
          </Typography>
          <Typography variant="body2" component="p" className={classes.desc}>
            {upperFirst(repo.description)}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
