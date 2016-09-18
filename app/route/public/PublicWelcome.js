/*
* @Author: Imam
* @Date:   2016-08-21 00:39:15
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-21 01:02:49
*/

'use strict';

class PublicWelcome extends React.Component {
	constructor (props) {
		super(props)
	}
	render() {
		console.log(':: render PublicWelcome')
		return (
			<div>
				<div className="section hero">
				    <div className="container">
				      <div className="row">
				        <div className="one-half column">
				          <h4 className="hero-heading">It's kitten CMS.</h4>
				          <a className="button button-primary" href="#/login">Login</a>
				        </div>
				        <div className="one-half column phones">
				          <img className="phone" src="http://getskeleton.com/examples/landing/images/iphone.png" />
				          <img className="phone" src="http://getskeleton.com/examples/landing/images/iphone.png" />
				        </div>
				      </div>
				    </div>
				  </div>

				  <div className="section values">
				    <div className="container">
				      <div className="row">
				        <div className="one-third column value">
				          <h2 className="value-multiplier">67%</h2>
				          <h5 className="value-heading">Purchase Increase</h5>
				          <p className="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
				        </div>
				        <div className="one-third column value">
				          <h2 className="value-multiplier">90%</h2>
				          <h5 className="value-heading">Multi-device Users</h5>
				          <p className="value-description">Most of the world accesses the internet on multiple devices.</p>
				        </div>
				        <div className="one-third column value">
				          <h2 className="value-multiplier">66%</h2>
				          <h5 className="value-heading">Sad Users</h5>
				          <p className="value-description">Percentage of users that are frustrated with page load times.</p>
				        </div>
				      </div>
				    </div>
				  </div>

				  <div className="section get-help">
				    <div className="container">
				      <h3 className="section-heading">Need help getting started?</h3>
				      <p className="section-description">Kitten is my personal CMS, its customizable!</p>
				      <a className="button button-primary" href="#">Still have no docs..sorry</a>
				    </div>
				  </div>
			</div>
		)
	}
}

export default PublicWelcome