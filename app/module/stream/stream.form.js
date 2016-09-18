'use strict'

class StreamAddForm extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		
		// const {fields: {firstName, lastName, email}, handleSubmit} = this.props;

		return (
			<form >

			</form>
			<form >
				<div className="row">
					<div className="eight columns">
						<StreamTell></StreamTell>
					</div>
					<div className="four columns">
						<StreamTellButton ></StreamTellButton>
					</div>
				</div>
			</form>
		)
	}
}

// StreamAddForm = ReduxForm.reducer({
// 	form: 'StreamAdd',
// 	fields: ['firstName', 'Lastname', 'Email']
// })(StreamAddForm)

exports default StreamAddForm