'use strict'

import ProfileAlias from "./profilealias.dump.Component.js"
import ProfileImage from "./profileimage.dump.Component.js"
import ProfileName from "./profilename.dump.Component.js"
import ProfileData from "./profiledata.dump.Component.js"

class Profile extends React.Component {

	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div>
				<div className="one-third column">
					<ProfileImage></ProfileImage>
					<ProfileName></ProfileName>
					<ProfileAlias></ProfileAlias>
				</div>
				<div className="two-thirds column">
					<ProfileData></ProfileData>
				</div>
			</div>
		)
	}

}

export default Profile