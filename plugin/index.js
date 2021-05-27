
module.exports = function(babel) {
  // const { types } = babel
  return {
    // 一个visitor对象
    visitor: {
      // 当visitor巡视工作时，发现了Identifier的朋友，寒暄一番（执行函数)
      Identifier(path, state) {
        // const { name } = path.node
        // if (name === 'foo') {
        //   path.node.name = 'hello'
        // }
      }
    }
  }
}