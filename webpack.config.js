const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const port = +process.env.PORT || 7000
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
      port:port
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            exclude: /node_modules/,
            use: 'file-loader'
         }
         // {
         //    test: /\.(js|jsx)$/,
         //    exclude: /node_modules/,
         //    use: [
         //      'babel-loader', // Your Babel loader
         //      'eslint-loader', // Add ESLint loader here
         //    ],
         // },
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ],
   stats: {
    all: false,
    colors: true,
    errors: true,
    warnings: true,
    children: true,
  },
};