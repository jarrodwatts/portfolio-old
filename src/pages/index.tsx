import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import YoutubeCarousel from "../components/YoutubeCarousel";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" style={{ marginBottom: "16px" }}>
        Hey, I'm Jarrod Watts.
      </Typography>
      <Typography variant="body1">
        I'm a developer / software engineer. Recently, I also started making content about my
        passion for programming. Thanks for stopping by!
      </Typography>
      <YoutubeCarousel />
      {/* YouTube Section */}
    </Container>
  );
}
