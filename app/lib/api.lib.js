/*
* @Author: Imam
* @Date:   2016-08-09 23:01:28
* @Last Modified by:   Imam
* @Last Modified time: 2016-11-03 02:21:41
*/

'use strict';

const host = "http://localhost:3000"

const username = "ma4m"

export function getUser (username) {
	console.log(':: getUser')
	const location = host + "/user/" + username
	return fetch(location, {
		method: "GET",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Util.getLocalUser().access_token
		},
		mode: 'cors'	
	}).then((response) => {
		return response.json()
	}) 
}

export function getAllTestimoni() {
	const location = host + "/testimoni_all"
	return fetch(location, {
		method: "GET",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		mode: 'cors'
	}).then((response) => {
		return response.json()
	})
}

export function getAllGallery() {
	const location = host + "/gallery"
	return fetch(location, {
		method: "GET",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Util.getLocalUser().access_token
		},
		mode: 'cors'
	}).then((response) => {
		return response.json()
	})
}

export function addTestimoni(content,image) {
	const location = host + "/testimoni"
	return fetch(location, {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		mode: "cors",
		body: JSON.stringify({
			content,
			images: [image]
		})
	})
}

export function enableTestimoni (id) {
	const location = host + '/testimoni/enable'
	return fetch(location, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Util.getLocalUser().access_token
		},
		mode: 'cors',
		body: JSON.stringify({
			id
		})
	}).then((response) => {
		return response.json()
	})
}

export function disableTestimoni (id) {
	const location = host + '/testimoni/disable'
	return fetch(location, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Util.getLocalUser().access_token
		},
		mode: 'cors',
		body: JSON.stringify({
			id
		})
	}).then((response) => {
		return response.json()
	})
}

export function addGallery(user_id, name, caption, server, meta) {
	const location = host + "/gallery"
	return fetch(location, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + Util.getLocalUser().access_token
		},
		mode: 'cors',
		body: JSON.stringify({
			name,
			caption,
			server,
			username,
			meta
		})
	}).then((response) => {
		return response.json()
	})
}

export function refresh (refresh_token) {
	const location = host + "/auth/refresh"
	return fetch(location, {
		method: "POST",
		headers: {
			"Authorization": "Bearer " + refresh_token,
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({}),
		mode: 'cors'
	})
	.then((response) => {
		return response.json()
	})
}

export function login (username, password) {
	const location = host + "/auth/login"
	return fetch(location, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		body: JSON.stringify({
			username,
			password
		})
	}).then((response) => {
		return response.json()
	})
} 

export function register (email, username, password, name) {
	console.log(':: register')
	const location = host + "/auth/register"
	const body = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		body: JSON.stringify({
			email,
			username,
			password,
			name
		})
	}
	return fetch(location, body).then((response) => {
		return response.json()
	})
}