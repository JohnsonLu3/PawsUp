import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import '../scss/SideMenu.scss'

export class MapContainer extends React.Component {


    constructor(props) {
        super(props)
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        let mapElements = this.mapRef.current.leafletElement;
    }

    render() {
        const position = [40.7128, -74.0060]
        return (
            <section>
                <LeafletMap ref={this.mapRef} className="lf_map" animate="true" center={position} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position}>
                    </Marker>
                </LeafletMap>
            </section>
        );
    }
} export default (MapContainer);