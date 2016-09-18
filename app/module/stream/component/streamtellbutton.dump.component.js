'use strict'

class StreamTellButton extends React.Component {
	constructor (props) {
		super(props)
	}
	handleClick (a, b, c, d, e) {
		e.preventDefault()
		console.log(arguments)
		console.log('-->> props in tell button', this) // this test 
		this.props.onclick(this.props)
	}
	render () {
		return (
			<input onClick={this.handleClick.bind(this, null, this.props)} className="button-primary remove-padding-all" type="button" value="tell" />
		)
	}
}

export default StreamTellButton