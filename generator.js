// generator.js
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint",
    },
    dependencies: {
      "animate.css": "^4.1.0",
      axios: "0.18.1",
      "core-js": "3.6.5",
      echarts: "^4.9.0",
      "ele-multi-cascader": "^2.2.5",
      "element-ui": "2.13.2",
      jquery: "^3.5.1",
      "js-cookie": "2.2.0",
      moment: "^2.29.1",
      "normalize.css": "7.0.0",
      nprogress: "0.2.0",
      "path-to-regexp": "2.4.0",
      store: "^2.0.12",
      "svg-baker-runtime": "^1.4.7",
      swiper: "^5.4.5",
      "core-js": "^3.6.5",
      "vue-awesome-swiper": "^2.6.7",
      "vue-count-to": "^1.0.13",
      "vue-quill-editor": "^3.0.6",
      "vue-router": "^4.0.0-0",
      vue: "^3.0.0",
      vuex: "^4.0.0-0",
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.5.0",
      "@vue/cli-plugin-eslint": "~4.5.0",
      "@vue/cli-plugin-vuex": "~4.5.0",
      "@vue/cli-service": "~4.5.0",
      "@vue/compiler-sfc": "^3.0.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.1.0",
      eslint: "^6.7.2",
      "eslint-plugin-prettier": "^3.3.1",
      "eslint-plugin-vue": "^7.0.0",
      less: "^3.0.4",
      "less-loader": "^5.0.0",
      "lint-staged": "^9.5.0",
      prettier: "^2.2.1",
    },
    gitHooks: {
      "pre-commit": "lint-staged",
    },
    "lint-staged": {
      "*.{js,jsx,vue}": ["vue-cli-service lint", "git add"],
    },
  })
  // 复制template模版
  api.render("./template")
}
