import mapsList from "../../data/maps.js";
import MapCard from "../../components/MapCard/MapCard.jsx";
import './MapList.scss'
import { Link } from "react-router-dom";
import {useState} from "react";
const MapList = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const desiredMapList = mapsList.filter((element) => element.name.includes(searchQuery))

    return (
        <main className="map-list">
            <div className="search-options">
                <input className="map-name-input" type="text" placeholder="Filter by name" onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
            <div className="maps-wrapper">
                {desiredMapList.map((element, index) => {
                    return (
                        <Link key={index} to={`/maps/${element.name}`}>
                            <MapCard
                                key={index}
                                dlc={element.dlc}
                                name={element.display_name}
                                image={element.image}
                                buildableLandArea={element.buildable_land_area}
                                highwayConnections={element.highways}
                                railConnections={element.rails}
                                shipConnections={element.ships}
                                planeConnections={element.airways}
                                resources={element.resources}
                            />
                        </Link>
                    )
                })}
            </div>
        </main>
  );
};

export default MapList;
