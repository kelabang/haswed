'use strict'

class Search extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		
		return (
			<form>
		      <div className="row">
		        <div className="nine columns">
		          <input className="u-full-width" type="search" placeholder="search open trip" id="search-area" />
		        </div>
		        <div className="three columns">
		          <input className="button-primary remove-padding-all" type="submit" value="Search" />
		        </div>
		      </div>
		    </form>
		)
	}
}

export default Search