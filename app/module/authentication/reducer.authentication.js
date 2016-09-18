'use strict'
import * as Action from "./action.authentication.js"

const initialState = Config.initialState

// First pattern
const reducerMap = ReduxAction.createReducer({
  [Action.AUTH_LOGIN]: AUTH_LOGIN,
  [Action.AUTH_LOGIN_FAIL]: AUTH_LOGIN_FAIL,
  [Action.AUTH_LOGOUT]: AUTH_LOGOUT,
  [Action.AUTH_SIGNUP]: AUTH_SIGNUP,
}, initialState);

export default reducerMap;

//==========================================================
function AUTH_LOGOUT (state, payload) {
	console.log(':: AUTH_LOGOUT')
	return Object.assign({}, state, {
		loggedIn: false
	})
}

function AUTH_LOGIN_FAIL (state, payload) {
	console.log(' -->> reducer AUTH_LOGIN_FAIL ')
	return Object.assign({}, state, {
		loggedIn: false
	})
}

function AUTH_LOGIN (state, payload) {
	console.log(' -->> reducer AUTH_LOGIN ')
	return Object.assign({}, state, {
		loggedIn: true,
		user: payload
	})
}

function AUTH_SIGNUP (state, payload) {
	console.log(' -->> reducer AUTH_SIGNUP ')
	return Object.assign({}, state)
}