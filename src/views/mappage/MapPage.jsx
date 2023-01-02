import {useParams} from "react-router-dom";
import mapsList from "../../data/maps.js";
import './MapPage.scss'
import CompassIcon from "../../assets/icons/compass.svg"
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

const MapPage = () => {

    const {name} = useParams()

    console.log(mapsList[0]["resources"])

    const mapDataObject = mapsList.find(el => el.name === name)

    const milestonesValuesArray = []

    for (const milestone in mapDataObject.milestones) {
        milestonesValuesArray.push(milestone)
        milestonesValuesArray.push(mapDataObject.milestones[milestone])
    }


    const carouselImages = mapDataObject.images.map((img) => ({
        src: img
    }))


    return (
        <main className="map-page-wrapper">
            <h1 className="map-title">{mapDataObject.display_name}</h1>
            <h2 className="map-type" title={'Map type'}>{mapDataObject.map_type}</h2>
            <div className="map-lat-lng">
                <img src={CompassIcon} alt="" aria-hidden/>
                <span>Latitude: {mapDataObject.latitude}, Longitude: {mapDataObject.longitude}</span>
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

                            {
                                milestonesValuesArray.map((el) => {
                                    return <div className="map-table-cell">
                                        {
                                            typeof el === "string" ? formatStringWithUnderscore(el) : el
                                        }
                                    </div>
                                })
                            }

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
                            <div className="map-table-cell">{mapDataObject.highways.incoming}</div>
                            <div className="map-table-cell">{mapDataObject.highways.outgoing}</div>

                            <div className="map-table-cell">Railways</div>
                            <div className="map-table-cell">{mapDataObject.rails.incoming}</div>
                            <div className="map-table-cell">{mapDataObject.rails.incoming}</div>

                            <div className="map-table-cell">Shipping Channels</div>
                            <div className="map-table-cell">{mapDataObject.ships.incoming}</div>
                            <div className="map-table-cell">{mapDataObject.ships.incoming}</div>

                            <div className="map-table-cell">Airways</div>
                            <div className="map-table-cell">{mapDataObject.airways.incoming}</div>
                            <div className="map-table-cell">{mapDataObject.airways.incoming}</div>
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
                            <MapStatBar statType={'oil'} percentage={mapDataObject.resources.oil}/>
                            <MapStatBar statType={'ore'} percentage={mapDataObject.resources.ore}/>
                            <MapStatBar statType={'fertileLand'} percentage={mapDataObject.resources.fertile_land}/>
                            <MapStatBar statType={'forestry'} percentage={mapDataObject.resources.forestry}/>
                            <MapStatBar statType={'water'} percentage={mapDataObject.resources.water}/>
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
                        Lorem ipsum dolor sit amet, consectetur.
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Temperatures
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        Lorem ipsum dolor sit amet, consectetur.
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>

            <h3>Screenshots</h3>

            <Carousel images={carouselImages} style={{ height: 500, width: `100%`, margin: '2rem 0' }}/>
        </main>
    )
}

export default MapPage