/*
* @Author: Imam
* @Date:   2016-08-14 15:11:33
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-14 17:01:07
*/

'use strict';

export const TOGGLE_MODAL = ReduxAction.createAction('TOGGLE_MODAL', (status, body, style, backdrop) => {
	console.log(':: TOGGLE_MODAL Action')
	return {status, body, style, backdrop}
})
export const RESET_MODAL = ReduxAction.createAction('RESET_MODAL', (state) => {
	return {
		state
	}
})

