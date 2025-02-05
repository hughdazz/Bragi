/*
 * @Author: JfanLiu 1300083451@qq.com
 * @Date: 2023-08-13 23:32:22
 * @LastEditors: JfanLiu 1300083451@qq.com
 * @LastEditTime: 2023-08-14 11:21:02
 * @FilePath: \Bragi\Bragi-frontend\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': "off"
  }
  
}
