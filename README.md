## Babel 基础知识

## 安装和使用

  * 安装
  
    ```js
    // 全局安装
    npm install babel-cli --global

    // 本地安装（推荐)
    npm install babel-cli -D
    ```
  * 使用

    编译文件，指定输出文件/目录
    
    ```sh
    $ babel source.js [-o/--out-file] index.js
    $ babel src [-d/--out-dir] dist
    ```
  * 定义脚本使用

    在package.json中scripts下

    ```js
    "scripts": {
      "build": "babel ./src -d dist"
    }

    npm run build
    ```
  
  * 其他方式（推荐开发环境使用，开发环境下转码)

    **babel-register**

    **babel-node**

    **babel-core**  （编程的方式使用）

## 配置Babel

  在前面，我们只是安装和使用babel去转义代码，但没有告诉babel**怎么**转义代码；Babel通过/建议`.babelrc`配置文件
  
  预设更像一种`模式`,按某种模式的配置去编译代码，比如说新建一个指定公司babel版本的预设`babel-preset-manualVersion`

  ```js
  {
    "presets": [],
    "plugins": []
  }
  ```

  更多 —— [关于preset选项](https://babel.docschina.org/docs/en/presets/)

  `babel-polyfill`

  虽然babel可以帮我们编译新的javascript语法，但不存在的apis是编译失败的

  ```js
  // 比如es6的Array.from
  // 使用了箭头函数的函数
  function addAll() {
    return Array.from(arguments).reduce((a, b) => a + b)
  }
  // 转换成
  function addAll() {
    return Array.from(arguments).reduce(function (a, b) {
      return a + b
    })
  }
  
  // 此时执行会控制台报错`Array.from is not a function`
  ```

  为了解决新api的问题，出现了Polyfill的技术方案，`拷贝模拟复制`尚不存在的原生api，提前使用新的api

  `babel-runtime`

  为了实现ECMAScript规范的细节，Babel会用辅助函数的方式，保持代码的整洁，但由于这些助手方法特别长而且会被添加到每一个文件顶部，因此可以通过`babel-runtime`移到统一的运行时

  ```js
  class Foo {
    method() {}
  }

  // 编译成
  import _classCallCheck from "babel-runtime/helpers/classCallCheck";
  import _createClass from "babel-runtime/helpers/createClass";

  let Foo = function () {
    function Foo() {
      _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
      key: "method",
      value: function method() {}
    }]);

    return Foo;
  }();
  ```

## 配置Babel —— 指定自己的预设

  比如一个针对特定node版本的预设

  * 新建项目，遵循`babel-preset-*`命名
  * 在项目目录新建一个package.json，指定babel的版本

    ```js
    {
      "name": "babel-preset-my-awesome-preset",
      "version": "1.0.0",
      "author": "James Kyle <me@thejameskyle.com>",
      "dependencies": {
        "babel-preset-es2015": "^6.3.13",
        "babel-preset-react": "^6.3.13",
        "babel-plugin-transform-flow-strip-types": "^6.3.15"
      }
    }
    ```
  * 新建`index.js`文件导出.babelrc的内容

    ```js
    module.exports = {
      // 当使用了该预设的项目，babel的版本都会是package.json所描述的
      presets: [
        require("babel-preset-es2015"),
        require("babel-preset-react")
      ],
      plugins: [
        require("babel-plugin-transform-flow-strip-types")
      ]
    }
    ```
  
  * 发布到npm，安装，设置预设

## 相关链接
[用户手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)

[插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

[关于项目的babel配置](https://www.cnblogs.com/bai1218/p/12392180.html)