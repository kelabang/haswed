'use strict'

import Header from './../../../layout/header/component/header.smart.component.js'
import Search from './../../../module/search/component/search.smart.component.js'
import Profile from './../../../module/profile/component/profile.smart.component.js'
import Stream from './../../../module/stream/component/stream.smart.component.js'
import StreamList from './../../../module/stream/component/streamlist.smart.component.js'
import SearchList from './../../../module/search/component/searchlist.smart.component.js'

class LandingMain extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<div className="container">
					<div className="row push-head-5">
						<div className="one-half column">
							<Header></Header>
						</div>
						<div className="one-half column search-react">
							<Search></Search>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="one-half column">
							<div className="row profile-react push-butt-5 remove-margin-bottom">
								<Profile></Profile>
							</div>
							<hr />
							<div className="row stream-react">
								<Stream></Stream>
							</div>
						</div>
						<div className="one-half column streamlist-react">
							<StreamList></StreamList>
						</div>
					</div>
					<div className="one-half column searchlist-react">
						<SearchList></SearchList>
					</div>
				</div>
			</div>
		)
	}
} 

export default LandingMain