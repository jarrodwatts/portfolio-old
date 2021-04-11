import type { NextApiRequest, NextApiResponse } from "next";
import YoutubeItem from "../../types/YoutubeItem";

/**
 * YouTube Channel API.
 * Returns a list of youtube video details.
 * See type YouTubeItems.ts for returned data type.
 */
export default async (_: NextApiRequest, res: NextApiResponse<YoutubeItem[]>) => {
  try {
    const apiUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
    const uploadPlaylistId = "UUJae_agpt9S3qwWNED0KHcQ";
    const ytRes = await fetch(
      `${apiUrl}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&playlistId=${uploadPlaylistId}`
    );
    const ytData = await ytRes.json();

    const wantedData = ytData?.items as YoutubeItem[];
    res.status(200).json(wantedData);
  } catch (error) {
    // The error is handled by the client-side by destructuring error from the fetcher response
    console.error("Error occurred returning YouTube API data");
  }
};
