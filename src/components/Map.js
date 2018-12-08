import React, {Component} from 'react';
import {GoogleMap, Marker, withGoogleMap } from 'react-google-maps'
//const google = window.google;			

class Map extends Component {
	
   
	render(){

		let dynamicMarkers;
	
		if(this.props.markers){
			
			dynamicMarkers = this.props.markers.map((value, index) => {
				
				return(

					<Marker
						key={index}
						position={{ lat: Number(value.lat) ,
									lng: Number(value.lng)}}
					/>	


				);
			}
		);
		}

		const MyMapComponent = withGoogleMap((props) => 
					
		 <GoogleMap
		 	defaultZoom={14}
		 	defaultCenter={{ lat: -12.0070590000, lng: -76.8538500000 }}
		 	defaultTitle="Mapa">
			{dynamicMarkers}
		 </GoogleMap>

				);

		return(

			<MyMapComponent
				loadingElement={<div style={{height: '100%'}}/>}	
				containerElement={<div style={{height: '70vh'}}/>}
				mapElement={<div style={{height:'100%'}}/>}
				/>
			);
	}
}

export default Map;