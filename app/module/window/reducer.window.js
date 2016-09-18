/*
* @Author: Imam
* @Date:   2016-08-14 15:11:44
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-14 16:47:04
*/

'use strict'
import * as Action from "./action.window.js"

const initialState = Config.initialState

// First pattern
const reducerMap = ReduxAction.createReducer({
  [Action.UPDATE_RESIZE]: UPDATE_RESIZE,
}, initialState);

export default reducerMap;

//==========================================================

function UPDATE_RESIZE (state, payload) {
	console.log(':: UPDATE_RESIZE Reducer')
	return Object.assign({}, state, {
		window_height: payload.height,
		window_width: payload.width
	})
}