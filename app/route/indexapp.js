/*
* @Author: Imam
* @Date:   2016-07-31 23:49:21
* @Last Modified by:   d4r
* @Last Modified time: 2016-09-18 16:07:28
*/

'use strict';

import Modal from './modal.js'
import BuilderMenu from './../module/menu/component/buildermenu.smart.component.js'
import PublicWelcome from './public/PublicWelcome.js'
// import WeddingMain from './../module/wedding/component/wedding.main.component.js'
import createHashHistory from 'history/lib/createHashHistory'
import update from 'react/lib/update'
const appHistory = ReactRouter.useRouterHistory(createHashHistory)({queryKey: false})
const parser = new HTMLtoReact.Parser(React)
class IndexApp extends React.Component {
	constructor (props) {
		console.log(':: constructor')
		super(props)
		this.state = {
			static: {
				logo: "Hasyim Yoddie",
				title: `<h2>Hasyim & Yoddie</h2>
						<p>Jum'at, 29 November 1991</p>`,
				page1: {
					header: `
						<h2>We are getting married</h2>
						<p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
					`,
					p1: `
							<p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
							Blandit orci porttitor semper. Arcu phasellus tortor enim mi
							nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
							augue varius tempus lobortis porttitor accumsan consequat
							adipiscing lorem dolor.</p>
					`,
					p2: `
						<p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
						adipiscing adipiscing metus massa. Blandit orci porttitor semper.
						Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
						mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
						ipsum dolor nullam.</p>
					`,
				},
				page2: {
					header: `
						<h2>Hasyim Azhari</h2>
						<p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
					`,
					p1: `
						<p>He homero prompta constituam pro. Vim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ex, ea ius facete nominaviId vim laudem nusquam, mea cu torquatos vituperat ribus, mea tation iisque in. An viris imperdiet mela Causae denique convenire no pri. Diam discere adole cens pri eu, vel dico vidisse disputationi ne. An sea unum iusto quando, id accumsan persecuti ius. Vidisse scaevola ut eam, ne his modo voluptua evertitur.</p>
						<ul class="actions">
							<li><a href="#" class="button">Learn More</a></li>
						</ul>
					`
				},
				page3: {
					header: `
						<h2>Yoddie</h2>
						<p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
					`,
					p1: `
						<p>She homero prompta constituam pro. Vim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ex, ea ius facete nominaviId vim laudem nusquam, mea cu torquatos vituperat ribus, mea tation iisque in. An viris imperdiet mela Causae denique convenire no pri. Diam discere adole cens pri eu, vel dico vidisse disputationi ne. An sea unum iusto quando, id accumsan persecuti ius. Vidisse scaevola ut eam, ne his modo voluptua evertitur.</p>
						<ul class="actions">
							<li><a href="#" class="button">Learn More</a></li>
						</ul>
					`
				},
				page4: {
					header: `
						<h2>Testimoni from our friends</h2>
						<p>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>
					`
				},
				page5: {
					header: `
						<h2>Accumsan sed tempus adipiscing blandit</h2>
						<p>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>
					`
				},
				page6: {
					header: `
						<h2>Location</h2>
						<p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
					`,
					p1: `
							<p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
							Blandit orci porttitor semper. Arcu phasellus tortor enim mi
							nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
							augue varius tempus lobortis porttitor accumsan consequat
							adipiscing lorem dolor.</p>
					`,
					p2: `
						<p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
						adipiscing adipiscing metus massa. Blandit orci porttitor semper.
						Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
						mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
						ipsum dolor nullam.</p>
					`,
				},
				menu: {
					"about": "",
					"layouts": {
						"left-sidebar": "",
						"right-sidebar": "",
						"no-sidebar": "",
						"submenu": {
							"option 1": "",
							"option 2": "",
							"option 3": "",
							"option 4": {
								"hoho":"",
								"hoho 1": ""
							}
						}
					},
					"gallery": "",
					"signup:button special": "",
				}
			},
			publictestimoni: [],
			formtestimoni: {
				connect: false, 
				profile: null,
			},
			background: {
				backgroundcover: 'http://polar-acai.ospry.io/jn0jzvgo09d/banner.jpg',
				cover: 'http://polar-acai.ospry.io/st5iuoal0kw/hasimyodi.jpg',
				page1: 'http://wwcdn.weddingwire.com/vendor/355001_360000/357035/thumbnails/1200x1200_1402414035390-pavilion-ceremony-2-.jpg',
				page2: 'http://polar-acai.ospry.io/9zv732swlnu/ChxumcrVAAEdezd.jpg',
				page3: 'http://polar-acai.ospry.io/qfclkmlvxux/chelsea.jpg'
			}
		}
	}
	componentWillMount () {
		console.log(':: componentWillMount')
		// Util.getDataProfile().then((data) => {
		// 	console.log(":: componentWillMount getDataProfile")
		// 	console.log(data)
		// 	this.setState(update(this.state, {
		// 		"formtestimoni": {
		// 			connect: {$set: true},
		// 			profile: {$set: data}
		// 		} 
		// 	}))
		// })
		Promise.all([
			Util.getDataProfile(),
			Util.getPublicTestimoni()
		]).then((v) => {
			console.log(':: all return ',v)
			let formtestimoni = v[0]
			let publictestimoni = v[1]
			let toUpdate = {}
			if(formtestimoni) toUpdate.formtestimoni = {
				connect: true,
				profile: formtestimoni
			}
			if(publictestimoni) toUpdate.publictestimoni = publictestimoni.data
			console.log(">> toUpdate", toUpdate)
			this.setState(toUpdate)

		})
		// Util.mainBind()
		// this.props.dispatch(Actions.AUTH_REFRESH())

	}
	componentDidMount() {
		console.log(':: componentDidMount')
		// console.log(Util)
		Util.Main.init()
		this.autogrowTextarea()
	}
	componentDidUpdate () {
		this.autogrowTextarea()
	}
	componentWillUnmount() {
		console.log(':: componentWillUnmount')
		// window.removeEventListener('resize', this.handleResize.bind(this))
	}
	// handleResize(e){
	// 	e.preventDefault()
	// 	console.log(':: handleResize')
	// 	this.props.dispatch(Actions.UPDATE_RESIZE(window.innerHeight, window.innerWidth))
	// }
	renderWelcome () {
		console.log(':: renderWelcome')
		return (
			<PublicWelcome />
		)
	}
	renderMenuBuilder () {
		console.log(':: renderMenuBuilder')
		return (
			<BuilderMenu schema={this.state.static.menu} />
		)
	}
	updateTestimoni () {
		console.log(':: updateTestimoni')
		Util.getPublicTestimoni()
			.then((body) => {
				console.log(body)
				this.setState({
					"publictestimoni": body.data
				})
			})
	}
	// renderApp () {
	// 	console.log(':: renderApp')
	// 	if(!this.props.children){
	// 		setTimeout(() => {
	// 			return appHistory.push(this.props.route.childRoutes[0].path)
	// 		}, 0)
	// 		return (<div></div>)
	// 	}
	// 	return (
	// 		<div>
	// 			{this.props.children}
	// 			<Modal/>
	// 		</div>
	// 	)
	// }
	//
	renderItemTestimoni (name, content, image) {
		console.log(":: renderItemTestimoni")
		let imaged = (image)? (<img className="icon alt major" src={image} />): (<span className="icon alt major fa-area-chart">
				</span>)  
		if(content.length > 140) content = content.substring(0, 140) + '...' 
		return (
			<section key={uuid.v4()} className="4u 6u(medium) 12u$(xsmall)">
				{imaged}
				<h3>{name}</h3>
				<p>"{content}"</p>
			</section>
		)
	}
	onSubmitFormTestimoni (e) {
		console.log(':: noSubmitFormTestimoni')
		e.preventDefault()
		let content  = this.refs.content.value
		let name = this.state.formtestimoni.profile.name
		let alias = this.state.formtestimoni.profile.screen_name
		let user_id = this.state.formtestimoni.profile.identities[0].user_id
		let image = this.state.formtestimoni.profile.picture
		this.refs.content.value = ''
		if(image) image = image.replace('_normal', '')
		Util.submitTestimoni(name, content, image, alias, user_id, 'twitter')
			.then((data) => {
				console.log('stored ..')
				console.log(data)
				this.updateTestimoni()
			})
			.catch(() => {
				console.log('error')
			})
		console.log(name)
		console.log(content)
	}
	onConnectTwitter (e) {
		console.log(':: connect twitter')
		e.preventDefault()
		Util.twitterLogin()
	}
	autogrowTextarea () {
		console.log(':: autogrowTextarea')
		console.log(this.refs.content)
		const textarea = this.refs.content
		const heightLimit = 200
		textarea.oninput = function() {
			textarea.style.height = ""; /* Reset the height*/
			textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
		};
		textarea.onblur = function () {
			textarea.style.height = ""
		}
	}
	renderFormTestimoni () {
		console.log(':: renderFormTestimoni')
		const twitterAuth = Util.getAuthTwitter()
		console.log(twitterAuth)
		console.log(this.state.formtestimoni)
		let toRender = (
			<div className="row uniform 50%">
				<div className="12u$ 12u$(xsmall)"><input onClick={this.onConnectTwitter.bind(this)} type="button" value="login with twitter" className="fit special" /></div>
			</div>
		)
		if(this.state.formtestimoni.connect) toRender = (
			<div className="row uniform 50%">
				<div className="12u$ 12u$(xsmall)"><textarea ref="content" placeholder="Your Whises here..." /></div>
				<div className="12u$ 12u$(xsmall)"><input type="submit" value={"Submit Whises as @" + this.state.formtestimoni.profile.screen_name} className="fit special" /></div>
			</div>
		)
		return (
			<div className="container">
				<header>
					<h2>Send your wish for us!</h2>
					<p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
				</header>
				<form onSubmit={this.onSubmitFormTestimoni.bind(this)} method="post" action="#" className="container 50%">
						{toRender}
				</form>
			</div>
		)
	}
	renderTestimoni () {
		console.log(':: renderTestimoni')
		let testimonies = [{
			"name": "Rizaldy Yusuf",
			"content": "Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor."
		},{
			"name": "Angga Ramdhana",
			"content": "Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor."
		},
		{
			"name": "Nike Putri Y",
			"content": "Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor."
		},
		{
			"name": "Vega Wibowo",
			"content": "Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor."
		}]
		return (
			<div className="row uniform">
				{this.state.publictestimoni.map((v, i) => {
					if (Util.isJSON(v.content)) {
						let decode = JSON.parse(v.content)
						console.log(':: decode')
						console.log(decode)
						// return (<div />)
						return this.renderItemTestimoni(decode.name, decode.content, decode.image)
					}
				})}
			</div>
		)
	}
	renderIndex () {
		console.log(':: renderIndex')
		const stylecover = {
			backgroundImage: 'url('+ this.state.background.backgroundcover + ')'
		}
		return (
			<div id="page-wrapper">
					<header id="header">
						<h1 id="logo"><a href="index.html">{this.state.static.logo}</a></h1>
						{this.renderMenuBuilder()}
					</header>

					<section id="banner" style={stylecover}>
						<div className="content">
							<header>
								{parser.parse(
									'<div>' + this.state.static.title + '</div>'
								)}
							</header>
							<span className="image"><img src={this.state.background.cover} alt="" /></span>
						</div>
						<a href="#one" className="goto-next scrolly">Next</a>
					</section>

					<section id="one" className="spotlight style1 bottom">
						<span className="image fit main"><img src={this.state.background.page1} alt="" /></span>
						<div className="content">
							<div className="container">
								<div className="row">
									<div className="4u 12u$(medium)">
										<header>
											{parser.parse('<div>' + this.state.static.page1.header+ '</div>')}
										</header>
									</div>
									<div className="4u 12u$(medium)">
										{parser.parse('<div>' + this.state.static.page1.p1+ '</div>')}
									</div>
									<div className="4u$ 12u$(medium)">
										{parser.parse('<div>' + this.state.static.page1.p2+ '</div>')}
									</div>
								</div>
							</div>
						</div>
						<a href="#two" className="goto-next scrolly">Next</a>
					</section>

					<section id="two" className="spotlight style2 right">
						<span className="image fit main"><img src={this.state.background.page2} alt="" /></span>
						<div className="content">
							<header>
								{parser.parse('<div>' + this.state.static.page2.header + '</div>')}
							</header>
							{parser.parse('<div>' + this.state.static.page2.p1 + '</div>')}
						</div>
						<a href="#three" className="goto-next scrolly">Next</a>
					</section>

					<section id="three" className="spotlight style3 left">
						<span className="image fit main bottom"><img src={this.state.background.page3} alt="" /></span>
						<div className="content">
							<header>
								{parser.parse('<div>' +this.state.static.page3.header+ '</div>')}
							</header>
							{parser.parse('<div>' +this.state.static.page3.p1+ '</div>')}
						</div>
						<a href="#four" className="goto-next scrolly">Next</a>
					</section>

					<section id="four" className="wrapper style1 special fade-up">
						<div className="container">
							<header className="major">
								{parser.parse('<div>'+this.state.static.page4.header+'</div>')}
							</header>
							<div className="box alt">
								{this.renderTestimoni()}
							</div>
							<footer className="major">
								<ul className="actions">
									<li><a href="#" className="button">See more wish</a></li>
								</ul>
							</footer>
						</div>
					</section>

					<section id="five" className="wrapper style2 special fade">
						{this.renderFormTestimoni()}
					</section>

					<section className="spotlight style1 bottom">
						<section id="map" className="spotlight style1 bottom"/>
						<div className="content">
							<div className="container">
								<div className="row">
									<div className="4u 12u$(medium)">
										<header>
											{parser.parse('<div>' + this.state.static.page6.header+ '</div>')}
										</header>
									</div>
									<div className="4u 12u$(medium)">
										{parser.parse('<div>' + this.state.static.page6.p1+ '</div>')}
									</div>
									<div className="4u$ 12u$(medium)">
										{parser.parse('<div>' + this.state.static.page6.p2+ '</div>')}
									</div>
								</div>
							</div>
						</div>
						<a href="#two" className="goto-next scrolly">Next</a>
					</section>



					<footer id="footer">
						<ul className="icons">
							<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
							<li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
							<li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
						</ul>
						<ul className="copyright">
							<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>

			</div>
		)
	}
	render () {
		console.log(':: render')
		console.log('>> render IndexApp ', uuid.v4())
		console.log(this.state.publictestimoni)
		// return (this.props.loggedIn)? this.renderApp(): this.renderWelcome()
		return this.renderIndex()
	}
}

export default ReactRedux.connect((state) => {
	return {
		loggedIn: state.loggedIn
	}
})(IndexApp)