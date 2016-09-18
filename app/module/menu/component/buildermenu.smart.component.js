/*
* @Author: d4r
* @Date:   2016-09-04 00:55:30
* @Last Modified by:   d4r
* @Last Modified time: 2016-09-04 14:57:22
*/

'use strict';

class BuilderMenu extends React.Component {
	constructor (props) {
		super(props)
	}
	buildTree (props) {
		console.log(":: buildTree")
		let keys = Object.keys(props).map((v, i) => {
			let cn = ''
			if(v.includes(':')){
				let [z,d] = v.split(':')
				cn = d
				v = z
			}
			if(typeof props[v] == 'object') return (
				<li key={i}>
					<a className={cn} href="#">{Util.uppercaseFirst(v)}</a>
					{this.buildTree(props[v])}
				</li>
			)
			return (
				<li key={i}>
					<a className={cn} href="#">{Util.uppercaseFirst(v)}</a>
				</li>
			)  
		})
		return (
			<ul key={uuid.v4()}>
				{keys}
			</ul>
		)
	}
	render () {
		console.log(':: render')
		const tree = this.buildTree(this.props.schema)
		return (
			<nav id="nav">
				{tree}
			</nav>
		)
	}
}

export default BuilderMenu