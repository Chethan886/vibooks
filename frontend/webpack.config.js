module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!mdb-react-ui-kit)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining'
              ]
            }
          }
        }
      ]
    }
  };
  