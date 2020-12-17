/**
 * lib：@babel/core
 * lib: @babel/preset-env 这个库的依赖是许多 helper 和 plugin
 * lib: core-js
 * 添加功能：方法类(Symbol)、静态方法(Array.from)、实例方法(Array.prototype.filter)
 * Ps: 需配置 useBuiltIns: 'usage', corejs: 3, 使能从 core-js 引入额外的功能
 * Ps: generator/yield async/await 这个因为使用代码插入，不安装 core-js 也会插入
 */

const babelCore = require('@babel/core');
const sourceCode = `
    let fn = async(num) => {
        await (num + 2)
        const sym = Symbol()
        Array.from('1a2b3c')
        ;[1, 2, 3].filter(e => e > 1)
    }`;

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
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ],
};

babelCore.transform(sourceCode, options, function (err, result) {
    console.log('\n<- 源码 ->\n', sourceCode);
    console.log('\n<- 转译后代码 ->\n', result.code);
    // console.log(result.map);
    // console.log(result.ast);
});
