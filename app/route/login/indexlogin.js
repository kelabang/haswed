/*
* @Author: Imam
* @Date:   2016-07-31 16:57:29
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-21 16:31:00
*/

'use strict'

import createHashHistory from 'history/lib/createHashHistory'
const appHistory = ReactRouter.useRouterHistory(createHashHistory)({queryKey: false})

class IndexLogin extends React.Component {
	constructor (props) {
		super(props)
	}
	loginHandler (e) {
		console.log(':: loginHandler')
		e.preventDefault()
		this.props.dispatch(Actions.AUTH_LOGIN_SUBMIT(this.refs.username.value, this.refs.password.value))
	}
	render () {
		console.log(':: render ')
		if(this.props.loggedIn) return appHistory.push('/')
		return (
			<div>
			<div className="container">
			  <div className="row push-head-5">
			    <div className="one-half column ">
			      <h4 className="remove-margin-all to-left">Kitten CMS</h4>
			    </div>
			    <div className="one-half column ">
			      <form>
			        <div className="row">
			          <div className="four columns" style={
			          	{"display":"block","color":"white"}
			          }>
			          .  
			          </div>
			          <div className="five columns">
			            <input id="logintwittergateway" className="button-primary remove-padding-all" type="button" value="Login using twitter" />
			          </div>
			          <div className="three columns">
			            <input id="logingateway" className="button-primary remove-padding-all" type="button" value="Login" />
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
			</div>
			<div className="container">
			  <form onSubmit={this.loginHandler.bind(this)}>
			    <div className="row">
			      <div className="three columns " style={
			      	{"color":"white"}
			      }>
			        .
			      </div>
			      <div className="six columns ">
			        <h4 className="remove-margin-all">Login</h4>
			        <h6></h6>
			        <label for="email">username</label>
			        <input ref="username" className="u-full-width" type="text" placeholder="eg: ma4m" id="username"/>
			        <label for="password">password</label>
			        <input ref="password" className="u-full-width" type="password" placeholder="insert password here" id="password"/>
			        <input className="button-primary remove-padding-all" type="submit" value="login"/>
			        <ReactRouter.Link className="button-primary remove-padding-all" to="/register">Register</ReactRouter.Link>
			      </div>
			      <div className="three columns " style={
			      	{"color":"white"}
			      }>
			        .
			      </div>
			    </div>          
			  </form>
			</div>
			<div id="tripmodal"></div>
			</div>
		)
	}
}

export default ReactRedux.connect((state) => {
	console.log(":: connect state ", state)
	return {
		loggedIn: state.loggedIn
	}
})(IndexLogin) 