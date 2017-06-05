module.exports = {
  "parserOptions": {
    //EsLint通过parserOptions，允许指定校验的ecma的版本，及ecma的一些特性
    "ecmaVersion": 6,
    //指定ECMAScript支持的版本，6为ES6
    "sourceType": "module",
    //指定来源的类型，有两种”script”或”module”
    "ecmaFeatures": {
      // ecmaFeatures指定你想使用哪些额外的语言特性
      "jsx": true
      //启动JSX
    }
  },
  "parser": "babel-eslint",
  // EsLint默认使用esprima做脚本解析，也可以切换成babel-eslint解析
  "env": {
    // Environment可以预设好的其他环境的全局变量，如brower、node环境变量、es6环境变量、mocha环境变量等
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
  },
  "plugins": [
    // EsLint允许使用第三方插件
    "react",
    "html",
    "import",
    "node",
    "promise",
    "standard"
  ],
  "extends": "eslint:recommended",
  //  "extends": "standard",
  "rules": {
    //# 规则，0/off:关闭规则; 1/warn:开启规则，使用警告级别的错误，不会导致程序退出; 2/error: 开启规则，使用错误级别的错误，当触发的时候，程序会退出。
    "no-unused-vars": 1,
    "import/named": 0,
    "import/no-named-as-default": 0,
    "react/jsx-wrap-multilines": 1,
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "strict": [
      2,
      "never"
    ],
    // "semi": [
    //   2,
    //   "always"
    // ],
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error",
          "log"
        ]
      }
    ],
    "quotes": 0,
    "no-debugger": 1,
    "no-var": 1,
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": 1,
    "react/display-name": [
      1,
      {
        "ignoreTranspilerName": false
      }
    ],
    "react/forbid-prop-types": [
      1,
      {
        "forbid": [
          "any"
        ]
      }
    ],
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1
  },
  "globals": {
    // 即插件在执行过程中用到的其它全局变量
  }
}
