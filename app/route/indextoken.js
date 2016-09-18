/*
* @Author: d4r
* @Date:   2016-09-12 20:17:17
* @Last Modified by:   d4r
* @Last Modified time: 2016-09-13 19:01:56
*/

'use strict';

class IndexToken extends React.Component {
	constructor (props) {
		super (props)
	}
	componentDidMount() {
		console.log(":: componentDidMount")
		console.log(this.context.router)
		console.log(this.props)
		console.log(this.props.routeParams.splat)
		let query = Util.parseQueryString(this.props.routeParams.splat)
		console.log('query')
		console.log(query)
		if(Util.setAuthTwitter(query)) return window.location ='/haswed'
	}	
	render () {
		console.log(':: render')
		return (
			<div >
			ini page token
			</div>
		)
	}
}

export default IndexToken