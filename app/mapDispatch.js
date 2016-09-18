'use strict'

class MapDispatch {
	constructor () {
		this.mapObject = {}
	}
	merge (obj) {
		console.log('-->> merge object in MapDispatch')
		this.mapObject = Object.assign(this.mapObject, obj)
	}
	bind () {
		console.log('-->> bind object in MapDispatch')
		return this.mapObject
	}
}

export default MapDispatch