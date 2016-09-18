/*
* @Author: Imam
* @Date:   2016-08-17 09:00:49
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-17 10:50:17
*/

'use strict';

class ItemMenu extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		const Link = ReactRouter.Link
		let cn = (this.props.selected)? "block active":"block"
		return (
			<Link className={cn} to={this.props.link}>{this.props.name}</Link>
		)
	}
}

export default ItemMenu