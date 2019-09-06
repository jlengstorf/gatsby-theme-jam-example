import React from 'react';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 43.311462,
    lng: -112.125209,
  },
  zoom: 8,
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'GOOGLE MAPS API KEY' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={43.311462}
        lng={-112.125209}
        text={'Youngforest Ancestral Lands'}
      />
    </GoogleMapReact>
  </div>
);

export default GoogleMap;

// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// }

// render() {
//   return (
//     <Map
//       google={this.props.google}
//       zoom={8}
//       style={mapStyles}
//       initialCenter={{lat: 43.311462, lng: -112.125209}}/>
//   )
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
// })
