'use strict'

import NotificationBar from './notificationbar.dump.component.js'

class Notification extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<NotificationBar count="0"></NotificationBar> notification
			</div>
		)
	}
}

export default Notification