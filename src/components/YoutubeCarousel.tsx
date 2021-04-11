import React, { useState, useEffect } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import YoutubeCard from "./YouTubeCard";
import YoutubeItem from "../types/YoutubeItem";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "16px",
    },
    parent: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "72px",
      marginTop: "48px",
    },
    front: {
      position: "absolute",
      width: "70%",
    },
    left: {
      position: "relative",
      zIndex: -1,
      left: "0%",
      opacity: "85%",
      width: "50%",
    },
    right: {
      position: "relative",
      zIndex: -2,
      right: "0%",
      opacity: "85%",
      width: "50%",
    },
  })
);

export default function Index(): JSX.Element {
  const { data, error } = useSWR<YoutubeItem[], any>("/api/youtube", fetcher);
  const [videoOrder, setVideoOrder] = useState<YoutubeItem[]>();
  const classes = useStyles();

  useEffect(() => {
    if (data) {
      setVideoOrder(data);
    }
  }, [data]);

  function handleVideoChange(prev: YoutubeItem[], direction: string): YoutubeItem[] {
    const tempStateCopy = [...prev]; // Spread to not mutate state directly

    if (direction === "right") {
      const popped = tempStateCopy.shift() as YoutubeItem;
      tempStateCopy[4] = popped;

      return tempStateCopy;
    } else {
      const popped = tempStateCopy.pop() as YoutubeItem;
      tempStateCopy.unshift(popped);
      return tempStateCopy;
    }
  }

  if (error) return <div>Failed to load</div>;
  if (!data || !videoOrder) return <div>Loading...</div>;
  return (
    <React.Fragment>
      <div className={classes.parent}>
        <Zoom in={true}>
          <div className={classes.front}>
            <YoutubeCard video={videoOrder[0]} inFront={true} />
          </div>
        </Zoom>

        <Zoom in={true}>
          <div className={classes.left}>
            <YoutubeCard video={videoOrder[4]} inFront={false} />
          </div>
        </Zoom>

        <Zoom in={true}>
          <div className={classes.right}>
            <YoutubeCard video={videoOrder[1]} inFront={false} />
          </div>
        </Zoom>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          aria-label="left"
          style={{ marginRight: "24px" }}
          onClick={() => setVideoOrder(handleVideoChange(videoOrder as YoutubeItem[], "left"))}
        >
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="right"
          onClick={() => setVideoOrder(handleVideoChange(videoOrder as YoutubeItem[], "right"))}
        >
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </div>
    </React.Fragment>
  );
}
