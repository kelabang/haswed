/*
* @Author: Imam
* @Date:   2016-08-16 00:31:32
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-29 23:18:04
*/

'use strict';

import GalleryItem from './../../module/gallery/component/galleryitem.dump.component.js'

class DashboardGallery extends React.Component {
	constructor (props) {
		super(props)
		this.selected = ""
		this.state = {
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
		this.props.dispatch(Actions.GALLERY_RETRIEVE_ALL())
	}
	toogleModal (e) {
		e.preventDefault()
		console.log(':: toogleModal')
		const style = {
			width: (this.props.window_width/100)*80,
		}
		this.props.dispatch(Actions.TOGGLE_MODAL('true', this.renderModal(), style))
	}
	closeModal (e) {
		e.preventDefault()
		console.log(':: closeModal')
		this.props.dispatch(Actions.RESET_MODAL())
	}
	onSubmit (e) {
		e.preventDefault()
		console.log(':: onSubmit')
	}
	onAddPicture (e) {
		e.preventDefault()
		console.log(':: onAddPitcure')
		this.toogleModal(e)
	}
	handleSubmitAdd (e) {
		e.preventDefault()
		console.log(':: handleSubmitAdd')
		let caption = document.getElementById('caption-modal').value
		let file = this.state.file
		this.props.dispatch(Actions.GALLERY_ADD(caption, file))
		this.closeModal(e)
		console.log('>> processing upload thirdparty')
	}
	handleImageChange(e) {
		e.preventDefault()
		console.log(':: handleImageChange')
		let reader = new FileReader();
	    let file = e.target.files[0];
	    console.log('>> read file', file)
	    reader.onloadend = () => {
	    	console.log(':: onload complete')
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
			const imagePreview = document.getElementById("imagePreview")
			const img = document.createElement("img")
			img.className="preview u-max-full-width"
			img.src=reader.result
			img.id="imagePreview"
			imagePreview.parentNode.replaceChild(img, imagePreview)
	    }
	    reader.readAsDataURL(file)

	}
 	renderModal () {
 		console.log(':: rendermodal')
 		let {imagePreviewUrl} = this.state;
	    let $imagePreview = null;
	    // if (imagePreviewUrl) {
	    //   $imagePreview = (<img src={imagePreviewUrl} />);
	    // } else {

		return (
			<div className="">
				<div className="row">
					<input type="button" onClick={this.closeModal.bind(this)} value="x" />
				</div>
				<div className="row center">
					<div id="imagePreview" className="u-max-full-width">
						<div >Please select an Image for Preview</div>
					</div>
				</div>
				<hr/>
				<div className="container">
					<div className="row">
						<form onSubmit={this.handleSubmitAdd.bind(this)}>
						  <input type="file" onChange={this.handleImageChange.bind(this)} />
						  <label for="caption">caption</label>
						  <textarea className="u-full-width" name="caption" placeholder="caption here.. " id="caption-modal"></textarea>
						  <input className="button-primary" type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</div>
		)
	}
	setSelected(item) {
		console.log(':: setSelected')
		this.setState({
			'selected': item.id,
			'selectedItem': item
		})
	}
	onShowDetail(e) {
		e.preventDefault()
		console.log(':: onShowDetail')
		this.props.setSelected(this.props.item)
	}
	renderList () {
		console.log(':: render list')
		console.log(this.props.galleries)
		return this.props.galleries.map((item) => {
			return (
				<GalleryItem key={item.id} item={item} onShowDetail={this.onShowDetail} selected={this.state.selected} setSelected={this.setSelected.bind(this)} />
			)
		})
	}
	renderEmpty(){
		console.log(':: renderEmpty')
		return (
			<div className="hg300 u-full-width vmiddle">
				Select Item First..
			</div>
		)
	}
	filterName (path) {
		if(!path) return ''
		return path.split('/').pop(-1)
	}
	readDetail (image, path) {
		console.log(":: readDetail")
		console.log(image)
		console.log(path)
		let reader = new FileReader();
		let downloadingImage = new Image();
		reader.addEventListener("load", function () {
			
		})
		downloadingImage.onload = function () {
			image[0].src = this.src
		}
		downloadingImage.src = path
	}
	renderForm() {
		console.log(':: renderForm')
		console.log(this.state.selectedItem)
		// this.refs.filename.value = this.state.selectedItem.name
		// this.refs.caption.value = this.state.selectedItem.caption
		let name = this.filterName(this.state.selectedItem.name)
		
		this.readDetail(document.images, this.state.selectedItem.name)

		return (
			<div>
				<div className="row center hm100 pad5top">
					<img ref="prw" className="loader u-max-full-width" src=""/>
				</div>
				<div className="row bordertop2 pad5top">
						<form onSubmit={this.onSubmit.bind(this)}>
						<label>filename</label>
						<div className="row">
							<input ref="filename" className="u-full-width" type="text" placeholder="filename.jpg" id="filename" onChange={()=>{}} value={name} disabled="disabled"  />
						</div>
						<div className="row">
							<div className="six columns">
								<label>detail info</label>
								<ul>
									<li>file size: 100kb</li>
									<li>file type: jpeg</li>
								</ul>
							</div>
							<div className="six columns">
								<label>detail caption</label>
								<div className="row">
									<textarea ref="caption" className="u-full-width" type="text" placeholder="caption picture" id="caption" onChange={()=>{}} value={this.state.selectedItem.caption}></textarea>
								</div>
							</div>
						</div>
						<div className="row">
							<input className="button-primary u-full-width" type="submit" value="Save" />
						</div>
						</form>
				</div>
			</div>
		)
	}
	render() {
		return (
			<div>
				<div className="row ocean inverse spaceh">
					<span className="u-full-width">
					</span>
				</div>
				<div className="row">
					<div className=" five columns">
						<table className=" xhide">
							<thead>
								<tr>
									<th>
										Name
											<a href="/" onClick={this.onAddPicture.bind(this)} className="to-right w10">
												+
											</a>
									</th>
								</tr>
							</thead>
							<tbody>
								{this.renderList()}
							</tbody>
						</table>
					</div>
					<div className="seven columns">
						{(!this.state.selectedItem)? this.renderEmpty(): this.renderForm()}
					</div>
				</div>
			</div>
		)
	}
}

export default ReactRedux.connect((state) => {
	console.log(":: connect ")
	return {
		galleries: state.galleries,
		window_height: state.window_height,
		window_width: state.window_width,
		modal_add_gallery: state.modal_add_gallery
	}
})(DashboardGallery)