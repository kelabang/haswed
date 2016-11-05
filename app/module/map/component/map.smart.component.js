/*
* @Author: Imam
* @Date:   2016-11-06 01:19:25
* @Last Modified by:   Imam
* @Last Modified time: 2016-11-06 02:49:07
*/

'use strict';

const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};
// https://maps.google.com/maps?ll=-6.219744,106.829742&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=6192778669440009681
const GEDUNG_DARMA_WANITA = {
  lat: -6.2211729,
  lng: 106.830698
};

const API_KEY = 'AIzaSyCIamsypEqvR-dMLt4jpYxHQ9um3-RPUMs'

const mapStyle = {
      width: '100%',
      height: 500,
      border: '0px solid black'
    };

class GRMap extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			refresh: 0
		}
	 	this.map = undefined
	}
	componentWillMount () {
		console.log('will append ')
		const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key="+API_KEY;

        document.body.appendChild(script);
        this.setState({
        	refresh: this.state.refresh + 1
        })
	}
	componentDidUpdate() {
		if (google)
		this.map = new google.maps.Map(this.refs.map, {
		    center: GEDUNG_DARMA_WANITA,
		    zoom: 20,
		    panControl: true,
		  });
		var marker = new google.maps.Marker({
          position: GEDUNG_DARMA_WANITA,
          map: this.map,
          title: 'Our Event Place'
        });
	}
	componentDidMount () {
		// if (google)
		// this.map = new google.maps.Map(this.refs.map, {
		//     center: GEDUNG_DARMA_WANITA,
		//     zoom: 16
		//   });
	}
	render () {
		console.log('render data map')
		return (
			<div ref="map" style={mapStyle} >this is fuck map</div>
		)
	}
}

export default GRMap