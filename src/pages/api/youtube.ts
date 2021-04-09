import type { NextApiRequest, NextApiResponse } from "next";
import YoutubeItems from "../../types/YoutubeItems";

/**
 * YouTube Channel API.
 * Returns a list of youtube video details.
 * See type YouTubeItems.ts for returned data.
 */
export default async (req: NextApiRequest, res: NextApiResponse<YoutubeItems>) => {
  try {
    const apiUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
    const uploadPlaylistId = "UUJae_agpt9S3qwWNED0KHcQ";
    const ytRes = await fetch(
      `${apiUrl}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&playlistId=${uploadPlaylistId}`
    );
    const ytData = await ytRes.json();

    const wantedData = ytData as YoutubeItems;
    res.status(200).json(wantedData);
  } catch (error) {
    console.error("Error occurred returning YouTube API data")
    res.status(400)
  }
};
