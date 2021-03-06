/*
* @Author: Imam
* @Date:   2016-07-31 23:49:21
* @Last Modified by:   Imam
* @Last Modified time: 2016-11-18 14:26:11
*/

'use strict';

import Modal from './modal.js'
import BuilderMenu from './../module/menu/component/buildermenu.smart.component.js'
import PublicWelcome from './public/publicwelcome.js'
import GRMap from './../module/map/component/map.smart.component.js'
import createHashHistory from 'history/lib/createHashHistory'
import update from 'react/lib/update'
const GEDUNG_DARMA_WANITA = {
  lat: -6.2211729,
  lng: 106.830698
};
const scrollIntoView = require('@treora/scroll-into-view')
const appHistory = ReactRouter.useRouterHistory(createHashHistory)({queryKey: false})
const parser = new HTMLtoReact.Parser(React)
class IndexApp extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			max: 180,
			curr: 0,
			markers: [{
		      position: {
		        lat: 25.0112183,
		        lng: 121.52067570000001,
		      },
		      key: `Taiwan`,
		      defaultAnimation: 2,
		    }],
		    showall: false,
			static: {
				logo: "Hasyim Yoddie",
				title: `
						<i class="standout">We are getting married</i>
						<h2>Hasyim & Yoddie</h2>
						<p >Saturday, November 19, 2016</p>
						`,
				page1: {
					header: `
						<h2>On Saturday,<br> November 19, 2016</h2>
						<p class="grey">
							At Gedung Dharma Wanita Persatuan Pusat
							Jalan Pedurenan Masjid Kavling F.01<br/> 
							Karet Kuningan, Jakarta Selatan.
						</p>
					`,
					p1: `
						<br/>
						<img
							class="center-image"
							src="http://res.cloudinary.com/kelabang/image/upload/v1479036406/whexmf0ncstcqxkynnd3.png" />
						<h2 style="text-align:center">Ceremony</h2>
						<p style="text-align:center" class="grey">
							08.00 a.m - 10.00 a.m
						</p>

						
					`,
					p2: `
						<br/>
						<img 
							class="center-image"
							src="http://res.cloudinary.com/kelabang/image/upload/v1479036385/xgpwhxv7ws1jg2hptopb.png" />
						<h2 style="text-align:center">Reception</h2>
						<p style="text-align:center" class="grey">
							11.00 a.m - 1.00 p.m
						</p>
					`,
					p12: `
							<p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
							Blandit orci porttitor semper. Arcu phasellus tortor enim mi
							nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
							augue varius tempus lobortis porttitor accumsan consequat
							adipiscing lorem dolor.</p>
					`,
					p22: `
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
						<p>
							<b class="quote">"</b><b class="natural">Hasyim</b> is a man who never talks "I", he always talks "WE" when he told about his future. I love him because he made me believe that I'm worth it. I 'm happy to be a part of his future plan.<b class="quote">"</b><br/> - <i>Yoddie Frianti</i>
						</p>
					`,
					p1: `
						<p></p>
		
					`
				},
				page3: {
					header: `
						<h2>Yoddie Frianti</h2>
						<p>
							<b class="quote">"</b>I think, technically, the girl of my dream would probably have an average weight and height, you know, maybe with different hair. She ’d probably be a little prettier.
							But truthfully, <b class="natural">Yoddie</b> is better than the girl of my dream. She ’s real. I love how she makes me feel, like anything 's possible, or like life is worth it.<b class="quote">"</b><br/> - <i>Hasyim Azhari</i>
						</p>
					`,
					p1: `
						<p>
						</p>

					`
				},
				page4: {
					header: `
						<h2>Wishes from our friends</h2>
						<p>Thanks for leaving something good for us!</p>
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
					"when and where ?": "one",
					"who and why ?": {
						"hasyim": "two",
						"yoddie": "three"
					},
					"show the map": "seven",
					// "layouts": {
					// 	"left-sidebar": "",
					// 	"right-sidebar": "",
					// 	"no-sidebar": "",
					// 	"submenu": {
					// 		"option 1": "",
					// 		"option 2": "",
					// 		"option 3": "",
					// 		"option 4": {
					// 			"hoho":"",
					// 			"hoho 1": ""
					// 		}
					// 	}
					// },
					// "gallery": "",
					// "signup:button special": "",
				}
			},
			screen_name: 'anonymous',
	
			publictestimoni: [],
			formtestimoni: {
				connect: false,
				profile: null,
			},
			background: {
				backgroundcover: 'http://res.cloudinary.com/kelabang/image/upload/v1479033768/jpknvbzlo9grjvdz8tje.jpg',
				// backgroundcover: 'http://polar-acai.ospry.io/jn0jzvgo09d/banner.jpg',
				// cover: 'http://polar-acai.ospry.io/st5iuoal0kw/hasimyodi.jpg',
				cover: 'http://res.cloudinary.com/kelabang/image/upload/c_crop,r_8/v1479022786/hehq3qz7jhxz77gvt2d4.jpg',
				page1: 'http://wwcdn.weddingwire.com/vendor/355001_360000/357035/thumbnails/1200x1200_1402414035390-pavilion-ceremony-2-.jpg',
				// page2: 'http://polar-acai.ospry.io/kzargw6jd86/Profil-min.jpg',
				page2: 'http://res.cloudinary.com/kelabang/image/upload/v1479033344/sx0xtciemwhencku0bad.jpg',
				page3: 'http://res.cloudinary.com/kelabang/image/upload/v1479033347/bhqo2qgwqerczfvqjyix.jpg'
				// page3: 'http://res.cloudinary.com/kelabang/image/upload/v1478798202/eeor90v49d51mshwmrbx.jpg'
			}
		}
	}
	componentWillMount () {
		Promise.all([
			Util.getDataProfile(),
			Util.getPublicTestimoni()
		]).then((v) => {
			let formtestimoni = v[0]
			let publictestimoni = v[1]
			let toUpdate = {}
			if(formtestimoni) {
				// this.state.formtestimoni.profile.screen_name
				toUpdate.screen_name = (formtestimoni.screen_name)? '@'+formtestimoni.screen_name: formtestimoni.name
				toUpdate.formtestimoni = {
					connect: true,
					profile: formtestimoni
				}
			}
			if(publictestimoni) toUpdate.publictestimoni = publictestimoni.data.reverse()
			this.setState(toUpdate)

		})
	}
	componentDidMount() {
		scrollIntoView.installPolyfill()
		Util.Main.init()
		this.autogrowTextarea()
		$('a.canclick').off('click')
		$('a.canclick').on('click', (e) => {
			e.preventDefault()
		})
		$('a.canclick').off('mousedown')
		$('a.canclick').on('mousedown', (e) => {
			e.preventDefault()
			let href = $(e.target).attr('href')
			let dom = document.getElementById(href.replace('#', ''))
			dom.scrollIntoView()
			// let dom = document.getElementById(id)
			// scrollIntoView.call(this, {behavior: "smooth"})
		})
		$('a.toggle').on('click', () => {
			$('#navPanel a').off('click')
			$('#navPanel a').on('click', (e) => {
				e.preventDefault()
			})
		})
	}
	componentDidUpdate () {
		// Util.Main.init()
		$('#nav > ul').unbind('dropotron')
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350
		});
		$('a.canclick').off('click')
		$('a.canclick').on('click', (e) => {
			e.preventDefault()
		})
		// $('#navPanel a.link').unbind('click')
		// $('#navPanel a.link').off('click')
		// $('#navPanel a.link').on('click', (e) => {
		// 	e.preventDefault()
		// })
		$('a.canclick').off('mousedown')
		$('a.canclick').on('mousedown', (e) => {
			e.preventDefault()
			let href = $(e.target).attr('href')
			let dom = document.getElementById(href.replace('#', ''))
			dom.scrollIntoView()
		})

		this.autogrowTextarea()
	}
	componentWillUnmount() {
	}
	renderWelcome () {
		return (
			<PublicWelcome />
		)
	}
	renderMenuBuilder () {
		return (
			<BuilderMenu schema={this.state.static.menu} />
		)
	}
	updateTestimoni () {
		Util.getPublicTestimoni()
			.then((body) => {
				this.setState({
					"publictestimoni": body.data
				})
			})
	}
	renderItemTestimoni (name, content, image, date, raw) {
		let imaged = (image)? (<img className="icon alt major" src={image} />): (<span className="icon alt major fa-area-chart">
				</span>)
		let logo = (raw.type.includes('google'))? 
			(<a href={"https://plus.google.com/"+raw.user_id} className="icon alt hoho fa-google"></a>): 
			(<a href={"https://twitter.com/"+raw.alias} className="icon alt hoho fa-twitter"></a>)
		date = moment.utc(date).fromNow() 
		if(content.length > 180) content = content.substring(0, 180) + '...'
		return (
			<section key={uuid.v4()} className="testimoni-item 4u 6u(medium) 12u$(xsmall)">
				{imaged}
				{logo}
				<h3>{name}</h3>
				<p>
				<b className="quote-content">"</b>{content}<b className="quote-content">"</b><br/>
				<span className="pastime">{date}</span>
				</p> 
			</section>
		)
	}
	onSubmitFormTestimoni (e) {
		e.preventDefault()
		if(this.state.curr > this.state.max) return alert('maximum 180 character :(')
		if(this.state.curr < 1) return alert('fill ur wishes box first :)')
		let content  = this.refs.content.value
		let name = this.state.formtestimoni.profile.name
		let alias = this.state.formtestimoni.profile.screen_name || this.state.formtestimoni.profile.name
		let user_id = this.state.formtestimoni.profile.identities[0].user_id
		let provider = this.state.formtestimoni.profile.identities[0].provider
		let image = this.state.formtestimoni.profile.picture
		this.refs.content.value = ''
		if(image) image = image.replace('_normal', '')
		Util.submitTestimoni(name, content, image, alias, user_id, provider)
			.then((data) => {
				this.updateTestimoni()
			})
			.catch(() => {
			})
	}
	onConnectTwitter (e) {
		e.preventDefault()
		Util.twitterLogin()
	}
	onConnectGoogle (e) {
		e.preventDefault()
		Util.googleLogin()
	}
	autogrowTextarea () {
		const textarea = this.refs.content
		const heightLimit = 200
		if(textarea){
			textarea.oninput = function() {
				textarea.style.height = ""; /* Reset the height*/
				textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
			};
			textarea.onblur = function () {
				textarea.style.height = ""
			}
		}
	}
	handleLimit (e) {
		let newState = Object.assign({}, this.state)
		let text = e.target.value
		newState.curr = text.length
		this.setState(newState) 
	}
	renderFormTestimoni () {
		let count = this.state.max - this.state.curr
		let charleft = count + " character(s) left"
		let toRender = (
			<div className="row uniform 50%">
				<div className="12u$ 12u$(xsmall)"><input onClick={this.onConnectTwitter.bind(this)} type="button" value="login with twitter" className="fit special" /></div>
				<div className="12u$ 12u$(xsmall)"><input onClick={this.onConnectGoogle.bind(this)} type="button" value="login with google" className="fit special" /></div>
			</div>
		)
		if(this.state.formtestimoni.connect) toRender = (
			<div className="row uniform 50%">
				<div className="12u$ 12u$(xsmall)"><textarea onChange={this.handleLimit.bind(this)} ref="content" placeholder="Your Wishes here..." /><span className="pastime">{charleft}</span></div>
				<div className="12u$ 12u$(xsmall)"><input type="submit" value={"Submit Wishes as " + this.state.screen_name} className="fit special" /></div>
			</div>
		)
		return (
			<div className="container">
				<header>
					<h2>Send your wish for us!</h2>
					<p>Participate here, click the button</p>
				</header>
				<form onSubmit={this.onSubmitFormTestimoni.bind(this)} method="post" action="#" className="container 50%">
						{toRender}
				</form>
			</div>
		)
	}
	renderNewRowTestimoni (comp) {
		return (
			<div className="row uniform">
				{comp}
			</div>
		)
	}
	renderTestimoni () {
		let count = 0
		let rows = []
		let row = []
		let final = []
		this.state.publictestimoni.map((v, i) => {
			if (Util.isJSON(v.content)) {
				count++
				if(count == 1) rows.push(row)
				let toDisplay = null
				let decode = JSON.parse(v.content)
				let item = this.renderItemTestimoni(decode.name, decode.content, decode.image, v.datecreated, decode)
				if(decode.content) row.push(item)
				if(count > count+1) {
					row = []
					count = 0
				}				
			}
		})
		rows.map((v) => {
			let f = this.renderNewRowTestimoni(v)
			final.push(f)
		})
		return (final)
	}
	renderMap () {
		return ( 
			<GRMap 
				target="map-1"
			/>
		)
	}
	renderIndex () {
		const stylecover = {
			backgroundImage: 'url('+ this.state.background.backgroundcover + ')'
		}
		let hehe = ''
		if(this.state.showall) hehe = (<li><a href="#" className="button">See more wish</a></li>)
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
									{
										hehe
									}
								</ul>
							</footer>
						</div>
					</section>

					<section id="five" className="wrapper style2 special fade">
						{this.renderFormTestimoni()}
					</section>

					<section id="seven" className="wrapper style1 special fade-up">
						<div className="container">
							<header className="major">
								<h2>Our Precise Location</h2>
								<ul className="actions">
									<li>
										<a target="_blank" href="https://google.com/maps/?q=-6.2211729,106.830698" className="button">Go To Map</a>
									</li>
								</ul>
							</header>
							<div className="box alt">
								{this.renderMap()}
							</div>
							<footer className="major">
								<ul className="actions">
									<li><a target="_blank" href="https://google.com/maps/?q=-6.2211729,106.830698" className="button">Go To Map</a></li>
								</ul>
							</footer>
						</div>
					</section>

					<footer id="footer">
						<ul className="copyright">
							<li>&copy;2016 Hasyim & Yoddie 's Wedding.</li>
							<li>Base Design by <a href="https://html5up.net" target="_blank">HTML5 UP</a></li>
							<li>Customize Design by <a href="http://kelabang.github.io" target="_blank" >Imam Tauhid</a></li>
						</ul>
					</footer>

			</div>
		)
	}
	render () {
		return this.renderIndex()
	}
}

export default ReactRedux.connect((state) => {
	return {
		loggedIn: state.loggedIn
	}
})(IndexApp)