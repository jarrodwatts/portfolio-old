type YoutubeItem = {
  id: string;
  snippet: {
    channelId: string;
    publishedAt: string;
    title: string;
    channelTitle: string;
    description: string;
    position: number;
    videoOwnerChannelTitle: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      standard: {
        height: number;
        url: string;
        width: number;
      };
      maxres: {
        height: number;
        url: string;
        width: number;
      };
    };
  };
};

export default YoutubeItem;
