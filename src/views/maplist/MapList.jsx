import mapsList from "../../data/maps.js";
import MapCard from "../../components/MapCard/MapCard.jsx";
const MapList = () => {
  return (
    <>
      <h1>The list of all Cities Skylines maps</h1>
      {mapsList.map((element, index) => {
        return <MapCard key={index} name={element.name} />;
      })}
    </>
  );
};

export default MapList;
