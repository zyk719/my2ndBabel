##[Babel](https://babel.docschina.org/)
###参考资料
[一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/326824078)  
[一文彻底读懂 Babel](https://zhuanlan.zhihu.com/p/326824078)  
[babel corejs@3 是如何按需 polyfill 原型对象方法的](https://zhuanlan.zhihu.com/p/139359864)

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
```javascript
// 官方写在 babel.config.js 中
module.exports = {
    // babel 本身不具有任何转化功能，它把转化的功能都分解到一个个 plugin 里面
    plugin: [
        // 不传参数格式
        'pluginName',
        // 传参数格式
        [
            'pluginName',
            {
                pluginOptions: ''
            }
        ]
    ],
    // 配插件比较麻烦，官方有预设，也可以下载别人的预设
    preset: [/* 格式和插件一致 */]
}
```
###plugin 和 preset 执行顺序
```
先 plugin 后 preset
plugin 从前向后依次执行
preset 从后向前反向执行
```
###编译过程
> 解析 parser
>> 通过配置插件解析更多的语法  
>> babel 内部使用的解析类库叫做 babylon ，babel7 改名为 @babel/parser  
>> 如果我们使用了转译插件，就不用再使用语法插件了。

> 转译 transform
>> 以插件的形式使用，useBabel2.js  
>> 可以配置成 preset 做成套餐的形式使用

> 生成 generate

###添加目标环境缺失功能
```
除了语法转译外，还可以添加目标环境缺失功能。
通过 @babel/polyfill 后拆成 core-js 和 regenerator-runtime
```
###目标浏览器指定
```
通过 .browserslistrc 指定目标浏览器，可以指定需要转译的语法和需要添加的 polyfill
```
###npm 包介绍及功能
| 名 称 | 作 用 |
| ---- | ---- |
| @babel/core | 控制编译流程 |
| babel-loader | webpack babel loader |
| @babel/runtime-corejs3 | transform-runtime 引用库 |
| core-js@3 | preset-env 引用库 |
| @babel/preset-env | 最新的 stable 预设 |
| @babel/plugin-transform-runtime| 优化 polyfill 引入 |
