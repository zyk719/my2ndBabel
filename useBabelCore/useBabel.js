/**
 * lib：@babel/core
 */

const babelCore = require("@babel/core");
const sourceCode = `let fn = (num) => num + 2`;

const options = {
    //是否生成解析的代码
    code: true,
    //是否生成抽象语法树
    ast: true,
    //是否生成sourceMap
    sourceMaps: true,
    plugins: [],
    presets: [],
};

babelCore.transform(sourceCode, options, function (err, result) {
    console.log('\n<<- @babel/core ->>\n')
    console.log('<<- 源码 ->>\n', sourceCode, '\n');
    console.log('<<- 转译后代码 ->>\n', result.code, '\n');
});

/**
 * 讨论：
 * 核心 @babel/core 会执行转译流程
 * 解析：@babel/parser(babylon)，安装语法插件可以解析更多语法，装了一个语法的转译插件后就不用装语法插件了
 * 转译：没有配插件（插件配置的集合是 preset），只会在语法规范上做转译，看括号和结尾分号
 * 生成：输出转译后的代码
 */
