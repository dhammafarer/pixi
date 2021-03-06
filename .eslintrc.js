module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
    },
  "extends": ["eslint:recommended", 'plugin:react/recommended' ],
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
        "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "semi": [
        "error",
        "always"
      ],
      "no-unused-vars": 1
    }
};
