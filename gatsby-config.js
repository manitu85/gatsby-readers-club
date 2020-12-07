const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Book readers club`,
    description: `readers club - Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas dolores sint molestias expedita in vero, consequatur blanditiis explicabo maxime.`,
    author: `@digital_genetics`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        templates: path.join(__dirname, "src/templates"),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: {
          "type": process.env.FIREBASE_TYPE,
          "project_id": process.env.FIREBASE_PROJECT_ID,
          "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
          "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          "client_email": process.env.FIREBASE_CLIENT_EMAIL,
          "client_id": process.env.FIREBASE_CLIENT_ID,
          "auth_uri": process.env.FIREBASE_AUTH_URI,
          "token_uri": process.env.FIREBASE_TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
          "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
        },
        types: [
          {
            type: 'Books',
            collection: 'books',
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              imageUrl: doc.imageUrl,
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Books',
        imagePath: 'imageUrl',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
