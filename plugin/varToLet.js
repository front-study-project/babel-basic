
module.exports = function(babel) {
  const { types: t } = babel
  return {
    visitor: {
      VariableDeclaration(path, state) {
        const { kind } = path.node
        if (kind === 'var') {
          path.node.kind = 'let'
        }
      }
    }
  }
}