module.exports = {
  testMatch: ['**/tests/**/*.spec.{js,ts}'],
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  transformIgnorePatterns: ["node_modules/(?!axios)"],
}
