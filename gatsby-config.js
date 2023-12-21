module.exports = {
  siteMetadata: {
    title: `Ultra Daemon`,
    name: `Ultra Daemon`,
    siteUrl: `https://ultra-daemon.com/`,
    description: `Meandering musings`,
    hero: {
      heading: `Meandering musings`,
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
        authorsPage: true,
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
        name: `Ultra-Daemon`,
        short_name: `Ultra-Daemon`,
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
