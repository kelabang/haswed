/*
* @Author: Imam
* @Date:   2016-08-09 21:05:29
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-09 21:27:51
*/

'use strict';

import * as Action from "./../action.js"

let actionlist = {}
Object.keys(Action).map((name) => {
	Object.keys(Action[name]).map((mod_name) => {
		actionlist[mod_name] = Action[name][mod_name]
	})
})
module.exports = actionlist