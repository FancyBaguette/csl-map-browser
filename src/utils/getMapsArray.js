const getMapsArray = (apiResponse) => {
    const mapNamesArray = Object.keys(apiResponse).map(key => key)
    return mapNamesArray.map(mapName => apiResponse[mapName])
}

export default getMapsArray