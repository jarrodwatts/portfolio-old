import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import YoutubeCarousel from "../components/YoutubeCarousel";
import BlogContainer from "../components/BlogContainer";
import ProjectContainer from "../components/ProjectContainer";
import Grid from "@material-ui/core/Grid";

export default function Index() {
  return (
    <Container maxWidth="md">
      {/* Intro */}
      <Typography component="h1" variant="h3" style={{ marginBottom: "16px" }}>
        Hey, I'm Jarrod Watts.
      </Typography>
      <Typography component="h2" variant="h6">
        I'm a developer / software engineer.
      </Typography>
      <Typography component="h2" variant="body1">
        I've recently started creating content about my passion for programming and this portfolio
        is a hub where I can share all of my work. Thanks for stopping by!
      </Typography>

      {/* YouTube */}
      <Typography
        variant="h4"
        style={{ marginBottom: "84px", marginTop: "48px", paddingBottom: "8px" }}
      >
        Recent Videos 🎬
      </Typography>
      <YoutubeCarousel />

      {/* Blog */}
      <Typography variant="h4" style={{ marginBottom: "16px", marginTop: "32px" }}>
        Blog Posts 📝
      </Typography>

      <BlogContainer />

      {/* Projects */}
      <Typography variant="h4" style={{ marginBottom: "16px", marginTop: "64px" }}>
        Projects by Me 💕
      </Typography>

      <ProjectContainer />

      {/* Timeline
      <Typography variant="h4" style={{ marginBottom: "16px", marginTop: "48px" }}>
        Timeline
      </Typography>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TimelineYear year={"2021"} />
        </Grid>
        <Grid item>
          <TimelineYear year={"2020"} />
        </Grid>
        <Grid item>
          <TimelineYear year={"2019"} />
        </Grid>
      </Grid> */}

      {/* Projects
      <Typography variant="h4" style={{ marginBottom: "16px", marginTop: "64px" }}>
        Contact Me 📝
      </Typography>

      <Grid container direction="column" alignItems="center" justify="flex-start">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}></Grid>
      </Grid> */}
    </Container>
  );
}
