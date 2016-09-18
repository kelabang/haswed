'use strict'

class ProfileAlias extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		let toStyle = {
			"marginBottom": 0
		}
		return (
			<h6 style={toStyle}>
				<a href="#">@kelabang</a>
			</h6>
		)
	}
}

export default ProfileAlias