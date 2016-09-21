/*
* @Author: Imam
* @Date:   2016-08-14 19:03:35
* @Last Modified by:   Imam
* @Last Modified time: 2016-09-21 22:10:57
*/

'use strict';
import * as main from './main.lib.js'
import Auth0 from 'auth0-js'
const pub_ospry = "pk-test-2yfxh24n49ljvvajuzm1rxv6"
const sub_ospry = "polar-acai"
const dom_ospry = "ospry.io"
const api_domain = "http://104.199.140.83:3000"
const  auth0 = new Auth0({
      clientID: 'isGktOP2m3Q1f8d3219eik5QKCu3bOcV',
      domain: 'kelabang.au.auth0.com',
      callbackOnLocationHash: true
    });

export const Main = main 

export function isJSON (strjson) {
    try {
        JSON.parse(strjson) 
    } catch (e) {
        return false
    }
    return true
}

export function getDataProfile () {
	console.log(':: getDataProfile')
	const path = "https://kelabang.au.auth0.com/tokeninfo"	
	const tw = getAuthTwitter()
	const header = {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }
	const body = new FormData()
	body.append('id_token', tw.id_token)
	const options = {
		headers: new Headers(header),
		method: 'POST',
		body: JSON.stringify({
			id_token: tw.id_token
		})
	}
	return fetch(path, options).then((response) => {
		if(response.status == 401) return false
		return response.json()
	})
}

export function getPublicTestimoni () {
	console.log(':: getPublicTestimoni')
	const path = api_domain+'/testimoni'
	const header = {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }
	const options = {
		headers: new Headers(header),
		method: 'GET'
	}
	return fetch(path, options).then((response) => {return response.json()})
}

export function submitTestimoni (name, content, image, alias, user_id, type) {
	console.log(':: submitTestimoni')
	const path = api_domain+'/testimoni'
	const header = {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }
	content = JSON.stringify({
		name,
		content,
		image,
		alias,
		user_id,
		type
	})
	const options = {
		headers: new Headers(header),
		method: 'POST',
		body: JSON.stringify({
			content
		})
	}
	return fetch(path, options).then((response) => {return response.json()})
}

export function setAuthTwitter (query) {
	console.log(":: setAuthTwitter")
	localStorage.setItem("at", query.access_token)
	localStorage.setItem("it", query.id_token)
	localStorage.setItem("tt", query.token_type)
	return true
}

export function getAuthTwitter () {
	let access_token = localStorage.getItem("at")
	let id_token = localStorage.getItem("it")
	let token_type = localStorage.getItem("tt")
	return {
		access_token,
		id_token,
		token_type
	}
}

export function parseQueryString (queryString) {
	console.log(':: parseQueryString')
	let params = {}, queries, temp, i, l;
	// Split into key/value pairs
	queries = queryString.split("&");
	// Convert the array of strings into an object
	for ( i = 0, l = queries.length; i < l; i++ ) {
	    temp = queries[i].split('=')
	    params[temp[0]] = temp[1]
	}
	return params
}

export function twitterLogin () {
	console.log(':: twitterLogin')
	return auth0.login({
		connection: 'twitter'
	})
}

export function uppercaseFirst (string) {
	console.log(':: UppercaseFirst')
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const upload = (image) => {
	console.log(':: upload')
}
export const upload_ospry = (image) => {
	console.log(':: upload_ospry')
	return new Promise((resolve, reject) => {
		const ospry = new Ospry(pub_ospry)
		ospry.up({
			files: [image],
			imageReady: (err, metadata, index) => {
				console.log(':: imageReady')
				if (err === null) {
					console.log('Image uploaded to: ' + metadata.url);
					metadata.server = sub_ospry + '.' + dom_ospry
					return resolve(metadata)
				}
				reject(err)
			},
			done: () => {
				console.log(':: done')
			}
		})
	})
}
export function resetLocalUser () {
	localStorage.clear()
}
export function storeLocalUser (data) {
	console.log(':: storeLocalUser ', data)
	localStorage.setItem("ac", btoa(data.access_token)) 
	localStorage.setItem("rf", btoa(data.refresh_token)) 
	localStorage.setItem("em", btoa(data.user.email))
	localStorage.setItem("fn", btoa(data.user.firstname))
	localStorage.setItem("ln", btoa(data.user.lastname))
	localStorage.setItem("id", btoa(data.user.id))
	localStorage.setItem("un", btoa(data.user.username))
}
export function getLocalUser () {
	console.log(':: getLocalUser ')
	let access_token = atob(localStorage.getItem("ac"))
	let refresh_token = atob(localStorage.getItem("rf"))
	let email = atob(localStorage.getItem("em"))
	let firstname = atob(localStorage.getItem("fn"))
	let lastname = atob(localStorage.getItem("ln"))
	let id = atob(localStorage.getItem("id"))
	let username = atob(localStorage.getItem("un"))
	return {
		access_token,
		refresh_token,
		user:{
			email,
			firstname,
			lastname,
			id,
			username
		}
	}
}
