export type BlogPostList = {
  data: {
    user: {
      publication: {
        posts: BlogPostType[];
      };
    };
  };
};

export type BlogPostType = {
  _id: string;
  title: string;
  coverImage: string;
  brief: string;
  slug: string;
  cuid: string;
};
