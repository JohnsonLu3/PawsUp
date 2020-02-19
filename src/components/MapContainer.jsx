import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import '../scss/SideMenu.scss'

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const position = [40.7128, -74.0060]
        return (
            <LeafletMap center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br />.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
} export default (MapContainer);