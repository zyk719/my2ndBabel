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
    console.log('\n<- 源码 ->\n', sourceCode);
    console.log('\n<- 转译后代码 ->\n', result.code);
    // console.log(result.map);
    // console.log(result.ast);
});
