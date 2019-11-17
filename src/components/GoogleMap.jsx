import React from 'react'
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import { relative } from 'path';

export class GoogleMap extends React.Component {

    mapStyles = {
      
    };

    constructor(props) {
        super(props);

        this.state = {
            location: { lat:  40.7459706, lng: -122.14184416996333 }
        }
    }

    displayMarkers = () => {
            return <Marker position={{
                lat: this.state.location.lat,
                lng: this.state.location.lng
            }}/>
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={this.mapStyles}
                initialCenter={{ lat: 40.7459706, lng: -73.7124675 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
} export default GoogleApiWrapper({
    apiKey: 'AIzaSyCN-bXyX3PLH90ANNuBAOZ6Cgk-MTwWF08'
})(GoogleMap);