import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import YoutubeCarousel from "../components/YoutubeCarousel";
import Divider from "@material-ui/core/Divider";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h3" style={{ marginBottom: "16px" }}>
        Hey, I'm Jarrod Watts.
      </Typography>
      <Typography component="h2" variant="h6">
        I'm a developer / software engineer.
      </Typography>
      <Typography component="h2" variant="body1">
        Recently, I started making content about my passion for programming.
      </Typography>

      <Divider style={{ width: "100%", marginTop: "16px", marginBottom: "16px" }} />
      <Typography variant="h4" style={{ marginBottom: "48px" }}>
        YouTube Videos
      </Typography>
      <YoutubeCarousel />

      <Typography variant="h4" style={{ marginBottom: "48px" }}>
        Blog Posts
      </Typography>
    </Container>
  );
}
