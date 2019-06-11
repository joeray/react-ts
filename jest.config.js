module.exports = {
  collectCoverageFrom: ["__test__/**/*.{js,jsx,mjs}"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    },
    __TRANSFORM_HTML__: true,
  },
  moduleNameMapper: {
    ".*scss$": "<rootDir>stub.scss"
  }
};