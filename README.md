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

    



## 相关链接
[用户手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)

[插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)