module.exports = {
  siteMetadata: {
    title: `readers clubr`,
    description: `readers club - Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas dolores sint molestias expedita in vero, consequatur blanditiis explicabo maxime.`,
    author: `@digital_genetics`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Books',
            collection: 'books',
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              author___NODE: doc.author.id,  // author references for graphQL
            }),
          },
          {
            type: 'Authors',
            collection: 'authors',
            map: doc => ({
              name: doc.name,
              // books___NODE: doc.books.map(book => book.id),
            }),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
