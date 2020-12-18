module.exports = {
    plugins: [
        /**
         * 作用：
         * 1. all of the helpers will reference the module @babel/runtime to avoid duplication across your compiled output.
         * 2. Another purpose of this transformer is to create a sandboxed environment for your code.
         *  If you directly import core-js or @babel/polyfill and the built-ins it provides such as Promise, Set and Map,
         *  those will pollute the global scope. While this might be ok for an app or a command line tool, it becomes a
         *  problem if your code is a library which you intend to publish for others to use or if you can't exactly control
         *  the environment in which your code will run. The transformer will alias these built-ins to core-js so you
         *  can use them seamlessly without having to require the polyfill.
         * 3. Automatically requires @babel/runtime/regenerator when you use generators/async functions
         */
        [
            /**
             * with @babel/runtime-corejs3
             */
            '@babel/plugin-transform-runtime',
            {
                /**
                 * 指定 polyfill 版本
                 * corejs: false - @babel/runtime (default)
                 * corejs: 2     - @babel/runtime-corejs2
                 * corejs: 3     - @babel/runtime-corejs3
                 */
                corejs: 3,
                
                /**
                 * default true
                 * Toggles whether or not inlined Babel helpers (classCallCheck, extends, etc.)
                 * are replaced with calls to moduleName.
                 */
                helper: true,
    
                /**
                 * default true
                 * Toggles whether or not generator functions are transformed to use a regenerator
                 * runtime that does not pollute the global scope.
                 */
                regenerator: true,
    
                /**
                 * default false
                 * This allows for smaller builds in module systems like webpack, since it doesn't need to preserve commonjs semantics.
                 */
                useESModules: false,
    
                /** todo
                 * default false
                 * This allows users to run transform-runtime broadly across a whole project.
                 */
                absoluteRuntime: false,
    
                /**
                 * 指定 @babel/runtime-corejs2@7.7.4 版本
                 */
                // version: ''
            },
        ],
    ],
    presets: [
        [
            /**
             * with core-js@3
             */
            '@babel/preset-env',
            {
                /**
                 * useBuiltIns: 配置 polyfill 以何种形式导入
                 * "usage" | "entry" | false, defaults to false
                 * usage: 只在 <!-- 当前文件中加入 --> 该文件用到的内置类型的 polyfill
                 * entry: 在入口自行引入，代码入口或 webpack entry
                 * false: 不自动加入内置类型的 polyfill
                 */
                // useBuiltIns: 'usage',
    
                /**
                 * 引入的 core-js 版本
                 */
                // corejs: 3,
    
                /**
                 * 更多配置详见：https://babeljs.io/docs/en/babel-preset-env
                 */
            },
        ],
    ],
}

/**
 * 按需引入 feature 只需配一处即可
 * 1. @babel/preset-env: ( useBuiltIns: 'usage', corejs: 3, )
 *  只引入用到的 polyfill，不足：
 *  a. generator/yield async/await 会插入到每一个文件中，项目文件多的时候造成不必要的重复
 *  b. core-js 改造目标浏览器，让你的浏览器拥有本来不支持的特性
 *  c. 从 core-js 引入的缺失功能会污染全局变量，开发 app 问题不大，但开发库时影响很大
 *
 * 2. @babel/plugin-transform-runtime: ( corejs: 3, )
 *  '@babel/runtime改造你的代码，让你的代码能在所有目标浏览器上运行，但不改造浏览器
 *  可以解决上述两个问题，只在当前文件作用域添加 polyfill，从 @babel/runtime 引入 polyfill
 */
