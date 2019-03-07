const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|.web.js|web.jsx)$/,
        exclude: [/node_modules/],
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: false,
          presets: ["react-app"],
          plugins: [
            [
              "module-resolver",
              {
                alias: {
                  "react-native": "./node_modules/react-native-web",
                  "react-native-linear-gradient$": "react-native-web-linear-gradient",
                  "react-native-svg$": "svgs"
                }
              }
            ]
          ],
          cacheDirectory: true
        }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "url-loader",
          options: { name: "[name].[ext]" }
        }
      }
    ]
  },
  resolve: { extensions: [".web.js", ".web.jsx", ".js", ".jsx"] }
};
