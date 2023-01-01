import {useParams} from "react-router-dom";
import mapsList from "../../data/maps.js";

const MapPage = () => {

    const {name} = useParams()

    const mapDataObject = mapsList.find(el => el.name === name)

    return (
        <p>
            <strong>{mapDataObject.display_name}</strong>
            <p>Map type: {mapDataObject.map_type}</p>
        </p>
    )
}

export default MapPage