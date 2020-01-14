/**
 * Create WP post in MdxWpPosts
 */
function CreateNodeWP({
  node,
  actions,
  createNodeId,
  createContentDigest,
  getNode
}) {
  const { createNode, createParentChildLink } = actions
  const parent = getNode(node.parent)
  createNode({
    type: 'WP',
    postId: node.id,
    date: node.date,
    parent: node.id,
    children: [],
    wpData: { ...node },
    id: createNodeId(`p-${node.id}`),
    internal: {
      type: 'MdxWpPosts',
      contentDigest: createContentDigest(node)
    }
  })
}

/**
 * Create MDX post in MdxWpPosts
 */
function CreateNodeMDX({
  node,
  createNodeId,
  createContentDigest,
  actions,
  getNode
}) {
  const { createNode, createParentChildLink } = actions
  const parent = getNode(node.parent)
  if (parent.sourceInstanceName === 'posts') {
    createNode({
      type: 'MDX',
      postId: node.id,
      date: node.frontmatter.date || [],
      parent: node.id,
      children: [],
      mdxData: { ...node },
      id: createNodeId(`p-${node.id}`),
      internal: {
        type: 'MdxWpPosts',
        contentDigest: createContentDigest(node)
      }
    })
    createParentChildLink({
      parent: parent,
      child: node
    })
  }
}
module.exports = { CreateNodeWP, CreateNodeMDX }
