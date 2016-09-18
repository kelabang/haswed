/*
* @Author: Imam
* @Date:   2016-08-16 01:04:03
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-28 13:56:58
*/

'use strict';

import * as Action from "./action.testimoni.js"

const initialState = Config.initialState
console.log("in reducer ", Action)
// First pattern
const reducerMap = ReduxAction.createReducer({
  [Action.TESTIMONI_INIT]: TESTIMONI_INIT
}, initialState);

export default reducerMap;

//==========================================================

function TESTIMONI_INIT (state, payload) {
	console.log(':: TESTIMONI_INIT Reducer')
	return Object.assign({}, state, {
		testimonies: payload
	})
}