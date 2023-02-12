
import MapCard from "../MapCard/MapCard.jsx";
import './MapList.scss'
import LoadingIcon from "../../assets/icons/loading_blocks_shuffle.svg"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import getMapsArray from "../../utils/getMapsArray.js";
const MapList = () => {

    const [mapData, setMapData] = useState(null)

    const getMapData = async () => {
        fetch(`https://csl-map-browser-default-rtdb.firebaseio.com/maps.json`)
            .then(response => response.json())
            .then(data => setMapData(getMapsArray(data)))
    }

    useEffect(() => {
        getMapData()
    },[])

    const [searchQuery, setSearchQuery] = useState("")

    const desiredMapList = mapData ? mapData.filter((element) => element.name.includes(searchQuery)) : []

    return (
        <main className="map-list">
            <div className="search-options">
                <input className="map-name-input" type="text" placeholder="Filter by name" onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
            <div className="maps-wrapper">
                {
                    mapData && (
                        desiredMapList.length > 0 ?
                            desiredMapList.map((element, index) => {
                                return (
                                    <Link key={index} to={`/maps/${element.name}`}>
                                        <MapCard
                                            key={index}
                                            dlc={element.dlc}
                                            name={element.display_name}
                                            image={element.screenshots.preview_image}
                                            buildableLandArea={element.buildable_land_area}
                                            highwayConnections={element.highways}
                                            railConnections={element.railways}
                                            shipConnections={element.ships}
                                            planeConnections={element.airways}
                                            resources={element.resources}
                                        />
                                    </Link>
                                )
                            })
                            : <p>No maps matching your query were found</p>
                    )
                }
                {
                    !mapData && <span className='loading'>Loading...</span>
                }
            </div>
        </main>
  );
};

export default MapList;
