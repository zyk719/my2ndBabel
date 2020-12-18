/**
 * lib：@babel/core
 * lib: @babel/preset-env 这个库的依赖是许多 helper 和 plugin
 * lib: core-js
 * 添加功能：方法类(Symbol)、静态方法(Array.from)、实例方法(Array.prototype.filter)
 * Ps: 需配置 useBuiltIns: 'usage', corejs: 3, 使能从 core-js 引入额外的功能
 * Ps: helpers 这个因为使用代码插入，不安装 core-js 也会插入
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
    console.log('\n<<- @babel/core | @babel/preset-env useBuiltIns usage corejs 3 ->>\n')
    console.log('<<- 源码 ->>\n', sourceCode, '\n');
    console.log('<<- 转译后代码 ->>\n', result.code, '\n');
});

/**
 * 讨论：
 * 预设 @babel/preset-env 配置
 * 本例除了语法转译外，还有 feature 添加测试，feature 分为：方法类、静态方法、实例方法及helpers
 * helpers 会以插入代码的方式加入
 * 其它从 core-js 库中引入
 * 预设 @babel/preset-env 配置：
 *  useBuiltIns: false 默认 | entry 入口引入 | usage babel 按需引入
 *  corejs: 指定引入的 core-js 库核心
 * 需要安装 core-js 在 corejs 指定的版本
 *
 * 疑问：
 * OK 能不能指定转译语法到指定浏览器版本，如果浏览器支持就不转译，feature 同 => useBabel4.js .browserslistrc
 * OK 每个文件都会插入 generator/yield 和 async/await ，多了重复代码怎么解决 => useBabel5.js @babel/plugin-transform-plugin
 * OK 方法类、静态方法和实例方法会不会污染全局 => with webpack，core-js 引入的会污染全局
 */
