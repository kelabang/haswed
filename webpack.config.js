'use strict'

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const BUILD_DIR = path.resolve(__dirname, 'output')
const APP_DIR = path.resolve(__dirname, '')

// const loadProvide = (file) => {
// 	console.log('-- load provide execute --')
// 	console.log(file)
// 	let content = fs.readFileSync(file, 'utf8')
// 	let contentObj = JSON.parse(content)

// 	let _contentObj = loopThrough(contentObj)
// 	console.log(_contentObj)
// 	return file
// }

// const loopThrough = (contentObj) => {
// 	console.log('-- loop loopThrough')
// 	let buffer = {}
// 	for(let key in contentObj){
// 		if(typeof contentObj[key] != 'object') {
// 			console.log(contentObj[key])
// 			buffer[key] = contentObj[key]
// 			continue
// 		}
// 		let _content = loopThroughArray(key, contentObj[key])
// 		Object.assign(buffer, _content) // thx object assighn :3
// 	}
// 	return buffer
// }

// const renameVar = (name) => {
// 	name = name.split('.')
// 	console.log(name)
// }

// const loopThroughArray = (contentKey, contentArray) => {
// 	let buffer = {}
// 	contentArray.map((i, index) => {
// 		let deps = fs.readFileSync(__dirname + '/' + contentKey + '/' + i + '/dependency.json', 'utf8')
// 		let _deps = JSON.parse(deps)
// 		for(let key in _deps) {
// 			let path = __dirname + '/' + contentKey + '/' + i + '/' + _deps[key]
// 			buffer[key] = path
// 		} 
// 	})
// 	return buffer
// }

// let DependencyTree = loadProvide(__dirname + '/dependency.json')

let DependencyTree = {
    "React": "react",
    "ReactDOM": "react-dom",
    "Provider": "react-redux",
    "Redux": "redux",
    "ReduxAction": "redux-act",
    "ReduxRouter": "redux-router",
    "ReactRouter": "react-router",
    "ReactRedux": "react-redux",
    "ReduxForm": "redux-form",
    "moment": "moment",
    "uuid": "node-uuid", 
    "HTMLtoReact": "html-to-react",
    "Thunk": "redux-thunk",
    "ReduceReducers": "reduce-reducers",
    "Path": "path",
    "Config": path.resolve(__dirname, "app/config.js"),
    "Actions": path.resolve(__dirname, "app/lib/action.lib.js"),
    "API": path.resolve(__dirname, "app/lib/api.lib.js"),
    "Util": path.resolve(__dirname, "app/lib/util.lib.js")
}

const config = {
	entry: ['whatwg-fetch', APP_DIR + '/index.js'],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.ProvidePlugin(DependencyTree),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false,
		        comments: false
		    }
		}),
		new webpack.optimize.DedupePlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
	},
	module : {
		loaders : [
			{
				exclude: /node_modules/,
				test : /\.js?/,
				test1 : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.json$/, loader: 'json'}
		]
	},
}

module.exports = config