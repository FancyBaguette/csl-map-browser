import './MapCard.scss'
const MapCard = (props) => {
    return (
        <article className="map-card">
            <p className="map-card-title">{props.name}</p>
            <img src={props.image} alt="" className="map-card-preview"/>
        </article>
    )
}

export default MapCard