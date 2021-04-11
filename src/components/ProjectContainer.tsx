import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { Grid } from "@material-ui/core";
import Repository from "../types/Repository";

export default function ProjectContainer(): JSX.Element {
  const { data, error } = useSWR<Repository[], any>("/api/github", fetcher);

  const displayRepoNames = [];

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  const filterRelevantRepositories = (initialRepos: Repository[]): Repository[] => {
    initialRepos.filter((repo) => );
  };

  return (
    <Grid container direction="column" spacing={2}>
      {data.map((repo) => (
        <Grid item>
          <p>{repo.name}</p>
        </Grid>
      ))}
    </Grid>
  );
}
