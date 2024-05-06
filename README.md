# Project Setup Guide

## 1. Initialize Project
Start by creating a new directory for your project and navigating into it using your terminal.

## 2. Initialize npm
Run `npm init` to create a `package.json` file. Follow the prompts to set up your project details.

## 3. Install Dependencies
```bash
npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env webpack-dev-server webpack-bundle-analyzer --save-dev

4. Create Project Structure
Create the following directory structure:

- /src
  - index.js
- /dist
- webpack.config.js
- package.json

5. Configure Babel
Create a file named .babelrc in the root directory and add the following content:

{
  "presets": ["@babel/preset-env"]
}

6. Configure Webpack
Create a file named webpack.config.js in the root directory and add the following configuration:

// webpack.config.js
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};

7. Create Test Files
Create any additional JavaScript files in the src directory and import them dynamically in index.js to test dynamic imports.

8. Build and Test the Project
Building: Run npx webpack in the terminal. This will generate a bundle.js file in the dist directory.
Testing Dynamic Imports: Check the output bundle.js file to verify that dynamic imports are working as expected.
Tree Shaking: To verify tree shaking, analyze the generated bundle using the webpack-bundle-analyzer. After running npx webpack, open the generated report at http://localhost:9000 in your browser to view the visualization of your bundle and identify any unnecessary code that can be removed.
9. Start Development Server
Run npx webpack serve in the terminal to start the webpack development server. Access your application at http://localhost:9000 in your browser.


Following these steps should help you set up your project with Webpack and Babel, build, test, and verify dynamic imports and tree shaking.
