'use strict'

class ProfileData extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className="row">
		      <div className="twelve columns">
		        <a href="#">0</a> joined | <a href="#">0</a> pending | <a href="#">0</a> canceled                
		      </div>
		      <div className="twelve columns">
		        <a href="#">0</a> followers | <a href="#">0</a> following
		      </div>
		    </div>
		)
	}
}

export default ProfileData