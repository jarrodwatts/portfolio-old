import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { Grid } from "@material-ui/core";
import Repository from "../types/Repository";
import Project from "./Project";

export default function ProjectContainer(): JSX.Element {
  const { data, error } = useSWR<Repository[], any>("/api/github", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const gatherRepos = (initialRepos: Repository[]): Repository[] => {
    if (initialRepos.length > 0) {
      const displayRepoNames = [
        "donaldgenerated",
        "portfolio",
        "spotify",
        "lolProject",
        "gaminginfluencersite",
      ];
      try {
        return initialRepos
          .filter((repo) => displayRepoNames.includes(repo.name))
          .sort((a, b) => b.created_at.localeCompare(a.created_at));
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    return [];
  };

  return (
    <Grid container direction="row" spacing={2}>
      {gatherRepos(data)?.map((repo) => (
        <Grid item xs={12} sm={6} key={repo.id}>
          <Project repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
}
