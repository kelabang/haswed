'use strict'

import ProfileImage from "./../../profile/component/profileimage.dump.component.js"

import StreamAddForm from "./streamaddform.dump.component.js"

class Stream extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<div className="two columns">
					<ProfileImage></ProfileImage>
				</div>
				<div className="ten columns">
					<StreamAddForm></StreamAddForm>
				</div>
			</div>
		)
	}
}

export default Stream