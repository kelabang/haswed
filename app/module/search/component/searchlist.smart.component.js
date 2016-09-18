'use strict'

import StreamItem from "./../../stream/component/streamitem.dump.component.js"

class SearchList extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<div>
				{
					this.props.StateSearch.map((value) => {
						let streamTime = moment(value.datecreated)
						let nowTime = moment()
						value.relativetime = streamTime.from(nowTime)
						return <StreamItem key={uuid.v4()} username={value.username} content={value.content} datecreated={value.datecreated} relativetime={value.relativetime} meta={value.meta}></StreamItem>
					})
				}
			</div>
		)
	}
}

export default SearchList