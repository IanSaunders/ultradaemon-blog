module.exports = {
  siteMetadata: {
    title: `Ian Saunders`,
    name: `Ian Saunders`,
    siteUrl: `https://ultradaemon.com/`,
    description: `Meandering musings of a runner`,
    hero: {
      heading: `Meandering musings of a runner`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lostvoxel`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ian-m-saunders/`,
      },
      {
        name: `github`,
        url: `https://github.com/IanSaunders`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        siteConfig: {
          postsPerPage: 12,
        },  
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "asdsads",
      },
    },
  ],
};
