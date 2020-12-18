/**
 * lib：@babel/core
 * lib: @babel/preset-env 这个库的依赖是许多 helper 和 plugin
 * 可以使用预设的配置转译代码
 */

const babelCore = require("@babel/core");
const sourceCode = `let fn = num => num + 2;`;

const options = {
    //是否生成解析的代码
    code: true,
    //是否生成抽象语法树
    ast: true,
    //是否生成sourceMap
    sourceMaps: true,
    // 插件
    plugins: [],
    // 预设
    presets: ['@babel/preset-env'],
};

babelCore.transform(sourceCode, options, function (err, result) {
    console.log('\n<<- @babel/core | @babel/preset-env ->>\n')
    console.log('<<- 源码 ->>\n', sourceCode, '\n');
    console.log('<<- 转译后代码 ->>\n', result.code, '\n');
});

/**
 * 讨论：
 * 预设 @babel/preset-env 默认配置
 * 安装 @babel/preset-env 后，会安装许多 helper plugin，它是插件设置的集合
 * 箭头函数被转译成了 function
 */
