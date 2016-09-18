'use strict'

export const AUTH_LOGIN = ReduxAction.createAction('AUTH_LOGIN', state => {return state})
export const AUTH_LOGIN_FAIL = ReduxAction.createAction('AUTH_LOGIN_FAIL')


export const AUTH_REFRESH = function () {
	return (dispatch) => {
		console.log(':: AUTH_REFRESH')
		return API	.refresh(Util.getLocalUser().refresh_token)
					.then((data) => {
						if(data.error || data.status == 500) {
							dispatch(AUTH_LOGIN_FAIL())
							return data
						}
						console.log('>> login success')
						console.log(data)
						dispatch(AUTH_LOGIN(data.data.user))
						return data
					})
					.catch((err) => {
						console.log('-->> response catch user')
						console.error(err)
					})
	}
}

export const AUTH_LOGOUT = () => {
	Util.resetLocalUser()
	return (dispatch) => {
		return dispatch(AUTH_REFRESH())
	}
}

export const CHECK_USER = function (username) {
	return (dispatch) => {
		console.log(':: CHECK_USER')
		return API	.getUser(Util.getLocalUser().user.username)
					.then((data) => {
						console.log('-->> response get user')
						if(data.error) {
							dispatch(AUTH_LOGIN_FAIL())
							return data
						}
						dispatch(AUTH_LOGIN())
						return data
					})
					.catch((err) => {
						console.log('-->> response catch user')
						console.error(err)
					})
	} 
}

export const AUTH_LOGIN_SUBMIT = function (username, password) {
	return (dispatch) => {
		console.log(':: AUTH_LOGIN_SUBMIT')
		console.log(username, password)
		API.login(username, password).then((res) => {
			console.log(">> response login", res)
			if(res.error){
				return false
			}
			Util.storeLocalUser(res.data)
			dispatch(AUTH_LOGIN())
		})
	}
}

export const AUTH_SIGNUP = ReduxAction.createAction('AUTH_SIGNUP')

export const AUTH_SIGNUP_SUBMIT = function (email, username, password, name) {
	return (dispatch) => {
		console.log(':: AUTH_SIGNUP_SUBMIT')
		console.log(email, username, password, name)
		console.log(API)
		API.register(email, username, password, name).then((res) => {
			console.log(res)
		})
	}
}  