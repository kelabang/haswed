/*
* @Author: Imam
* @Date:   2016-08-16 01:03:53
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-28 15:50:31
*/

'use strict';

export const TESTIMONI_INIT = ReduxAction.createAction('TESTIMONI_INIT', (state) => {
	console.log('> redux action ', state)
	return state
})


export function TESTIMONI_RETRIEVE_ALL () {
	console.log(':: TESTIMONI_RETRIEVE_ALL')
	return (dispatch) => {
		API .getAllTestimoni()
			.then((testimonies) => {
				console.log('> execute reducer ', testimonies)
				dispatch(TESTIMONI_INIT(testimonies.data))
			})
	}
}

export function TESTIMONI_ADD (caption, image) {
	console.log(":: TESTIMONI_ADD")
	return (dispatch) => {
		Util.upload_ospry(image)
			.then((meta) => {
				let name = meta.url
				let server = meta.server
				meta = JSON.stringify(meta)
				API.addTestimoni(caption, {
					name,
					server,
					meta,
				}).then((data) => {
					console.log('>> response store')
					console.log(data)
					dispatch(TESTIMONI_RETRIEVE_ALL())
				}).catch((err) => {
					console.error(err)
				})
			})
	}
}