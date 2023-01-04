import {useParams} from "react-router-dom";
import mapsList from "../../data/maps.js";
import './MapPage.scss'
import CompassIcon from "../../assets/icons/compass.svg"
import MapIcon from "../../assets/icons/map.svg"
import InfoIcon from "../../assets/icons/info.svg"
import PackageIcon from "../../assets/icons/package.svg"
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import formatStringWithUnderscore from "../../utils/formatStringWithUnderscore.js";
import MapStatBar from "../../components/MapStatBar/MapStatBar.jsx";
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';
import {useEffect, useState} from "react";
import getMapsArray from "../../utils/getMapsArray.js";
import celsiusToFahrenheit from "../../utils/celsiusToFahrenheit.js";

const MapPage = () => {

    const {name} = useParams()

    const [mapData, setMapData] = useState(null)

    const getMapData = async () => {
        fetch(`https://csl-map-browser-default-rtdb.firebaseio.com/maps/${name}.json`)
            .then(response => response.json())
            .then(data => setMapData(data))
    }

    useEffect(() => {
        getMapData()
    },[])

    // Carousel disabled until screenshots get properly implemented
    // const carouselImages = mapDataObject.images.map((img) => ({
    //     src: img
    // }))

    return (
        mapData &&
        <main className='main-content-wrapper'>
            <div className="map-metadata">
                <h1 className="map-title">{mapData.display_name}</h1>
                <h2 className="map-type" title={'Map type'}>Type: {mapData.map_type}</h2>
                <h3 className="map-dlc" title={'Map DLC'}>DLC: {mapData.dlc}</h3>

                <div className="map-lat-lng">
                    <img src={CompassIcon} alt="" aria-hidden/>
                    <span>Latitude: {mapData.latitude}, Longitude: {mapData.longitude}</span>
                </div>

            </div>

            <Accordion allowZeroExpanded allowMultipleExpanded>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Milestones
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="map-table" data-columns={2}>
                            <div className="map-table-heading">Milestone</div>
                            <div className="map-table-heading">Required population</div>

                            <div className="map-table-cell">Little Hamlet</div>
                            <div className="map-table-cell">{mapData.milestones.little_hamlet}</div>

                            <div className="map-table-cell">Worthy Village</div>
                            <div className="map-table-cell">{mapData.milestones.little_hamlet}</div>

                            <div className="map-table-cell">Tiny Town</div>
                            <div className="map-table-cell">{mapData.milestones.tiny_town}</div>

                            <div className="map-table-cell">Boom Town</div>
                            <div className="map-table-cell">{mapData.milestones.boom_town}</div>

                            <div className="map-table-cell">Busy Town</div>
                            <div className="map-table-cell">{mapData.milestones.busy_town}</div>

                            <div className="map-table-cell">Big Town</div>
                            <div className="map-table-cell">{mapData.milestones.big_town}</div>

                            <div className="map-table-cell">Small City</div>
                            <div className="map-table-cell">{mapData.milestones.small_city}</div>

                            <div className="map-table-cell">Big City</div>
                            <div className="map-table-cell">{mapData.milestones.big_city}</div>

                            <div className="map-table-cell">Grand City</div>
                            <div className="map-table-cell">{mapData.milestones.grand_city}</div>

                            <div className="map-table-cell">Capital City</div>
                            <div className="map-table-cell">{mapData.milestones.capital_city}</div>

                            <div className="map-table-cell">Colossal City</div>
                            <div className="map-table-cell">{mapData.milestones.colossal_city}</div>

                            <div className="map-table-cell">Metropolis</div>
                            <div className="map-table-cell">{mapData.milestones.metropolis}</div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>


                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Transportation
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="map-table" data-columns={3}>
                            <div className="map-table-heading">Transportation method</div>
                            <div className="map-table-heading">Number of incoming routes</div>
                            <div className="map-table-heading">Number of outgoing routes</div>

                            <div className="map-table-cell">Highways</div>
                            <div className="map-table-cell">{mapData.highways.incoming}</div>
                            <div className="map-table-cell">{mapData.highways.outgoing}</div>

                            <div className="map-table-cell">Railways</div>
                            <div className="map-table-cell">{mapData.railways.incoming}</div>
                            <div className="map-table-cell">{mapData.railways.incoming}</div>

                            <div className="map-table-cell">Shipping Channels</div>
                            <div className="map-table-cell">{mapData.ships.incoming}</div>
                            <div className="map-table-cell">{mapData.ships.incoming}</div>

                            <div className="map-table-cell">Airways</div>
                            <div className="map-table-cell">{mapData.airways.incoming}</div>
                            <div className="map-table-cell">{mapData.airways.incoming}</div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Resources
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="map-stats-wrapper">
                            <MapStatBar statType={'oil'} percentage={mapData.resources.oil}/>
                            <MapStatBar statType={'ore'} percentage={mapData.resources.ore}/>
                            <MapStatBar statType={'fertileLand'} percentage={mapData.resources.fertile_land}/>
                            <MapStatBar statType={'forestry'} percentage={mapData.resources.forestry}/>
                            <MapStatBar statType={'water'} percentage={mapData.resources.water}/>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Atmospheric events
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="map-table" data-columns={2}>
                            <div className="map-table-heading">Event</div>
                            <div className="map-table-heading">Probability</div>

                            <div className="map-table-cell">Daytime rain</div>
                            <div className="map-table-cell">{mapData.atmospheric_events.daytime_rain}%</div>

                            <div className="map-table-cell">Nighttime rain</div>
                            <div className="map-table-cell">{mapData.atmospheric_events.nighttime_rain}%</div>

                            <div className="map-table-cell">Daytime fog</div>
                            <div className="map-table-cell">{mapData.atmospheric_events.daytime_fog}%</div>

                            <div className="map-table-cell">Nighttime fog</div>
                            <div className="map-table-cell">{mapData.atmospheric_events.nighttime_fog}%</div>

                            <div className="map-table-cell">Northern lights</div>
                            <div className="map-table-cell">{mapData.atmospheric_events.northern_lights}%</div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Temperatures
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="map-table" data-columns={3}>
                            <div className="map-table-heading">Event</div>
                            <div className="map-table-heading">Minimum temperature</div>
                            <div className="map-table-heading">Maximum temperature</div>

                            <div className="map-table-cell">Daytime</div>
                            <div className="map-table-cell">{mapData.temperatures.daytime.min}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.daytime.min)}&#x2109;</div>
                            <div className="map-table-cell">{mapData.temperatures.daytime.max}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.daytime.max)}&#x2109;</div>

                            <div className="map-table-cell">Nighttime</div>
                            <div className="map-table-cell">{mapData.temperatures.nighttime.min}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.nighttime.min)}&#x2109;</div>
                            <div className="map-table-cell">{mapData.temperatures.nighttime.max}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.nighttime.max)}&#x2109;</div>

                            <div className="map-table-cell">Rain</div>
                            <div className="map-table-cell">{mapData.temperatures.rain.min}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.rain.min)}&#x2109;</div>
                            <div className="map-table-cell">{mapData.temperatures.rain.max}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.rain.max)}&#x2109;</div>

                            <div className="map-table-cell">Fog</div>
                            <div className="map-table-cell">{mapData.temperatures.fog.min}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.fog.min)}&#x2109;</div>
                            <div className="map-table-cell">{mapData.temperatures.fog.max}&#x2103; / {celsiusToFahrenheit(mapData.temperatures.fog.max)}&#x2109;</div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>

            <h4>Screenshots (temporarily disabled)</h4>

            {/*<Carousel images={carouselImages} style={{ height: 500, width: `100%`, margin: '2rem 0' }}/>*/}
        </main>
    )
}

export default MapPage