const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    //关闭eslint校验工具
    lintOnSave: false,
    transpileDependencies: true
})