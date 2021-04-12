module.exports = {
  images: {
    domains: ["i.ytimg.com", "cdn.hashnode.com"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !! 
    // Reason: https://www.reddit.com/r/nextjs/comments/mol308/deployment_fails_but_builds_locally/
    ignoreBuildErrors: true,
  },
};
