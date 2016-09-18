'use strict'

class NotificationBar extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return React.createElement("a", null, this.props.count)
	}
}

export default NotificationBar