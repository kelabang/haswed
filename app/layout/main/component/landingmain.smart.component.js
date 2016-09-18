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
		let StateStore = {
			"StreamList": [],
			"SearchList": []
		}
		if(this.props.StateStore) {
			StateStore = Object.assign({}, this.props.StateStore)
		}
		return (
			<div>
				<div className="container">
					<div className="row push-head-5">
						<div className="one-half column login">
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
								<Stream onadd={this.props.add_stream} ></Stream>
							</div>
							<StreamList StateStream={StateStore.StreamList}></StreamList>
						</div>
						<div className="one-half column searchlist-react">
							<SearchList StateSearch={StateStore.SearchList}></SearchList>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default LandingMain