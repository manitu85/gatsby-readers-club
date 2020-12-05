const path = require("path")

const bookTemplate = path.resolve('./src/templates/book-template.js')

// Pragmatically create pages
exports.createPages = async ({ graphql, reporter, actions: { createPage } }) => {
  const res = await graphql(`
    {
      allBooks (limit: 1000){
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // dynamically create pages
  const books = res.data.allBooks.edges

  books.forEach(({ node: book }) => {
    createPage({
      path: `/books/${book.id}`,
      component: bookTemplate,
      context: {
        bookId: book.id
      }
    })
  })

}

// For absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};