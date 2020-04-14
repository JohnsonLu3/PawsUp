import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux'
import '../scss/SideMenu.scss'

class MapContainer extends React.Component {


    constructor(props) {
        super(props)
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        let mapElements = this.mapRef.current.leafletElement;
    }

    render() {
        const position = [this.props.lat, this.props.long]
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
}

const mapStateToProps = state => {
    return {
        lat: state.utils.lat,
        long: state.utils.long
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);