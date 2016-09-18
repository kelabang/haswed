'use strict'

import NotificationBar from './../../../module/notification/component/notificationbar.dump.component.js'

class Header extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		let notificationBar = ""
		if(this.props.notification == "show") notificationBar = <h5 className="remove-margin-all to-right"><NotificationBar count="0"></NotificationBar> notification</h5>
		return (
			<div>
				<h4 className="remove-margin-all to-left">Alpha Open</h4>
				{notificationBar}
			</div>
		)
	}
}

export default Header