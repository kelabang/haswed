/*
* @Author: Imam
* @Date:   2016-08-14 15:11:33
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-14 16:47:22
*/

'use strict';

export const UPDATE_RESIZE = ReduxAction.createAction('UPDATE_RESIZE', (height, width) => {
	console.log(':: UPDATE_RESIZE Action')
	return {height, width}
})

