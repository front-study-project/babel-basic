import a from 'a'

const flag = true

// 这里会报错
// SyntaxError: import-undefined/index.js: "a" is read-only
//   4 | 
//   5 | if (flag) {
// > 6 |   a = {}
//     |   ^
//   7 | }
//   8 | 
//   9 | 
if (flag) {
  a = {}
}
