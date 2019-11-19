import React from 'react'
import 'ol/ol.css';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Zoom from 'ol/control/Zoom';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';

import '../scss/SideMenu.scss'

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);

        this.view = new View({
            center: [40.7459706, -73.7124675],
            zoom: 8,
            minZoom: 2,
            maxZoom: 28

        });
    }

    componentDidMount() {
        let map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
    }

    render() {
        return (
            <div>
                <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
                <div id="map" ref="map"></div>
            </div>
        );
    }
} export default (MapContainer);