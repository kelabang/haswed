/*
* @Author: Imam
* @Date:   2016-07-31 23:07:24
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-28 13:53:06
*/

'use strict';

let configMap = {}

//=== DIRECTORY ===
configMap.BASEDIR = (uri) => {
	return Path.parse(uri)
}

//=== INITIAL APP STATE VALUES ==============================================================
configMap.initialState = {
	galleries: [],
	testimonies: [],
	loggedIn: false,
	user: {},
	window_height: 0,
	window_width: 0,
	modal_status: false,
	modal_body: null,
	modal_custom_style: null,
	modal_custom_backdropstyle: null
}

console.log(">> read config ", uuid.v4())

module.exports = configMap