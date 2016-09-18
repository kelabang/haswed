/*
* @Author: Imam
* @Date:   2016-08-15 22:57:43
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-28 14:03:53
*/

'use strict';

class TestimoniItem extends React.Component {
	constructor (props) {
		super(props)
	}
	filterName (path) {
		if(!path) return ''
		return path.split('/').pop(-1)
	}
	render() {
		let {item, selected} = this.props
		let cn = (selected == item.id)? " active ": ""
		let name = item.content
		return (
			<tr key={item.id} onClick={this.props.onShowDetail.bind(this)} className={cn}>
				<td>
					{name}
				</td>
			</tr>
		)
	}
}

export default TestimoniItem