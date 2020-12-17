##[Babel](https://babel.docschina.org/docs/en/)
###参考资料
[一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/326824078)  
[一文彻底读懂Babel](https://zhuanlan.zhihu.com/p/326824078)  
[babel corejs@3 是如何按需polyfill原型对象方法的](https://zhuanlan.zhihu.com/p/139359864)
###Babel是什么
```
Babel 是一个 JavaScript 编译器。
名字源自巴别塔（通天塔）的故事。
```
###Babel作用
```
主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码：
    1.转换语法
    2.Polyfill 实现目标环境中缺少的功能 (通过 @babel/polyfill)
    3.源代码转换 (codemods)
```
###配置文件
- 单独配置文件```babel.config.js```
- 写在```package.json```中
- 写在```webpack.config.js```中
###语法转换
- 配置
  
- 插件
- 预设
###添加目标环境缺失功能
``````

