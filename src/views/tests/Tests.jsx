import {useEffect, useState} from "react";
// import db from "../../firebase.js";
// import {ref, onValue} from "firebase/database"
// import mapData from "../../data/maps.json"

const Tests = () => {



    // const mapName = "black_woods"
    //
    // const [myData, setMyData] = useState(null)
    const [mapData, setMapData] = useState(null)
    //
    // const getData = async () => {
    //     const dbRef = ref(db, 'maps')
    //
    //     onValue(dbRef, snapshot => {
    //
    //     })
    // }
    //
    // const getSingleMapData = async () => {
    //     const dbRef = ref(db, `maps/${mapName}`)
    //
    //     onValue(dbRef, snapshot => {
    //         setMyData(snapshot.val())
    //     })
    // }

    // useEffect(() => {
    //     getData()
    // },[])



    const getMapData = async () => {
        fetch(`https://csl-map-browser-default-rtdb.firebaseio.com/maps.json`)
            .then(response => response.json())
            .then(data => setMapData(data))
    }

    useEffect(() => {
        getMapData()
    },[])

    console.log(mapData)

    return (
        <main className='main-content-wrapper'>

            {/*<h1>Firebase tests below</h1>*/}
            {/*<button onClick={getData}>Get data of all maps</button> <br/>*/}
            {/*<button onClick={getSingleMapData}>Get data for black_woods exclusively</button>*/}

            {/*<hr/>*/}

            {/*{*/}
            {/*    myData && (*/}
            {/*        <>*/}
            {/*            <p>Map name: {myData.display_name}</p>*/}
            {/*            <p>DLC: {myData.dlc}</p>*/}
            {/*        </>*/}
            {/*    )*/}
            {/*}*/}



        </main>
    )
}

export default Tests