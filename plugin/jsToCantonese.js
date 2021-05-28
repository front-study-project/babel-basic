module.exports = function(babel) {
  return {
    visitor: {
      VariableDeclaration(path, state) {
        const { kind } = path.node
        if (kind === 'let' || kind === 'var') {
          path.node.kind = '变量'
        }
        if (kind === 'const') {
          path.node.kind = '常量'
        }
      }      
    }
  }
}