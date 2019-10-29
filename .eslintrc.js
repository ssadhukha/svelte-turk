module.exports = {
  parserOptions: {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  env: {
    "es6": true,
    "browser": true
  },
  plugins: [
    "svelte3"
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    "no-console": "off",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": "off",
    "quotes": "off",
    "a11y-missing-attribute": "off",
    "semi": [
      "error",
      "always"
    ]
  },
  "settings": {}
}