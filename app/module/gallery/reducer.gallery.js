/*
* @Author: Imam
* @Date:   2016-08-14 23:30:26
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-15 00:42:19
*/

'use strict';

import * as Action from "./action.gallery.js"

const initialState = Config.initialState

// First pattern
const reducerMap = ReduxAction.createReducer({
  [Action.GALLERY_INIT]: GALLERY_INIT
}, initialState);

export default reducerMap;

//==========================================================

function GALLERY_INIT (state, payload) {
	console.log(':: GALLERY_INIT Reducer')
	return Object.assign({}, state, {
		galleries: payload
	})
}