'use strict'

class StreamItem extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		const parser = HTMLtoReact.Parser(React)
		let ReactComponent = parser.parse('<p>' + this.props.content + '</p>')
		return (
			<div className="twelve column stream">
				<h7>
					<a href="#">@{this.props.username}</a> 
					<small className="dot"></small> 
					{this.props.relativetime}
				</h7>
				{ReactComponent}
				<img className="width-full beround" src="template/skeleton/images/monte-carlo.jpg" />	
				<ul className="horizontal">
				  <li><a href="#">{this.props.meta.reply} reply</a></li>
				  <li><a href="#">{this.props.meta.vote} vote</a></li>
				</ul>
			</div>
		)
	}
}

export default StreamItem