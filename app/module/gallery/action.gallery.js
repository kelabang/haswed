/*
* @Author: Imam
* @Date:   2016-08-14 23:30:18
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-27 23:30:11
*/

'use strict';

export const GALLERY_INIT = ReduxAction.createAction('GALLERY_INIT', (state) => {
	return state
})

export function GALLERY_RETRIEVE_ALL () {
	console.log(":: GALLERY_RETRIEVE_ALL")
	return (dispatch) => {
		API.getAllGallery().then((body) => {
			console.log('>> response ', body.message)
			dispatch(GALLERY_INIT(body.data))
		})
	}
}

export function GALLERY_ADD (caption, image) {
	console.log(":: GALLERY_ADD")
	return (dispatch) => {
		Util.upload_ospry(image)
			.then((meta) => {
				let name = meta.url
				let server = meta.server
				let user_id = Util.getLocalUser().user.id
				meta = JSON.stringify(meta)
				API.addGallery(user_id, name, caption, server, meta).then((data) => {
					console.log('>> response store')
					console.log(data)
					dispatch(GALLERY_RETRIEVE_ALL())
				}).catch((err) => {
					console.error(err)
				})
			})
	}
}