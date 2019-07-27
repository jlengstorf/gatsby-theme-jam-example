exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@misk\/core/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
