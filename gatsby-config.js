module.exports = {
  siteMetadata: {
    title: 'Contentful Blog',
  },
  plugins: [
    {resolve: 'gatsby-source-contentful',
    options: {
      spaceId:'j8rtz7kjb9ce',
      accessToken: '90db1f2ce256dbabf3d8f426d19107a8ef027ebf4bb4550508f437fcde591025'
    }
  },
    'gatsby-plugin-react-helmet'
  ],
}


