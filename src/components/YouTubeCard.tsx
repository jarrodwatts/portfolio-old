import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import YoutubeItem from "../types/YoutubeItem";
import Image from "next/image";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "8px",
    },
  })
);

export default function RecipeReviewCard({
  video,
  inFront,
}: {
  video: YoutubeItem;
  inFront: boolean;
}) {
  const classes = useStyles();

  return (
    <ButtonBase
      target="_blank"
      href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
    >
      <Paper className={classes.container} elevation={5}>
        <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
          <Grid item>
            <Image
              src={video.snippet.thumbnails.standard.url}
              alt={video.snippet.title}
              quality={100}
              height={358} // the actual height is more , but 358 cuts off the black bars from the top and bottom of the image.
              width={640}
              objectFit="cover"
            />
          </Grid>
          {inFront && (
            <React.Fragment>
              <Grid item>
                <Typography variant="h6" component="h5">
                  {video.snippet.title}
                </Typography>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Paper>
    </ButtonBase>
  );
}
