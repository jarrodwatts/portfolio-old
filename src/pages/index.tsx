import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import YoutubeCarousel from "../components/YoutubeCarousel";
import Grid from "@material-ui/core/Grid";
import TimelineYear from "../components/TimelineYear";
import BlogContainer from "../components/BlogContainer";
import ProjectContainer from "../components/ProjectContainer";

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
        Recently, I started making content about my passion for programming.
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
      <Typography variant="h4" style={{ marginBottom: "16px" }}>
        Blog Posts 📝
      </Typography>

      <BlogContainer />

      {/* Projects */}
      <Typography variant="h4" style={{ marginBottom: "16px", marginTop: "48px" }}>
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
    </Container>
  );
}
