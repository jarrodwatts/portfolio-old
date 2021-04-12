import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { BlogPostType } from "../types/BlogTypes";
import Image from "next/image";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function BlogPost({ post }: { post: BlogPostType }): JSX.Element {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper style={{ width: "100%", padding: "12px" }} elevation={3}>
      <ButtonBase target="_blank" href={`http://blog.jarrodwatts.com/${post.slug}`}>
        <Grid container>
          <Grid
            container
            item
            direction="row"
            spacing={1}
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item xs={3}>
              <Image
                alt={post.title}
                src={post.coverImage}
                layout="responsive"
                width={240}
                height={130}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1">
                <b>{post.title}</b>
              </Typography>
              {/* Don't show the post brief on mobile devices */}
              {matches && <Typography variant="body2">{post.brief}</Typography>}
            </Grid>
          </Grid>
        </Grid>
      </ButtonBase>
    </Paper>
  );
}
