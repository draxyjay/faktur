module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: 'source-map',
	entry: './main.ts',
	target: 'electron-main',
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	node: {
		__dirname: false,
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
	},
};
