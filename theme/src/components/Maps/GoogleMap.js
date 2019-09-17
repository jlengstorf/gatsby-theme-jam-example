import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      backgroundColor: '#000000',
      border: '2px solid #FFFFFF',
      borderRadius: '100%',
      height: '18px',
      left: '50%',
      right: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      userSelect: 'none',
      width: '18px',
    }}
  >
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.311462,
      lng: -112.125209,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.311462}
            lng={-112.125209}
            text="Youngforest Ancestral Lands"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100px !important',
// };

// export class GoogleMap extends Component {
//   state = {
//     showingInfoWindow: false, //Hides or the shows the infoWindow
//     activeMarker: {}, //Shows the active marker upon click
//     selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };
//   render() {
//     return (
//       <div>
//         <Map
//           google={this.props.google}
//           zoom={12}
//           style={mapStyles}
//           initialCenter={{ lat: 43.311462, lng: -112.125209 }}
//         >
//           <Marker
//             onClick={this.onMarkerClick}
//             name={'Youngforest Ancestral Lands'}
//           />
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//             onClose={this.onClose}
//           >
//             <div>
//               <h4>{this.state.selectedPlace.name}</h4>
//             </div>
//           </InfoWindow>
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper(props => ({
//   apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
// }))(GoogleMap);
