'use strict'

import Header from './../../../layout/header/component/header.smart.component.js'
import LoginForm from './../../../module/authentication/component/loginform.dump.component.js'

class Login extends React.Component {
	constructor (props) {

		super(props)

	}
	render () {
		
		const {
			handleSubmitLogin
		} = this.props

		return (
			<div>
				<div className="container">
					<div className="row push-head-5">
						<div className="one-half column login">
							<Header notification="hide"></Header>
						</div>
						<div className="one-half column search-react">
						</div>
					</div>
				</div>
				<div className="container login">
					<LoginForm onSubmit={handleSubmitLogin}></LoginForm>
				</div>
			</div>

		)
	}
}

const mapDispatchToProps = (dispatch) => {
   return {
      handleSubmitLogin: (id, pass) => {
      	console.log('-->> handle submit login', id + pass)
      }
   }
}

const mapStateToProps = (state) => {
	return {
		errors: state.errors
	}
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Login)