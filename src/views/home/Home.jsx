import './Home.scss'
import MapList from "../maplist/MapList.jsx";
const Home = () => {
    return  (
        <>
            <main className="hero-wrapper">
                <div className="hero-inner">
                    <h1>Browse all Cities: Skylines maps</h1>
                    <p style={{maxWidth: "500px"}}>
                        Thinking about which map to pick to start a new city?
                        Feel free to check all of the maps and their stats here!
                    </p>
                </div>
            </main>
            <MapList/>
        </>
    )
}

export default Home