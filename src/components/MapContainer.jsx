import React from 'react'
import 'ol/ol.css';
import { transform, fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import SourceVector from 'ol/source/Vector';
import LayerVector from 'ol/layer/Vector';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';

import '../scss/SideMenu.scss'

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);

        this.view = new View({
            center: transform([-73.7949, 40.7282], 'EPSG:4326', 'EPSG:3857'),
            zoom: 14,
            minZoom: 2,
            maxZoom: 28

        });
    }

    componentDidMount() {
        let map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                })
            ],
            target: 'map',
            view: this.view
        });
        
        let marker = new Feature({
            geometry: new Point(
              fromLonLat([-73.7949, 40.7282])
            ),  // Cordinates of New York's Town Hall
          });

          let vectorSource = new SourceVector({
            features: [marker]
          });
          let markerVectorLayer = new LayerVector({
            source: vectorSource,
          });

        map.addLayer(markerVectorLayer);
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