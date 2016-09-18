/*
* @Author: Imam
* @Date:   2016-07-31 16:57:29
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-21 01:05:45
*/

'use strict'

class IndexRegister extends React.Component {
	constructor (props) {
		super(props)
	}
	signupHandler (e) {
		console.log(':: signupHandler')
		e.preventDefault()
		console.log('>> fetch ', fetch)
		this.props.dispatch(Actions.AUTH_SIGNUP_SUBMIT(this.refs.email.value, this.refs.username.value, this.refs.password.value, this.refs.username.value))
	}
	render () {
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
			          	<ReactRouter.Link to="/login">
			          	<button id="logingateway" className="button-primary" >
			          	Login
			          	</button>
			          	</ReactRouter.Link>
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
			</div>
			<div className="container">
			  <form onSubmit={this.signupHandler.bind(this)}>
			    <div className="row">
			      <div className="three columns " style={
			      	{"color":"white"}
			      }>
			        .
			      </div>
			      <div className="six columns ">
			        <h4 className="remove-margin-all">Sign Up</h4>
			        <h6>It's free. :3</h6>
			        <label for="email">email</label>
			        <input ref="email" className="u-full-width" type="email" placeholder="eg: imam@yahoo.co" id="email"/>
			        <label for="username">username</label>
			        <input ref="username" className="u-full-width" type="text" placeholder="eg: catty" id="username"/>
			        <label for="password">password</label>
			        <input ref="password" className="u-full-width" type="password" placeholder="insert password here" id="password"/>
			        <label for="confirmpassword">confirm password</label>
			        <input ref="confpassword" className="u-full-width" type="password" placeholder="insert confirmation password here" id="confirmpassword"/>
			        <input className="button-primary remove-padding-all" type="submit" value="sign up"/>
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
	return Object.assign({}, state)
})(IndexRegister) 