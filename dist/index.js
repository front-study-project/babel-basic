'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

var _b = require('./b.js');

console.log(_b.a);

function add() {
  return _b.a * _b.a;
}

add();