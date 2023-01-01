import './MapCard.scss'
const MapCard = (props) => {
    return (
        <article className="map-card">
            <span className="map-card__title">{props.name}</span>
        </article>
    )
}

export default MapCard