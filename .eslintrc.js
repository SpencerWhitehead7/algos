const baseConfig = require(`./.eslintrcBase`)

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "no-console": 0,
    "no-use-before-define": 0,
  },
}
