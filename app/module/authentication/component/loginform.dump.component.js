'use strict'

class LoginForm extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		// const {fields: {user, password}, handleSubmit} = this.props;
		return (
			<form >
			  <label for="userInput">Username or Email</label>
			  <input className="u-full-width" type="text" placeholder="test@mailbox.com"  />
			  <label for="passwordInput">Password</label>
			  <input className="u-full-width" type="password" placeholder="password here" />
			  <input className="button-primary" type="submit" value="Submit" />
			</form>	
		) 
	}
}

// LoginForm.propTypes = {
//   fields: React.PropTypes.object.isRequired,
//   handleSubmit: React.PropTypes.func.isRequired
// }

// LoginForm = ReduxForm.reduxForm({
//   form: 'login',                           
//   fields: ['user', 'password'] 
// })(LoginForm)

export default LoginForm