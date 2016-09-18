/*
* @Author: Imam
* @Date:   2016-07-31 16:57:29
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-28 20:57:45
*/

'use strict'

import createHashHistory from 'history/lib/createHashHistory'
const appHistory = ReactRouter.useRouterHistory(createHashHistory)({queryKey: false})

class IndexLogout extends React.Component {
	constructor (props) {
		console.log(':: constructor IndexLogout')
		super(props)
	}
	componentWillMount() {
		console.log(':: componentWillMount')
		this.props.dispatch(Actions.AUTH_LOGOUT())
	}
	componentDidMount() {
		console.log(':: componentDidMount')
		console.log(this.props.loggedIn)
	}
	render () {
		console.log(':: render logout')
		if(!this.props.loggedIn) {
			appHistory.push('/')
		} 
		return null		
	}
}

export default ReactRedux.connect((state) => {
	console.log(":: connect state ", state)
	return {
		loggedIn: state.loggedIn
	}
})(IndexLogout) 