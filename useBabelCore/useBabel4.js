/**
 * lib：@babel/core
 * lib: @babel/preset-env 这个库的依赖是许多 helper 和 plugin
 * lib: core-js
 * 添加功能：方法类(Symbol)、静态方法(Array.from)、实例方法(Array.prototype.filter)
 * Ps: 需配置 useBuiltIns: 'usage', corejs: 3, 使能从 core-js 引入额外的功能
 * Ps: helpers 这个因为使用代码插入，不安装 core-js 也会插入
 *
 * 指定浏览器配置：
 * 使用 .browserslistrc 配置文件，如果不想新增文件也可以在 webpack babel-loader | package.json | @babel/preset-env options 配
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
                corejs: 3,
                targets: {
                    chrome: '87',
                }
            }
        ]
    ],
};

babelCore.transform(sourceCode, options, function (err, result) {
    console.log('\n<<- @babel/core | target browsers ->>\n')
    console.log('<<- 源码 ->>\n', sourceCode, '\n');
    console.log('<<- 转译后代码 ->>\n', result.code, '\n');
});

/**
 * 讨论：
 * 指定转译浏览器版本，.browserslistrc 控制转译结果（修改为 @babel/preset-env option 配置）
 * 本例通过指定到最新 chrome 浏览器（87），转译结果未做任何语法转换，也没有添加 feature
 */
