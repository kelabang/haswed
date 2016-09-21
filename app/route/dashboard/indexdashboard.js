/*
* @Author: Imam
* @Date:   2016-07-31 16:49:27
* @Last Modified by:   Imam
* @Last Modified time: 2016-09-22 00:30:27
*/

'use strict'

// import GalleryItem from './../../module/gallery/component/galleryitem.dump.component.js'
import ItemMenu from "./../../module/menu/component/itemmenu.dumb.component.js"

class IndexDashboard extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			menu: [
				{
					id: 1,
					name: "testimoni",
					linkTo: "/dashboard/testimoni"
				},
				{
					id: 2,
					name: "gallery",
					linkTo: "/dashboard/gallery"
				}
			],
			file: null, 
			imagePreviewUrl: null,
			selected: 0,
			selectedItem: null
		}
	}
	componentDidMount() {
		console.log(":: componentDidMount")
	}
	componentWillMount() {
		console.log(":: componentWillMount")
	}
	renderMenu () {
		let menu = this.state.menu.map((v,i) => {
			let selected = (this.props.location.pathname == v.linkTo)? true: false
			return (
				<li>
					<ItemMenu key={v.id} selected={selected} link={v.linkTo} name={v.name} />
				</li>
			)
		})
		return menu
	}
	render() {
		return (
			<div className="pad5top pad5right">
				<div className="row">
					<div className="ten columns center">Dashboard</div>
					<div className="two columns center">
						<div className="dropdown">
						  <div className="dropbtn">Menu</div>
						  <div className="dropdown-content">
						    <ReactRouter.Link to="/logout">logout</ReactRouter.Link>
						  </div>
						</div>
					</div>
				</div>					
				<div className="row pad5top ">
					<div className="two columns sidemenu right">
						<ul>
							{this.renderMenu()}
						</ul>
					</div> 
					<div className="ten columns ">
						{this.props.children}
					</div> 
				</div>
			</div>
		)
	}
}

export default IndexDashboard