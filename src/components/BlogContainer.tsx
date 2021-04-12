import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { Grid } from "@material-ui/core";
import { BlogPostList } from "../types/BlogTypes";
import BlogPost from "./BlogPost";

export default function BlogContainer(): JSX.Element {
  const { data, error } = useSWR<BlogPostList, any>("/api/hashnode", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Grid container direction="column" spacing={2}>
      {data.data.user.publication.posts.map((post) => (
        <Grid item key={post._id}>
          <BlogPost post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
