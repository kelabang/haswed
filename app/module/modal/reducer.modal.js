/*
* @Author: Imam
* @Date:   2016-08-14 15:11:44
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-14 16:59:07
*/

'use strict'
import * as Action from "./action.modal.js"

const initialState = Config.initialState

// First pattern
const reducerMap = ReduxAction.createReducer({
  [Action.TOGGLE_MODAL]: TOGGLE_MODAL,
  [Action.RESET_MODAL]: RESET_MODAL,
}, initialState);

export default reducerMap;

//==========================================================

function TOGGLE_MODAL (state, payload) {
	console.log(':: TOGGLE_MODAL Reducer')
	return Object.assign({}, state, {
		modal_status: payload.status,
		modal_body: payload.body,
		modal_custom_style: payload.style,
		modal_custom_backdropstyle: payload.backdrop
	})
}

function RESET_MODAL (state, payload) {
	console.log(':: RESET_MODAL Reducer')
	return Object.assign({}, state, {
		modal_status: false,
		modal_body: null,
		modal_custom_style: null,
		modal_custom_backdropstyle: null
	})
}