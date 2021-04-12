import type { NextApiRequest, NextApiResponse } from "next";
import Repository from "../../types/Repository";

/**
 * GitHub API.
 * Returns a list of public repositiories from my GitHub Profile.
 */
export default async (_: NextApiRequest, res: NextApiResponse<Repository[]>) => {
  try {
    // TODO: This uses the public API. Which gets rate limited badly. Should swap to oauth
    // https://octokit.github.io/rest.js/v18#repos-list-for-user
    const apiUrl = "https://api.github.com/users/jarrodwatts/repos";
    const ytRes = await fetch(apiUrl);
    const ytData = await ytRes.json();
    res.status(200).json(ytData as Repository[]);
  } catch (error) {
    // The error is handled by the client-side by destructuring error from the fetcher response
    console.error("Error occurred returning YouTube API data");
  }
};
