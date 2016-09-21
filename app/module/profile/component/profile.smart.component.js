'use strict'

import ProfileAlias from "./profilealias.dump.component.js"
import ProfileImage from "./profileimage.dump.component.js"
import ProfileName from "./profilename.dump.component.js"
import ProfileData from "./profiledata.dump.component.js"

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