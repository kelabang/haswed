/*
* @Author: Imam
* @Date:   2016-08-21 22:28:27
* @Last Modified by:   Imam
* @Last Modified time: 2016-08-21 22:55:38
*/

'use strict';

class WeddingMain extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div id="main_container">
			        <a className="show_menu" href="#"><img src="template/wedding-bells/images/mobile_menu_open.png" alt title /></a>
			        <a className="hide_menu" href="#"><img src="template/wedding-bells/images/mobile_menu_close.png" alt title /></a>
			        <nav className="menu">                                                                   
			          <ul id="main_menu">
			            <li><a className="selected" href="index.html">HOME</a></li>
			            <li><a href="page.html">THE WEDDING</a>
			              <ul>
			                <li><a href="page.html">LOVELY DROP DOWN</a></li>
			                <li><a href="page.html">LOVELY DROP DOWN</a></li>
			                <li><a href="page.html">LOVELY DROP DOWN</a></li>
			              </ul>
			            </li>
			            <li><a href="blog.html">BLOG</a></li>
			            <li><a href="photos.html">PHOTOS</a></li>
			            <li><a href="rsvp.html">RSVP</a></li>
			            <li><a href="contact.html">GET IN TOUCH</a></li> 
			          </ul>
			        </nav>
			        <div className="title_container">
			          <div className="title_front">WE ARE GETTING MARRIED</div>
			          <div className="love_birds"><img src="template/wedding-bells/images/birds_icon.png" alt title /></div>
			          <div className="title">Jenifer <span>&amp;</span> Oliver</div>
			          <div className="title_date"><span className="swirl_left"><span className="swirl_right">12.07.2017</span></span></div>
			          <div className="title_under">SAVE THE DATE</div>
			        </div>
			        <div className="slider_container">
			          <div className="slider_trans_black" />
			          <div id="random">
			            <div style={{backgroundImage: 'url(template/wedding-bells/images/slider/slide1.jpg)'}} />
			            <div style={{backgroundImage: 'url(template/wedding-bells/images/slider/slide2.jpg)'}} /> 
			            <div style={{backgroundImage: 'url(template/wedding-bells/images/slider/slide3.jpg)'}} />                   
			          </div>
			        </div>
			        <div className="countdown_container">
			          <h2 className="centered_title">Countdown to Wedding Ceremony</h2>
			          <div id="defaultCountdown" />
			          <div className="rsvp_button"><span className="swirl_left_small"><span className="swirl_right_small"><a href="#">RSVP</a></span></span></div>
			        </div>
			        <div className="about_content">
			          <div className="about_topsign">&amp;</div>
			          <div className="full_width_centered">
			            <div className="left12_first">
			              <span className="names_titles">THE BRIDE</span>
			              <h2>JENIFER HARRISON</h2>
			              <div className="about_pic_container">
			                <span className="about_picframe" />
			                <div className="about_social">
			                  <a href="#"><img src="template/wedding-bells/images/social/twitter.png" alt title /></a>
			                  <a href="#"><img src="template/wedding-bells/images/social/facebook.png" alt title /></a>
			                  <a href="#"><img src="template/wedding-bells/images/social/pinterest.png" alt title /></a>
			                </div>
			                <div className="about_pic"><img src="template/wedding-bells/images/image12.jpg" alt title /></div>
			              </div>
			              <a href="#" className="thumb_read_more">MORE ABOUT JENIFER</a>
			              <p>Love is friendship that has caught fire. It is quiet understanding, mutual confidence, <a href="#">sharing and forgiving</a>. It is loyalty through good and bad times. It settles for less than perfection and <strong>makes allowances</strong> for human weaknesses "<a href="#">LOVE QUOTE</a>":</p>
			              <span className="love_quote">Sometimes the heart sees what is invisible to the eye.</span>
			            </div>
			            <div className="left12_last">
			              <span className="names_titles">THE GROOM</span>
			              <h2>OLIVER DUVALL</h2>
			              <div className="about_pic_container">
			                <span className="about_picframe" />
			                <div className="about_social">
			                  <a href="#"><img src="template/wedding-bells/images/social/twitter.png" alt title /></a>
			                  <a href="#"><img src="template/wedding-bells/images/social/facebook.png" alt title /></a>
			                  <a href="#"><img src="template/wedding-bells/images/social/pinterest.png" alt title /></a>
			                </div>
			                <div className="about_pic"><img src="template/wedding-bells/images/image12_2.jpg" alt title /></div>
			              </div>
			              <a href="#" className="thumb_read_more">MORE ABOUT OLIVER</a>
			              <p>I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death "<a href="#">LOVE QUOTE</a>":</p>
			              <span className="love_quote">Where there is love there is life.</span>
			            </div>
			            <div className="clear" />
			          </div>  
			        </div> 
			        <div className="carousel_container"> 
			          <div className="carousel_container_image">
			            <div className="full_width_carousel">
			              <h2>OUR BRIDEMAIDS AND GROOMSMEN'S</h2>
			              <span className="carousel_titles">BEST MAN &amp; MAID OF HONOR</span>
			              <div id="weddingcarousel" className="owl-carousel">
			                <div className="left14"><div className="bestman"><span>BEST MAN</span><img src="template/wedding-bells/images/bestman.png" alt title /></div><img src="template/wedding-bells/images/image_14.jpg" alt title /><h3>MIKE STEPHANSON</h3></div>
			                <div className="left14"><div className="bestman"><span>MAID OF HONOR</span><img src="template/wedding-bells/images/maidofhonor.png" alt title /></div><img src="template/wedding-bells/images/image_14_3.jpg" alt title /><h3>LINDSEY REMY</h3></div>
			                <div className="left14"><img src="template/wedding-bells/images/image_14_2.jpg" alt title /><h3>ELIZABETH LYN</h3></div>
			                <div className="left14_last"><img src="template/wedding-bells/images/image_14_6.jpg" alt title /><h3>STEVE KAY</h3></div>
			                <div className="left14"><img src="template/wedding-bells/images/image_14_5.jpg" alt title /><h3>JOHN DOE</h3></div>
			                <div className="left14"><img src="template/wedding-bells/images/image_14_3.jpg" alt title /><h3>MAYA ELIOT</h3></div>
			                <div className="left14"><img src="template/wedding-bells/images/image_14_7.jpg" alt title /><h3>JOHANNA PASCAL</h3></div>
			                <div className="left14_last"><img src="template/wedding-bells/images/image_14_8.jpg" alt title /><h3>JOHN DOE</h3></div>
			              </div>   
			            </div>
			          </div> 
			        </div>
			        <div className="full_width_centered">
			          <div className="latest_posts">
			            <h2>FROM THE BLOG</h2>
			            <div className="left13">
			              <div className="latest_post">
			                <div className="post_info">
			                  <span className="post_date">20 JUNE 2015</span>
			                  <h3><a href="blog-single.html">THE PROPOSAL WAS AMAZING</a></h3>
			                  <a href="blog-single.html" className="post_read_more">READ MORE</a>
			                </div> 
			                <img src="template/wedding-bells/images/post_thumb1.jpg" alt title />
			              </div>
			            </div>
			            <div className="left13">
			              <div className="latest_post">
			                <div className="post_info">
			                  <span className="post_date">18 MAY 2015</span>
			                  <h3><a href="blog-single.html">OUR ROMANTIC HONEYMOON IN VENICE</a></h3>
			                  <a href="blog-single.html" className="post_read_more">READ MORE</a>
			                </div> 
			                <img src="template/wedding-bells/images/post_thumb2.jpg" alt title />
			              </div>
			            </div>
			            <div className="left13_last">
			              <div className="latest_post">
			                <div className="post_info">
			                  <span className="post_date">31 MARCH 2015</span>
			                  <h3><a href="blog-single.html">LOVE IS COMPOSED OF A SINGLE SOUL</a></h3>
			                  <a href="blog-single.html" className="post_read_more">READ MORE</a>
			                </div> 
			                <img src="template/wedding-bells/images/post_thumb3.jpg" alt title />
			              </div>
			            </div>
			            <a href="blog.html" className="view_all">VIEW ALL POSTS</a>
			            <div className="clear" />
			          </div>
			        </div>
			        <div className="home_bottom">
			          <div className="full_width_centered">
			            <div className="left13"> 
			              <div className="bottom_icon"><img src="template/wedding-bells/images/icon_music.png" alt title /></div>
			              <h2>BACHELOR PARTY</h2>
			              <span className="subtitle">BRING YOUR DANCING SHOES</span>
			              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse <strong>cillum dolore</strong> eu fugiat nulla pariat ur si nt oc caecat non proident, sunt in culpa <a href="#">qui officia</a> deserunt mollit anim id est laborum sed quia non numquam eius modi.</p>
			              <a href="page.html" className="post_read_more">READ MORE</a>
			            </div>
			            <div className="left13">
			              <div className="bottom_icon"><img src="template/wedding-bells/images/icon_location.png" alt title /></div>
			              <h2>WEDDING LOCATION</h2>
			              <span className="subtitle">VENICE, ITALY - HOTEL ADAM</span>
			              <p>Nemo enim ipsam voluptatem <strong>quia voluptas</strong> sit aspernatur aut odit aut fugit, sed quia consequuntur <a href="#">magni</a> dolores eos qui ratione voluptatem sequi nesciunt. Neque quisquam est, qui dolorem ipsum</p>
			              <a href="page.html" className="post_read_more">READ MORE</a>
			            </div>
			            <div className="left13_last">
			              <div className="bottom_icon"><img src="template/wedding-bells/images/icon_gifts.png" alt title /></div>
			              <h2>GIFT REGISTRY</h2>
			              <span className="subtitle">GIVEN FREELY AND OUT OF PURE LOVE</span>
			              <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit <a href="#">esse quam nihil</a> aspernatur aut odit aut fugit molestiae consequatur, vel illum <strong>qui dolorem</strong> eum fugiat quo voluptas nulla pariatur aspernatur.</p>
			              <a href="page.html" className="post_read_more">READ MORE</a>
			            </div>
			            <div className="clear" />
			          </div>
			        </div>
			        <div className="footer">
			          <div className="full_width_centered">
			            <div className="footer_sign"><span className="swirl_left_transparent"><span className="swirl_right_transparent"><img src="template/wedding-bells/images/birds_icon.png" alt title /></span></span></div>
			            <div className="footer_names">JENIFER &amp; OLIVER</div>
			            <div className="footer_socials">
			              <ul>
			                <li><a href="#"><img src="template/wedding-bells/images/social/twitter.png" alt title /></a></li>
			                <li><a href="#"><img src="template/wedding-bells/images/social/facebook.png" alt title /></a></li>
			                <li><a href="#"><img src="template/wedding-bells/images/social/pinterest.png" alt title /></a></li>
			                <li><a href="#"><img src="template/wedding-bells/images/social/vimeo.png" alt title /></a></li>
			                <li><a href="#"><img src="template/wedding-bells/images/social/google.png" alt title /></a></li>
			                <li><a href="#"><img src="template/wedding-bells/images/social/youtube.png" alt title /></a></li>
			              </ul>
			            </div>
			            <nav className="footer_menu">
			              <ul>
			                <li><a href="index.html" className="selected">HOME</a></li>
			                <li><a href="page.html">THE WEDDING</a></li>
			                <li><a href="rsvp.html">RSVP</a></li>
			                <li><a href="contact.html">GET IN TOUCH</a></li>
			                <li><a onclick="jQuery('html, body').animate( { scrollTop: 0 }, 'slow' );" href="javascript:void(0);" className="gotop" title="Go on top">TOP</a> </li>
			              </ul>
			            </nav>
			            <div className="footer_copyright">Made with love by <a href="../index.html">SindevoThemes</a> &amp; <a href="http://ourweddingtheme.com">OURWEDDINGTHEME.COM</a></div>
			          </div>
			        </div>
			      </div>
		)
	}
}

export default WeddingMain