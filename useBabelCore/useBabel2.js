/**
 * lib：@babel/core
 * lib: @babel/plugin-transform-arrow-functions
 * 可以单独配置插件转译代码
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
    plugins: ['@babel/plugin-transform-arrow-functions'],
    // 预设
    presets: [],
};

babelCore.transform(sourceCode, options, function (err, result) {
    console.log('\n<<- @babel/core | @babel/plugin-transform-arrow-functions ->>\n')
    console.log('<<- 源码 ->>\n', sourceCode, '\n');
    console.log('<<- 转译后代码 ->>\n', result.code, '\n');
});

/**
 * 讨论：
 * 插件 @babel/plugin-transform-arrow-function
 * 在已知需要转换的语法时，可以指定转换插件，例如：箭头函数
 * 本例目的为了做插件使用尝试
 */
