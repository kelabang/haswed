'use strict'

class StreamAddForm extends React.Component {
	constructor (props) {
		super(props)
	}
	submit (e) {
		e.preventDefault()
		const {fields: {content}, onadd} = this.props;
		console.log(content , '-->> in content')
		console.log(this.props, '-->> in submit')
		console.log('submit')
	}
	render () {
		
		const {fields: {content}} = this.props;

		return (
			<form onSubmit={this.submit.bind(this)}>
				<div className="row">
					<div className="eight columns">
						<textarea className="u-full-width" placeholder="What's on today?" {...content}></textarea>
					</div>
					<div className="four columns">
						<input className="button-primary remove-padding-all" type="submit" value="tell" />
					</div>
				</div>
			</form>
		)
	}
}

// StreamAddForm = ReduxForm.reduxForm({
// 	form: 'StreamAdd',
// 	fields: ['content']
// })(StreamAddForm)

export default StreamAddForm