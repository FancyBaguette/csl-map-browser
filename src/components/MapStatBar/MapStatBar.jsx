import OilIcon from "../../assets/icons/oil.png"
import OreIcon from "../../assets/icons/ore.png"
import FertileLandIcon from "../../assets/icons/fertile_land.png"
import ForestryIcon from "../../assets/icons/forestry.png"
import WaterIcon from "../../assets/icons/water.png"
import './MapStatBar.scss'

const MapStatBar = (props) => {
    return (
        <div className="map-stat-bar-wrapper">
            {
                props.statType === "oil" &&
                <img src={OilIcon} alt="Oil"/>
            }
            {
                props.statType === "ore" &&
                <img src={OreIcon} alt="Ore"/>
            }
            {
                props.statType === "fertileLand" &&
                <img src={FertileLandIcon} alt="Fertile land"/>
            }
            {
                props.statType === "forestry" &&
                <img src={ForestryIcon} alt="Forestry"/>
            }
            {
                props.statType === "water" &&
                <img src={WaterIcon} alt="Water"/>
            }
            <div className="map-stat-bar" title={`${props.statType} percentage is ${props.percentage.toFixed(2)}%`}>
                <div className="map-stat-bar-progress" style={{width: `${props.percentage}%`}} data-stat-type={props.statType}/>
            </div>
        </div>
    )
}

export default MapStatBar