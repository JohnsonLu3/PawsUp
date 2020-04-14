import React from 'react'
import '../scss/SideMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import MapContainer from './MapContainer'
import { Link } from "react-router-dom";

// let city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

export default class SideMenu extends React.Component {

    state = {
        lat: 0,
        long: 0
    }

    componentDidMount = () => {
        this.findLocation()
    }

    render() {
        return (
            <div>
                <div id="sideMenu" className="close">
                    <span className="sideHeader">
                        <h2>Settings</h2>
                        <button onClick={this.hideMenu}><span className="sr">Hide Menu</span><FontAwesomeIcon icon={faTimes} />
                        </button>
                    </span>

                    <ul>
                        <li><label htmlFor="city">Location:</label></li>
                        <li>
                            <span id="locationContainer">
                                <input id="latitude_input" disabled />
                                <input id="longitude_input" disabled />
                                {/* <button onClick={this.findLocation} title="Find my Location"><span className="sr">Find my Location</span><FontAwesomeIcon icon={faGlobeAmericas} /></button> */}
                            </span>
                        </li>
                        <li><span id="locationError" className="error"></span></li>
                        <li>
                            <div id="mapContainer">
                                <MapContainer lat={this.state.lat} log={this.state.long} />
                            </div>
                        </li>
                        <li>
                            <Link to={this.goToWatchList}><span id="watchList">View Watch List</span></Link>
                        </li>
                        <li>
                            <button onClick={this.resetState}>
                                <span id="reset">Reset</span>
                                <span className="sr">Page will refresh on reset</span>
                            </button>
                        </li>
                    </ul>

                    <section>
                        <h2>Filters</h2>
                        <ul id="side_filters">
                            <li>
                                <label htmlFor="fltr_age">Age</label>
                                <select id="fltr_age">
                                    <option value="young">Young</option>
                                    <option value="adult">Adult</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_gender">Gender</label>
                                <select id="fltr_gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_size">Size</label>
                                <select id="fltr_size">
                                    <option value="small">small</option>
                                    <option value="mediun">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_spayed">Spayed/Neutered</label>
                                <select id="fltr_spayed">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_trained">House Trained</label>
                                <select id="fltr_trained">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_shots">Shots Current</label>
                                <select id="fltr_shots">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }

    goToWatchList = () => {
        this.hideMenu();
        return "/watch";
    }

    hideMenu = () => {
        $("#sideMenu").addClass("close");
        $("#sideMenu").attr("aria-hidden", false);
        $("#dim").addClass("hide");
    }

    findLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            document.getElementById("locationError").innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    showPosition = (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        document.getElementById("latitude_input").value = "Latitude: " + lat;
        document.getElementById("longitude_input").value = "  Longitude: " + long;

        this.setState(() => ({
            lat: lat,
            long: long
        }));
    }

    resetState = () => {
        localStorage.removeItem('state');
        window.location.reload(false);
    }
}
