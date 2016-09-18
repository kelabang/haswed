/*
* @Author: Imam
* @Date:   2016-08-14 14:23:34
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-28 20:53:22
*/

'use strict';

class Modal extends React.Component {
	constructor (props) {
		super(props)
	}
	componentDidMount() {
		console.log(':: componentDidMount')
		window.addEventListener('resize', this.handleResize.bind(this))
	}
	componentWillUnmount() {
		console.log(':: componentWillUnmount')
		window.removeEventListener('resize', this.handleResize.bind(this))
	}
	handleResize(e){
		e.preventDefault()
		console.log(':: handleResize')
		this.props.dispatch(Actions.UPDATE_RESIZE(window.innerHeight, window.innerWidth))
	}
	closeModal(e){
		e.preventDefault()
		console.log(':: closeModal')
		this.props.dispatch(Actions.RESET_MODAL())
	}
	render() {
		console.log(':: render Modal')
		if (this.props.isOpen === false) return null
		let modalStyle = {
		  position: 'fixed',
		  top: '50%',
		  left: '50%',
		  transform: 'translate(-50%, -50%)',
		  zIndex: '9999',
		  background: '#fff',
		  borderRadius: "6px 6px 6px 6px"
		}
		if (this.props.width && this.props.height) {
			modalStyle.width = this.props.width + 'px'
			modalStyle.height = this.props.height + 'px'
			modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
			modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
			modalStyle.transform = null
			console.log("modalStyle wew ", modalStyle)
		}
		if (this.props.style) {
			for (let key in this.props.style) {
			  modalStyle[key] = this.props.style[key]
			}
		}
		let backdropStyle = {
		  position: 'fixed',
		  width: '100%',
		  height: '100%',
		  top: '0px',
		  left: '0px',
		  zIndex: '9998',
		  background: 'rgba(0, 0, 0, 0.3)'
		}
		if (this.props.backdropStyle) {
			for (let key in this.props.backdropStyle) {
			  backdropStyle[key] = this.props.backdropStyle[key]
			}
		}
		return (
		  <div>
		    <div style={modalStyle}>
		    	{this.props.mocon}
		    </div>
		    <div onClick={this.closeModal.bind(this)} style={backdropStyle}></div>
		  </div>
		)
	}
	close(e) {
		e.preventDefault()
		if (this.props.onClose) {
		  this.props.onClose()
		}
	}
}

export default ReactRedux.connect((state) => {
	console.log(':: connect in Modal')
	console.log(state)
	return {
		width: (state.modal_custom_style)? state.modal_custom_style.width: '300px',
		height: (state.modal_custom_style)? state.modal_custom_style.height: '300px',
		style: state.modal_custom_style,
		backdropStyle: state.modal_custom_backdropstyle,
		mocon: state.modal_body,
		isOpen: state.modal_status
	}
})(Modal)