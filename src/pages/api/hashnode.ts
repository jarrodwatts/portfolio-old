import type { NextApiRequest, NextApiResponse } from "next";
import YoutubeItem from "../../types/YoutubeItem";

/**
 * Hashnode GraphQL API.
 * Returns a list of blog posts from my personal blog hosted on hashnode.
 */
export default async (_: NextApiRequest, res: NextApiResponse<YoutubeItem[]>) => {
  try {
    const gqlQuery = `
    {
        user(username:"jarrodwatts") {
            publication {
                posts {
                    _id
                    title
                    dateFeatured
                    popularity
                    coverImage
                    brief
                    slug
                    cuid
                }
            }
        }
    }`;

    const response = await fetch("https://api.hashnode.com", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gqlQuery }),
    });
    const body = await response.json();

    res.status(200).json(body);
  } catch (error) {
    // The error is handled by the client-side by destructuring error from the fetcher response
    console.error("Error occurred returning Hashnode API data");
  }
};
